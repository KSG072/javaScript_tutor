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