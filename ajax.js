function ajax(method, url, data, callback, response = '', user = null, password = null)
{
    // setup some vars
    method = method.toLowerCase();
    var request = new XMLHttpRequest();
    var cacheBust = new Date().getTime();

    // create parameters based on data type
    var parameters = typeof data == 'string' ? data : Object.keys(data).map(
        function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
    ).join('&');

    // when the request is complete, do callback
    // based on the status of the request
    request.addEventListener('load', function(){
        if(this.status === 200)
        {
            var response = {
                error: false,
                data: this.response,
                status: this.status,
                readyState: this.readyState
            };

            callback(response);
        }
        else
        {
            var response = {
                error: true,
                data: null,
                status: this.status,
                readyState: this.readyState
            };
            callback(response);
        }
    });
    // if the request runs into an error, do callback
    // with information about the error
    request.addEventListener('error', function(){
        var response = {
            error: true,
            data: true,
            status: this.status,
            readyState: this.readyState
        };
        callback(response);
    });

    // open request based on method
    switch(method)
    {
        case 'get':
            request.open('GET', url + '?' +parameters + 'r='+cacheBust, true, user, password);
            break;
        case 'post':
            request.open('POST', url, true, user, password);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            break;
        default:
            request.open('GET', url + '?' +parameters + 'r='+cacheBust, true, user, password);
    }

    // set response type
    if(response == 'json')
        request.responseType = 'json';

    // send request based on method
    switch(method)
    {
        case 'get':
            request.send();
            break;
        case 'post':
            request.send(parameters);
            break;
        default:
            request.send();
    }

    return request;
}
