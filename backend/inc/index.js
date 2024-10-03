var iframe = document.querySelector("iframe");

if ( sessionStorage.getItem("lastHref") == false ) {
    sessionStorage.setItem("lastHref", iframe.contentWindow.location.href)

}   else {
    iframe.src = sessionStorage.getItem("lastHref");
}

iframe.addEventListener("load", function () {
    sessionStorage.setItem("lastHref", iframe.contentWindow.location.href)
});