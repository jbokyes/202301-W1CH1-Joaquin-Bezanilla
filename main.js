const playButton = document.querySelector(".button-play");

const question = document.querySelector(".question");

const sendButton = document.querySelector(".send");

const textAnswer = document.querySelector(".answer");

const user = document.querySelector(".user");

const pasapalabraButton = document.querySelector(".pasapalabra");

const counters = document.querySelectorAll(".counter");

const correctCounter = document.querySelector(".correct");

const incorrectCounter = document.querySelector(".incorrect");

const replayButton = document.querySelector(".replay");

const allAnswers = document.querySelectorAll(".letter");

const countdownEl = document.querySelector(".countdown");

const playSection = document.querySelector(".play-section");

let ranking = [];

let time = 120;
let n = 0;
let correct = 0;
let incorrect = 0;
let interval;
playButton.addEventListener("click", (e) => {
  question.innerText = questions[n].question;
  playButton.style.display = "none";
  user.style.display = "none";
  textAnswer.style.display = "inline";
  playSection.style.display = "inline";
  interval = setInterval(updateCountDown, 1000);
  function updateCountDown() {
    countdownEl.innerHTML = time + " segundos";
    time--;
    if (time === 0) {
      question.innerHTML = "Se acabó el tiempo";
      document.querySelector(".time").style.display = "none";
      playSection.style.display = "none";
      replayButton.style.display = "inline";
      document.querySelector(".contadores").style.display = "inline";
    }
  }
});

sendButton.addEventListener("click", (e) => {
  let userAnswer = textAnswer.value;
  if (n < 26) {
    if (userAnswer.toLowerCase() === questions[n].answer && n <= 26) {
      correct++;
      correctCounter.innerText = correct;
      document.querySelector("." + questions[n].letter).style.backgroundColor =
        "lightgreen";
      n++;
      question.innerText = questions[n].question;
    } else if (userAnswer.toLowerCase() != questions[n].answer && n <= 26) {
      incorrect++;
      incorrectCounter.innerText = incorrect;
      document.querySelector("." + questions[n].letter).style.backgroundColor =
        "red";
      n++;
      question.innerText = questions[n].question;
    }
  } else {
    if (userAnswer.toLowerCase() === questions[n].answer) {
      correct++;
      correctCounter.innerText = correct;
      document.querySelector("." + questions[n].letter).style.backgroundColor =
        "lightgreen";
      playSection.style.display = "none";
      document.querySelector(".time").style.display = "none";
      userObject = {
        user: user.value,
        score: correct - incorrect,
      };
      ranking.push(userObject); //Registro ranking
      ranking.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
      document.querySelector(".contadores").style.display = "inline";
      replayButton.style.display = "inline";
      document.querySelector(".ranking").style.display = "grid";
      document.querySelector(".title-ranking").style.display = "inline";
      document.querySelector(".ranking1").innerHTML = ranking[0].user;
      document.querySelector(".score1").innerHTML = ranking[0].score;
      document.querySelector(".ranking1").style.display = "inline";
      if (ranking.length >= 2) {
        document.querySelector(".ranking2").innerHTML = ranking[1].user;
        document.querySelector(".score2").innerHTML = ranking[1].score;
      }
      if (ranking.length >= 3) {
        document.querySelector(".ranking3").innerHTML = ranking[2].user;
        document.querySelector(".score3").innerHTML = ranking[2].score;
      }
      if (ranking.length >= 4) {
        document.querySelector(".ranking4").innerHTML = ranking[3].user;
        document.querySelector(".score4").innerHTML = ranking[3].score;
      }
      if (ranking.length >= 5) {
        document.querySelector(".ranking5").innerHTML = ranking[4].user;
        document.querySelector(".score5").innerHTML = ranking[4].score;
      }
    } else {
      document.querySelector("." + questions[n].letter).style.backgroundColor =
        "red";
      incorrect++;
      incorrectCounter.innerText = incorrect;
      playSection.style.display = "none";
      document.querySelector(".time").style.display = "none";
      userObject = {
        user: user.value,
        score: correct - incorrect,
      };
      ranking.push(userObject); //Registro ranking
      ranking.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
      document.querySelector(".contadores").style.display = "inline";
      replayButton.style.display = "inline";
      document.querySelector(".title-ranking").style.display = "inline";
      document.querySelector(".ranking1").innerHTML = ranking[0].user;
      document.querySelector(".score1").innerHTML = ranking[0].score;
      document.querySelector(".ranking").style.display = "grid";
      document.querySelector(".ranking1").style.display = "inline";
      if (ranking.length >= 2) {
        document.querySelector(".ranking2").innerHTML = ranking[1].user;
        document.querySelector(".score2").innerHTML = ranking[1].score;
      }
      if (ranking.length >= 3) {
        document.querySelector(".ranking3").innerHTML = ranking[2].user;
        document.querySelector(".score3").innerHTML = ranking[2].score;
      }
      if (ranking.length >= 4) {
        document.querySelector(".ranking4").innerHTML = ranking[3].user;
        document.querySelector(".score4").innerHTML = ranking[3].score;
      }
      if (ranking.length >= 5) {
        document.querySelector(".ranking5").innerHTML = ranking[4].user;
        document.querySelector(".score5").innerHTML = ranking[4].score;
      }
    }
  }
});

pasapalabraButton.addEventListener("click", (e) => {
  questions.push(questions.splice(n, 1)[0]);
  question.innerText = questions[n].question;
});

replayButton.addEventListener("click", (e) => {
  playSection.style.display = "block";
  clearInterval(interval);
  n = 0;
  correct = 0;
  incorrect = 0;
  time = 120;
  countdownEl.innerHTML = 120 + " segundos";
  correctCounter.innerText = correct;
  incorrectCounter.innerText = incorrect;
  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].style.backgroundColor = "#7F167F";
  }
  questions.sort((a, b) => a.letter.localeCompare(b.letter));
  question.innerText = questions[n].question;
  document.querySelector(".login").style.display = "block";
  user.style.display = "inline";
  playButton.style.display = "inline";
  replayButton.style.display = "none";
  playSection.style.display = "none";
  document.querySelector(".contadores").style.display = "none";
  question.innerHTML = "Ingresa tu usuario";
  document.querySelector(".time").style.display = "block";
  document.querySelector(".ranking").style.display = "none";
  document.querySelector(".title-ranking").style.display = "none";
});

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];
