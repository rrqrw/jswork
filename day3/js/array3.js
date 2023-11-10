// 1~10 자연수를 배열의 저장
// 10개의 길이를 가진 배열 생성
let number = new Array(10);
console.log(number.length);

// 저장

for(let i =0; i<number.length; i++){
  number[i] = i+1;
}

// 출력 
for(let i=0; i < number.length; i++){
  document.write(number[i]);
}
// for(let n in number){
//   document.write(number[n]);
// }

// 알파벳 대문자를 저장 -26개 
// 문자셋 - 아스키코드(128개) 'A' :65
// 코드값으로 저장 출력 - 아스키코드
//charCodeAt(0)- 문자를 코드값으로 
//  String.fromCharCode-코드값을 문자로 출력
let alphabet = new Array(26);
let ch= 'A';
ch=ch.charCodeAt(0);
for(let i=0; i<alphabet.length; i++){
  alphabet[i]=  ch;
  ch++;
  // console.log(alphabet[i]);
}
for(let i=0; i<alphabet.length; i++){
  console.log(alphabet[i]+ ', '+
    String.fromCharCode(alphabet[i]));
}
