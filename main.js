let num = parseInt(prompt("enter three digit number"));
let q =parseInt(num/10);
let r = num%10;
let q1 = parseInt(q/10);
let r1 = q%10;

document.write(r+q1+r1);
document.write("<br>");
function abc()
{
    alert("how r u ");
}
document.write("<br>");
function search()
{
    document.write("search");
}
document.write("<br>");
function xyz()
{
    swal("HI","GOOD EVENING","success");
}
document.write("<br>");
f = prompt("enter first name");
l = prompt("enter last name");
s = f.concat(" "+l);
document.write(s);
document.write("<br>");
text = "synlogica";
k = text.slice(3);
document.write(k);
document.write("<br>");
function abc()
{
    name = document.getElementById("name").value;
    mobile = document.getElementById("mobile no.").value;
    age = document.getElementById("age").value;

    
document.getElementById("result").innerHTML = name+"<br>"+mobile+"<br>"+age;
return false;
}