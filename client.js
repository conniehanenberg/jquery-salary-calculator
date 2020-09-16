$(document).ready(console.log('hello world'));

$(document).ready(setup);
    console.log('document is ready');

 
//create table
function setup(){
//add inputs to the table
 const table= $(`
 <input id="employee-firstname" placeholder="Employee First Name" />
 <input id="employee-lastname" placeholder="Employee Last Name" />
 <input id="employee-IDnumber" placeholder="Employee ID Number" />
 <input id="jobTitle" placeholder="Job Title" />
 <input id="annual-salary" placeholder="Annual Salary" />
 <button id="salary-submit">Add Salary</button>
   <table id="table">
       <thead>
           <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>ID Number</th>
               <th>Job Title</th>
               <th>Annual Salary</th>
           </tr>
      </thead>
       <tbody>
      </tbody>
   </table>
   <p id="monthly-calculator">Total Monthly Salary </p>
`);

//add the table to the DOM
$('body').append(table);

//call the employee-submit button
$('#salary-submit').on('click', handleSalaryButton);

//delete row button
$(".deleteEmployee").on('click', ".delete.Employee", deleteRow);
}

function handleSalaryButton(event) {
 //grab the first name
const firstName = $('#employee-firstname').val();
//grab the last name
const lastName = $('#employee-lastname').val();
//grab the employee ID
const ID = $('#employee-IDnumber').val();
//grab the job title 
const jobTitle = $('#jobTitle').val();
//grab the annual salary
const annualSalary = $('#annual-salary').val();
console.log(firstName);
console.log(lastName);
console.log(ID);
console.log(jobTitle);
console.log(annualSalary);
}

//create a new row
const elem = $(`
<tr>
  <td>${'firstName'}</td>
  <td>${'lastName'}</td>  
   <td>${'ID'}</td>
    <td>${'jobTitle'}</td>
    <td>${'annualSalary'}</td>
    <td><button class="deleteEmployee">Delete</button></td>
 </tr> 
`);

//clear the input values
$("#firstname").val('');
$("#lastname").val('');
$("#ID").val('');
$("#jobtitle").val('');
$("#annualsalary").val('');

$("table tbody").append(elem);

//update annual to montly cost
function updateToMonthlySalary(){

}
let totalAnnualSalary = 0;
totalAnnualSalary += Number(annualSalary);


$("#monthly-salary").text('Total Montlhy Salary $${monthlyCost}');

////add total salary in DOM
const annualSalary = $("#annual-salary").val();


///delete buttons
function deleteRow(event) {
   console.log('in delete row')
}


