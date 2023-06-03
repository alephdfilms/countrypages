// Random Banners
var ads = 1;

function random_imglink(){
var myimages=new Array(ads)
myimages[1]="https://alephdfilms.github.io/countrypages/pictures/advertisements/an_hero.gif"

var alttag=new Array(ads)
alttag[1]="Why not become an hero?"

var imagelinks=new Array(ads)
imagelinks[1]="https://alephdfilms.github.io/countrypages/residents/anonymous/anhero/index.html"

var y=Math.round(Math.random()*ads)%ads+1;
document.write('<a href="'+imagelinks[y]+'"><img src="'+myimages[y]+'" width="468" height="60" border="0" title="'+alttag[y]+'" alt="'+alttag[y]+'"></a><br /><a href="'+imagelinks[y]+'">'+alttag[y]+'</a>')
