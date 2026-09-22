// ============================================================
// 作品資料設定檔
// 之後要換圖 / 改標題 / 改分類,只要改這個檔案就好,不用碰其他程式碼。
//
// title    : 作品名稱
// category : 分類(會對應到上面的篩選按鈕,可自由改成你要的分類名稱)
// client / services / year / location : 作品詳情頁上方的資訊表格,可留空字串 ""
// about    : 作品詳情頁「ABOUT THE PROJECT」的介紹文字,一個陣列，
//            陣列裡每一個字串是一個段落（2~3 段效果最好），沒寫的話會自動改用 desc。
// desc     : 點開作品後預設顯示的簡短說明(可留空字串 ""）
// images   : 這個作品的所有圖片，陣列第一張會當作 PROJECT 頁面的縮圖封面，
//            點進作品後可以整套上下滑動瀏覽。
//            要換圖/加圖/刪圖，把檔案放進對應的 images/ 子資料夾，再增減這裡的項目就好。
//
//            每一項可以：
//            1) 只寫路徑字串 → 這張圖會沿用上面整個作品的 desc
//               "images/xxx/01.jpg"
//            2) 寫成 { src, desc } → 這張圖顯示自己專屬的說明文字，不用其他圖片一樣
//               { src: "images/xxx/02.jpg", desc: "這張圖專屬的說明文字" }
//            3) 加上 square: true → 標記這張圖是正方形，跟「下一張也標 square: true」的圖
//               會自動並排顯示成左右兩張（沒有連續的正方形圖就還是單張滿版顯示）
//               { src: "images/xxx/02.jpg", desc: "...", square: true }
// ============================================================

// 分類標籤顯示順序（「全部」永遠排最前面，不用列在這裡）。
// 想增加一個目前還沒有作品的分類，也可以先列在這裡，標籤就會先出現，
// 等之後 PROJECTS 裡有作品用到這個分類名稱，作品就會自動歸進去。
const CATEGORIES = ["房地產視覺", "檔期視覺", "品牌設計", "插畫"];

