function navigateTo(page) {
    var uri = window.location.href;
    uri = uri.replace('file://', '');
    var uriParts = uri.split('/');
    var baseUri = 'file://';
    for(var i = 0; i < uriParts.length - 1; i++) {
        baseUri += uriParts[i] + '/';
    }

    var newUri = baseUri + page + '.html';
    window.location.href = newUri;
}

var aumentar_fonte = document.querySelector("#aumentar-fonte");
var diminuir_fonte = document.querySelector("#diminuir-fonte");

aumentar_fonte.addEventListener("click", function (event){
    increaseTag("h1")
    increaseTag("p")
    increaseTag("a")
    increaseTag("label")
    increaseTag("button")
    increaseTag("th")
    increaseTag("td")
});

diminuir_fonte.addEventListener("click", function (event){
    descreaseTag("h1")
    descreaseTag("p")
    descreaseTag("a")
    descreaseTag("label")
    descreaseTag("button")
    descreaseTag("th")
    descreaseTag("td")
});

function increaseTag(tagName) {

    var max_size = getMaxSize(tagName)

    var tags = document.getElementsByTagName(tagName)

    for (var i = 0; i < tags.length; i++) {
        var elem = tags[i]
        var cur_font_size = window.getComputedStyle(elem, null).getPropertyValue('font-size');
        var size = parseInt(cur_font_size.split("px")[0])
        if(size < max_size) {
            size = size + 2
        }
        var new_font_size = size.toString() + "px"
        elem.style.fontSize = new_font_size
    }    
}

function descreaseTag(tagName) {

    var min_size = 15

    var tags = document.getElementsByTagName(tagName)

    for (var i = 0; i < tags.length; i++) {
        var elem = tags[i]
        var cur_font_size = window.getComputedStyle(elem, null).getPropertyValue('font-size');
        var size = parseInt(cur_font_size.split("px")[0])
        if(size > min_size) {
            size = size - 2
        }
        var new_font_size = size.toString() + "px"
        elem.style.fontSize = new_font_size
    }    
}

function getMaxSize(tagName){
    if (tagName == "h1")
        return 40
    
    else if (tagName == "p")
        return 22

    else if (tagName == "a")
        return 18
    
    else if (tagName == "label")
        return 25

    else if (tagName == "button")
        return 23
    
    else if (tagName == "th")
        return 24

    else if (tagName == "td")
        return 18
}