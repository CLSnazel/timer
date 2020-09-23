//while continuously awaiting input,
//pressing b will cause the alarm to beep right away
//any number from 1 to 9 will set a timer for that many seconds, printing message
//on ctrl+c to exit, print a thank you message

// const beepTimes = process.argv.slice(2,process.argv.length).map(time => Number(time));
// for(let time of beepTimes){
//   if(time > 0 && !Number.isNaN(time)){
//     setTimeout(() => {
//       process.stdout.write('\x07');
//       console.log(`Timer after ${time} seconds complete!`);
//     }, time * 1000);
//   }
// };

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

const beep = () => {
  process.stdout.write('\x07');
};

const beepTimer = function(seconds) {
  if (seconds >= 1 && seconds <= 9 && !Number.isNaN(seconds)) {
    console.log(`Setting timer for ${seconds} seconds...`);
    setTimeout(() => {
      beep();
      console.log(`Timer for ${seconds} seconds is done!`);
    }, seconds * 1000);
  }
};
const quitProgram = function() {
  console.log("Thank you for using this timer!");
  process.exit();
};
process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    quitProgram();
  } else if (key.toString() === 'b') {
    process.stdout.write('\r');
    beep();
  } else {
    process.stdout.write('\r');
    beepTimer(key.toString());
  }
  //callback
});