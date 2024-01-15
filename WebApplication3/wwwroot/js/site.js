// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Write your JavaScript code.
function  calculate()
{
    
    var beginYear;
    beginYear = document.getElementById("hireDate").value;
    var date1 = new Date(beginYear);
    var date2 = new Date(Date.now());


    if (verify() === 1)
    {
        alert("Name or hireDate cannot be empty")
        document.getElementById("AgeResult").innerHTML = "";
    }
    else
    { 
    var diffYears = date2.getFullYear() - date1.getFullYear();
    console.log(diffYears);

    document.getElementById("AgeResult").innerHTML = "Employement years: "+ diffYears;
    }
}

function verify()
{
    var name = document.getElementById("name");
    var date = document.getElementById("hireDate");

    if (name.value === "" || hireDate.value=== "")
    {
        return 1;
    }
    return 0;
}