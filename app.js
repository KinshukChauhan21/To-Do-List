let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    if(inp.value == "") {
        alert("You must add something!!!");
    } else {
        let tasks = document.createElement("li");
        tasks.innerText = inp.value;
        let delBtn = document.createElement("span");
        delBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
        tasks.appendChild(delBtn);
        ul.appendChild(tasks);
    }
    inp.value = "";
    saveData();
});

//save data to local storage
function saveData() {
    localStorage.setItem("data", ul.innerHTML)
}

ul.addEventListener("click", (event) => {
    if(event.target.tagName.toUpperCase() === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if(event.target.tagName.toUpperCase() === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
});

//fetch data from local storage
function showTask() {
    ul.innerHTML = localStorage.getItem("data");
}

showTask();