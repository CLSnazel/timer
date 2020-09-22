//implement an alarm clock / timer that will beep after a specified amount of time has passed
//given number args from cmd line, make a timer that beeps after each amount in seconds

//beep sound: process.stdout.write('\x07');

//no args: no beeps and end
//negative: ignore / skip
//NaN: ignore/skip

const beepTimes = process.argv.slice(2,process.argv.length).map(time => Number(time));
for(let time of beepTimes){
  if(time > 0 && !Number.isNaN(time)){
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Timer after ${time} seconds complete!`);
    }, time * 1000);
  }
};
