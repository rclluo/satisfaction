var money=parseInt(localStorage.getItem('money'));
if (isNaN(money)) {
  money=0;
}
moneyDisplay.innerHTML=money;
setInterval(() => {
  localStorage.setItem('money',money)
}, 10000);
function changeMoney(a) {
  money+=a;
  moneyDisplay.innerHTML=money;
}
