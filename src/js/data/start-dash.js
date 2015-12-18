module.exports = {
  "lovecall": 0,
  "metadata": {
    "song": {
      "title": "START:DASH!!",
      "artist": "μ's",
      "album": "ススメ→トゥモロウ/START:DASH!!",
      "url": "music/start-dash.mp3",
      "sources": {
        "fallback:": {
          "offset": 857
        },
        "md5:2ccf40b6bdb51eff603e7392643ea97e": {
          "offset": 857
        }
      },
      "timing": [
        [0, 150.0, 4, 4, 0]
      ]
    },
    "palette": [
    ]
  },
  "form": [
    [0, 0, 14, 0, "I"],
    [14, 0, 30, 0, "A1"],
    [30, 0, 39, 0, "B1"],
    [39, 0, 57, 0, "C1"],
    [57, 0, 66, 0, "G1"],
    [66, 0, 74, 0, "A2"],
    [74, 0, 83, 0, "B2"],
    [83, 0, 101, 0, "C2"],
    [101, 0, 109, 0, "S1"],
    [109, 0, 119, 0, "G2"],
    [119, 0, 127, 0, "S2"],
    [127, 0, 145, 0, "C3"],
    [145, 0, 153, 0, "G3"],
    [153, 0, -1, -1, "O"]
  ],
  "colors": [
  ],
  "sequences": {
    "startdash": [
      [1, 0, 0, 1, 0, "里跳"],
      [1, 0, 4, 0, 8, "跟唱", "Hey"],
      [1, 0, 12, 1, 0, "跟唱", "Hey"],
      [1, 1, 0, 1, 8, "里打"],
      [1, 1, 8, 2, 0, "里跳"],
      [1, 1, 4, 1, 8, "跟唱", "Hey"],
      [1, 1, 8, 1, 12, "跟唱", "START"],
      [1, 1, 12, 2, 0, "跟唱", "DASH"]
    ],
    "startdashx2": [
      [2, 0, 0, "startdash"],
      [1, 2, 0, 4, 0, "里打"],
      [2, 4, 0, "startdash"]
    ],
    "快挥-fufu-fuwafuwa": [
      [1, 0, 0, 1, 8, "快挥"],
      [0, 1, 10, "fufu"],
      [1, 2, 0, 3, 0, "快挥"],
      [1, 3, 0, 4, 0, "fuwa"]
    ],
    "hazusa": [
      [1, 0, 0, 0, 12, "前挥", 4],
      [1, 0, 0, 0, 4, "跟唱", "は"],
      [1, 0, 4, 0, 8, "跟唱", "ず"],
      [1, 0, 8, 0, 12, "跟唱", "さ"]
    ],
    "快挥-hazusa": [
      [1, 0, 0, 2, 0, "快挥"],
      [1, 2, 0, 3, 0, "前挥"],
      [2, 3, 0, "hazusa"]
    ],
    "C2/C3": [
      [2, 0, 0, "快挥-fufu-fuwafuwa"],
      [2, 4, 0, "快挥-hazusa"],
      [2, 8, 0, "快挥-fufu-fuwafuwa"],
      [1, 12, 0, 17, 0, "前挥"],
      [1, 12, 4, 12, 12, "跟唱", "それは"],
      [1, 13, 4, 13, 12, "跟唱", "夢の"],
      [1, 14, 4, 14, 12, "跟唱", "だけど"],
      [1, 17, 0, 18, 0, "前挥", 16],
      [1, 18, 0, 20, 0, "上举", 32],
    ]
  },
  "timeline": [
    [1, 0, 0, 4, 0, "上举", 16],
    [1, 3, 12, 4, 0, "跟唱", "I"],
    [1, 4, 0, 6, 0, "上举", 32],
    [1, 4, 0, 6, 0, "跟唱", "say"],
    [2, 6, 0, "startdashx2"],
    [1, 12, 0, 14, 0, "里打"],
    [1, 14, 0, 20, 12, "里打"],
    [1, 20, 12, 21, 4, "前挥", 4],
    [1, 20, 12, 21, 0, "跟唱", "飛"],
    [1, 21, 0, 21, 4, "跟唱", "ぶ"],
    [1, 22, 0, 28, 0, "里打"],
    [1, 28, 0, 30, 0, "警报"],
    [1, 30, 0, 34, 0, "PPPH", "OOOH"],
    [1, 34, 0, 37, 12, "里跳", true],
    [1, 38, 0, 39, 0, "前挥", 16],
    [1, 37, 14, 38, 4, "跟唱", "START"],
    [2, 39, 0, "快挥-fufu-fuwafuwa"],
    [2, 43, 0, "快挥-hazusa"],
    [2, 47, 0, "快挥-fufu-fuwafuwa"],
    [1, 51, 0, 56, 0, "前挥"],
    [1, 51, 4, 51, 12, "跟唱", "きっと"],
    [1, 52, 4, 52, 12, "跟唱", "夢の"],
    [1, 53, 4, 53, 12, "跟唱", "今を"],
    [1, 56, 0, 57, 0, "前挥", 16],
    [1, 57, 0, 59, 0, "上举", 32],
    [2, 59, 0, "startdashx2"],
    [1, 65, 0, 66, 0, "里打"],
    [1, 66, 0, 72, 0, "里打"],
    [1, 72, 0, 74, 0, "警报"],
    [1, 74, 0, 78, 0, "PPPH", "OOOH"],
    [1, 78, 0, 81, 12, "里跳", true],
    [1, 82, 0, 83, 0, "前挥", 16],
    [1, 81, 14, 82, 4, "跟唱", "DASH"],
    [2, 83, 0, "C2/C3"],
    [1, 103, 0, 109, 0, "上举", 16],
    [1, 109, 0, 117, 0, "里跳", true],
    [1, 117, 0, 117, 4, "快挥", 2],
    [1, 117, 6, 117, 10, "快挥", 2],
    [1, 117, 12, 118, 0, "快挥", 2],
    [1, 119, 0, 125, 0, "上举", 16],
    [1, 125, 0, 126, 0, "前挥"],
    [2, 126, 0, "hazusa"],
    [2, 127, 0, "C2/C3"],
    [2, 147, 0, "startdashx2"],
    [1, 153, 0, 155, 0, "上举", 32]
  ]
};
