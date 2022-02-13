let wrapper = document.body.querySelector('.wrapper');
let form = document.createElement("form");
wrapper.appendChild(form);

let userInput = document.body.querySelector(".fillin");
let addButton = document.body.querySelector(".add");

let todoList = document.body.querySelector(".todo-list"); 

let title2 = document.createElement("h2");
title2.innerText = "My Todo List";
wrapper.appendChild(title2);

let todoItem = document.createElement("div"); 
todoItem.className = "todo-item"; 
todoItem.style.border ="soild 1px rgb(180, 176, 176)"






let userInputList = []; 

addButton.addEventListener('click', function(){

    newTodo = {
        todo: userInput.value,
        checked: false,
        important: false
    };

    userInputList.push(newTodo);   
    console.log(userInputList);
    
})



function displayList (){
    for (i=0; userInputList.length>0; i++){
        todoItem.innerHTML=userInputList;
    }
}


