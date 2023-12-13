const app = Vue.createApp({
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      count: 10,
      
      questions: [
        {
          question:
            "スマホやパソコンの画面を後ろから覗き見て情報を盗む攻撃を何という？",
          img: "./ogp.jpg",
          answers: { a: "ショルダーハック", b: "SQLインジェクション", c: "背後脆弱", d: "這いよれニャル子さん" },
          correctAnswer: "a",
        },
        {
          question:
            "サイバー攻撃の１秒あたりの頻度は？",
          img: "./img/2.jpg",
          answers: { a: "12", b: "13", c: "20", d: "21" },
          correctAnswer: "b",
        },
        {
          question:
            "フリーWIFIに繋ぎたい時に正しい行動は？",
          img: "./img/3.png",
          answers: { a: "Seki-lab-Free_Wi-Fi", b: "Seki-ken-Free_Wi-Fi", c: "VPNを繋ぐ"},
          correctAnswer: "a",
        },
        {
          question:
            "ネットワークにおいて，外部からの不正アクセスを防ぐために内部ネットワークと外部ネットワークの間に置かれるものはなにか。",
          img: "./img/4.png",
          answers: { a: "ファイアウォール", b: "ファイアーボール", c: "ファイターソウル", d: "ファイアートルネード" },
          correctAnswer: "a",
        },
        {
          question:
            "ワンタイムパスワードを用いることによって防げることはどれか。",
          img: "./img/5.png",
          answers: { a: "シングルサインオン", b: "ジングルサンタベル", c: "キングヌーサインお願いします" },
          correctAnswer: "a",
        }, 
        {
          question:
            "2022年に最も使われてあパスワードは？",
          img: "./img/6.png",
          answers: { a: "abcd", b: "123456", c: "000000", d: "password" },
          correctAnswer: "b",
        },
        {
          question:
            "関先生の所属学科は？",
          img: "./img/7.png",
          answers: { a: "情報システム学科", b: "社会メディア学科", c: "デザインデータ科学科", d: "環境学科" },
          correctAnswer: "c",
        },
        {
          question:
            "関先生の生まれた場所は？",
          img: "./img/8.png",
          answers: { a: "新潟", b: "東京", c: "岡山", d: "熊本" },
          correctAnswer: "a",
        },
        {
          question:
            "次のうち個人情報に該当するものはどれでしょうか？",
          img: "./img/9.png",
          answers: { a: "取引先の名刺", b: "無記名のレシート", c: "学校名と学籍番号が記載されたテスト結果", d: "電話番号だけ記載された連絡簿" },
          correctAnswer: "a",
        },
        {
          question:
            "ランサムウェアが起こす被害として適切なものはどれでしょうか？",
          img: "./img/10.png",
          answers: { a: "PCの強制的なロックや、ファイルの暗号化などを行い、復元することと引き換えに身代金を要求する", b: "感染したパソコンの内部情報を勝手に外部に送信する", c: "ユーザのキーボード操作をそのまま外部に送信する", d: "攻撃者からの指令で、他のコンピュータへの攻撃などの有害な動作を行う" },
          correctAnswer: "a",
        },
        {
          question:
            "二段階認証とは？",
          img: "./img/11.png",
          answers: { a: "IDやパスワードなどの記憶情報、指紋や虹彩などの生体情報、IDカードなどの所持情報を2つ組み合わせる方法", b: "ベクター形式の画像をビットマップ形式に変換するような処理のこと", c: "IDとパスワードが入力されたときに、スマホなどに認証コードを通知し、それを追加で入力するような方法。"},
          correctAnswer: "c",
        },
        // {
        //   question:
        //     "",
        //   img: "./img/12.png",
        //   answers: { a: "", b: "", c: ""},
        //   correctAnswer: "a",
        // },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
        this.correctAnswers++;
      } else {
        this.wrongAnswers++;
      }
    },
    nextQuestion() {
      this.idx++;
      this.selectedAnswer = "";
      document.querySelectorAll("input").forEach((el) => (el.checked = false));
    },
    showResults() {
      this.idx++;
    },
    resetQuiz() {
      this.idx = 0;
      this.selectedAnswer = "";
      this.correctAnswers = 0;
      this.wrongAnswers = 0;
    },
  },
});

app.mount("#app");
