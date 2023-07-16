
let questions = [
    {
        'question': "Wer hat HTML erfunden ?",
        'answer_1': "1.) Justin Biber",
        'answer_2': "2.) Tim Berners-Lee",
        'answer_3': "3.) Dennis Ritchie",
        'answer_4': "4.) Brendan Eich",
        'right_answer': 2
    },
    {
        'question': "Welche Dateierweiterung wird häufig für HTML-Dokumente verwendet?",
        'answer_1': "1.) .exe",
        'answer_2': "2.) .html",
        'answer_3': "3.) .pdf",
        'answer_4': "4.) .dmg",
        'right_answer': 2
    },
    {
        'question': "Welches Attribut wird verwendet, um einen Link in HTML festzulegen?",
        'answer_1': "1.) src",
        'answer_2': "2.) class",
        'answer_3': "3.) alt",
        'answer_4': "4.) href",
        'right_answer': 4
    },
    {
        'question': "Welche HTML5-Technologie ermöglicht die Speicherung von Daten im Webbrowser des Benutzers?",
        'answer_1': "1.) LocalStorage",
        'answer_2': "2.) SessionStorage",
        'answer_3': "3.) WebSQL",
        'answer_4': "4.) IndexedDB",
        'right_answer': 1
    },
    {
        'question': "Welche HTML-Tags werden verwendet, um eine Liste mit Aufzählungspunkten zu erstellen?",
        'answer_1': "1.) &lt;ol&gt; und &lt;li&gt;",
        'answer_2': "2.) &lt;p&gt; und &lt;br&gt;",
        'answer_3': "3.) &lt;ul&gt; und &lt;li&gt;",
        'answer_4': "4.) &lt;h1&gt; und &lt;h2&gt;",
        'right_answer': 3
    }
]

let currentQuestion = 0;

function init() {
    let totalQuestions = document.getElementById('totalQuestions');
    totalQuestions.innerHTML = questions.length;
    showCurrentQuestionFoot();
    showQuestion();

}

function showCurrentQuestionFoot() {
    let displayedQuestion = document.getElementById('currentQuestion');
    displayedQuestion.innerHTML = currentQuestion + 1;
}

function showQuestion() {
    let question = questions[currentQuestion]['question'];
    let questionTitle = document.getElementById('questionTitle');
    if (currentQuestion >= questions.length) {
        //TODO ENDSCREEn
    } else {
        questionTitle.innerHTML = question;
        showAnswers();
    }
}

function showAnswers() {
    for (let i = 1; i < 5; i++) {
        let answerText = document.getElementById(`answer_${i}`);
        let answer = questions[currentQuestion][`answer_${i}`];
        answerText.innerHTML = ``;
        answerText.innerHTML += answer;
    }
}

function answer(selection) {
    let userAnswer = Number(selection.slice(-1));
    let rightAnswer = questions[currentQuestion]['right_answer'];
    if (userAnswer === rightAnswer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    clearAll();
    init();
    showQuestion();
}

function clearAll() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    }
}