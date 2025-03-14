function levenshtein(s, t) {
  if (s === t) {
    return 0;
  }
  var n = s.length, m = t.length;
  if (n === 0 || m === 0) {
    return n + m;
  }
  var x = 0, y, a, b, c, d, g, h, k;
  var p = new Array(n);
  for (y = 0; y < n;) {
    p[y] = ++y;
  }
  for (; (x + 3) < m; x += 4) {
    var e1 = t.charCodeAt(x);
    var e2 = t.charCodeAt(x + 1);
    var e3 = t.charCodeAt(x + 2);
    var e4 = t.charCodeAt(x + 3);
    c = x;
    b = x + 1;
    d = x + 2;
    g = x + 3;
    h = x + 4;
    for (y = 0; y < n; y++) {
      k = s.charCodeAt(y);
      a = p[y];
      if (a < c || b < c) {
        c = (a > b ? b + 1 : a + 1);
      }
      else {
        if (e1 !== k) {
          c++;
        }
      }

      if (c < b || d < b) {
        b = (c > d ? d + 1 : c + 1);
      }
      else {
        if (e2 !== k) {
          b++;
        }
      }

      if (b < d || g < d) {
        d = (b > g ? g + 1 : b + 1);
      }
      else {
        if (e3 !== k) {
          d++;
        }
      }

      if (d < g || h < g) {
        g = (d > h ? h + 1 : d + 1);
      }
      else {
        if (e4 !== k) {
          g++;
        }
      }
      p[y] = h = g;
      g = d;
      d = b;
      b = c;
      c = a;
    }
  }

  for (; x < m;) {
    var e = t.charCodeAt(x);
    c = x;
    d = ++x;
    for (y = 0; y < n; y++) {
      a = p[y];
      if (a < c || d < c) {
        d = (a > d ? d + 1 : a + 1);
      }
      else {
        if (e !== s.charCodeAt(y)) {
          d = c + 1;
        }
        else {
          d = c;
        }
      }
      p[y] = d;
      c = a;
    }
    h = d;
  }

  return h;
}
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}
var typingArea=document.getElementById('typing-area');
var sampleArea=document.getElementById('sample-area');
var submitButton=document.getElementById('submit-button');
var getButton=document.getElementById('get-button');
var timer=document.getElementById('timer');
var moneyDisplay=document.getElementById('money');
var resultTime=document.getElementById('results-time');
var resultTimeBonus=document.getElementById('results-bonus');
var resultAcc=document.getElementById('results-acc');
var resultMoney=document.getElementById('results-money');
var timerOn=false;
var startTime=Date.now();
var currTime=0;
setInterval(() => {
  if (timerOn) {
    currTime=(Math.round((Date.now()-startTime)/10)/100).toFixed(2);
    timer.innerHTML=currTime;
  } else {
    startTime=Date.now();
  }
}, 20);
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
