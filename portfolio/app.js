var t = ("JOUHAR");
var w = 0;
function type()
{
    document.getElementById("title").innerHTML += t.charAt(w);
    w++;
    
}
setInterval(type,220);