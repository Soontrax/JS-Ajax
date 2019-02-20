window.onload = function () {
    document.getElementById("crear-boton").onclick = function () {
        creationFields();
    }

    document.getElementById("recibir-boton").onclick = function () {
        GET();
    }

    function creationFields() {
        var html =
            '<div class="form-group mt-4">' +
            '<h4>Departamento</h4>' +
            '<select class="form-control" id="Departamento">' +
            '<option value="Administrador">Administrador</option>' +
            '<option value="Informatica">Informatica</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<h4>Puesto</h4>' +
            '<select class="form-control" id="Puesto">' +
            /*'<option value="volvo">Puesto</option>' +
            '<option value="saab">Contable</option>' +
            '<option value="mercedes">Administrativo</option>' +
            '<option value="mercedes">Ingeniero</option>' +
            '<option value="mercedes">Desarrollo</option>' +*/
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<h4>Nombre</h4>' +
            '<input type="text" class="form-control" id="nombre" placeholder="Nombre" required>' +
            '</div>' +
            '<div class="form-group">' +
            '<h4>Email</h4>' +
            '<input type="email" class="form-control" id="email" placeholder="Enter email" required>' +
            '</div>' +
            '<div class="form-group">' +
            '<h4>Teléfono</h4>' +
            '<input type="text" class="form-control" id="tlf" placeholder="Enter phone number" required>' +
            '</div>' +
            '<button type="button" id="enviar" class="btn btn-primary">Submit</button>';

        document.getElementById("crear-div").innerHTML = html;

        document.getElementById("Departamento").onchange = function () {
            SELECT();
        }

        document.getElementById("enviar").onclick = function () {
            POST();
        }

    }


    function POST() {

        var sxmlhttp = new XMLHttpRequest();

        sxmlhttp.onreadystatechange = function () {
            if (sxmlhttp.readyState == 4 && sxmlhttp.status == 200) {
                document.getElementById("crear-div").innerHTML =
                    '<div class="alert alert-success mt-3" role="alert">' +
                    'Information succesfully saved'
                '</div>';

            }
        }

        sxmlhttp.open("POST", "http://localhost/Proyecto-JS-Ajax/post.php", true);
        sxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        sxmlhttp.send("name=" + document.getElementById('nombre').value +
            "&email=" + document.getElementById('email').value +
            "&phone=" + document.getElementById('tlf').value);
    }

    function GET() {

        var rxmlhttp;
        rxmlhttp = new XMLHttpRequest();

        rxmlhttp.onreadystatechange = function () {
            if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
                document.getElementById("ver-div").innerHTML = rxmlhttp.responseText;
            }
        }

        rxmlhttp.open("GET", "http://localhost/Proyecto-JS-Ajax/get.php", true);
        rxmlhttp.send();
    }

    function SELECT() {

        //Nos guardamos la opcion que el usuario ha elegido.
        var depto = document.getElementById("Departamento").value;
        var rxmlhttp;
        rxmlhttp = new XMLHttpRequest();
        rxmlhttp.onreadystatechange = function () {
            if (rxmlhttp.readyState == 4 && rxmlhttp.status == 200) {
                true;
            }
        }

        rxmlhttp.open("POST", "http://localhost/Proyecto-JS-Ajax/getSelect.php", true);
        rxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        rxmlhttp.send("departamento=" + depto);
    }
}