// PROJECT 頁面的作品排列順序（依你指定的順序排列，此順序即為「全部」的顯示順序；
// 各分類篩選仍會依此順序，只顯示屬於該分類的作品）。
const PROJECTS = [
  {
    title: "未來習作 | 建案視覺",
    category: "房地產視覺",
    client: "好宅製所",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "座落台中西屯，「未來習作」為好宅製所推出的電梯獨棟雙併案。全案以「日常即是最好的習作」為核心，視覺系統整合案名家徽、名片、簡銷、合約書、戶外看板、社群形象至接待中心。"
    ],
    desc: "案名。",
    images: [
      "images/weilai/01-cover.jpg",
      { src: "images/weilai/02.jpg", desc: "銷售手冊封面設計" },
      { src: "images/weilai/03.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/04.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/05.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/06.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/07.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/08.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/09.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/10.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/11.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/12.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/13.jpg", desc: "銷售手冊內頁設計" },
      { src: "images/weilai/14.jpg", desc: "基地生活機能地圖" },
      { src: "images/weilai/15.jpg", desc: "基地空拍圖" },
      { src: "images/weilai/16.jpg", desc: "土地預定買賣契約書設計" },
      { src: "images/weilai/17.jpg", desc: "土地預定買賣契約書設計" },
      { src: "images/weilai/18.jpg", desc: "全區平面參考圖設計" },
      { src: "images/weilai/19.jpg", desc: "名片設計" },
      { src: "images/weilai/20.jpg", desc: "戶外看板-預告POP" },
      { src: "images/weilai/21.jpg", desc: "戶外看板-預告POP" },
      { src: "images/weilai/22.jpg", desc: "戶外看板-正式POP" },
      { src: "images/weilai/23.jpg", desc: "戶外看板-正式POP" },
      { src: "images/weilai/24.jpg", desc: "社群貼文設計", square: true },
      { src: "images/weilai/25.jpg", desc: "社群貼文設計", square: true },
      { src: "images/weilai/26.jpg", desc: "社群貼文設計", square: true },
      { src: "images/weilai/27.gif", desc: "社群動態貼文設計", square: true },
      { src: "images/weilai/28.jpg", desc: "接待會館實景" },
      { src: "images/weilai/29.jpg", desc: "接待會館實景" },
      { src: "images/weilai/30.jpg", desc: "接待會館實景" },
      { src: "images/weilai/31.jpg", desc: "接待會館實景" },
      { src: "images/weilai/32.jpg", desc: "接待會館實景" },
      { src: "images/weilai/33.jpg", desc: "接待會館實景" },
      { src: "images/weilai/34.jpg", desc: "接待會館實景" }
    ]
  },
  {
    title: "宏銓建設 | 周邊視覺",
    category: "房地產視覺",
    client: "宏銓建設",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "宏銓建設品牌視覺專案涵蓋基地圍籬帆布、筆記本、紅包袋等實體應用。",
      "紅包袋以竹子、銅錢、游魚等吉祥意象呈現，筆記本採用麻布與燙金工藝，並搭配節慶動態賀卡。"
    ],
    desc: "宏銓建設基地圍籬帆布、筆記本、紅包袋與節慶動態EDM設計。",
    images: [
      "images/hongquan/01-cover.jpg",
      { src: "images/hongquan/02.jpg", desc: "基地圍籬帆布設計" },
      { src: "images/hongquan/03.jpg", desc: "基地圍籬帆布設計" },
      { src: "images/hongquan/04.jpg", desc: "基地圍籬帆布設計" },
      { src: "images/hongquan/05.jpg", desc: "紅包袋 | 竹子、銅錢、游魚等吉祥意象。" },
      { src: "images/hongquan/06.jpg", desc: "筆記本 | 緞面麻布材質，印刷植物圖騰與品牌標誌。" },
      { src: "images/hongquan/07.jpg", desc: "筆記本 | 綠色布紋紙燙金與打凹工藝，勾勒植物花卉。" },
      { src: "images/hongquan/08.gif", desc: "中秋節動態EDM", square: true },
      { src: "images/hongquan/09.gif", desc: "端午節動態EDM", square: true }
    ]
  },
  {
    title: "好宅製所 | 品牌設計",
    category: "品牌設計",
    client: "好宅製所",
    services: "品牌識別設計",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "好宅製所是以「家的溫度」為核心，製作視覺識別設計，涵蓋 Logo 標誌、品牌色彩與應用系統延伸。",
    ],
    desc: "標誌以屋頂與門的線條為意象，搭配溫暖的大地色系",
    images: [
      "images/haozhai/01-cover.jpg",
      { src: "images/haozhai/2.jpg", desc: "LOGO標準字" },
      { src: "images/haozhai/3.jpg", desc: "LOGO理念" },
      { src: "images/haozhai/4.jpg", desc: "中英文標準字" },
      { src: "images/haozhai/5.jpg", desc: "標誌與標準字比例" },
      { src: "images/haozhai/6.jpg", desc: "色彩計畫" },
      { src: "images/haozhai/7.jpg", desc: "系統字" },
      { src: "images/haozhai/8.jpg", desc: "名片type1 | 245g 大亞艾美卡，正面 Logo 燙珍珠箔工藝。" },
      { src: "images/haozhai/9.jpg", desc: "名片type2 | 屋頂軋型呼應「家」的品牌核心，250g 大亞香頌紙，正面留白、反面大地色系。", square: true },
      { src: "images/haozhai/10.jpg", desc: "接待會館外定點" },
      { src: "images/haozhai/11.jpg", desc: "U形資料夾" },
      { src: "images/haozhai/12.jpg", desc: "小信封" },
      { src: "images/haozhai/13.jpg", desc: "大信封" },
      { src: "images/haozhai/14.jpg", desc: "polo衫" },
      { src: "images/haozhai/15.jpg", desc: "紅包type1 | Colorplan 紅紙材，燙金打凸呈現建築幾何圖樣。" },
      { src: "images/haozhai/16.jpg", desc: "紅包外盒type1 | Colorplan 紅紙材，燙金打凸呈現建築幾何圖樣。" },
      { src: "images/haozhai/17.jpg", desc: "紅包type2 | Colorplan 三色紙材，結合幾何圖案與上光、打凸、燙銀加工。" },
      { src: "images/haozhai/18.jpg", desc: "紅包外盒type2 | LOGO 轉化為幾何圖樣，局部上光呈現品牌紋理。" },
      { src: "images/haozhai/19.jpg", desc: "父親節EDM", square: true },
      { src: "images/haozhai/20.jpg", desc: "中秋節EDM", square: true },
      { src: "images/haozhai/21.jpg", desc: "聖誕節EDM", square: true },
      { src: "images/haozhai/23.jpg", desc: "母親節EDM", square: true }
    ]
  },
  {
    title: "仁山沐華 | 建案視覺",
    category: "房地產視覺",
    client: "仁山建設機構",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "「「仁山沐華」座落於台中水湳經貿園區，整套識別延伸至名片、信封與契約書、摺頁 DM、生活機能地圖、在地故事軟文、節慶社群貼文與戶外看板。",
    ],
    desc: "案名家徽",
    images: [
      "images/renshan/01-cover.jpg",
      { src: "images/renshan/02.jpg", desc: "擷取建築外觀輪廓淬鍊為案名家徽" },
      { src: "images/renshan/03.jpg", desc: "名片設計" },
      { src: "images/renshan/04.jpg", desc: "名片設計" },
      { src: "images/renshan/05.jpg", desc: "土地預定買賣契約書-珊瑚橘版" },
      { src: "images/renshan/06.jpg", desc: "房屋預定買賣契約書-紅藍撞色版" },
      { src: "images/renshan/07.jpg", desc: "土地預定買賣契約書-質感灰版" },
      { src: "images/renshan/08.jpg", desc: "房屋預定買賣契約書-深藍線條版" },
      { src: "images/renshan/09.jpg", desc: "土地預定買賣契約書-暗酒紅版" },
      { src: "images/renshan/10.jpg", desc: "房屋預定買賣契約書-深藍幾何版" },
      { src: "images/renshan/11.jpg", desc: "信封設計-藍紅撞色版" },
      { src: "images/renshan/12.jpg", desc: "信封設計-深藍線條版" },
      { src: "images/renshan/13.jpg", desc: "信封設計-白色線條版" },
      { src: "images/renshan/14.jpg", desc: "A戶單元傢俱平面圖" },
      { src: "images/renshan/15.jpg", desc: "A戶5F&7F傢俱配置參考圖" },
      { src: "images/renshan/16.jpg", desc: "A戶各樓層單元配置圖" },
      { src: "images/renshan/17.jpg", desc: "戶外電桿旗幟廣告-工程零付款主打" },
      { src: "images/renshan/18.jpg", desc: "戶外大圖輸出廣告-森級水湳版" },
      { src: "images/renshan/19.jpg", desc: "戶外大圖輸出廣告-水湳大學城版" },
      { src: "images/renshan/20.jpg", desc: "水湳市場故事軟文", square: true },
      { src: "images/renshan/21.jpg", desc: "水湳眷村故事軟文", square: true },
      { src: "images/renshan/22.jpg", desc: "生活機能圖" },
      { src: "images/renshan/23.jpg", desc: "摺頁DM設計" },
      { src: "images/renshan/24.jpg", desc: "元旦節慶社群貼文-日出版", square: true },
      { src: "images/renshan/25.jpg", desc: "元旦EDM", square: true },
      { src: "images/renshan/26.jpg", desc: "元旦EDM", square: true },
      { src: "images/renshan/27.jpg", desc: "元旦EDM", square: true },
      { src: "images/renshan/28.jpg", desc: "元宵EDM", square: true },
      { src: "images/renshan/30.jpg", desc: "耶誕EDM", square: true }
    ]
  },
  {
    title: "坤悅禮御 | 建案視覺",
    category: "房地產視覺",
    client: "坤悅開發 World Companies",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Houli, Taichung, Taiwan",
    about: [
      "「坤悅禮御」座落台中后里市中心。實體涵蓋戶外多色看板、精神堡壘、旗幟與接待館策展牆面；FB 波段整合工法驗屋、傢俱圖、完工實景與節慶社群貼文。"
    ],
    desc: "DM摺頁",
    images: [
      "images/kunyue/01-cover.jpg",
      { src: "images/kunyue/02.jpg", desc: "戶外看板-市心首席即將完工版" },
      { src: "images/kunyue/03.jpg", desc: "戶外看板-輕裝大3房橘色版" },
      { src: "images/kunyue/04.jpg", desc: "戶外看板-輕裝大3房藍綠版" },
      { src: "images/kunyue/05.jpg", desc: "戶外看板-市中心3字頭咖啡色版" },
      { src: "images/kunyue/06.jpg", desc: "精神堡壘設計圖-藍色版" },
      { src: "images/kunyue/07.jpg", desc: "精神堡壘設計圖-橘色版" },
      { src: "images/kunyue/08.jpg", desc: "接待會館旗幟設計，共五支兩款跳色" },
      { src: "images/kunyue/09.jpg", desc: "新接待館形象牆設計全圖" },
      { src: "images/kunyue/10.jpg", desc: "接待櫃檯實景" },
      { src: "images/kunyue/11.jpg", desc: "建商歷年得獎榮耀牆實景" },
      { src: "images/kunyue/12.jpg", desc: "建案實績牆與在地機能導覽圖實景" },
      { src: "images/kunyue/13.jpg", desc: "社群貼文-生活機能全覽", square: true },
      { src: "images/kunyue/14.jpg", desc: "社群貼文-完工實景與樣品屋實景", square: true },
      { src: "images/kunyue/15.jpg", desc: "社群貼文-品牌宣言", square: true },
      { src: "images/kunyue/16.jpg", desc: "社群貼文-市心首席完工實景", square: true },
      { src: "images/kunyue/17.jpg", desc: "社群貼文-品牌科技宣言", square: true },
      { src: "images/kunyue/18.jpg", desc: "K戶傢俱配置參考圖", square: true },
      { src: "images/kunyue/19.jpg", desc: "社群貼文-第三方驗屋主題", square: true },
      { src: "images/kunyue/20.jpg", desc: "社群貼文-市心首席磅礡現身", square: true },
      { src: "images/kunyue/21.jpg", desc: "社群貼文-地標實景與品牌活動", square: true },
      { src: "images/kunyue/22.jpg", desc: "社群貼文-完工實景與生活機能", square: true },
      { src: "images/kunyue/23.jpg", desc: "中秋節慶社群貼文-實品攝影版", square: true },
      { src: "images/kunyue/24.jpg", desc: "中秋節慶社群貼文-插畫版", square: true }
    ]
  },
  {
    title: "亞昕寓邸 | 建案視覺",
    category: "房地產視覺",
    client: "亞昕建設 Yeashin Group",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Linkou, New Taipei, Taiwan",
    about: [
      "「亞昕寓邸」座落於林口 AI 科技城核心地段，蓋案名設計、插畫地圖、戶外看板、契約書與社群貼文設計。"
    ],
    desc: "案名家徽",
    images: [
      "images/yaxin/01-cover.jpg",
      { src: "images/yaxin/02.jpg", desc: "戶外廣告看板-正式POP" },
      { src: "images/yaxin/03.jpg", desc: "插畫生機圖" },
      { src: "images/yaxin/04.jpg", desc: "土地房屋預定買賣契約書設計" },
      { src: "images/yaxin/05.jpg", desc: "DM設計" },
      { src: "images/yaxin/06.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/08.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/09.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/10.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/11.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/12.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/13.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/14.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/15.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/16.jpg", desc: "FB波段貼文", square: true },
      { src: "images/yaxin/17.jpg", desc: "中秋節EDM", square: true },
      { src: "images/yaxin/18.jpg", desc: "接待中心遷移公告", square: true },
      { src: "images/yaxin/19.mp4", desc: "端午節動態賀卡" }
    ]
  },
  {
    title: "惠宇建設 | 建案視覺",
    category: "房地產視覺",
    client: "惠宇建設",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "「惠宇永益」形象視覺，涵蓋基地圍籬、契約書、精裝書與接待中心菜單設計。",
    ],
    desc: "基地圍籬帆布設計",
    images: [
      "images/huiyu/01-cover.jpg",
      { src: "images/huiyu/02.jpg", desc: "基地圍籬帆布設計" },
      { src: "images/huiyu/03.jpg", desc: "基地圍籬帆布設計" },
      { src: "images/huiyu/04.jpg", desc: "合約書 | 星幻紙搭配四款色調，局部燙銀與打凸呈現立體建築線條。" },
      { src: "images/huiyu/05.jpg", desc: "合約書外盒 | 黑色質感厚卡搭配局部燙銀。" },
      { src: "images/huiyu/06.jpg", desc: "樓層傢俱配置參考卡" },
      { src: "images/huiyu/07.jpg", desc: "接待中心菜單設計" },
      { src: "images/huiyu/08.jpg", desc: "接待中心菜單設計" }
    ]
  },
  {
    title: "時代建設 | 建案視覺",
    category: "房地產視覺",
    client: "時代建設",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "時代建設預售建案形象視覺，涵蓋案名及廣告看板設計及節慶EDM。"
    ],
    desc: "案名家徽",
    images: [
      "images/shidai/01-cover.jpg",
      { src: "images/shidai/02.jpg", desc: "案名設計 | 層層堆疊的線條構圖，融入職人手藝與人文氣息。" },
      { src: "images/shidai/03.jpg", desc: "戶外廣告看板-預告POP" },
      { src: "images/shidai/04.jpg", desc: "戶外廣告看板-正式POP" },
      { src: "images/shidai/05.jpg", desc: "春節EDM" }
    ]
  },
  {
    title: "龍寶建設 | 建案視覺",
    category: "房地產視覺",
    client: "龍寶建設 × 大毅建設",
    services: "房地產行銷企劃",
    year: "2024",
    location: "Taichung, Taiwan",
    about: [
      "龍寶建設有愛臻邸形象視覺，涵蓋插畫地圖、戶外看板、簽約卡與T恤設計。"
    ],
    desc: "插畫生機圖",
    images: [
      "images/longbao/01-cover.jpg",
      { src: "images/longbao/02.jpg", desc: "插畫生機圖建築圖素" },
      { src: "images/longbao/03.jpg", desc: "品牌周邊 | T恤設計" },
      { src: "images/longbao/04.jpg", desc: "簽約賀卡設計" },
      { src: "images/longbao/05.jpg", desc: "戶外廣告看板-POP" },
      { src: "images/longbao/06.jpg", desc: "基地牆面" }
    ]
  },
  {
    title: "九川建設 | 建案視覺",
    category: "房地產視覺",
    client: "九川建設",
    services: "房地產行銷企劃",
    year: "2024",
    location: "Taichung, Taiwan",
    about: [
      "九川建設預售建案形象視覺，涵蓋案名、戶外看板、社群版位設計。"
    ],
    desc: "案名家徽",
    images: [
      "images/jiuchuan/01-cover.jpg",
      { src: "images/jiuchuan/02.jpg", desc: "文心苑璟 | 戶外廣告看板-正式POP" },
      { src: "images/jiuchuan/03.jpg", desc: "文心苑璟 | FB 粉絲專頁封面" },
      { src: "images/jiuchuan/04.jpg", desc: "文心苑璟 | 社群貼文模擬" },
      { src: "images/jiuchuan/05.jpg", desc: "文心苑璟 | 新聞網站廣告版位" },
      { src: "images/jiuchuan/06.jpg", desc: "文心苑璟 | 聯播網廣告" },
      { src: "images/jiuchuan/07.jpg", desc: "境向學 | 案名設計" },
      { src: "images/jiuchuan/08.jpg", desc: "境向學 | 戶外廣告看板-正式POP" },
      { src: "images/jiuchuan/09.jpg", desc: "境向學 | FB 粉絲專頁封面" },
      { src: "images/jiuchuan/10.jpg", desc: "境向學 | 社群貼文模擬" },
      { src: "images/jiuchuan/11.jpg", desc: "境向學 | 新聞網站廣告版位" },
      { src: "images/jiuchuan/12.jpg", desc: "境向學 | 聯播網廣告" }
    ]
  },
  {
    title: "川平建設 | 建案視覺",
    category: "房地產視覺",
    client: "川平建設",
    services: "房地產行銷企劃",
    year: "2024",
    location: "Taichung, Taiwan",
    about: [
      "川平建設預售建案「雙城故事」形象視覺"
    ],
    desc: "戶外廣告看板-正式POP",
    images: [
      "images/chuanping/01-cover.jpg",
    ]
  },
  {
    title: "大自然建設 | 建案視覺",
    category: "房地產視覺",
    client: "大自然建設",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "大自然建設預售別墅建案「隱隱自然」形象視覺，涵蓋案名設計與戶外看板應用。"
    ],
    desc: "案名家徽",
    images: [
      "images/daziran/01-cover.jpg",
      { src: "images/daziran/02.jpg", desc: "案名設計" },
      { src: "images/daziran/03.jpg", desc: "戶外廣告看板-正式POP" },
      { src: "images/daziran/04.jpg", desc: "社區外牆看板-正式POP" }
    ]
  },
  {
    title: "允聚建設 | 建案視覺",
    category: "房地產視覺",
    client: "允聚建設",
    services: "房地產行銷企劃",
    year: "2025",
    location: "Taichung, Taiwan",
    about: [
      "允聚建設預售建案「伴日閑」形象視覺，涵蓋案名設計與戶外看板應用。"
    ],
    desc: "案名家徽",
    images: [
      "images/yunju/01-cover.jpg",
      { src: "images/yunju/02.jpg", desc: "案名設計" },
      { src: "images/yunju/03.jpg", desc: "戶外廣告看板-正式POP" }
    ]
  },
  {
    title: "誠品書店虎尾店 | 十週年慶",
    category: "檔期視覺",
    client: "誠品書店 虎尾店",
    services: "檔期企劃",
    year: "2024",
    location: "Yunlin, Taiwan",
    about: [
      "誠品書店雲林虎尾店十週年慶檔期，以「十年一刻 SHOW TIME」為主題，用繽紛跳色的復古海報風格，搭配翻頁書本、鴿子與彩帶等意象。",
      "設計以攤開的書本搭配放射型舞台燈光，結合虎尾店特有的圓形窗框與警徽，打造如「秀」般的熱鬧氛圍。",
      "整套檔期規劃涵蓋主視覺海報、消費贈禮 DM、講座與親子活動宣傳海報，並延伸至虎尾合同廳舍歷史建築的店面布置與旗幟裝飾。"
    ],
    desc: "誠品書店虎尾店十週年慶「十年一刻 SHOW TIME」檔期規劃，涵蓋主視覺、DM、活動海報與現場佈展執行。",
    images: [
      "images/huwei10th/01-cover.jpg",
      { src: "images/huwei10th/02.jpg", desc: "十週年慶主視覺 DM 設計" },
      { src: "images/huwei10th/03.jpg", desc: "講座與親子活動宣傳海報" },
      { src: "images/huwei10th/04.jpg", desc: "十週年慶橫幅banner設計" },
      { src: "images/huwei10th/05.jpg", desc: "虎尾合同廳舍店面實景" },
      { src: "images/huwei10th/06.jpg", desc: "店面櫥窗佈置實景" },
      { src: "images/huwei10th/07.jpg", desc: "入口活動立牌實景" },
      { src: "images/huwei10th/08.jpg", desc: "店內佈展實景" }
    ]
  },
  {
    title: "誠品書店 | 舊書拍賣會",
    category: "檔期視覺",
    client: "誠品書店 台中中友百貨",
    services: "檔期視覺設計",
    year: "2023",
    location: "Taichung, Taiwan",
    about: [
      "誠品書店「舊書拍賣會」檔期主視覺，以幾何圖形呈現書籍、文具與紙張，並搭配檯燈、山形書椅等誠品書店元素堆疊出空間感。",
      "色彩搭配深色與明度較高的跳色，主視覺延伸應用於現場懸掛旗幟、活動背板與價格牌。"
    ],
    desc: "誠品書店「舊書拍賣會」檔期主視覺，以幾何堆疊呈現書籍與文具意象，並延伸應用於現場旗幟與背板佈展。",
    images: [
      "images/usedbooksale/01-cover.jpg",
      { src: "images/usedbooksale/02.jpg", desc: "現場懸掛旗幟與展場佈置實景" },
      { src: "images/usedbooksale/03.jpg", desc: "現場選書實景" },
      { src: "images/usedbooksale/04.jpg", desc: "現場懸掛旗幟實景" }
    ]
  },
  {
    title: "誠品書店 | 曬書市集",
    category: "檔期視覺",
    client: "誠品書店",
    services: "檔期視覺設計",
    year: "2023",
    location: "Taichung / Hsinchu, Taiwan",
    about: [
      "誠品書店「曬書市集」檔期主視覺，以拿著望遠鏡的孩子為主體，搭配書籍、玩教具等影像元素與不規則拼貼色塊，象徵從書本裡探索知識。",
      "同一套主視覺陸續應用於台中大魯閣新時代購物中心與新竹巨城購物中心，從戶外 LED 看板、電子指標螢幕到現場招牌、市集攤位布置。"
    ],
    desc: "誠品書店「曬書市集」檔期主視覺，以望遠鏡孩子與書籍拼貼呈現探索知識的意象，陸續應用於台中、新竹兩地購物中心的戶外看板與市集現場布置。",
    images: [
      "images/sunbookfair/01-cover.jpg",
      { src: "images/sunbookfair/02.jpg", desc: "主視覺橫幅banner設計" },
      { src: "images/sunbookfair/03.jpg", desc: "主視覺社群方形版本設計" },
      { src: "images/sunbookfair/04.jpg", desc: "台中大魯閣新時代購物中心戶外LED看板實景" },
      { src: "images/sunbookfair/05.jpg", desc: "台中大魯閣新時代購物中心市集現場招牌與選品陳列實景" },
      { src: "images/sunbookfair/06.jpg", desc: "新竹巨城購物中心創藝廳入口大型看板實景" },
      { src: "images/sunbookfair/07.jpg", desc: "新竹巨城購物中心圓柱指標包裝實景" },
      { src: "images/sunbookfair/08.jpg", desc: "誠品生活新竹巨城店電子指標螢幕實景" }
    ]
  },
  {
    title: "事務．事務所 | 誠品自策展插畫",
    category: "插畫",
    client: "誠品文具",
    services: "插畫設計",
    year: "2021",
    location: "Taichung, Taiwan",
    about: [
      "為誠品文具繪製的活動主視覺插畫，以「事務．事務所」為題，用繽紛色塊描繪出辦公桌上文具雜物錯落擺放的日常場景。"
    ],
    desc: "誠品文具「事務．事務所」活動主視覺插畫。",
    images: [
      "images/eslite-poster/01-cover.jpg"
    ]
  },
  {
    title: "這樣那樣的成長痛 | 誠品自策展插畫",
    category: "插畫",
    client: "誠品書店",
    services: "插畫設計",
    year: "2021",
    location: "Taichung, Taiwan",
    about: [
      "誠品書店台中園道店自策展插畫「這樣那樣的成長痛」，以柔和粉紅色調搭配肢體語言誇張的插畫人物，呼應成長與疼痛的討論。"
    ],
    desc: "誠品書店「這樣那樣的成長痛」自策展插畫。",
    images: [
      "images/eslite-poster/02.jpg"
    ]
  },
  {
    title: "誠品音樂 | 世界音樂後援會",
    category: "檔期視覺",
    client: "誠品音樂",
    services: "檔期視覺設計",
    year: "2022",
    location: "Taichung, Taiwan",
    about: [
      "誠品書店台中園道「世界音樂後援會」檔期主視覺，以異國唱片、專業音響、品牌耳機為主題，用一只塞滿黑膠唱片、耳機、麥克風與樂器的行李箱意象，傳遞環遊世界聽音樂的想像。",
      "整體色調以明亮黃色為底，搭配跳色插畫風格，主視覺延伸應用於店內懸掛海報、商品促銷立牌與各國代表隊選品專區。"
    ],
    desc: "誠品音樂「世界音樂後援會」檔期主視覺，以行李箱裝滿樂器與唱片的意象呈現環遊世界聽音樂的想像，並延伸應用於店內懸掛海報與選品陳列。",
    images: [
      "images/worldmusic/01-cover.jpg",
      { src: "images/worldmusic/02.jpg", desc: "強力聲援必備／活力應援贈禮海報設計" },
      { src: "images/worldmusic/03.jpg", desc: "店內懸掛主視覺與黑膠選品陳列實景" },
      { src: "images/worldmusic/04.jpg", desc: "店內懸掛主視覺與音響選品陳列實景" },
      { src: "images/worldmusic/05.jpg", desc: "音響選品區實景" }
    ]
  },
  {
    title: "誠品書店 | 車庫時光",
    category: "檔期視覺",
    client: "誠品書店",
    services: "檔期視覺設計",
    year: "2023",
    location: "Taichung, Taiwan",
    about: [
      "誠品書店台中480「車庫時光」開幕選書檔期，取材矽谷新創公司從自家車庫起家的精神，以異材質拼貼組合標題字。",
      "主視覺以木料、鐵網、麻布、鋁箔等異材質手工拼貼組成立體標題「車庫時光 THE GARAGE LAB」，選書陳列依「從車庫出發的旅程」、「團隊優勢」、「夢想家群像」、「築夢者計畫」等子題分區展示。"
    ],
    desc: "誠品書店「車庫時光」選書檔期視覺，以木料、鐵網、麻布等異材質拼貼呈現車庫創業精神，並延伸至書店各分區的主題選書陳列與立體裝置布展。",
    images: [
      "images/garagetime/01-cover.jpg",
      { src: "images/garagetime/02.jpg", desc: "「從車庫出發的旅程」、「從解決問題開始」選書陳列實景" },
      { src: "images/garagetime/03.jpg", desc: "「團隊優勢」選書陳列實景" },
      { src: "images/garagetime/04.jpg", desc: "「夢想家群像」選書陳列實景" },
      { src: "images/garagetime/05.jpg", desc: "「築夢者計畫」選書陳列實景" },
      { src: "images/garagetime/06.jpg", desc: "書店空間立體裝置布展實景" },
      { src: "images/garagetime/07.jpg", desc: "主視覺立體標題手工製作過程" }
    ]
  },
  {
    title: "誠品禮物節 | DP陳列與櫥窗規劃",
    category: "檔期視覺",
    client: "誠品書店台中三井店 / 台中園道文具",
    services: "陳列與櫥窗規劃",
    year: "2023",
    location: "Taichung, Taiwan",
    about: [
      "「誠品禮物節」，主視覺插畫由插畫家操刀，負責的部分是台中三井店及台中園道文具兩處店鋪DP 陳列與櫥窗規劃執行。",
    ],
    desc: "陳列實景",
    images: [
      "images/eslitegift/01-cover.jpg",
      { src: "images/eslitegift/02.jpg", desc: "主入口櫥窗示意圖" },
      { src: "images/eslitegift/03.jpg", desc: "主入口DP區示意圖" },
      { src: "images/eslitegift/04.jpg", desc: "次入口小櫥窗示意圖" },
      { src: "images/eslitegift/05.jpg", desc: "corner shop示意圖" },
      { src: "images/eslitegift/06.jpg", desc: "精品高櫃示意圖" },
      { src: "images/eslitegift/07.jpg", desc: "大櫥窗示意圖" },
      { src: "images/eslitegift/08.jpg", desc: "誠品文具主入口櫥窗實景" },
      { src: "images/eslitegift/09.jpg", desc: "誠品文具大櫥窗實景" },
      { src: "images/eslitegift/10.jpg", desc: "誠品文具大櫥窗實景近拍" },
      { src: "images/eslitegift/11.jpg", desc: "店內佈展作業實景" },
      { src: "images/eslitegift/12.jpg", desc: "誠品文具店內選品陳列實景" },
      { src: "images/eslitegift/13.jpg", desc: "台中三井入口兩側櫥窗示意圖" },
      { src: "images/eslitegift/14.jpg", desc: "誠品書店店面實景" },
      { src: "images/eslitegift/15.jpg", desc: "誠品書店店面實景（含耶誕樹）" },
      { src: "images/eslitegift/16.jpg", desc: "誠品書店選書桌陳列實景" },
      { src: "images/eslitegift/17.jpg", desc: "誠品書店旗幟吊飾陳列實景" },
      { src: "images/eslitegift/18.jpg", desc: "誠品書店禮品桌陳列實景" }
    ]
  },
  {
    title: "青龍紅了 | 品牌設計",
    category: "品牌設計",
    client: "青龍紅了 Chili Sauce",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "青龍紅了是一款手作辣椒醬品牌，標準字以文字為主，加上一筆勾勒的龍型線條，帶出古典雅緻的氣質。",
      "品牌強調原生食材、手作呈現，以酒紅色搭配燙金線條，延伸應用於名片與瓶貼。"
    ],
    desc: "青龍紅了 CI 視覺識別設計，涵蓋 LOGO 標準字、名片與瓶貼應用。",
    images: [
      "images/greendragon/01-cover.jpg",
      { src: "images/greendragon/02.jpg", desc: "應用延伸-名片" },
      { src: "images/greendragon/03.jpg", desc: "應用延伸-瓶貼" }
    ]
  },
  {
    title: "嵐琳咖啡 | 品牌設計",
    category: "品牌設計",
    client: "嵐琳咖啡 Lan Lin Cafe",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "嵐琳咖啡以青鳥作為品牌的靈魂，LOGO 以一筆勾勒的線條描繪鳥的意象，搭配手寫英文字呈現輕鬆隨興的印象。",
      "整體識別使用黃與藍的撞色設計，延伸應用於咖啡豆提袋、外帶杯與名片。"
    ],
    desc: "嵐琳咖啡 CI 視覺識別設計，涵蓋 LOGO 設計與名片應用。",
    images: [
      "images/lanlin/01-cover.jpg",
      { src: "images/lanlin/02.jpg", desc: "應用延伸-咖啡提袋、外帶杯" },
      { src: "images/lanlin/03.jpg", desc: "應用延伸-名片設計" }
    ]
  },
  {
    title: "綠果子 | 品牌設計",
    category: "品牌設計",
    client: "綠果子 Boulangerie",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "綠果子是一間窯烤麵包店，LOGO 以手繪質樸的線條刻畫烘焙師傅與磚窯的意象，整體視覺選用溫暖的木質棕色調。",
      "整套識別延伸應用於 DM 摺頁、木製砧板刻字與口味貼紙。"
    ],
    desc: "綠果子 CI 視覺識別設計，涵蓋 LOGO 設計、DM 摺頁與貼紙應用。",
    images: [
      "images/greenfruit/01-cover.jpg",
      { src: "images/greenfruit/02.jpg", desc: "應用延伸-DM摺頁" },
      { src: "images/greenfruit/03.jpg", desc: "應用延伸-木製砧板" },
      { src: "images/greenfruit/04.jpg", desc: "應用延伸-口味貼紙" }
    ]
  },
  {
    title: "阿丘扶桑花 | 品牌設計",
    category: "品牌設計",
    client: "阿丘扶桑花 司康專賣",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "阿丘扶桑花是一間司康專賣店，LOGO 以圓潤的司康造型擬人化角色為主角，搭配「chill」標語呈現輕鬆自在的品牌個性。",
      "標準字以手寫字體呈現童趣風格，延伸應用於保存與加熱方式說明小卡。"
    ],
    desc: "阿丘扶桑花 CI 視覺識別設計，涵蓋 LOGO 標準字與小卡應用。",
    images: [
      "images/acou/01-cover.jpg",
      { src: "images/acou/02.jpg", desc: "應用延伸-保存方式小卡" },
      { src: "images/acou/03.jpg", desc: "標準字提案" }
    ]
  },
  {
    title: "豆尚 | 品牌設計",
    category: "品牌設計",
    client: "豆尚 日式手作定食",
    services: "品牌識別設計",
    year: "2020",
    location: "Tainan, Taiwan",
    about: [
      "豆尚是一間日式手作定食店，品牌名稱取自日文「爸爸」的音譯，以插圖呈現客戶的父親與兩隻愛犬，給人溫暖親切的氣氛。",
      "LOGO 以戴著紅色紳士帽、墨鏡的爸爸為主角，延伸應用於菜單設計，以暖黃色調搭配手繪食物插圖。"
    ],
    desc: "豆尚 CI 視覺識別設計，涵蓋 LOGO 標準字與菜單應用。",
    images: [
      "images/doushang/01-cover.jpg",
      { src: "images/doushang/02.jpg", desc: "應用延伸-菜單設計" }
    ]
  },
  {
    title: "羽樂體育 | 品牌設計",
    category: "品牌設計",
    client: "羽樂體育 Badminton Love",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "羽樂體育是一間專賣羽球拍的店家，標誌取自品牌英文名 Badminton Love 的字首「B」、「L」，並與羽毛球意象結合。",
      "標準色選用深藍搭配活力綠，延伸應用於服飾、旗幟等物件。"
    ],
    desc: "羽樂體育 CI 視覺識別設計，涵蓋 LOGO 標準字與服飾、旗幟應用延伸。",
    images: [
      "images/badmintonlove/01-cover.jpg",
      { src: "images/badmintonlove/02.jpg", desc: "應用延伸-服飾" },
      { src: "images/badmintonlove/03.jpg", desc: "應用延伸-旗幟" }
    ]
  },
  {
    title: "津饌壽司 | 品牌設計",
    category: "品牌設計",
    client: "津饌壽司 Jin Jhuan Sushi",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "津饌壽司希望客人吃得津津有味，LOGO 以「津」字結合屋頂造型與紅色日出圓點，勾勒出道地的日式意象。",
      "整體識別採用黑、白、紅三色，延伸應用於外帶餐盒、菜單與折價券。"
    ],
    desc: "津饌壽司 CI 視覺識別設計，涵蓋 LOGO 標準字、菜單、折價券與立牌應用。",
    images: [
      "images/jinjhuan/01-cover.jpg",
      { src: "images/jinjhuan/02.jpg", desc: "應用延伸-外帶餐盒" },
      { src: "images/jinjhuan/03.jpg", desc: "應用延伸-菜單、折價券" }
    ]
  },
  {
    title: "創意堂 | 品牌設計",
    category: "品牌設計",
    client: "創意堂 Idea Station",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "「創意堂 IDEA STATION」以貓頭鷹作為品牌形象，結合燈泡意象傳遞創意精神，皇冠承襲自舊名「菜單王」的元素。",
      "標準色搭配活力橘，延伸至名片、標籤貼紙、信封與信紙等應用物件。"
    ],
    desc: "創意堂 CI 視覺識別設計，涵蓋 LOGO 標準字、名片、標籤與信封應用。",
    images: [
      "images/ideastation/01-cover.jpg",
      { src: "images/ideastation/02.jpg", desc: "應用延伸-信封、信紙、名片與標籤貼紙" }
    ]
  },
  {
    title: "宅小青 | 品牌設計",
    category: "品牌設計",
    client: "宅小青 宅配蔬果籃",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "宅小青是一個宅配蔬果籃品牌，LOGO 以房子與蔬菜的線條結合，搭配俏皮的一筆勾勒線條。",
      "標準色選用灰綠配色，延伸應用於帆布袋與訂購小卡。"
    ],
    desc: "宅小青 CI 視覺識別設計，涵蓋 LOGO 標準字、小卡與帆布袋應用。",
    images: [
      "images/homeveggie/01-cover.jpg",
      { src: "images/homeveggie/02.jpg", desc: "應用延伸-帆布袋" },
      { src: "images/homeveggie/03.jpg", desc: "應用延伸-訂購小卡" }
    ]
  },
  {
    title: "宗洋企業社 | 品牌設計",
    category: "品牌設計",
    client: "宗洋企業社 Zong Yang Co., Ltd",
    services: "品牌識別設計",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "宗洋企業社專職 CNC 銑床塑膠模具加工，業主希望以鯊魚代表公司形象，展現霸氣無畏、沉穩、專注的精神，以躍動的鯊魚剪影搭配深藍漸層呈現。",
      "整套識別延伸至名片、信封與紙資料夾等應用物件。"
    ],
    desc: "宗洋企業社 CI 視覺識別設計，涵蓋 LOGO 標準字、名片、信封與紙資料夾應用。",
    images: [
      "images/zongyang/01-cover.jpg",
      { src: "images/zongyang/02.jpg", desc: "LOGO標準字設計" },
      { src: "images/zongyang/03.jpg", desc: "應用延伸-紙資料夾、信封、名片與信紙" }
    ]
  },
  {
    title: "東建安股份有限公司 | 品牌設計",
    category: "品牌設計",
    client: "東建安股份有限公司 Autoland Technology",
    services: "品牌識別設計",
    year: "2020",
    location: "Tainan, Taiwan",
    about: [
      "東建安股份有限公司（AUTOLAND TECHNOLOGY）深耕自動化設備領域三十餘年。LOGO 結合英文縮寫「A」「T」與一道安全降落的線條意象，標準字以黑紅配色傳達工業品牌的專業感。",
      "整套識別延伸至名片、信封與網站主視覺 banner。"
    ],
    desc: "東建安股份有限公司 CI 視覺識別設計，涵蓋 LOGO 標準字、名片、信封與網站主視覺 banner。",
    images: [
      "images/autoland/01-cover.jpg",
      { src: "images/autoland/02.jpg", desc: "LOGO標準字設計" },
      { src: "images/autoland/03.jpg", desc: "應用延伸-網站主視覺banner、名片、信封" }
    ]
  },
  {
    title: "露營",
    category: "插畫",
    client: "Nortent Norway",
    services: "插畫",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "以挪威帳篷品牌 Nortent 的 LAVVO 6 帳篷為主角繪製的露營情境海報，描繪一家人在帳篷下野炊、彈吉他、與孩子嬉戲的悠閒午後，暖黃色調搭配樹林、吊床等元素。"
    ],
    desc: "露營主題海報插畫。",
    images: [
      "images/camping-poster/01-cover.jpg"
    ]
  },
  {
    title: "美食",
    category: "插畫",
    client: "餐廳",
    services: "插畫",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "以各式料理為題繪製的美食插畫合集，包含海鮮義大利麵、三種鍋物料理，以及日式拉麵餐點海報。"
    ],
    desc: "義大利麵掛畫",
    images: [
      "images/food-illustration/01-cover.jpg",
      { src: "images/food-illustration/02.jpg", desc: "三種鍋物料理插畫" },
      { src: "images/food-illustration/03.jpg", desc: "拉麵店餐點海報插畫" }
    ]
  },
  {
    title: "貓咪",
    category: "插畫",
    client: "餐廳",
    services: "插畫",
    year: "2021",
    location: "Tainan, Taiwan",
    about: [
      "以家貓的各種日常姿態為題繪製的角色插畫合集，捕捉貓咪窩在床墊裡、伸懶腰、趴在筆電上取暖等生活化瞬間。"
    ],
    desc: "以家貓日常姿態為題的角色插畫合集。",
    images: [
      "images/cat-illustration/01-cover.jpg"
    ]
  }
];
