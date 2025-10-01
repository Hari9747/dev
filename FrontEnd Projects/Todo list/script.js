//call the studntform
//using const for these are constant data

const form = document.getElementById('studentForm');

//call the stdntform tbody 

const tableBody = document.querySelector('#studentTable tbody');

//When the form is submitted, run the function. e is the event object.

form.addEventListener( 'submit' , function(e){

    //Stop the browser’s default submit behavior (page reload).
    //This lets you handle the data with JavaScript instead.

    e.preventDefault();

    //call the inputs

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    //create a new <tr> at the end of the tbody and 
    // give you a reference to it

    const row = tableBody.insertRow();
    row.innerHTML =`
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td><button class = "delete-btn">Delete</button></td>`;  //the call fn in 45line

    //Clear the form fields so they’re ready for the next entry.
    
    form.reset();

    //Find the Delete button inside the new row and attach a 
    // click handler that removes that row from the table

    row.querySelector('.delete-btn').addEventListener('click',function(){
        tableBody.removeChild(row);
    });
});