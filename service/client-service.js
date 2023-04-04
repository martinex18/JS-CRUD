const http = new XMLHttpRequest();

//Abrir HTTP  puede recibir (metodo, url)
/* CRUD = Metodos http
Create = POST
Read = GET
Update = PUT/PATCH
Delete = DELETE
*/
http.open("GET", "http://localhost:3000/perfil");
http.send();
http.onload = () => {
    const data = http.response;
    console.log(data);
}