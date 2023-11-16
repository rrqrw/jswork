// Date 객체 (날짜와 시간)

const NOW = new Date();

document.write('현재 년도: ' + NOW.getFullYear() + '<br>');
document.write('현재 월 : ' + (NOW.getMonth()+1) + '<br>');
document.write('현재 일 : ' + NOW.getDay() + '<br>');

document.write('현재 시 : ' + NOW.getHours() + '<br>');
document.write('현재 분 : ' + NOW.getMinutes() + '<br>');
document.write('현재 초 : ' + NOW.getSeconds() + '<br>');

// 현재까지의 시간 측정(1970.1.1. 자정부터 밀리초로 변환)
document.write("현재 까지의 시간: " + 
              NOW.getTime()/1000+'<br>');
document.write("날(일)로 환산: " + 
          Math.floor(NOW.getTime()/(24*60*60*1000),0)+'<br>');
