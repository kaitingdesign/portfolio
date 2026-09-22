// ---- 頁籤切換 (ABOUT / PROJECT / CONTACT / DETAIL) ----
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

// 導覽順序，用來判斷切換頁面時該往哪個方向滑：
// 切到順序在後面的頁面（例如 ABOUT→PROJECT）由右往左滑入，
// 切到順序在前面的頁面（例如 PROJECT→ABOUT）則反過來由左往右滑入。
const pageOrder = ["about", "project", "contact"];

// 切換頁面。navTarget 對應到上方導覽列要高亮的項目
// （作品詳情頁沒有自己的導覽按鈕，所以顯示詳情頁時繼續把 PROJECT 標成 active）。
function switchToPage(pageId, navTarget) {
  const fromPage = document.querySelector(".page.active");
  const fromId = fromPage ? fromPage.id : null;

  pages.forEach(p => p.classList.toggle("active", p.id === pageId));
  navLinks.forEach(l => l.classList.toggle("active", l.dataset.target === (navTarget || pageId)));
  window.scrollTo({ top: 0, behavior: "instant" });

  const fromIndex = pageOrder.indexOf(fromId);
  const toIndex = pageOrder.indexOf(pageId);
  const isBackward = fromIndex !== -1 && toIndex !== -1 && toIndex < fromIndex;

  const activePage = document.getElementById(pageId);
  activePage.classList.remove("page-slide-in", "page-slide-in-left");
  void activePage.offsetWidth; // 強制 reflow，讓動畫每次切換都能重新播放
  activePage.classList.add(isBackward ? "page-slide-in-left" : "page-slide-in");
}

navLinks.forEach(link => {
  link.addEventListener("click", () => switchToPage(link.dataset.target));
});

// ---- 作品分類篩選按鈕 (從 PROJECTS 資料自動產生) ----
const filterBar = document.getElementById("filterBar");
const projectGrid = document.getElementById("projectGrid");

// 分類標籤照 projects-data.js 裡 CATEGORIES 的順序顯示；
// 如果哪個作品用了沒列在 CATEGORIES 裡的分類名稱，也會自動補在後面，不會漏掉。
const extraCategories = [...new Set(PROJECTS.map(p => p.category))].filter(c => !CATEGORIES.includes(c));
const categories = ["全部", ...CATEGORIES, ...extraCategories];
let activeCategory = "全部";

function renderFilterBar() {
  filterBar.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderFilterBar();
      renderProjectGrid();
    });
    filterBar.appendChild(btn);
  });
}

// 每一項圖片可以只寫路徑字串，也可以寫成 { src, desc } 來蓋掉作品預設的說明文字
function imageSrc(item) {
  return typeof item === "string" ? item : item.src;
}
function imageDesc(item, project) {
  const own = typeof item === "string" ? null : item.desc;
  return own || project.desc;
}
// 標了 square:true 的圖片，如果跟下一張也是 square，畫面上會左右並排顯示
function isSquareImage(item) {
  return typeof item === "object" && item.square === true;
}

// 副檔名是影片格式的話，要用 <video> 播放，不能用 <img>
function isVideo(src) {
  return /\.(mp4|webm|mov)$/i.test(src);
}
function mediaTag(src, alt, extraAttrs) {
  return isVideo(src)
    ? `<video src="${src}" ${extraAttrs || ""} controls playsinline muted loop></video>`
    : `<img src="${src}" alt="${alt}">`;
}

