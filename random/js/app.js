//console.log(data)


var cratedHtml = function () {
    var html = ''
    for (var i = 0; i < data.results.length; i++) {
        // 1
        html += cratedTemplate(data.results[i])
    }
    return html
}


var cratedTemplate = function (item) {
    // document.createElement('tr')
    // document.createElement('td')
    var template =
        '<tr>'
        + '<td>'
        + item.first
        + '</td>'
        + '<td>'
        + item.last
        + '</td>'
        + '<td>'
        + item.email
        + '</td>'
        + '<td>'
        + item.address
        + '</td>'
        + '<td>'
        + item.created
        + '</td>'
        + '<td>'
        + item.balance
        + '</td>'
    return template;

}

var print = cratedHtml();
document.querySelector('.content__table__body').innerHTML= print
