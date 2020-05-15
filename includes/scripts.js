function create(){

var rec = ""
for (i=0;i<26;i++){
    rec+="<article></article>";
}
var main=document.getElementsByTagName("main")[0];
main.innerHTML=rec;

var article= document.getElementsByTagName("article")[0];
article.innerHTML="F";
article.className="letter";
}

function myFunc(){
    var article=document.getElementsByTagName("article");
    for(i=0;i<5;i++){
        article[i].style.background="navy";
    }
}

function myFunc2(){
    var article=document.getElementsByTagName("article");
    for(i=0;i<5;i++){
        article[i].style.background="orangered";
    }
}


