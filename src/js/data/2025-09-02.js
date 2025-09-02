dataSetVersion = "2025-09-02"; // just put today’s date
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Team",
    key: "team",
    tooltip: "Check this to restrict to certain Blue Lock teams.",
    checked: false,
    sub: [
      { name: "Team Z", key: "tz" },
      { name: "Team Y", key: "ty" },
      { name: "Team X", key: "tx" },
      { name: "Team W", key: "tw" },
      { name: "Team V", key: "tv" },
      { name: "Team white", key: "twhite" },
      { name: "Team red", key: "tred" },
      { name: "World Five", key: "wf" },
      { name: "Team A", key: "ta" },
      { name: "Team B", key: "tb" },
      { name: "Team C", key: "tc" },
      { name: "Blue Lock Eleven", key: "bleleven" },
      { name: "Japan U-20", key: "u20" },
      { name: "Bastard München", key: "bm" },
      { name: "FC Barcha", key: "barcha" },
      { name: "Manshine City", key: "mc" },
      { name: "Ubers", key: "ub" },
      { name: "PXG", key: "pxg" },
      { name: "Nigeria U-20", key: "ngu20" },
      { name: "New Gen XI", key: "ngxi" },
      { name: "Male", key: "m" },
      { name: "Female", key: "fm" },
      { name: "Background Charas", key: "bg" },
      { name: "Irrelvant Charas", key: "ic" },
      { name: "Japan Reps", key: "jfu" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Adam Blake",
    img: "adam.jpg",
    opts: {
      team: ["wf","m"]
    }
  },
  {
    name: "Agi",
    img: "agi.jpg",
    opts: {
      team: ["mc","m"]
    }
  },
  {
    name: "Akira Endoji",
    img: "akira.jpg",
    opts: {
      team: ["twhite","tc","pxg","m"]
    }
  },
  {
    name: "Anri Teieri",
    img: "anri.jpg",
    opts: {
      team: ["fm","jfu"]
    }
  },
  {
    name: "Jyubei Aryu",
    img: "aryu.jpg",
    opts: {
      team: ["tred","ta","bleleven","ub","m"]
    }
  },
  {
    name: "Meguru Bachira",
    img: "bachira.jpg",
    opts: {
      team: ["tz","tred","twhite","bleleven","mc"]
    }
  },
  {
    name: "Shoei Baro",
    img: "barou.jpg",
    opts: {
      team: ["tx","tred","twhite","bleleven","ub"]
    }
  },
  {
    name: "Bello",
    img: "bello.jpg",
    opts: {
      team: ["ngu20"]
    }
  },
  {
    name: "Birkenstock",
    img: "birkenstock.jpg",
    opts: {
      team: ["bm"]
    }
  },
  {
    name: "Bunny Iglesias",
    img: "bunny.jpg",
    opts: {
      team: ["spu20","ngxi"]
    }
  },
  {
    name: "Hirotoshi Buratsuta",
    img: "buratsuta.jpg",
    opts: {
      team: ["jfu"]
    }
  },
  {
    name: "Charles Chevalier",
    img: "charles.jpg",
    opts: {
      team: ["pxg"]
    }
  },
  {
    name: "Hyoma Chigiri",
    img: "chigiri.jpg",
    opts: {
      team: ["tz","tred","mc","bleleven"]
    }
  },
  {
    name: "Choki",
    img: "choki.jpg",
    opts: {
      team: ["mc"]
    }
  },
  {
    name: "Chris Prince",
    img: "chris.jpg",
    opts: {
      team: ["ub","mc"]
    }
  },
  {
    name: "Dada Silva",
    img: "dada.jpg",
    opts: {
      team: ["wf"]
    }
  },
  {
    name: "Miroku Darai",
    img: "darai.jpg",
    opts: {
      team: ["barcha"]
    }
  },
  {
    name: "Jinpachi Ego",
    img: "ego.jpg",
    opts: {
      team: ["jfu"]
    }
  },
  {
    name: "Erik Gesner",
    img: "erik.jpg",
    opts: {
      team: ["bm"]
    }
  },
  {
    name: "Gen Fukaku",
    img: "fukaku.jpg",
    opts: {
      team: ["ub"]
    }
  },
  {
    name: "Gin Gagamaru",
    img: "gagamaru.jpg",
    opts: {
      team: ["tz","tred","twhite","bleleven","bm"]
    }
  },
  {
    name: "Ginji Hiori",
    img: "ginji.jpg",
    opts: {
      team: ["tx"]
    }
  },
  {
    name: "Benedict Grim",
    img: "grim.jpg",
    opts: {
      team: ["bm"]
    }
  },
  {
    name: "Shizuka Haiji",
    img: "haiji.jpg",
    opts: {
      team: ["tx","twhite","mc"]
    }
  },
  {
    name: "Haru Hayate",
    img: "haru.jpg",
    opts: {
      team: ["barcha"]
    }
  },
  {
    name: "Aiki Himizu",
    img: "himizu.jpg",
    opts: {
      team: ["mc","barcha"]
    }
  },
  {
    name: "Junko Hiori",
    img: "hiori.jpg",
    opts: {
      team: ["tx"]
    }
  },
  {
    name: "Okuhito Iemon",
    img: "iemon.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Gurimu Igarashi",
    img: "igarashi.jpg",
    opts: {
      team: ["tz","twhite","bleleven","pxg"]
    }
  },
  {
    name: "Yudai Imamura",
    img: "imamura.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Yoichi Isagi",
    img: "isagi.jpg",
    opts: {
      team: ["tz","tred","twhite","bleleven","u20"]
    }
  },
  {
    name: "Issei Isagi",
    img: "issei.jpg",
    opts: {
      team: ["tx"]
    }
  },
  {
    name: "Itsuki Wakatsuki",
    img: "itsuki.jpg",
    opts: {
      team: ["barcha"]
    }
  },
  {
    name: "Iyo Isagi",
    img: "iyo.jpg",
    opts: {
      team: ["tx"]
    }
  },
  {
    name: "Junichi Wanima",
    img: "jwanima.jpg",
    opts: {
      team: ["tw","tred","mc"]
    }
  },
  {
    name: "Michael Kaiser",
    img: "kaiser.jpg",
    opts: {
      team: ["ngxi","bm","m"]
    }
  },
  {
    name: "Tabito Karasu",
    img: "karasu.jpg",
    opts: {
      team: ["tz","tred","twhite","bleleven","pxg"]
    }
  },
  {
    name: "Kazuma Nio",
    img: "kazuma.jpg",
    opts: {
      team: ["mc"]
    }
  },
  {
    name: "Kento Cho",
    img: "kento.jpg",
    opts: {
      team: ["barcha"]
    }
  },
  {
    name: "Ryosuke Kira",
    img: "kira.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Jin Kiyora",
    img: "kiyora.jpg",
    opts: {
      team: ["tred","twhite","bleleven","pxg"]
    }
  },
  {
    name: "Koyuki Chigiri",
    img: "koyuki.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Rensuke Kunigami",
    img: "kunigami.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Wataru Kuon",
    img: "kuon.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Ranze Kurona",
    img: "kurona.jpg",
    opts: {
      team: ["tred","twhite","bleleven","pxg"]
    }
  },
  {
    name: "Kuso",
    img: "kuso.jpg",
    opts: {
      team: ["ngu20"]
    }
  },
  {
    name: "Keisuke Wanima",
    img: "kwanima.jpg",
    opts: {
      team: ["tw"]
    }
  },
  {
    name: "Kyohei Shiguma",
    img: "kyohei.jpg",
    opts: {
      team: ["tred","ub"]
    }
  },
  {
    name: "Lavinho",
    img: "lavinho.jpg",
    opts: {
      team: ["barcha"]
    }
  },
  {
    name: "Julian Loki",
    img: "loki.jpg",
    opts: {
      team: ["pxg"]
    }
  },
  {
    name: "Don Lorenzo",
    img: "lorenzo.jpg",
    opts: {
      team: ["ngxi"]
    }
  },
  {
    name: "Leonardo Luna",
    img: "luna.jpg",
    opts: {
      team: ["wf"]
    }
  },
  {
    name: "Mick Moon",
    img: "mick.jpg",
    opts: {
      team: ["pxg"]
    }
  },
  {
    name: "Seishiro Nagi",
    img: "nagi.jpg",
    opts: {
      team: ["tv","twhite","bleleven","mc"]
    }
  },
  {
    name: "Nijiro Nanase",
    img: "nanase.jpg",
    opts: {
      team: ["twhite","pxg"]
    }
  },
  {
    name: "Mahiru Naruhaya",
    img: "naruhaya.jpg",
    opts: {
      team: ["tx"]
    }
  },
  {
    name: "Neneko Chigiri",
    img: "neneko.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Teppei Neru",
    img: "neru.jpg",
    opts: {
      team: ["tred","bm"]
    }
  },
  {
    name: "Alexis Ness",
    img: "ness.jpg",
    opts: {
      team: ["bm"]
    }
  },
  {
    name: "Ikki Niko",
    img: "niko.jpg",
    opts: {
      team: ["ty","tred","bleleven","ub"]
    }
  },
  {
    name: "Hajime Nishioka",
    img: "nishioka.jpg",
    opts: {
      team: ["mc","tred"]
    }
  },
  {
    name: "Noel Noa",
    img: "noa.jpg",
    opts: {
      team: ["bm"]
    }
  },
  {
    name: "Oboabona",
    img: "oboabona.jpg",
    opts: {
      team: ["ngu20"]
    }
  },
  {
    name: "Hibiki Okawa",
    img: "okawa.jpg",
    opts: {
      team: ["ty"]
    }
  },
  {
    name: "Oliver Aiku",
    img: "oliver.jpg",
    opts: {
      team: ["ub"]
    }
  },
  {
    name: "Onazi",
    img: "onazi.jpg",
    opts: {
      team: ["ngu20"]
    }
  },
  {
    name: "Eita Otoya",
    img: "otoya.jpg",
    opts: {
      team: ["tred","twhite","bleleven","barcha"]
    }
  },
  {
    name: "Pablo Cavasoz",
    img: "pablo.jpg",
    opts: {
      team: ["wf"]
    }
  },
  {
    name: "Jingo Raichi",
    img: "raichi.jpg",
    opts: {
      team: ["tz","tred","bleleven","bm"]
    }
  },
  {
    name: "Ray Dark",
    img: "ray.jpg",
    opts: {
      team: ["tx"]
    }
  },
  {
    name: "Reiji Hiiragi",
    img: "reiji.jpg",
    opts: {
      team: ["twhite","tred","bleleven","pxg"]
    }
  },
  {
    name: "Reo Mikage",
    img: "reo.jpg",
    opts: {
      team: ["tv","twhite","bleleven","mc"]
    }
  },
  {
    name: "Rin Itoshi",
    img: "rin.jpg",
    opts: {
      team: ["tred","twhite","bleleven","pxg"]
    }
  },
  {
    name: "Sae Itoshi",
    img: "sae.jpg",
    opts: {
      team: ["ngxi"]
    }
  },
  {
    name: "Kairu Saramadara",
    img: "saramadara.jpg",
    opts: {
      team: ["tred","mc"]
    }
  },
  {
    name: "Shuto Sendo",
    img: "sendo.jpg",
    opts: {
      team: ["ub","u20"]
    }
  },
  {
    name: "Ryusei Shido",
    img: "shidou.jpg",
    opts: {
      team: ["tred","twhite","bleleven","pxg"]
    }
  },
  {
    name: "Marc Snuffy",
    img: "snuffy.jpg",
    opts: {
      team: ["ub"]
    }
  },
  {
    name: "Taiga Tsunzaki",
    img: "taiga.jpg",
    opts: {
      team: ["tred","twhite","bleleven","mc"]
    }
  },
  {
    name: "Shingen Tanaka",
    img: "tanaka.jpg",
    opts: {
      team: ["tred","twhite","bleleven","ub"]
    }
  },
  {
    name: "Teru Kitsunezato",
    img: "teru.jpg",
    opts: {
      team: ["barcha"]
    }
  },
  {
    name: "Tetsu Sokura",
    img: "tetsu.jpg",
    opts: {
      team: ["tred","twhite","mc","barcha"]
    }
  },
  {
    name: "Aoshi Tokimitsu",
    img: "tokimitsu.jpg",
    opts: {
      team: ["tred","bleleven","pxg"]
    }
  },
  {
    name: "Yu Bachira",
    img: "yu.jpg",
    opts: {
      team: ["tz"]
    }
  },
  {
    name: "Kenyu Yukimiya",
    img: "yukimiya.jpg",
    opts: {
      team: ["tred","twhite","bleleven","pxg"]
    }
  },
  {
    name: "Yukio Ishikari",
    img: "yukio.jpg",
    opts: {
      team: ["tred","twhite","bleleven","ub"]
    }
  },
  {
    name: "Haruhiko Yuzu",
    img: "yuzu.jpg",
    opts: {
      team: ["tred","mc"]
    }
  },
  {
    name: "Zantetsu Tsurugi",
    img: "zantetsu.jpg",
    opts: {
      team: ["tv","twhite","bleleven","pxg"]
    }
  }
];

