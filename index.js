
document.getElementById('roll-d4').addEventListener("click", ()=> {
  var getNumber = Math.floor((Math.random() * 4))+1;
  document.getElementById('roll-results').innerHTML=getNumber;
});
document.getElementById('roll-d6').addEventListener("click", ()=> {
  var getNumber = Math.floor((Math.random() * 6))+1;
  document.getElementById('roll-results').innerHTML=getNumber;
});
document.getElementById('roll-d8').addEventListener("click", ()=> {
  var getNumber = Math.floor((Math.random() * 8))+1;
  document.getElementById('roll-results').innerHTML=getNumber;
});
document.getElementById('roll-d10').addEventListener("click", ()=> {
  var getNumber = Math.floor((Math.random() * 10))+1;
  document.getElementById('roll-results').innerHTML=getNumber;
});
document.getElementById('roll-d12').addEventListener("click", ()=> {
  var getNumber = Math.floor((Math.random() * 12))+1;
  document.getElementById('roll-results').innerHTML=getNumber;
});
document.getElementById('roll-d20').addEventListener("click", ()=> {
  var getNumber = Math.floor((Math.random() * 20))+1;
  document.getElementById('roll-results').innerHTML=getNumber;
});

