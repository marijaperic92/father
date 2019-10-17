const questions = [
    "Da li si svojoj deci bitna osoba u zivotu?",
    "Da li si zadovoljan u kakve su se ljude odrasli?",
    "Da li bih ih rado menjao za neku drugu decu?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]} > `);
};

ask();

const waitTime = 3000;
const waitInterval = 1000;
let currentTime = 0;
const answers = [];
var handle;

process.stdin.on('data', data => {
    answers.push(data.toString().trim())

    if(answers.length < questions.length){
        ask(answers.length);
    } else {
        setTimeout( timerFinished, waitTime);
        handle = setInterval(incTime, waitInterval);
    }
});

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime * 100))
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(` waiting....${p}%`)
    console.log(`  waiting ${currentTime /1000} seconds`);
}


const timerFinished = () => {
    process.exit();
    
}

process.on('exit', () => {
    clearInterval(handle)
    const [importance, satisfaction, change] = answers;
    console.log(`\n\n\n    
    Ti si srecan covek jer ti je odgovor na pitanje da li si im bitan ${importance}, da li si zadovoljan njima ${satisfaction}, i da li bih ih menjao ${change}.\n    
    Vole te tvoja deca!\u200D\u2764\uFE0F\u200D\ \n\n
    `)
})