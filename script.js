
let htmlQuestions = [
    {
        'question': "Wer hat HTML erfunden ?",
        'answer_1': "Justin Biber",
        'answer_2': "Tim Berners-Lee",
        'answer_3': "Dennis Ritchie",
        'answer_4': "Brendan Eich",
        'right_answer': 2
    },
    {
        'question': "Welche Dateierweiterung wird häufig für HTML-Dokumente verwendet?",
        'answer_1': ".exe",
        'answer_2': ".html",
        'answer_3': ".pdf",
        'answer_4': ".dmg",
        'right_answer': 2
    },
    {
        'question': "Welches Attribut wird verwendet, um einen Link in HTML festzulegen?",
        'answer_1': "src",
        'answer_2': "class",
        'answer_3': "alt",
        'answer_4': "href",
        'right_answer': 4
    },
    {
        'question': "Welche HTML5-Technologie ermöglicht die Speicherung von Daten im Webbrowser des Benutzers?",
        'answer_1': "LocalStorage",
        'answer_2': "SessionStorage",
        'answer_3': "WebSQL",
        'answer_4': "IndexedDB",
        'right_answer': 1
    },
    {
        'question': "Welche HTML-Tags werden verwendet, um eine Liste mit Aufzählungspunkten zu erstellen?",
        'answer_1': "&lt;ol&gt; und &lt;li&gt;",
        'answer_2': "&lt;p&gt; und &lt;br&gt;",
        'answer_3': "&lt;ul&gt; und &lt;li&gt;",
        'answer_4': "&lt;h1&gt; und &lt;h2&gt;",
        'right_answer': 3
    }
]
let cssQuestions = [
    {
        'question': "Welche Bedeutung hat die Abkürzung CSS?",
        'answer_1': "Cascading Style Sheets",
        'answer_2': "Creative Style Solutions",
        'answer_3': "Computerized Styling System",
        'answer_4': "Central Styling Software",
        'right_answer': 1
    },
    {
        'question': "Wofür wird CSS hauptsächlich verwendet?",
        'answer_1': "Zur Gestaltung von Websites",
        'answer_2': "Zur Datenbankprogrammierung",
        'answer_3': "Zum Schreiben von Serverseitigen Skripten",
        'answer_4': "zur erstellung von 3D-Modellen",
        'right_answer': 1
    },
    {
        'question': "Wie werden CSS-Stile in HTML-Dokumente eingebunden?",
        'answer_1': "Durch die Verwendung von &lt;script&gt; Tags",
        'answer_2': "Durch die Verwednung von &lt;style&gt; Tags",
        'answer_3': "Durch die Verwendung von &lt;link&gt; Tags",
        'answer_4': "Durch die Verwendung von &lt;css&gt; Tags",
        'right_answer': 3
    },
    {
        'question': "Welche Einheit wird in CSS verwendet, um die Schriftgröße festzulegen?",
        'answer_1': "px (Pixel)",
        'answer_2': "em (Relative Einheit)",
        'answer_3': "% ",
        'answer_4': "pt (Punkt)",
        'right_answer': 1
    },
    {
        'question': "Wie können CSS-Regeln für bestimmte HTML-Elemente spezifiziert werden?",
        'answer_1': "Durch die Verwendung von ID-Selektoren",
        'answer_2': "Durch die Verwendung von Class-Selektoren",
        'answer_3': "Durch die Verwendung von tag-Selektoren",
        'answer_4': "Alle oben genannten Möglichkeiten",
        'right_answer': 4
    }
]
let jsQuestions = [
    {
        'question': "Welche Art von Sprache ist JavaScript?",
        'answer_1': "Markup-Sprache",
        'answer_2': "Programmiersprache",
        'answer_3': "Datenbanksprache",
        'answer_4': "Skriptsprache",
        'right_answer': 4
    },
    {
        'question': "Wie wird eine Variable in JavaScript deklariert?",
        'answer_1': "var myVar",
        'answer_2': "let myVar",
        'answer_3': "const myVar",
        'answer_4': "Alle oben genannten Möglichkeiten",
        'right_answer': 4
    },
    {
        'question': "Welche Funktion wird verwendet, um eine Meldung im Browser anzuzeigen?",
        'answer_1': "console.log()",
        'answer_2': "alert()",
        'answer_3': "log()",
        'answer_4': "print()",
        'right_answer': 2
    },
    {
        'question': "Wie wird eine for-Schleife in JavaScript geschrieben?",
        'answer_1': "for (i = 0; i < 5; i++)",
        'answer_2': "for (var i = 0; i < 5; i++)",
        'answer_3': "for (let i = 0; i < 5; i++)",
        'answer_4': "Alle oben genannten Möglichkeiten",
        'right_answer': 4
    },
    {
        'question': "Wie können Ereignisse in JavaScript behandelt werden?",
        'answer_1': "Durch die Verwendung von Event-Handlern",
        'answer_2': "Durch die Verwendung von Funktionen",
        'answer_3': "Durch die Verwendung von Callback-Funktionen",
        'answer_4': "Alle oben genannten Möglichkeiten",
        'right_answer': 4
    }
]
let javaQuestions = [
    {
        'question': "Welche Aussage trifft auf die Programmiersprache Java zu?",
        'answer_1': "Java ist eine interpretierte Sprache",
        'answer_2': "Java wurde von Microsoft entwickelt",
        'answer_3': "Java wird hauptsächlich für Webdesign verwendet",
        'answer_4': "Java ist eine objektorientierte Sprache",
        'right_answer': 4
    },
    {
        'question': "Wie werden Variablen in Java deklariert?",
        'answer_1': "var myVar;",
        'answer_2': "let myVar;",
        'answer_3': "const myVar;",
        'answer_4': "int myVar;",
        'right_answer': 4
    },
    {
        'question': "Welche Methode wird verwendet, um Text auf der Konsole auszugeben?",
        'answer_1': "console.log()",
        'answer_2': "print()",
        'answer_3': "System.out.println()",
        'answer_4': "write()",
        'right_answer': 3
    },
    {
        'question': "Welche Schleife wird verwendet, um eine Aktion wiederholt auszuführen, solange eine Bedingung erfüllt ist?",
        'answer_1': "for-Schleife",
        'answer_2': "while-Schleife",
        'answer_3': "do-while-Schleife",
        'answer_4': "repeat-Schleife",
        'right_answer': 2
    },
    {
        'question': "Welche Aussage trifft auf die Verwendung von Klassen in Java zu?",
        'answer_1': "Klassen werden verwendet, um Objekte zu instanziieren",
        'answer_2': "Klassen dienen zur Definition von Methoden und Attributen",
        'answer_3': "Klassen können vererbt werden",
        'answer_4': "Alle oben genannten Aussagen sind korrekt",
        'right_answer': 4
    }
]
let nameQuestionSet;
let questionSet;
let currentQuestion = 0;
let correctAnsweredQuestions = 0;

