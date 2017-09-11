// 함수 - 기능단위 묶음
// 객체 - 할일 아이템 한개에 대한 내용(속성)
// 배열 - 할일 아이템들을 담는 묶음


// 기본 데이터
var items = []

items = [
    {
        body: '첫번째',
        complete: false
    }
]
items.push({
    body: '밥먹기',
    complete: false
})

items.push({
    body: '자바스크립트 공부하기',
    complete: false
})

items.push({
    body: '우유 사가기',
    complete: false
})

// TODO Item
// body: String - 사용자가 입력한 값, 빈칸은 허용 안함
// complete: Boolean - 기본값 `false`

// 함수
var getItems = function () {
    console.log('getItems : ')
    return items
}
// items의 인덱스를 매개변수로 받아 가져온다
var getItem = function (index) {
    console.log('getItem')
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
//    getItem(index) = item
//    getItem(index).body = item;
//    if (item === String()) {
//        getItem(index).complete = true
//    }
    items[index] = item
//    items[index].body = item.body
//    items[index].complete = item.complete
}

// items를 화면에 출력한다
var drawItems = function () {
    console.log('drawItems')
}
