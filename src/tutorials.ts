interface TextContent {
  type: "text";
  value: string;
}

interface CodeContent {
  type: "code";
  value: string[];
}

interface ListContent {
  type: "list";
  value: string[];
}

interface TableContent {
  type: "table";
  value: string[][];
}

type Content = TextContent | CodeContent | ListContent | TableContent;

interface Tutorial {
  tags: string[];
  title: string;
  contents: Content[];
}

export const tutorials: Tutorial[] = [
  {
    tags: [],
    title: "標準出力",
    contents: [
      {
        type: "text",
        value: "コンソールに文字を出力するための関数です。",
      },
      {
        type: "code",
        value: ["print('Hello, Python!')"],
      },
    ],
  },
  {
    tags: [],
    title: "四則演算",
    contents: [
      {
        type: "text",
        value:
          "和(+), 差(-), 積(*), 商(/)のような四則演算を用いることで、計算をすることができます。",
      },
      {
        type: "table",
        value: [
          ["演算子", "意味"],
          ["+", "加算（和）"],
          ["-", "減算（差）"],
          ["*", "乗算（積）"],
          ["/", "除算（商）"],
        ],
      },
      {
        type: "code",
        value: ["print(1 + 10 * 2)"],
      },
    ],
  },
  {
    tags: [],
    title: "変数",
    contents: [
      {
        type: "text",
        value:
          "変数を使うことでデータを保持し、必要に応じて再利用することができます。整数や浮動小数点数など、異なる型のデータを格納することができます。",
      },
      {
        type: "code",
        value: ["a = 10", "b = 3.14", "print(a, b)"],
      },
    ],
  },
  {
    tags: [],
    title: "コメント",
    contents: [
      {
        type: "text",
        value:
          "コメントはコードの説明を記述するために使われ、Pythonではシャープ記号(#)を使います。コンピュータはコメントを無視します。",
      },
      {
        type: "code",
        value: ["# これはコメントです", "print('コメントは実行されません')"],
      },
    ],
  },
];
