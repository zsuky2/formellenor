/*Feladat: Form validációja -> üres inputokhoz piros keretet adunk, kitöltött inputokhoz pedig zöld keretet

    - click esemény a bejelentkezés gombra
    - el kell tárolnunk az inputok értékeit, ahhoz, hogy tudjuk majd üresek-e vagy nem
    - keretek hozzáadása/elvétele/megváltoztatása
    - ha minden ki van töltve, ugorhatunk egy általunk választott weboldaltra

*/

document.getElementById("login").addEventListener("click", function () {

    var username = document.querySelector("#username");
    var password = document.querySelector("#password");

    if (username.value == "" && password.value == "") {

        /*alert("Minden mezőt kötelező kitölteni");
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";*/

        username.classList.remove("border-success");
        password.classList.remove("border-success");
        username.classList.add("border-danger");
        password.classList.add("border-danger");
    } else if (username.value == "") {

        username.classList.remove("border-success");
        username.classList.add("border-danger");
        password.classList.remove("border-danger");
        password.classList.add("border-success");
    } else if (password.value == "") {

        username.classList.remove("border-danger");
        username.classList.add("border-success");
        password.classList.remove("border-success");
        password.classList.add("border-danger");
    } else {

        username.classList.remove("border-danger");
        username.classList.add("border-success");
        password.classList.remove("border-danger");
        password.classList.add("border-success");
    }

});