function end() {
    typingArea.readOnly=true;
    submitButton.disabled=true;
    getButton.disabled=false;
    timerOn=false;
    // 80-s        -> +50%
    // 80s  - 100s -> +25%
    // 100s - 125s -> +10%
    // 125s - 150s -> -10%
    // 200s - 225s -> -25%
    // 225+s       -> -50%
    let longer=Math.max(typingArea.value.length,sampleArea.value.length);
    resultChar.innerHTML=longer;
    let accuracy=(longer-levenshtein(typingArea.value,sampleArea.value))/longer;
    resultAcc.innerHTML=Math.round(accuracy*100);
    resultTime.innerHTML=currTime;
    let timeBonus=0;
    if (currTime<80) {
      timeBonus=0.5;
    } else if (currTime<100) {
      timeBonus=0.25;
    } else if (currTime<125) {
      timeBonus=0.1;
    } else if (currTime<150) {
      timeBonus=-0.1;
    } else if (currTime<225) {
      timeBonus=-0.25;
    } else {
      timeBonus=-0.5;
    }
    resultTimeBonus.innerHTML=timeBonus*100;
    let moneyEarned=Math.round(100*longer*accuracy*(1+timeBonus))/100;
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
    sampleArea.value=texts.random();
    typingArea.focus();
    resultDisplay.setAttribute('style','height: 0;');
}