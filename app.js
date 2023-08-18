let div = document.getElementById('parent-div')
document.addEventListener('htmx:afterRequest', function(evt) {
    console.log(JSON.parse(evt.detail.xhr.response))
});