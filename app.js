function onReady() { 
  let toDos = JSON.parse(localStorage.getItem('toDos')) || [];// [0,1,2,3,4,5,6,7,8,9,10] index
  let nextID = toDos.length?toDos[toDos.length-1].id : 0;// [0,1,2,3,4,5,6,7,8,10,9,10] ID
  nextID++;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo(){
    if (!newToDoText.value){return;}
    toDos.push({
        title: newToDoText.value,
        complete: false, //question: why set this to false?//
        id:nextID
       });
        nextID++;
        newToDoText.value = '';   
        renderTheUI();
      };

  function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
    renderTheUI();
    storeToLocal();
  };

  function toggleComplete (check){
    check.complete = !check.complete;
  };

  function storeToLocal(){
    localStorage.setItem('toDos',JSON.stringify(toDos));
  };//question!

  function renderTheUI(){
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';

        toDos.forEach(function(toDo){
            const newLi = document.createElement('li')
            
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";//question: corresponding to html type/id?
                                      // to have same styling in css?

            const deleteItem = document.createElement('button');
            deleteItem.type = "button";
            deleteItem.textContent = "delete";


            const title = document.createElement('span');
            title.textContent = toDo.title;

            newLi.textContent = toDo.title;

            newLi.appendChild(deleteItem);
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            
            deleteItem.addEventListener('click', event => {
            deleteToDo(toDo.id);
            });

            checkbox.addEventListener('change', event => {
            toggleComplete(toDo);
            });

        });
    };

  addToDoForm.addEventListener('submit', event =>{
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
      renderTheUI();
      storeToLocal();
  });

  renderTheUI();
};

window.onload = function (){
    onReady();
};
