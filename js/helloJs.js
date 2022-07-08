'use strict';

function hello(){
    alert("hello world!");
}

function useVariable(){
    let admin;
    let name = "Seogwon Kim";
    admin = name;
    alert(admin);
}

function useInfinity() {
    alert(1/0);
}

function backtik(){
    let admin = "Seogwon Kim"
    alert("admin's name is ${admin}");
    alert(`admin's name is ${admin}`);
    alert("1 + 3 + 2 is ${1+3+2}");
    alert(`1 + 3 + 2 is ${1 + 3 + 2}`);
}

function useInputMethod(){
    let userInput = prompt('입력한 대로 화면에 출력됩니다. 입력하지 않을 경우 null이 출력됩니다.', 'hello world');
    alert(`입력하신 내용은 '${userInput}'입니다.`);
    let isAdmin = confirm('당신이 이 페이지 만든 사람인가요?');
    alert(isAdmin);
}

function changeType(){
    alert("8"/"2");
    let value = 1231;
    alert(String(value)+", "+typeof(String(value)));
    alert(Number("   234  ")); //처음과 끝 공백 제거
    alert(Number("1z2s"));
    alert(Number(true));
    alert(Boolean(1));
    alert(Boolean("hi")); //길이가 있는 문자열은 모두 true, 'false'나 '0'역시 true로 반환됨.
}

function testOperation(){
    let x = 123;
    alert(+x);
    alert(-x);
    x = "123";
    let y = "876";
    alert(typeof(+x));
    alert(x + y);
    alert(+x + +y);
    let a, b=1, c;
    a = b + (c = b+1);
    alert(a);
    a = b = c = 1;
    alert(b);
    a = 4;
    alert(b);
}