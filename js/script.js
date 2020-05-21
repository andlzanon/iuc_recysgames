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