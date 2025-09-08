let target = document.querySelector("#dynamic");

//랜덤 문자열 출력 (return을 통해 반환)
function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS",
        "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

//타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

//한 글자씩 텍스트 출력 함수
function dynamic(randomArr) {

    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
            dynamic(randomArr);
        }, 80); // 0.08초의 간격으로 dynamic 함수 호출
    }
    else {
        setTimeout(resetTyping, 3000); //모든 문자를 shift(한 칸씩 밀어서 출력) 완료시 리셋 후 재출력
    }
}

dynamic(randomString());

//커서 깜박임 효과
function blink() {
    target.classList.toggle("active"); //active가 들어간 거에 toggle 효과 추가
}
setInterval(blink, 500);