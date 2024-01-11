// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calculate()
{
    beginYear = document.getElementById("hireDate").value;
    var date1 = new Date(beginYear)
    var date2 = new Date(Date.now().toString())
    var beginYear;

    console.log(date1);
    console.log(Date.now().toString());
    var diffDays = date2.getDate() - date1.getDate();
    console.log(diffDays);
}