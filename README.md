#localStorage bookmarklets

Bookmarklets for printing content of browser localStorage data as expanded strings for every key, as clickable (collapsible tree) objects in console and for clearing localStorage object...

### Bookmarklets

Just add the bookmarklet below to your bookmarks bar.

#### Print as expanded strings
```javascript
javascript:%20%20console.log("%c[[LOCALSTORAGE]]","background-color:#FFF380;color:maroon;font-size:120%;");%20for(var%20i=0;i<localStorage.length;i++){%20console.log("%cKEY:%20"+localStorage.key(i),"background-color:#FFFFC2;color:orange;font-size:120%;");%20console.log(localStorage.getItem(localStorage.key(i)));%20};%20console.log("%c[[END]]","background-color:#FFF380;color:maroon;font-size:120%;");%20%20void(0);
```

#### Print as collapsible objects
```javascript
javascript:%20%20console.log("%c[[LOCALSTORAGE]]","background-color:#FFF380;color:maroon;font-size:120%;");%20for(var%20i=0;i<localStorage.length;i++){%20var%20parsedKey%20=%20"";%20var%20toParse%20=%20localStorage.getItem(localStorage.key(i));%20try%20{%20parsedKey%20=%20%20JSON.parse(toParse);%20}%20catch(e){%20parsedKey%20=%20toParse;%20}%20console.log("%cKEY:%20"+localStorage.key(i),"background-color:#FFFFC2;color:orange;font-size:120%;",%20parsedKey%20);%20}%20console.log("%c[[END]]","background-color:#FFF380;color:maroon;font-size:120%;");%20%20void(0);
```

#### Clear localStorage
```javascript
javascript:%20%20console.log("%c[[LOCALSTORAGE%20CLEAR]]","background-color:#FFF380;color:maroon;font-size:120%;");%20for(var%20i=localStorage.length-1;i>-1;i--){%20console.log("%cKEY%20DELETED:%20"+localStorage.key(i),"background-color:#FFFFC2;color:orange;font-size:120%;");%20var%20item%20=%20localStorage.key(i);%20localStorage.removeItem(item);%20};%20console.log("%c[[CLEAR%20END]]","background-color:#FFF380;color:maroon;font-size:120%;");%20%20void(0);
```

## Usage

On page (domain) you are interested in their localStorage content just run by clicking on bookmark.
Output can be found in browser (firebug) console.

##Works In

Should run in every modern browser with access to console object...

##Change Log
- 27.10.2015 commited initial version

##Licence

Feel free to use, modify and whatever... :-)
Code is provided AS IS with no warranty. I take no responsibility for damage caused by use of these bookmarklets...
