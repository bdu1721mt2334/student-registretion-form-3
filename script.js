var peyar = document.getElementById("peyar");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var course = document.getElementById("course");
var email = document.getElementById("email");
var btn = document.getElementById("btn");
var dataGoes = document.getElementById("dataGoes");

// Event listener for the submit button
btn.addEventListener("click", function () {
    if (peyar.value === "" || age.value === "" || email.value === "") {
        alert("Please fill in all required fields!");
        return;
    }

    // Create a new table row
    var tr = document.createElement("tr");

    // Add student details in table cells
    var tdName = createCell(peyar.value);
    var tdAge = createCell(age.value);
    var tdGender = createCell(gender.value);
    var tdCourse = createCell(course.value);
    var tdEmail = createCell(email.value);

    // Create action buttons
    var tdActions = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("bg-yellow-500", "text-white", "px-2", "py-1", "rounded", "mr-2", "hover:bg-yellow-700");
    editBtn.addEventListener("click", function () {
        editRow(tr, tdName, tdAge, tdGender, tdCourse, tdEmail);
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("bg-red-500", "text-white", "px-2", "py-1", "rounded", "hover:bg-red-700");
    deleteBtn.addEventListener("click", function () {
        tr.remove();
    });

    tdActions.appendChild(editBtn);
    tdActions.appendChild(deleteBtn);

    // Append cells to row
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdGender);
    tr.appendChild(tdCourse);
    tr.appendChild(tdEmail);
    tr.appendChild(tdActions);

    // Append row to the table
    dataGoes.appendChild(tr);

    // Clear input fields
    clearInputs();
});

// Function to create table cell with text content
function createCell(value) {
    var td = document.createElement("td");
    td.textContent = value;
    td.classList.add("border", "border-gray-300", "px-4", "py-2");
    return td;
}

// Function to clear input fields
function clearInputs() {
    peyar.value = "";
    age.value = "";
    gender.value = "male";
    course.value = "python";
    email.value = "";
}

// Function to edit a row
function editRow(tr, tdName, tdAge, tdGender, tdCourse, tdEmail) {
    peyar.value = tdName.textContent;
    age.value = tdAge.textContent;
    gender.value = tdGender.textContent;
    course.value = tdCourse.textContent;
    email.value = tdEmail.textContent;

    // Remove the row after clicking edit
    tr.remove();
}
