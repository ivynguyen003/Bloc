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
        complete: false,
        id:id,
     });
     id++;
    }
   function deleteToDo(id){
       ToDos = toDos.filter(item => item.id !==id);
       };
    }
    renderTheUI(){
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';
        toDos.forEach(function(toDo){
            const newToDo = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            const title = document.createElement('span');
            const delete = document.createElement('delete')
            newLi.textContent = toDo.title
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
        });
    }
  addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
      renderTheUI();
  });
  addToDoForm.addEventListener('delete', event => {
      event.preventDefault();
      deleteToDo();
      toDo.id;
      renderTheUI();
  });
}
window.onload = function (){
    alert("Done Loading!");
    onReady();
};
