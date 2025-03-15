function end() {
  typingArea.readOnly=true;
  submitButton.disabled=true;
  getButton.disabled=false;
  timerOn=false;
  // 200+      -> +150%
  // 150 - 200 -> +100%
  // 120 - 150 -> +75%
  // 100 - 120 -> +50%
  // 80  - 100 -> +25%
  // 60  - 80  -> +10%
  // 45  - 60  -> +0%
  // 30  - 45  -> -10%
  // 30-       -> -25%
  let longer=Math.max(typingArea.value.length,sampleArea.value.length);
  resultChar.innerHTML=longer;
  let accuracy=(longer-levenshtein(typingArea.value,sampleArea.value))/longer;
  resultAcc.innerHTML=Math.round(accuracy*100);
  let speed=typingArea.value.length*12/currTime
  resultWPM.innerHTML=speed;
  let speedBonus=0;
  if (speed<30) {
    speedBonus=-0.25;
  } else if (speed<45) {
    speedBonus=-0.1;
  } else if (speed<60) {
    speedBonus=0;
  } else if (speed<80) {
    speedBonus=0.1;
  } else if (speed<100) {
    speedBonus=0.25;
  } else if (speed<120) {
    speedBonus=0.5;
  } else if (speed<150) {
    speedBonus=0.75;
  } else if (speed<200) {
    speedBonus=1;
  } else {
    speedBonus=1.5;
  }
  resultBonus.innerHTML=speedBonus*100;
  let moneyEarned=Math.round(100*longer*accuracy*(1+speedBonus))/100;
  resultMoney.innerHTML=moneyEarned;
  changeMoney(moneyEarned);
  resultDisplay.setAttribute('style','height: 150;');
}
function start() {
  typingArea.readOnly=false;    
  typingArea.value='';
  submitButton.disabled=false;
  getButton.disabled=true;
  timerOn=true;
  sampleArea.value=easyTexts.random();
  typingArea.focus();
  resultDisplay.setAttribute('style','height: 0;');
}
