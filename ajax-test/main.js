baseUrl = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseUrl + type + '/');

    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
};

function writeToDocument (type) {
    getData (type, function(data){
        let el =  document.getElementById('data');
        el.innerHTML = '';
        data = data.results;
        data.forEach(function(item) {
            el.innerHTML += '<p>' + item.name + '</p>';
        })
    })
};