function renderProjectGrid() {
  projectGrid.innerHTML = "";
  const filtered = activeCategory === "全部"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      ${mediaTag(imageSrc(project.images[0]), project.title)}
      <div class="card-title">${project.title}</div>
    `;
    card.addEventListener("click", () => openProjectDetail(project));
    projectGrid.appendChild(card);
  });
}

renderFilterBar();
renderProjectGrid();

// ---- 作品詳情頁（工作室風格：大標題 / 介紹文字 / 資訊表 / 大圖堆疊）----
// 點作品卡片進來後，繼續往下滾動會自動接續下一個作品（依序播完全部作品才停），
// 不用另外點擊「下一個作品」。要返回列表點上方導覽列的 PROJECT 即可。
const detailInner = document.getElementById("detailInner");

let detailOrder = [];        // 這次瀏覽的作品順序（從點進來的作品開始，依序往後，尾端接往前的作品）
let detailShownCount = 0;    // 已經往下接了第幾個作品
let detailPrependCount = 0;  // 已經往上接了第幾個作品
let detailAutoLoadObserver = null;
let detailPrepending = false;   // 避免同一瞬間重複觸發往上接的動作
let detailHasScrolledDown = false; // 進到詳情頁後有沒有先往下滾過，避免一進頁面就誤觸往上接

// 圖片簡介平常隱藏，滑鼠移到圖片上才會用小字顯示出來
function buildFigureHTML(item, project) {
  const desc = imageDesc(item, project);
  return `
    <figure>
      ${mediaTag(imageSrc(item), project.title)}
      ${desc ? `<figcaption>${desc}</figcaption>` : ""}
    </figure>
  `;
}

// 連續兩張都標 square:true 的圖片，並排放在同一列（左右各一張，一樣留 48px 邊界）；
// 沒有連續的正方形圖，還是維持單張滿版顯示。
function buildImageStackHTML(project) {
  const images = project.images;
  let html = "";
  for (let i = 0; i < images.length; i++) {
    const item = images[i];
    const next = images[i + 1];
    if (isSquareImage(item) && next && isSquareImage(next)) {
      html += `
        <div class="case-image-row">
          ${buildFigureHTML(item, project)}
          ${buildFigureHTML(next, project)}
        </div>
      `;
      i++;
    } else {
      html += buildFigureHTML(item, project);
    }
  }
  return html;
}

function buildCaseBlockHTML(project, labelText) {
  const aboutParagraphs = (project.about && project.about.length)
    ? project.about
    : [project.desc];

  return `
    <article class="case-block" data-project-title="${project.title}">
      ${labelText ? `<div class="case-block-label">${labelText}</div>` : ""}
      <h1 class="case-title">${project.title}</h1>

      <div class="case-overview">
        <div class="case-overview-copy">
          <div class="case-tag">[ ABOUT THE PROJECT ]</div>
          <div class="case-copy">
            ${aboutParagraphs.map(p => `<p>${p}</p>`).join("")}
          </div>
        </div>
        <div class="case-overview-meta">
          <div class="case-meta-item">
            <span class="case-meta-label">Client</span>
            <span class="case-meta-value">${project.client || "—"}</span>
          </div>
          <div class="case-meta-item">
            <span class="case-meta-label">Services</span>
            <span class="case-meta-value">${project.services || "—"}</span>
          </div>
          <div class="case-meta-item">
            <span class="case-meta-label">Year</span>
            <span class="case-meta-value">${project.year || "—"}</span>
          </div>
          <div class="case-meta-item">
            <span class="case-meta-label">Location</span>
            <span class="case-meta-value">${project.location || "—"}</span>
          </div>
        </div>
      </div>

      <div class="case-image-stack">
        ${buildImageStackHTML(project)}
      </div>
    </article>
  `;
}

function watchFigureReveal(block) {
  const figures = block.querySelectorAll(".case-image-stack figure");
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  figures.forEach(fig => revealObserver.observe(fig));
  return figures;
}

function appendNextProjectBlock() {
  if (detailShownCount + detailPrependCount >= detailOrder.length) return; // 全部作品都接完了，滾到底就停

  const project = PROJECTS[detailOrder[detailShownCount]];
  const label = detailShownCount === 0 ? "" : "[ NEXT PROJECT ]";
  detailShownCount++;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = buildCaseBlockHTML(project, label);
  const block = wrapper.firstElementChild;
  detailInner.appendChild(block);

  const figures = watchFigureReveal(block);

  // 快滾到這個作品倒數第二張圖片時，提早自動接上下一個作品
  if (detailAutoLoadObserver) detailAutoLoadObserver.disconnect();
  if (detailShownCount + detailPrependCount < detailOrder.length) {
    const triggerFigure = figures[Math.max(0, figures.length - 2)] || block;
    detailAutoLoadObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          detailAutoLoadObserver.disconnect();
          appendNextProjectBlock();
        }
      });
    }, { rootMargin: "800px 0px 800px 0px" });
    detailAutoLoadObserver.observe(triggerFigure);
  }
}

// 往上滾到頂端時，把「上一個作品」接到最前面。因為是插在目前捲動位置的上方，
// 插入後要立刻把捲動位置往下補償同樣的高度，畫面才不會跳動；
// 圖片陸續載入完成、高度改變時也要再補償一次。
function prependPrevProjectBlock() {
  if (detailPrepending) return;
  if (detailShownCount + detailPrependCount >= detailOrder.length) return; // 全部作品都接完了，滾到頂就停

  detailPrepending = true;
  detailPrependCount++;
  const project = PROJECTS[detailOrder[detailOrder.length - detailPrependCount]];

  const wrapper = document.createElement("div");
  wrapper.innerHTML = buildCaseBlockHTML(project, "[ PREVIOUS PROJECT ]");
  const block = wrapper.firstElementChild;
  detailInner.insertBefore(block, detailInner.firstElementChild);

  let lastHeight = block.getBoundingClientRect().height;
  window.scrollBy(0, lastHeight);

  const compensateHeightChange = () => {
    const newHeight = block.getBoundingClientRect().height;
    const diff = newHeight - lastHeight;
    if (diff !== 0) {
      window.scrollBy(0, diff);
      lastHeight = newHeight;
    }
  };
  block.querySelectorAll("img, video").forEach(el => {
    const eventName = el.tagName === "VIDEO" ? "loadedmetadata" : "load";
    el.addEventListener(eventName, compensateHeightChange, { once: true });
  });

  watchFigureReveal(block);
  detailPrepending = false;
}

window.addEventListener("scroll", () => {
  if (!document.getElementById("detail").classList.contains("active")) return;
  if (window.scrollY > 300) detailHasScrolledDown = true;
  if (detailHasScrolledDown && window.scrollY < 150) {
    prependPrevProjectBlock();
  }
}, { passive: true });

function openProjectDetail(project) {
  const startIndex = PROJECTS.indexOf(project);
  detailOrder = PROJECTS.map((_, i) => (startIndex + i) % PROJECTS.length);
  detailShownCount = 0;
  detailPrependCount = 0;
  detailHasScrolledDown = false;
  detailInner.innerHTML = "";

  appendNextProjectBlock();
  switchToPage("detail", "project");
}
