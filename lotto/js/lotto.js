
//번호를 담을 배열을 생성한다.
var array = [];

//45개의 번호를 array 배열에 넣는다.
    for (var i = 1; i < 46; i++) {
        array.push(i);
    }

//출력할 6개의 숫자를 담을 배열을 만든다.
    var myNum = [];

//랜덤하게 6개의 숫자를 뽑는다.
    for (var j = 1; j <= 100; j++) { //j의 범위는 6을 넘어가게.
        var randomNum = Math.floor(Math.random() * array.length) + 1
        
        //중복되는 경우를 제거한다.
        if (myNum.indexOf(randomNum) === -1) {
            myNum.push(randomNum);
        }
        
        //중복되는 경우에 6개의 숫자가 출력되지 않는 경우가 있으므로
        //범위를 크게 지정 6개가 산출되면 동작을 멈추게 한다.
        
        if (myNum.length === 6) {
            break
        }
    }
//출력된 숫자를 오름차순으로 정렬한다.
    myNum.sort(function (a,b) {
        return a - b;
    });

//버튼 클릭시 동작시킬 함수.
function outText() {
    alert(myNum);
}