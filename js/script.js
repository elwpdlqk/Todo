// 함수 - 기능단위 묶음
// 객체 - 할일 아이템 한개에 대한 내용(속성)
// 배열 - 할일 아이템들을 담는 묶음

// 기본 데이터
var items = []

items = [
    {
        body: '첫번째',
        complete: false,
        toggleComplete: function () {
            this.complete = !this.complete
        }
    }
]
items.push({
    body: '밥먹기',
    complete: false,
    toggleComplete: function () {
        this.complete = !this.complete
    }

})

items.push({
    body: '자바스크립트 공부하기',
    complete: false,
    toggleComplete: function () {
        this.complete = !this.complete
    }

})

items.push({
    body: '우유 사가기',
    complete: false,
    toggleComplete: function () {
        this.complete = !this.complete
    }
})

// TODO Item
// body: String - 사용자가 입력한 값, 빈칸은 허용 안함
// complete: Boolean - 기본값 `false`

// 함수
var getItems = function () {
    return items
}
// items의 인덱스를 매개변수로 받아 가져온다
var getItem = function (index) {
    // 숫자인지
    // 인덱스가 배열 크기보다 작아야 함
    if (items.length < index) {
        throw new Error('다음 인덱스에 값이 없습니다. ', index)
    } else if (0 > index) {
        throw new Error('다음 인덱스에 값이 없습니다. ', index)
    }
    return getItems()[index];
}

// items에 새 아이템을 추가한다.
// 사용 예 1 : addItem({ body: '할일', complete: false })
// 사용 예 2 : addItem('할일') - O
var addItem = function (newItem) {
    console.log('addItem')

    var item = {
        body: newItem,
        complete: false
    }

    items.push(item);
}

// 특정 인덱스의 아이템을 삭제한다.
// index: 삭제할 아이템의 인덱스
var deleteItem = function (index) {
    console.log('deleteItem')
    items.splice(index, 1)
}

// 특정 인덱스의 아이템을 수정한다.
// index : 수정할 인덱스
// updateItem : 수정 내용, index에 있는 객체를 item(Todo Item) 객체로 변경
// updateItem(0, { body: '헬로', complte: true })
var updateItem = function (index, item) {
    console.log('updateItem')
    // 매개변수 index가 값이 있을 때만 업데이트, 아니면 return
    if (getItem(index) === undefined) {
        console.error('없는 인덱스')
        return
    }
    items[index].body = item
    //    items[index].body = item.body
    //    items[index].complete = item.complete
}


// items를 화면에 출력한다
var drawItems = function () {
    for (key in items) {
        console.log(items[key])
    }
}

var chk = function (index) {
    items[index].toggleComplete()
}

var test = function () {
    // 입력된 일정 목록을 출력한다.
    // 선택한 일정 목록의 존재 여부를 확인한다.
    // 선택된 목록 수정 기능을 출력한다.
    // 선택된 일정 목록 삭제 기능을 출력한다.    
    // 기존 일정 진행 여부 체크기능을 출력한다.
    // 새롭게 입력 가능한 일정 목록 창을 출력한다.
    drawItems();
    console.log(getItem(1));
    console.log(updateItem(1, "딸기사오기"));
    console.log(getItem(1));
    console.log(deleteItem(2));
    console.log(chk(1));
    console.log(addItem('강아지 산책시키기'));
    drawItems();
}

test()
