const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,// wprowadzenie ze standardowego strumienia
    output: process.stdout,// wyprowadzenie do standardowego strumienia
});

rl.question('Jak się nazywasz? ', answer => {
    console.log(`Miło cię poznać. ${answer}`);
});
// rl.pause();
// 

