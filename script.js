
const Tasks = document.querySelectorAll(".task");
const TaskText = document.querySelectorAll(".task-text");
const InputTaskForm = document.getElementById("Input-Task"); 
const InputText = document.getElementById("input-text");
const ToDo = document.getElementById("Do");

let drag = null;

TaskText.forEach((e)=>{
    e.addEventListener("dragstart",()=>{
        e.style.backgroundColor = "orange";
        drag = e;
    });

    e.addEventListener("dragend",()=>{
        e.style.backgroundColor = "cadetblue";
        drag = null
    });
});

Tasks.forEach((e)=>{
    e.addEventListener("dragover",(ee)=>{
        ee.preventDefault();
        // currentTask = document.querySelector(".isdrag");
        e.appendChild(drag);
    })
})


InputTaskForm.addEventListener("submit", (e)=>AddTask(e));


function AddTask(e){
    console.log("in function")
    e.preventDefault();
    let text = InputText.value;
    text = text.trim();
    if(text == null || text === ""){

    return;
   }
   console.log("hello")
   let newTask = document.createElement("p");
   newTask.classList.add("task-text");
   newTask.setAttribute("draggable","true");
   newTask.innerText = text;
   
   
   newTask.addEventListener("dragstart", ()=>{
   
     newTask.style.backgroundColor = "orange";
     drag = newTask;   
   })
   newTask.addEventListener("dragend",()=>{
        newTask.style.backgroundColor = "cadetblue";
        drag = null
    });

    ToDo.appendChild(newTask);

   
   InputText.value = "";
}