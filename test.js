const inputTask = document.getElementById("enterTask");
const submitBtn = document.getElementById("submitBtn");
const listContainer = document.getElementById("listCon");
const heading = document.getElementById("head");
const labels = document.getElementsByTagName("label");
let taskCount = 0;



function addTask(e) {

    e.preventDefault();
    console.log("tets");
    let newTask = inputTask.value;
    console.log(newTask);
    if (newTask === '') {
        alert("No text");
    }
    else {
        //creating task-item div
        let topDiv = document.createElement("div");
        topDiv.setAttribute("class", "task-item");

        //creating task-item-left div
        let childDiv = document.createElement("div");
        childDiv.setAttribute("class", "task-item-left");


        //adding taskcount
        let x = taskCount++;
        //creating label
        let task = document.createElement("label");
        task.setAttribute("for", x);
        task.setAttribute("class", "taskContent");
        task.setAttribute("id", x);

        //creating checkbox
        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", x);
        checkBox.setAttribute("class", "tick");

        //creating line break
        let nextLine = document.createElement("br");


        //appending checkbox to child div
        childDiv.appendChild(checkBox);

        //label to child div
        task.innerHTML = `${newTask}`;
        childDiv.appendChild(task);

        //appending childdiv to topdiv
        topDiv.appendChild(childDiv);

        //span to topdiv
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        topDiv.appendChild(span);

        //top div to list container
        listContainer.appendChild(topDiv);

        //next line
        // listContainer.appendChild(nextLine);
        inputTask.value = '';
        saveData();
    }
}
submitBtn.addEventListener("click", addTask);


listContainer.addEventListener('click', e => {

    if (e.target.tagName === 'INPUT') {
        console.log("done");
        //e.target.labels.classList.add("checked");
        console.log(e.target.labels[0]);
        e.target.labels[0].classList.toggle("checked");
        saveData();
        // saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();



