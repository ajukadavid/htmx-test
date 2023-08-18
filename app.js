let img = document.getElementById('#hello')

console.log(img)

document.addEventListener('htmx:afterRequest', function(evt) {

    let url = JSON.parse(evt.detail.xhr.response).urls.regular
});