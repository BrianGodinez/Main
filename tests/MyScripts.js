document.write("1.For Loop <br  />");
for(var mod = 0; mod<1; mod++){
  for (var i = 1; i < 10; i++)
 document.writeln(i+"<br>");
}

var start = 0;
var end = 10;


document.write("2.While Loop <br  />");

while(start < end)
{
document.write("Loop: " + start +"<br />");
  start++;
}
document.write("3.Math.sqrt  <br  />");
  document.write(Math.sqrt(4) + "<br />");  
    document.write(Math.sqrt(25) + "<br />");  

document.write("4.Math.random  <br  />");
var random = Math.random( ); 
    document.write("Random Number Generated : " + random ); 
