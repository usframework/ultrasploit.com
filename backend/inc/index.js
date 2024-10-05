var iframe = document.querySelector("iframe");

if ( sessionStorage.getItem("lastHref") == false ) {
    sessionStorage.setItem("lastHref", iframe.src)

}   else {
    iframe.src = sessionStorage.getItem("lastHref");
}

iframe.addEventListener("load", function () {
    sessionStorage.setItem("lastHref", iframe.src)
});