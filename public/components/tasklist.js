//set a value whereby - if it is done it equals to 1, if it is not done it equals to 2 otherwise it is 3 
//then afterwards when showing the title for Kanban Board, if the value = 1, show array data that has assigned value of 1 etc


const form = document.getElementById("taskform")
const button = document.querySelector("#taskform > button")
var taskInput = document.getElementById("taskInput");
/* Added a > div to direct the tasklist inside div container - for flexbox element*/
var tasklist = document.querySelector("#tasklist > ul > div");

/*
var homeLink = document.querySelector(".button").onclick = function() {
  location.href = "http://localhost:1234/#page1";
};

*/

var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

var taskListArray = JSON.parse(localStorage.getItem('tasks'));
var customColumnName = document.getElementById("kanbanColumnName"); //gets value from columnName label input 


button.addEventListener("click", function(event){
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let completionTime = completionTimeInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, priorityRating, estimatedTime, completionTime, false);
  /*
  if (ValidateForm() == false){
    addTask(task, dueDate, priorityRating, estimatedTime, completionTime, false);
  }
  console.log(ValidateForm());
  */

})


/*ValidateForm test 
function ValidateForm() {

  var formInvalid = false;
  $('#taskform input').each(function() {
    if ($(this).val() === '') {
      formInvalid = true;
    } else{
      return false;
    }
  });

  if (formInvalid)
    alert('One or Two fields are empty. Please fill up all fields');
  
  
  
  
}
*/

function addTask(taskDescription, dueDate, priorityRating, estimatedTime, completionTime, completionStatus) {
  let d = new Date();
  let dateCreated = d.getFullYear(); 
  let task = {
    id: Date.now(), 
    title: taskDescription,
    dueDate,
    dateCreated,
    priorityRating,
    estimatedTime,
    completionTime,
    completionStatus
  };
  
  //Code for local storage setting it inside Kanban
  taskListArray = JSON.parse(localStorage.getItem('tasks'));
  if (!taskListArray) {
    taskListArray = [];
  }
  console.log(taskListArray)
  taskListArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskListArray));
  //adds element to inProgress when entering new task  - shows it on Kanban Board
  //This is because when adding a task it is in progress of either being done or not done depending on what the user picks
  

  console.log(kanban)
  renderTask(task);
  
}


function renderTask(task){
  //if tasklist array is not empty; loop thorugh each task thats in there and populate inside item area
  updateEmpty();

  // Create HTML elements
  //Find way to add all elements, e.g. task, due date, completion time etc to 1 task 
 
 /* Then you'll need to add the element to the page */
  let item = document.createElement("div");
  
  item.classList.add("task-list-boxes");
  item.setAttribute('data-id', task.id);
  item.innerHTML = "<h2>" + task.title + "</h2>" + "<hr>" + "<p>" + "Due Date: " + task.dueDate + "</p>" + "<p>" + "Completion Time: " + task.completionTime  + "</p>" 
  + "<p>" + "Estimated Time: " + task.estimatedTime + " minutes" + "</p>" + "<p>" + "Priority Rating: " + task.priorityRating + "</p>";
  tasklist.appendChild(item);



  // Extra Task DOM elements 

  kanban.addElement('_inprogress', task);


  //Done Button
  let doneButton = document.createElement("button");
  doneButton.classList.add("done-button");
  let doneButtonText = document.createTextNode("Done");
  doneButton.appendChild(doneButtonText);

  
  doneButton.onclick = ("click", function(){
    kanban.addElement('_done', task);
    kanban.removeElement('_inprogress', task);
  });
  //Need to use whereby if the button is clicked for done - it will only be that task in there and not inside to do
  //Need to have if statements or conditions where if done button or not done button is clicked, it will move it 
  //accordingly and remove it from inProgress section

  //Not Done Button
  let notDoneButton = document.createElement("button");
  notDoneButton.classList.add("not-done-button");
  let notDoneText = document.createTextNode("Not Done");
  notDoneButton.appendChild(notDoneText);
  notDoneButton.onclick = ("click", function(){
    kanban.addElement('_todo', task) 
    kanban.removeElement('_inprogress', task);
  });



  //button div container - to align positioning
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("task-list-buttons");
  btnContainer.appendChild(doneButton);
  btnContainer.appendChild(notDoneButton);
  //btnContainer.innerHTML = '<button class = "done-button"> Done </button>' + '<button class = "not-done-button"> Not Done </button>';
  item.appendChild(btnContainer);

  //Problem is that its not appending the individual buttons to item
  //Could do appendChild to btnContainer --> appendChild worked

  

  




  //Event Listeners for DOM elements; current problem is that only done/not done button works for 1st div box, doesn't work for others
  //It also gets rid of all div elements 
  doneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
    //Add function where if it is done - the header element from the textbox which is clicked on - will be added to Kanban Board 
    //"done section" 
  })


  notDoneButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index);
    updateEmpty();
    item.remove();
    //Add function where if it is done - the header element from the textbox which is clicked on - will be added to Kanban Board 
    //"done section" 
  })


  // Clear the input form 
  form.reset();
}


function removeItemFromArray(arr, index){
  if (index > -1){
    arr.splice(index, 1);
  }
  return arr;
}

function updateEmpty(){
  let taskListArray = JSON.parse(localStorage.getItem('tasks'));
  if (taskListArray.length > 0){
    document.getElementById('emptylist').style.display = 'none';
  } else {
    document.getElementById('emptylist').style.display = 'block';
  }
}

//Kanban Board initalised after, alongside defined as well. 

var kanban = new jKanban({  
    element : '#myKanban',
    gutter  : '15px',
    responsivePercentage: false,
    boards  :[
        {
            'id' : '_todo',
            'title'  : 'To Do',
            'class' : 'info',
            'item'  : taskListArray
        },
        {
            'id' : '_inprogress',
            'title'  : 'In Progress',
            'class' : 'warning',
            'item'  : [
                {
                    'title': 'Hello!'
                }
            ]
        },
        { 
            'id' : '_done',
            'title'  : 'Done',
            'class' : 'success',
            'item'  : [
                {
                    'title':'Finish assignment',
                },
                {
                    'title':'Ok!',
                }
            ]
        }
    ]
});

var addBoardDefault = document.getElementById('addDefault'); //addButton to add extra kanban column
addBoardDefault.addEventListener('click', function () {
    kanban.addBoards(
        [{
            'id' : '_default',
            'title'  : customColumnName.value, //this gets input from form label textbox and makes it as the Kanban column title
            'class' : 'error',
            'item'  : [
                {
                    'title':'Default Item',
                },
                {
                    'title':'Default Item 2',
                }
            ]
        }]
    )
    alert("Added new column!");
    document.querySelector("#addColumn").reset();
});

