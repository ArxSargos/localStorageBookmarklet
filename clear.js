javascript:

console.log("%c[[LOCALSTORAGE CLEAR]]","background-color:#FFF380;color:maroon;font-size:120%;");
for(var i=localStorage.length-1;i>-1;i--){
	console.log("%cKEY DELETED: "+localStorage.key(i),"background-color:#FFFFC2;color:orange;font-size:120%;");
	var item = localStorage.key(i);
	localStorage.removeItem(item);
};
console.log("%c[[CLEAR END]]","background-color:#FFF380;color:maroon;font-size:120%;");

void(0);
