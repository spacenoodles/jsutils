function serialize(selector)
{
    var elem = document.querySelector(selector);

    if(elem)
    {
        var inputs = elem.querySelectorAll('input, textarea, select');
        var length = inputs.length;
        var data = {};

        for(var i = 0; i < length; i++)
        {
            var key = inputs[i].getAttribute('name');
            var value = inputs[i].value;

            data[key] = value;
        }

        return data;
    }
    else
    {
        return {};
    }
}
