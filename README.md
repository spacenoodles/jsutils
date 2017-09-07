# jsutils
Vanilla JavaScript tools and utilities to replace dependency on jQuery

## ajax.js
Replaces the post, get, and ajax calls in jQuery. Can be called very similarly to jQuery
```
var request = ajax('post', '/url', {key: 'value'}, function(response){
    if(!response.error)
        console.log(response.data);
}, 'json');
```

## serialize.js
Replaces the .serialize function in jQuery. Can be called as such
```
var data = serialize('.form');
```

## events.js
Replaces the on method in jQuery. Can be called as such
```
onEvent('#links', 'click', function(e){
    console.log('li elem clicked');
}, 'li');
```

## ToDo
- [ ] Add destroy function for events