let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_FAIL = new Audio('sounds/wrong.mp3');

function setQuizz(chosenSet, set, nameOfSet) {
    document.getElementById('welcomeToQuizzSection').style = '';
    document.getElementById('endScreen').parentNode.style = 'display: none';
    questionSet = chosenSet;
    nameQuestionSet = nameOfSet;
    let playNowBtn = document.getElementById('playNowBtn');
    setActviOrInactiv(set);
    playNowBtn.style = '';
    playNowBtn.innerHTML = /*html*/`
    <div onclick="startQuizz()" class=" btn btn-secondary btn-align-center">START NOW <span class="material-symbols-outlined">chevron_right</span></div>
    `
}

function setAllToInactive() {
    document.getElementById('htm').classList.remove('active-set');
    document.getElementById('htm').classList.add('inactive-set');
    document.getElementById('cs').classList.remove('active-set');
    document.getElementById('cs').classList.add('inactive-set');
    document.getElementById('js').classList.remove('active-set');
    document.getElementById('js').classList.add('inactive-set');
    document.getElementById('java').classList.add('inactive-set');
    document.getElementById('java').classList.remove('active-set');
}

function setActviOrInactiv(set) {
    setAllToInactive();
    let activeOrInactive = document.getElementById(`${set}`);
    activeOrInactive.classList.remove('inactive-set');
    activeOrInactive.classList.add('active-set');
}

function startQuizz() {
    document.getElementById('welcomeToQuizzSection').style = 'display: none;';
    document.getElementById('endScreen').parentNode.style = '';
    clearAll();
    restartGame();
    let totalQuestions = document.getElementById('totalQuestions');
    totalQuestions.innerHTML = questionSet.length;
    fillProgressBar();
}

function init() {
    showQuestion();
    showCurrentQuestionFoot();

}

function showCurrentQuestionFoot() {
    let displayedQuestion = document.getElementById('currentQuestion');
    displayedQuestion.innerHTML = currentQuestion + 1;
}

function showQuestion() {

    if (currentQuestion >= questionSet.length) {
        showEndScreen();
    } else {
        let question = questionSet[currentQuestion]['question'];
        let questionTitle = document.getElementById('questionTitle');
        questionTitle.innerHTML = question;
        showAnswers();
    }
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('quizBody').style = 'display: none;';
    document.getElementById('quizzDoneHeadline').innerHTML = /*html*/`${nameQuestionSet} QUIZ <br> COMPLETE`;
    document.getElementById('correctAnswered').innerHTML = correctAnsweredQuestions;
    document.getElementById('allQuestions').innerHTML = questionSet.length;
}

function showAnswers() {
    for (let i = 1; i < 5; i++) {
        let answerText = document.getElementById(`answer_${i}`);
        let answer = questionSet[currentQuestion][`answer_${i}`];
        answerText.innerHTML = ``;
        answerText.innerHTML += /*html*/`
        <div class="answer-row">
        <p class="width30">${i}.</p> <p class="width70">${answer}</p>
        </div>`;
    }
}

function answer(selection) {
    let userAnswer = Number(selection.slice(-1));
    let rightAnswer = questionSet[currentQuestion]['right_answer'];
    if (userAnswer === rightAnswer) {
        correctAnsweredQuestions++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    fillProgressBar();
    clearAll();
    init();
    showQuestion();
}

function fillProgressBar() {
    let percentageFromBar = Math.round((currentQuestion + 1) / questionSet.length * 100);
    document.getElementById('userBar').style.width = percentageFromBar + "%";
    document.getElementById('userBar').innerHTML = `${percentageFromBar}%`;
}

function clearAll() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    }
    document.getElementById('next-button').disabled = true;
}

function restartGame() {
    correctAnsweredQuestions = 0;
    currentQuestion = 0;
    resetProgressBar();
    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('quizBody').style = '';
    showQuestion();
    showCurrentQuestionFoot();
}

function resetProgressBar(){
    document.getElementById('userBar').style.width = 0.1 + "%";
    document.getElementById('userBar').innerHTML = '';
}