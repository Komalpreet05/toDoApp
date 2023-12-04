const inputTask = document.getElementById("enterTask");
const submitBtn = document.getElementById("submitBtn");
const listContainer = document.getElementById("listCon");
const heading = document.getElementById("head");
let taskCount = 0;

function addTask(e) {

    e.preventDefault();
    console.log("tets");
    let newTask = inputTask.value;
    console.log(newTask);


    //adding taskcount
    let x = taskCount++;
    //creating label
    let task = document.createElement("label");
    task.setAttribute("for", x);

    //creating checkbox
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    checkBox.setAttribute("id", x);



    listContainer.appendChild(checkBox);
    task.innerHTML = ` ${newTask}</br>`;
    listContainer.appendChild(task);
    inputTask.value = '';


}
submitBtn.addEventListener("click", addTask);



