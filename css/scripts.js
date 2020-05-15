function create(){
console.log("hello");
var rec = ""
for (i=0;i<26;i++){
    rec+="<article></article>";
}
var main=document.getElementsByTagName("main")[0];
main.innerHTML=rec;
}