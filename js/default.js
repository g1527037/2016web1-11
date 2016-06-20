
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム　０～３の数字を入力してください'));

var message;
if(answer === number) {
  message = 'あたり';
}else if(answer < number){
  message = 'もっと大きい';
}else if(number < answer){
  message = 'もっと小さい';
}else{
  message = '0~3を入力';
}

document.getElementById('choice').textContent = message;
