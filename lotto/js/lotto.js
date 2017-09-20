
//번호를 담을 배열을 생성한다.
//출력할 6개의 숫자를 담을 배열을 만든다.


//랜덤하게 6개의 숫자를 뽑는다.
var createRandomNumbers = function (minNum, maxNum,count) {
    //최대값이 최소값보다 작거나 같을경우
    //출력하고자 하는 개수가 0이거나 음수일 경우
    //입력되는 값이 숫자가 아닌 경우
    //매개변수를 더 많거나 적게 쓸 경우
    if (arguments.length !== 3) {
        console.error('매개변수 갯수가 3개가 아님.')
        return
    }
    for (key in arguments) {
        if (typeof arguments[key] !== 'number') {
            console.error('매개변수중 숫자가 아닌것이 있습니다.')
            return
        } 
    }
    
    var myNum = [];
    while (myNum.length < count) { //j의 범위는 6을 넘어가게.
        var RandomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum) + 1
        //중복되는 경우를 제거한다.
        if (myNum.indexOf(RandomNumber) === -1) {
            myNum.push(RandomNumber);        
        } 
        //중복되는 경우에 6개의 숫자가 출력되지 않는 경우가 있으므로
        //범위를 크게 지정 6개가 산출되면 동작을 멈추게 한다.
    }
    
    printNumbers(myNum)
}

var printNumbers = function (numbers) {
    // #result 에 li 태그로 결과 추가
}
//출력된 숫자를 오름차순으로 정렬한다.
/*myNum.sort(function (a,b) {
    return a - b;
});*/

//버튼 클릭시 동작시킬 함수.




//  1 - 46 까지의 숫자를 담고 있는 배열
// 배열 1개, for문, 랜덤
// shuffle
//   - swap

// shuffle : min - max 까지 갯수의 배열을 만들고 순서를 섞는다
var shuffle = function (min, max) {
//    var data = [0, 1]
//    var num = data[0]    
//    data[0] = data[1]
//    data[1] = num
    var arr = []
    for (var i = 0; i < max - min + 1; i++) {
        arr.push(min + i)
    }
    console.log(arr)
    
//    var shuffledArr = []
//    return arr 또는 shuffledArr
}

var arr = shuffle(1,46)
