function compute()
{
var principal = document.getElementById("amount").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
//defined variables
if (principal <= 0 || isNaN(principal))
    {
        alert("Please enter a positive number.");
        document.getElementById("amount").focus();
        return
    }
//added an alert for a positive number. 
var interest = principal*years*rate/100;
var year = new Date().getFullYear()+parseInt(years);
document.getElementById("result").innerHTML="If you deposit <b>$"+principal+"</b>\<br\>at an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b>$"+interest+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>"
}
//Maths
function updateRate()
{
var rateval=document.getElementById("rate").value;
document.getElementById("rate_val").innerText=rateval+"%";
}
//Check out https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps to learn lots of great javascript!