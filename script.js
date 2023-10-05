// @ts-nocheck

const data = null;

const xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        createTable(JSON.parse(this.responseText));
	}
});

xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');

xhr.send(data);

function createTable(data) {
    console.log(data.idDrink);
    let tbody = document.getElementById("tbody");
    for(let index in data){
        tbody.innerHTML += `<tr><td>${index.idDrink}</td><td>${index.strDrink}</td><td><img style='display:block;width:10vw;' src="${data[index].images[0].original}"></td><td>${data[index].publication}</td><td>${data[index].caution}</td></tr>`;
    }
}