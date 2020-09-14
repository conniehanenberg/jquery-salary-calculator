$(document).ready(setup);
console.log("");
//create table
function setup(){
//add inputs to the table
  const table= $(`
    <input id="employee-firstname" placeholder="Employee First Name" />
    <input id="employee-lastname" placeholder="Employee Last Name" />
    <input id="employee-IDnumber" placeholder="Employee ID Number" />
    <input id="jobtitle" placeholder="Job Title" />
    <input id="annual-salary" placeholder="Annual Salary" />
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
   <p id="salary-calculator">Total Annual Salary </p>
`);
//add the table to the DOM
$('body').append(table);
//add a button to calculate annual salary
$('#salary-submit').on('click', handleSalaryButton);
//delete input
$('body').on('click','.deleteSalary', deleteRow);
}

//add function 'Salary Calculator' when button is clicked
let totalannualsalary = 0;

function handleSalaryButton(event) {
//grab the first name
const firstname = $('#employee-firstname').val();
//grab the last name
const lastname = $('#employee-lastname').val();
//grab the employee ID
const ID = $('#employee-IDnumber').val();
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
const elem = $(`
<tr>
    <td>${"employee-firstname"}</td>
    <td>${"employee-lasttname"}</td>
    <td>${"employee-IDnumber"}</td>
    <td>${"jobtitle"}</td>
    <td>${"annualsalary"}</td>
    <td><button class="deleteAnnualsalary">Delete</button></td>
 </tr> 
 `);

//clear the input values
$("#firstname").val('');
$("#lastname").val('');
$("#ID").val('');
$("#jobtitle").val('');
$("#annualsalary").val('');

$("tbody").append(elem);
console.log(elem);

//update the total annual salary
totalannualsalary += Number("annualsalary")

////////////$("#annual-salary".text(`${totalannualsalary}`);


//add function to delete each event after the button is clicked
function deleteRow(event) {
    console.log('In delete row');

let Deletebutton = $(event.target);

let targetRow = button.closest;

targetRow.remove();
}