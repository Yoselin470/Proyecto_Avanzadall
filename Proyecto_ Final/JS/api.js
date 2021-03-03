
function nuevo() {

const url = 'https://api.chucknorris.io/jokes/random';

fetch(url)

    .then(Response => Response.json())
    .then(data => {
        let elemento = document.getElementById('contenedor');
        
        elemento.innerHTML = `<p>${data.value}</p>`;
        console.log(data);

        let arraylista = new Array();
        arraylista.push(data.value);
        showMostrar(arraylista);

    })
    .catch(err => console.log(err))
}

function showMostrar(arraylista) {
    let show = document.getElementById('MostrarDatos');
  arraylista.forEach(function (arraylista) {
      show.innerHTML += '<div>' + arraylista + '</div>' + '<br/>';
  });

}