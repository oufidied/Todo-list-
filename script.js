const todos = [
    {id: 1, text: 'Buy bread', done: false},
    {id: 2, text: 'Make dinner', done: false},
    {id: 3, text: 'Eat', done: false}
];

// function makeHTML(){
//   let html = '';
//   todos.forEach(todo => {
//       html = html + `<div class="todo">${todo}</div>`;
//   })

//   document.querySelector('#todos').innerHTML = html
// }

makeHTML()

function addTodo(){
    const text = document.querySelector("#newTodo").value
    if(text.length > 0){
        todos.push(text);
        document.querySelector("#newTodo").value = '';
        makeHTML();
    }
}



// function makeHTML(){
//   html = '';
//   todos.forEach(todo => {
//       html += `
//       <div class="todo">
//           <span>
//             ${todo.text}
//           </span>
//           <span 
//             class="material-icons"
//             onclick="deleteTodo(${todo.id})"
//           >
//             &#xe92b;
//           </span>
//       </div>
//       `;
//   })

//   document.querySelector('#todos').innerHTML = html
// }

makeHTML()

function addTodo(){
  const text = document.querySelector("#newTodo").value
  if(text.length > 0){
    let id = 1;
    todos.forEach(todo => {
      id = Math.max(todo.id, id);

       });
          id++;
    todos.push({id: id, text: text, done: false});
          document.querySelector("#newTodo").value = '';
          makeHTML();
        }
      }

function deleteTodo(id){
    todos = todos.filter(t => t.id != id);
    makeHTML();
}



function makeHTML(){
    html = '';
    todos.forEach(todo => {
        divClasses = todo.done ? 'todo done' : 'todo';
        html += `
        <div class="${divClasses}" onclick="todoDone(${todo.id})">
            <span>
              ${todo.text}
            </span>
            <span 
              class="material-icons"
              onclick="deleteTodo(${todo.id})"
            >
              &#xe92b;
            </span>
        </div>
        `;
    });

    document.querySelector('#todos').innerHTML = html
}

function todoDone(id) {
  const todo = todos.find(t => t.id == id);
  todo.done = !todo.done;
  makeHTML();
}
const clearText = function() {
document.querySelector('#box').innerHTML = '';  
}

const backText = function() {
  const box = document.querySelector('#box');
  box.removeChild(box.lastChild);
}

    document.addEventListener('keydown', function(event){
      console.log(event.key);
      if(event.key == "Enter"){
       console.log("yes")
          addTodo();
      }
    });
