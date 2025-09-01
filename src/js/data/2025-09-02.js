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
      { name: "Japan U-20 (World Cup)", key: "u20wc" },
      { name: "France U-20", key: "fru20" },
      { name: "Germany U-20", key: "geru20" },
      { name: "Italy U-20", key: "itu20" },
      { name: "Spain U-20", key: "spu20" },
      { name: "Nigeria U-20", key: "ngu20" },
      { name: "New Gen XI", key: "ngxi" },
      { name: "Others", key: "others" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
{
  name: "Michael Kaiser",
  img: "Kaiser.png",
  opts: {
    team: [
      "ngxi",
      "geru20",
      "bm"
    ]
  },
