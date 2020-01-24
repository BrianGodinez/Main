function myLoop(){
var start= document.getElementById("start").value;
var end = document.getElementById("end").value;
console.log(start);
for(var i = parseInt (start); i <= end; i++)
  {
    document.write('<p>' + i + '</p>');
  }
}
