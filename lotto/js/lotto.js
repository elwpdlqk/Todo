var inputNumber = [];
document.addEventListener('keyup', function () {
    var input = document.getElementsByTagName('input');
    for (var i = 0; i < 3; i++) {
        inputNumber.splice(i, 1, parseInt(input[i].value));
    }
});

var validateNumbers(min, max, range) {
    // return false
    return {
        isValid: false,
        message: '최소값이 입력 안됨'
    }
    return {
        isValid: true,
        message: 'ㅁㅁㅁㅁ'
    }
}

var createRandomNumbers = function () {
    if (!validateNumbers(inputNumber[0], inputNumber[1], inputNumber[2])) {
        return
    }
    if (isNaN(inputNumber[0])) {
        console.error('최소값을 입력하세요')
        return
    }
    if (isNaN(inputNumber[1])) {
        console.error('최대값을 입력하세요')
        return
    }
    if (isNaN(inputNumber[2])) {
        console.error('범위를 지정하세요')
        return
    }


    //최대값이 최소값보다 작거나 같을경우
    //출력하고자 하는 개수가 0이거나 음수일 경우
    //입력되는 값이 숫자가 아닌 경우
    //매개변수를 더 많거나 적게 쓸 경우
    /*if (inputNumber.indexOf("") !== -1) {
        console.error('매개변수 갯수가 3개가 아님.')
        return
    }
    */
    for (key in inputNumber) {
        if (typeof inputNumber[key] !== 'number') {
            console.error('매개변수중 숫자가 아닌것이 있습니다.')
            return
        }
    }

    if (inputNumber[0] > inputNumber[1]) {
        console.error('최소,최대값 범위를 다시시정하세요')
        return
    }
    if (inputNumber[2] >= inputNumber[1] - inputNumber[0]) {
        console.error('출력값이 범위보다 큽니다. 다시 지정해 주세요')
        return
    }

    var myNum = [];
    while (myNum.length < inputNumber[2]) {
        var RandomNumber = Math.floor(Math.random() * (inputNumber[1] - inputNumber[0]) + inputNumber[0]) + 1
        //중복되는 경우를 제거한다.
        if (myNum.indexOf(RandomNumber) === -1) {
            myNum.push(RandomNumber);
        }
    }

    printNumbers(myNum)
}

var printNumbers = function (numbers) {
    // #result 에 li 태그로 결과 추가
    var lotto = document.getElementById('result');
    var lottoList = document.createElement('li');
    lottoList.appendChild(document.createTextNode(numbers));
    lotto.appendChild(lottoList);
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

    for (var j = arr.length; j; j--) {
        var shuffleNumber = Math.floor(Math.random() * j);
        var shuffleBox = arr[j - 1];
        arr[j - 1] = arr[shuffleNumber];
        arr[shuffleNumber] = shuffleBox;
    }
    console.log(arr);

    //    var shuffledArr = []
    //    return arr 또는 shuffledArr
}

var arr = shuffle(1, 46)
