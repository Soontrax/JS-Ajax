window.onload = function () {
    document.getElementById("crear-boton").onclick = function () {
        creationFields();
    }

    function creationFields() {
        var html =
            '<div class="form-group">' +
            '<select class="form-control" name="Departamento">' +
            '<option value="volvo">Departamento</option>' +
            '<option value="saab">Administrador</option>' +
            '<option value="mercedes">Informatica</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<select class="form-control" name="Puesto">' +
            '<option value="volvo">Puesto</option>' +
            '<option value="saab">Contable</option>' +
            '<option value="mercedes">Administrativo</option>' +
            '<option value="mercedes">Ingeniero</option>' +
            '<option value="mercedes">Desarrollo</option>' +
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
        sxmlhttp.send("name="+document.getElementById('nombre').value+
        "&email="+document.getElementById('email').value+
        "&phone="+document.getElementById('tlf').value);
    }

}




