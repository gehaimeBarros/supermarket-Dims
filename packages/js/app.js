function login() {

    var USER = ("admin@gmail.com");
    var PASS = ("admin");

    var done = 0;

    var EMAILSUARIO = document.getElementsByName("email")[0].value;
    EMAILSUARIO = EMAILSUARIO.toLowerCase();

    var SENHAUSUARIO = document.getElementsByName("senha")[0].value;
    SENHAUSUARIO = SENHAUSUARIO.toLowerCase();

    if (EMAILSUARIO == (USER) && SENHAUSUARIO == (PASS)) {
        window.location.href = "/home/packages/html/loading.html"
        done = 1;
    }
    if (done == 0) {
        alert("Dados invalido!");
    }
}


function viewSenha() {

    if (document.getElementById("btn-view-pass").value == "Mostrar") {
        document.getElementById("btn-view-pass").value = "Ocultar";
    } else {
        document.getElementById("btn-view-pass").value = "Mostrar";
    }
}

function viewPass() {

    var PASSUSER = document.getElementById("pass-user");

    if (PASSUSER.type == "password") {
        PASSUSER.type = "text";
    } else {
        PASSUSER.type = "password";
    }
}