function onEvent(selector, event, callback, delegation = null)
{
    var targets = document.querySelectorAll(selector);
    var length = targets.length;
    for(var i = 0; i < length; i++)
    {
        targets[i].addEventListener(event, function(e){
            if( (delegation !== null && e.target && e.target.matches(delegation)) || delegation === null)
            {
                callback(e);
            }
        });
    }
}
