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
            "q1",
          img: "./ogp.jpg",
          answers: { a: "a", b: "b", c: "c", d: "d" },
          correctAnswer: "a",
        },
        {
          question:
            "q2",
          img: "./img/2.jpg",
          answers: { a: "1", b: "2", c: "3", d: "4" },
          correctAnswer: "b",
        },
        {
          question:
            "q3",
          img: "./img/3.png",
          answers: { a: "T", b: "F" },
          correctAnswer: "a",
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
