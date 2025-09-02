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
      { name: "Team White", key: "twhite" },
      { name: "Team Red", key: "tred" },
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
      { name: "Japan U-20", key: "ju20" },
      { name: "Nigeria U-20", key: "ngu20" },
      { name: "New Gen XI", key: "ngxi" },
      { name: "Male", key: "m" },
      { name: "Female", key: "fm" },
      { name: "Background Charas", key: "bg" }
      { name: "Irrevant Charas", key: "ic" }
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
      team: ["white","tc","pxg","m"]
    }
  },
  {
    name: "Anri Teieri",
    img: "anri.jpg",
    opts: {
      team: ["jfu","fm"]
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
      team: ["tz","red","white","bleleven","ju20","mc"]
    }
  },
  {
    name: "Shoei Baro",
    img: "barou.jpg",
    opts: {
      team: ["tx","red","white","bleleven","ju20","ub"]
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
      team: ["fru20","pxg"]
    }
  },
  {
    name: "Hyoma Chigiri",
    img: "chigiri.jpg",
    opts: {
      team: ["tz","red","mc","bleleven","ju20"]
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
      team: ["ju20","barcha"]
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
      team: ["ju20","ub"]
    }
  },
  {
    name: "Gin Gagamaru",
    img: "gagamaru.jpg",
    opts: {
      team: ["tz","red","white","bleleven","ju20","bm"]
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
      team: ["tx","white","mc"]
    }
  },
  {
    name: "Haru Hayate",
    img: "haru.jpg",
    opts: {
      team: ["ju20","barcha"]
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
      team: ["tz","white","bleleven","pxg"]
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
      team: ["tz","red","white","bleleven","ju20","u20wc"]
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
      team: ["ju20","barcha"]
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
      team: ["tw","red","mc"]
    }
  },
  {
    name: "Michael Kaiser",
    img: "kaiser.jpg",
    opts: {
      team: ["ngxi","bm","m","geru20"]
    }
  },
  {
    name: "Tabito Karasu",
    img: "karasu.jpg",
    opts: {
      team: ["tz","red","white","bleleven","ju20","pxg"]
    }
  },
  {
    name: "Kazuma Nio",
    img: "kazuma.jpg",
    opts: {
      team: ["ju20","mc"]
    }
  },
  {
    name: "Kento Cho",
    img: "kento.jpg",
    opts: {
      team: ["ju20","barcha"]
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
      team: ["red","white","bleleven","ju20","pxg"]
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
      team: ["tz","ju20"]
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
      team: ["red","white","bleleven","ju20","pxg"]
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
      team: ["red","ub"]
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
      team: ["fru20","pxg"]
    }
  },
  {
    name: "Don Lorenzo",
    img: "lorenzo.jpg",
    opts: {
      team: ["itu20","ngxi"]
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
      team: ["tv","white","bleleven","mc"]
    }
  },
  {
    name: "Nijiro Nanase",
    img: "nanase.jpg",
    opts: {
      team: ["white","pxg"]
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
      team: ["red","ju20","bm"]
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
      team: ["ty","red","bleleven","ju20","ub"]
    }
  },
  {
    name: "Hajime Nishioka",
    img: "nishioka.jpg",
    opts: {
      team: ["mc","red"]
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
      team: ["ju20","ub"]
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
      team: ["red","white","bleleven","ju20","barcha"]
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
      team: ["tz","red","bleleven","bm"]
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
      team: ["white","red","bleleven","ju20","pxg"]
    }
  },
  {
    name: "Reo Mikage",
    img: "reo.jpg",
    opts: {
      team: ["tv","white","bleleven","ju20","mc"]
    }
  },
  {
    name: "Rin Itoshi",
    img: "rin.jpg",
    opts: {
      team: ["red","white","bleleven","ju20","pxg","ju20wc"]
    }
  },
  {
    name: "Sae Itoshi",
    img: "sae.jpg",
    opts: {
      team: ["ngxi","ju20wc"]
    }
  },
  {
    name: "Kairu Saramadara",
    img: "saramadara.jpg",
    opts: {
      team: ["red","mc"]
    }
  },
  {
    name: "Shuto Sendo",
    img: "sendo.jpg",
    opts: {
      team: ["ju20","ub","u20wc"]
    }
  },
  {
    name: "Ryusei Shido",
    img: "shidou.jpg",
    opts: {
      team: ["red","white","bleleven","ju20","pxg","ju20wc"]
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
      team: ["red","white","bleleven","mc"]
    }
  },
  {
    name: "Shingen Tanaka",
    img: "tanaka.jpg",
    opts: {
      team: ["red","white","bleleven","ub"]
    }
  },
  {
    name: "Teru Kitsunezato",
    img: "teru.jpg",
    opts: {
      team: ["ju20","barcha"]
    }
  },
  {
    name: "Tetsu Sokura",
    img: "tetsu.jpg",
    opts: {
      team: ["red","white","mc","barcha"]
    }
  },
  {
    name: "Aoshi Tokimitsu",
    img: "tokimitsu.jpg",
    opts: {
      team: ["red","bleleven","pxg"]
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
      team: ["red","white","bleleven","ju20","pxg"]
    }
  },
  {
    name: "Yukio Ishikari",
    img: "yukio.jpg",
    opts: {
      team: ["red","white","bleleven","ub","ju20wc"]
    }
  },
  {
    name: "Haruhiko Yuzu",
    img: "yuzu.jpg",
    opts: {
      team: ["red","mc"]
    }
  },
  {
    name: "Zantetsu Tsurugi",
    img: "zantetsu.jpg",
    opts: {
      team: ["tv","white","bleleven","pxg","ju20wc"]
    }
  }
];

