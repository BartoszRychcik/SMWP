function main()
    {
    if(typeof (window.localStorage)!=="undefined") new_element();
    pokaz_funkcje_klikania();
    Zmien_naglowek();
    Styluj_wpisane_osoby();
    Znikaj_wpisane_osoby();
    Styluj_przycisk();
    Styluj_pytania();
    Dodaj_czekboxy();
    }

function pokaz_funkcje_klikania() {
    var napis = "";
    if (localStorage.clickcount) napis = "Juz " + localStorage.clickcount + " osob wyslalo swoje formularze!<br/>";
    else napis = "Badz pierwsza osoba wysylajaca formularz!<br/>";
    document.getElementById("licznik_klikniec").innerHTML = napis;
}

function new_element() {
    var newdiv = document.createElement("div");
    var newdiv2 = document.createElement("div");
    newdiv.id = "rozwin";
    newdiv2.id = "wpisani";
    var w = document.getElementById("content");
    w.appendChild(newdiv2);
    document.getElementById("wpisani").innerHTML = "<button onclick=\"funkcja_klikania2()\"><img class=\"przycisk\" src=\"obrazki/group.png\" alt=\"submit\" /> Zobacz, kto wypelnil formularz. </button>";
    w.appendChild(newdiv);
}

function Zmien_naglowek() {
    document.getElementsByTagName('h1')[0].innerHTML = "Kontakt i Formularz";
    document.getElementsByTagName('h2')[0].innerHTML = "Formularz";
}

function Styluj_wpisane_osoby() {
    var uchwyt = document.getElementById("rozwin");
    uchwyt.style.borderBottomRightRadius = "12px";
    uchwyt.style.borderBottomLeftRadius = "12px";
    uchwyt.style.width = "250px";
    uchwyt.style.padding = "5px 5px 5px";
    uchwyt.style.fontSize = "16px";
    uchwyt.style.textAlign = "center";
    uchwyt.style.border = "darkgrey solid 2px";
    uchwyt.style.textTransform = "capitalize";
    uchwyt.style.fontWeight = "600";
    uchwyt.style.backgroundColor = "lightgrey";
}

function Znikaj_wpisane_osoby() {
    var uchwyt = document.getElementById("rozwin");
    uchwyt.style.backgroundColor = "blue";

}

function Dodaj_czekboxy() {
    var tablica = ['PHP', 'RUBY', 'PYTHON', 'PERL'];
    for (x = 0; x < tablica.length; x++) {
        var newczek = document.createElement("input");
        newczek.type = "checkbox";
        newczek.name = "jez";
        var w = document.getElementsByTagName('form')[0];
        var k = document.getElementsByTagName('input')[11 + x];
        w.insertBefore(newczek, k);
        var text = document.createTextNode(tablica[x]);
        w.insertBefore(text, k);
        var linia = document.createElement("br");
        w.insertBefore(linia, k);
    }
}

function funkcja_klikania() {
    if (localStorage.clickcount) localStorage.clickcount = Number(localStorage.clickcount) + 1;
    else localStorage.clickcount = 1;
    pokaz_funkcje_klikania();
}

function funkcja_klikania2() {
    if (sessionStorage.clickcount) sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    else sessionStorage.clickcount = 1;
    wyswietl();
}

function Styluj_przycisk() {
    var uchwyt = document.getElementsByTagName('button')[2];
    uchwyt.style.width = "265px";
}

function Styluj_pytania() {
    var uchwyt = document.getElementsByClassName('pyt');
    for (x = 0; x < uchwyt.length; x++)
        uchwyt[x].style.fontWeight = "600";
}

window.onload = main;

/***********************************************************/

function zapisz()
{
    $("body").append('<div id="block" title="BLAD"></div>');
    $("body").append('<div id="block2" title="BLAD"></div>');
    var n = document.forms.formularz.nazwa.value.length;
    var m = document.forms.formularz.imie.value.length;
    if (n > 3 && m > 3)
        {
        var a = true;
        for (var klucz in localStorage)
            if (klucz == document.forms.formularz.nazwa.value) a = false;
        if (a)
            {
            localStorage.setItem(document.forms.formularz.nazwa.value, document.forms.formularz.imie.value);
            funkcja_klikania();
            }
        else
            {
            $("#block2").html("Ta sama osoba nie moze wypelnic formularza dwa razy!");
            $(function () { $("#block2").dialog(); });
            }
        }
        else 
            { 
            $("#block").html("Wpisano niepoprawne dane! Sprawdz czy imie i nazwa uzytkownika maja wiecej niz 3 litery.");
            $(function () { $("#block").dialog(); });
            }
    
}

function wyswietl()
{
    var zawartosc = "<table><th>LP.</th><th>Nazw_Uzyt</th><th>Imie</th>";
    var licznik = 0;
    for (var klucz in localStorage)
        if (klucz != "clickcount" && klucz != "" && localStorage.getItem(klucz)!=null)
        {
            licznik++;
            zawartosc += ("<tr><td> " + licznik + ".</td> " + "<td>" + klucz + " </td><td>" + localStorage.getItem(klucz) + "</td> </tr>");
        }
    zawartosc += "</table>";
    if (!licznik) zawartosc = "Nikt jeszcze nie wypelnil!";
    if (sessionStorage.clickcount % 2)
        {
        Styluj_wpisane_osoby();
        document.getElementById("rozwin").innerHTML = zawartosc;
        }
    else
        {
        Znikaj_wpisane_osoby();
        document.getElementById("rozwin").innerHTML = "";
        }
}

$(document).ready(function () {
    var licz = 0;
    var tekst = "W sprawie krotkich zapytan wymagajacych natychmiastowej odpowiedzi udostepniam rowniez <a class=\"link\" href=\"https://www.facebook.com/bartosz.rychcik.3\"><b>kontakt facebookowy</b></a>.Przed wyslaniem wiadomosci prosze o dodanie mnie do grona znajomych na czas konwersacji, z tego wzgledu iz czesto wystepuje brak powiadomien na urzadzeniach mobilnych w przypadku wiadomosci przypisanych do sekcji inne.";
    $("body").append('<div id="infos"></div>');

    $("#informacja").on("click",function (event) {
        licz++;
        $("#infos").css("left", event.pageX + 20).css("top", event.pageY);
        if (licz % 2) {
            $("#infos").html(tekst);
            $("#infos").show();
        }
        else
            $("#infos").hide();
    });
});

$(document).ready(function () {
    $("body").append('<div id="dymek"></div>');
    $(".info").mousemove(function (event) {
        $("#dymek").html($(this).attr('wyswietl'));
        $("#dymek").css("left", event.pageX + 2).css("top", event.pageY + 10);
        $("#dymek").show();
        return false;
    });
    $(".info").mouseout(function () {
        $("#dymek").hide();
    });
    $(".info").each(function () {
        $(this).attr('wyswietl', $(this).attr('title'));
        $(this).attr('title', '');
    });
});

$(function () {
    $("#radio-1").checkboxradio();
    $("#radio-2").checkboxradio();
    $("#radio-3").checkboxradio();
});