const BtnAdd = document.querySelector(".buttonTag");

BtnAdd.addEventListener("click", AddNew);

function AddNew(){
    const newDiv = document.createElement("div");
    document.getElementById('task-box').appendChild(newDiv);
}