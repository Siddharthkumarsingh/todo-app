let btn = document.querySelector(".addBtn");
let ul = document.getElementById("taskList");
let inp = document.getElementById("taskInput");

btn.addEventListener("click", function () {
    if (inp.value.trim() === "") return; 

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value = "";
});

// for Enter key support
inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        btn.click();
    }
});

// Event delegation for delete
ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});