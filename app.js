function onReady() {
  let id = 0;  
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo(){
    if (!newToDoText.value){return;}
    toDos.push({
        title: newToDoText.value,
        complete: false, //why set this to false//
        id:id
     });
      id++;
      newToDoText.value = '';   
      renderTheUI();
    }

  function deleteToDo(id){
  console.log(toDos.filter(item => item.id !== id));

  }

   function renderTheUI(){
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';

        toDos.forEach(function(toDo){
            const newLi = document.createElement('li')
            
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";

            const deleteItem = document.createElement('button');
            deleteItem.type = "button";
            


            const title = document.createElement('span');
            title.textContent = toDo.title;

            newLi.textContent = toDo.title;

            newLi.appendChild(deleteItem);
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            
            deleteItem.addEventListener('click', event => {
            deleteToDo(toDo.id);
            });

        });
    }

  addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
      renderTheUI();
  });

>>>>>>> toDoList-checkpoint11
}

window.onload = function (){
    alert("Done Loading!");
    onReady();
};
