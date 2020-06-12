/**
 * Funtion that set the next page to a button
 * 
 * @param {next page navigate to} page 
 */
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

// increase font to all tags bellow
aumentar_fonte.addEventListener("click", function (event){
    increaseTag("h1")
    increaseTag("p")
    increaseTag("a")
    increaseTag("label")
    increaseTag("button")
    increaseTag("th")
    increaseTag("td")
});

// decrease font to all tags bellow
diminuir_fonte.addEventListener("click", function (event){
    descreaseTag("h1")
    descreaseTag("p")
    descreaseTag("a")
    descreaseTag("label")
    descreaseTag("button")
    descreaseTag("th")
    descreaseTag("td")
});

/**
 * Function that increase the font size of all tags with tag = tagName eg. h1, p, a, etc
 * 
 * @param {name of the tag that the text will get bigger} tagName 
 */
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


/**
 * Function that decrease the font size of all tags with tag = tagName eg. h1, p, a, etc
 * 
 * @param {name of the tag that the text will get smaller} tagName 
 */
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

/**
 * Function sets the maximum size to a tagName eg. h1, p, a, etc
 * 
 * @param {name of the tag} tagName 
 */
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

// obtem o botao de contraste da nav
var mudar_contraste = document.querySelector("#contraste");

// muda o contraste das tag, ids e classes passadas por parametro
mudar_contraste.addEventListener("click", function (event){
    changeTagContrast("p")
    changeTagContrast("h1")
    changeTagContrast("h4")
    changeTagContrast("footer")
    changeTagContrast("label")
    changeTagContrast("input")
    changeTagContrast("span")


    changeIdContrast("main-nav")
    changeIdContrast("navbar-sections")
    changeIdContrast("tag-box")
    changeIdContrast("check-order")

    changeClassContrast("button")
});

/**
 * Function that changes background, color and/or border
 * depending on the tags name, making it with more contrast
 * 
 * @param {name of the tag} tagName 
 */
function changeTagContrast(tagName) {

    var tags = document.getElementsByTagName(tagName)

    for (var i = 0; i < tags.length; i++) {
        var elem = tags[i]

        if(elem != null){
            elem.style.color = "#000000"

            if(tagName == "footer" || tagName == "span"){
                elem.style.background = "#000000"
            }

            if(tagName == "input"){
                elem.style.border = "2px solid #000000"
            }
        }
    }
}

/**
 * Function that changes background, color, img src and/or border
 * depending on the id name, making it with more contrast
 * @param {name of the tag} idName 
 */
function changeIdContrast(idName) {

    var elem = document.getElementById(idName)

    if(elem != null){
        if(idName == "main-nav"){
            elem.style.background = "#000000"
        }
        else if (idName == "tag-box") {
            elem.style.border = "2px solid #000000"
        }
        else if(idName == "check-order"){
            elem.src="./images/check-contrast.png"
        }
        else{
            elem.style.background = "#000000"
        }
    }
}

/**
 * Function that changes the class of an element
 * depending on the class name, making it with more contrast
 * the element is found by the tag, than the class is searched by class name
 * 
 * @param {name of the tag} tagName 
 */
function changeClassContrast(tagName) {

    var tags = document.getElementsByTagName(tagName)

    for (var i = 0; i < tags.length; i++) {

        var elem = tags[i]

        if(elem != null){
            if (elem.classList.contains("btn-outline-secondary")){
                elem.classList.add('btn-outline-secondary-contrast');
                elem.classList.remove('btn-outline-secondary');
            }
            else if (elem.classList.contains("btn-outline-primary")){
                elem.classList.add('btn-outline-primary-contrast');
                elem.classList.remove('btn-outline-primary');
            }
            else{
                elem.classList.add('btn-primary-contrast');
                elem.classList.remove('btn-primary');
            }
        }
    }
}

// obtem o botao de volta para o contraste original da nav 
var contraste_original = document.querySelector("#contraste-original");

// ao clickar atualiza a pagina, fazendo com que e tela volte ao normal
contraste_original.addEventListener("click", function (event){
    location.reload()
});