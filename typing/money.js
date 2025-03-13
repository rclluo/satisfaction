var money=parseInt(localStorage.getItem('money'));
if (money==undefined) {
  money=0;
}
setInterval(() => {
  localStorage.setItem('money',money)
}, 10000);
function changeMoney(a) {
  money+=a;
  moneyDisplay.innerHTML=money;
}
