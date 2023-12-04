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

    listContainer.appendChild(checkBox);
    task.innerHTML = ` ${newTask}</br>`;
    listContainer.appendChild(task);
    inputTask.value = '';
    let markedCheckbox = document.querySelectorAll('input[type="checkbox"]');

    console.log(markedCheckbox);
    let labels = document.getElementsByTagName("label");
    markedCheckbox.forEach(e => {
        e.addEventListener('change', () => {
            // if (e.checked) {
            //     for (let i = 0; i < labels.length; i++) {
            //         e.checked.labels[i].classList.toggle("checked");
            //     }
            // }
            for (let i = 0; i < labels.length; i++) {
                labels[i].classList.toggle("checked");
            }
            // if (e.checked) {
            //     console.log("checked");
            //     console.log(e.id);
            //     let newId = e.id;
            //     let selectedLabel = e.labels;
            //     //e.labels.classList.add("checked");
            //     console.log(selectedLabel);
            //     selectedLabel.forEach(e => {
            //         e.classList.add("checked");
            //     })
            // }
            // if (!e.checked) {
            //     for (let i = 0; i < labels.length; i++) {
            //         labels[i].classList.remove("checked");
            //     }
            // }
        })
    })

}
submitBtn.addEventListener("click", addTask);


listContainer.addEventListener('click', e => {
    // if (e.target.tagName === 'LABEL' || e.target.tagName === 'input[type="checkbox"]') {
    //     e.target.classList.toggle("checked");
    //     // saveData();
    // }

    if (e.target.tagName === 'INPUT') {
        console.log("done");

        // saveData();
    }

});



