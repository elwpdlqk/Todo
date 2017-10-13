var listPrintFunction = function () {
    var item0 = {
        index : '1',
        title: 'Inventing the Future',
        source: 'oculus.com',
        points: '20',
        writer: 'kong' ,
        time: '1 hours',
        comments: [
            {
                id: 1,
                name: '쓴사람',
                body: '댓글 내용'
            }
        ]
    }
    var item1 = {
        index : '2',
        title: 'Containers and Distributed Systems: ',
        source: 'mesosphere.com',
        points: '91',
        writer: 'hald' ,
        time: '4 hours',
        comments: '6'
    }
    var item2 = {
        index : '3',
        title: 'Please take care of my plant',
        source: 'pleasetakecareofmyplant.com',
        points: '496',
        writer: 'goog' ,
        time: '11 hours',
        comments: '110'
    }
    var item3 = {
        index : '4',
        title: 'A Little Story About the `yes`Unix Command',
        source: 'matthias - endler.de',
        points: '296',
        writer: 'kools' ,
        time: '10 hours',
        comments: '124'
    }
    var item4 = {
        index : '5',
        title: 'Equifax website hacked again, this time to redirect to fake Flash update',
        source: 'arstechnica.com',
        points: '111',
        writer: 'hiood' ,
        time: '2 hours',
        comments: '26'
    }


    var list = [item0, item1, item2, item3, item4]
    return list
}


// [x] 데이터 가져오기
// 화면 그릴 HTML 만들기 (데이터를 기준으로)
var createListHTML = function (item) {
    // 전달받은 아이템으로 HTML 만들기

    var template =
        '<div class="list">'
        + '<span class="list__number">'
        + item.index
        + '.</span>' 
        + '<span class="list__title">' 
        + '<a href="#">' 
        + item.title 
        + '</a>' 
        + '</span>' 
        + '<span class="list__source">' 
        + '<a href="#"> (' 
        + item.source 
        + ')</a>' 
        + '</span>' 
        + '<br>' 
        + '<span class="list__points">' 
        + item.points 
        + ' points ' 
        + '</span>' 
        + '<span class="list__writer">' 
        + 'by '
        + item.writer 
        + '</span>' 
        + '<span class="list__time"> ' 
        + item.time 
        + ' ago' 
        + '</span>' 
        + '<span class="list__text">' 
        + '| hide |' 
        + '</span>' 
        + '<span class="list__comments">'
        + '<a href="#open"> ' 
        + item.comments 
        + ' comments </a>' 
        + '</span>' 
        + '</div>'

    return template
}

// .lists에 위에서 만들 HTML 추가
var drawList = function () {
    // 데이터를 가져오기
    var data = listPrintFunction()
    var lists = []

    // 데이터로 createListHTML 실행 (반복문)
    for (var i = 0; i < data.length; i++) {
        lists.push(createListHTML(data[i]))
    }
    var result = lists.join('');

    // 리스트 배열을 합치기
    // .lists에 innerHTML로 넣어주기
    document.getElementById('box').innerHTML = result // lists 배열 합친거
}


drawList();
