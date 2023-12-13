const app = Vue.createApp({
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      count: 3,
      
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
            "共通鍵暗号方式では通信の組合せごとに鍵が1個必要となる。例えばA－Dの4人が相互に通信を行う場合は，AB，AC，AD，BC，BD，CDの組合せの6個の鍵が必要である。8人が相互に通信を行うためには何個の鍵が必要か。",
          img: "./img/3.png",
          answers: { a: "28", b: "31", c: "36", d: "56" },
          correctAnswer: "a",
        },
        {
          question:
            "データの送信側は受信者の公開鍵で暗号化し，受信者は自身の秘密鍵で復号することによって実現できる対策はどれか。",
          img: "./img/3.png",
          answers: { a: "送信者のなりすまし防止", b: "通信経路上でのデータの盗聴防止", c: "通信経路上での伝送エラーの発生防止", d: "伝送経路上で改ざんされた部分のデータ復元" },
          correctAnswer: "b",
        },
        {
          question:
            "ネットワークにおいて，外部からの不正アクセスを防ぐために内部ネットワークと外部ネットワークの間に置かれるものはなにか。",
          img: "./img/3.png",
          answers: { a: "ファイアウォール", b: "ファイアーボール", c: "ファイターソウル", d: "ファイアートルネード" },
          correctAnswer: "a",
        },
        {
          question:
            "情報セキュリティの要素である機密性，完全性及び可用性のうち，完全性を高める例として，最も適切なものはどれか。",
          img: "./img/3.png",
          answers: { a: "データの入力者以外の者が，入力されたデータの正しさをチェックする。", b: "データを外部媒体に保存するときは，暗号化する。", c: "データを処理するシステムに予備電源を増設する。", d: "ファイルに読出し用パスワードを設定する。" },
          correctAnswer: "a",
        },
        {
          question:
            "ワンタイムパスワードを用いることによって防げることはどれか。",
          img: "./img/3.png",
          answers: { a: "シングルサインオン", b: "ジングルサンタベル", c: "キングヌーサインお願いします" },
          correctAnswer: "a",
        }, 
        {
          question:
            "暗号化に関する記述のうち，適切なものはどれか。",
          img: "./img/3.png",
          answers: { a: "暗号文を平文に戻すことをリセットという。", b: "共通鍵暗号方式では，暗号文と共通鍵を同時に送信する。", c: "公開鍵暗号方式では，暗号化のための鍵と平文に戻すための鍵が異なる。", d: "電子署名には，共通鍵暗号方式が使われる。" },
          correctAnswer: "c",
        }, 
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
