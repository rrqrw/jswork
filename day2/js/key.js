// key.js

while(true){
  let key = prompt('계속 반복할까요?', 'y/n');
  if(key == 'y' || 'Y'){
  alert("계속 반복합니다.")
  }else if(key == 'n' || 'N'){
    alert("반복을 중단합니다.")
    break;
  }else{
    alert("지원하지 않는 키입니다.")
  }
}
document.write('프로그램 종료!!')