javascript:

console.log("%c[[LOCALSTORAGE]]","background-color:#FFF380;color:maroon;font-size:120%;");
for(var i=0;i<localStorage.length;i++){
	var parsedKey = "";
	var toParse = localStorage.getItem(localStorage.key(i));
	try {
		parsedKey =  JSON.parse(toParse);
	} catch(e){
		parsedKey = toParse;
	}
	console.log("%cKEY: "+localStorage.key(i),"background-color:#FFFFC2;color:orange;font-size:120%;", parsedKey );
}
console.log("%c[[END]]","background-color:#FFF380;color:maroon;font-size:120%;");

void(0);
