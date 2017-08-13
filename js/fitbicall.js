function UserAction() {
    var xhttp = new XMLHttpRequest();
    GET https://https://richardtbrownjr.github.io/webhook?verify=9c94a5f3891cac9874da149bb5a0d40e200995fb452e8b5a0c8291bb36ac7e94
    xhttp.open("POST", "Your Rest URL Here", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}
