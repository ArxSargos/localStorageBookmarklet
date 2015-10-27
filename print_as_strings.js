javascript:

console.log("%c[[LOCALSTORAGE]]","background-color:#FFF380;color:maroon;font-size:120%;");
for(var i=0;i<localStorage.length;i++){
	console.log("%cKEY: "+localStorage.key(i),"background-color:#FFFFC2;color:orange;font-size:120%;");
	console.log(localStorage.getItem(localStorage.key(i)));
};
console.log("%c[[END]]","background-color:#FFF380;color:maroon;font-size:120%;");

void(0);
