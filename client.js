$(document).ready(setup);
console.log("");
//create table
function setup(){
//add inputs to the table
  const table= $(`
    <input id="employee-firstname" placeholder="employee first name" />
    <input id="employee-lastname" placeholder="employee last name" />
    <input id="employee-IDnumber" placeholder="employee IDnumber" />
    <input id="jobtitle" placeholder="jobtitle" />
    <input id="annual-salary" placeholder="annual salary" />
      <button id="salary-submit">Add Salary</button>
    <table id="salary-table">
  <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>ID Number</th>
        <th>Job Title</th>
        <th>Annual Salary</th>
        <th>Delete</th>
       </tr>
       </thead>
       <tbody>
       </tbody>
   </table>
   <p id="salary-calculator">Total Monthly:</p>
`);
//add the table to the DOM
$('body').append(table);
//add a button to calculate monthly salary
$('#salary-submit').on('click', handleSalaryButton);
//delete input
$('body').on('click','.deleteSalary', deleteRow);
}

//add function 'Salary Calculator' when button is clicked
let totalsalary = 0;

function handleSalaryButton(event) {
//grab the first name
const firstname = $('#first-name').val();
//grab the last name
const lastname = $('#last-name').val();
//grab the employee ID
const ID = $('#ID-number').val();
//grab the job title 
const jobtitle = $('#job-title').val();
//grab the annual salary
const annualsalary = $("#annual-salary").val();
console.log(firstname);
console.log(lastname);
console.log(ID);
console.log(jobtitle);
console.log(annualsalary);
console.log(handleSalaryButton);
}
//create a new row
const element = $(`
<tr>
    <td>${firstname}</>
    <td>${lasttname}</>
    <td>${ID}</>
    <td>${jobtitle}</>
    <td>${annualsalary}</>
    <td><button class='annualsalaryinput'>Delete</button></td>
 </tr>   
`);
//clear the input values
$("firstname").val('');
$("lastname").val("");
$("ID").val("");
$("jobtitle").val("");
$("annualsalary").val("");

$("tbody").append(element);
console.log(element);

//update the total monthly salary
/////////////totalSalary += Number(annualSalary)

///////////////$('#salaryCalc').text('Total Monthly': $$(totalSalary)
//add function to delete each event after the button is clicked

function deleteRow(event) {
    console.log('In delete row');
}
let button = $(event.target);

let targetRow = button.closest;

targetRow.remove();
