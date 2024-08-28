const todoInput = document.querySelector(".input");
const listContainer = document.querySelector(".list-container")
function addTask(){
  if(todoInput.value===''){
    alert("You must write something");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML=todoInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  todoInput.value="";
  saveData();
}
listContainer.addEventListener("click",(e)=>{
if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  saveData();
}})
function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
  listContainer.innerHTML=localStorage.getItem("data");
}
showData();