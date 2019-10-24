let urlParams = new URLSearchParams(window.location.search);

let name = urlParams.get('FirstName');
document.getElementById("firstName").innerHTML = "<strong>¡Hola " + name + "!</strong>";

