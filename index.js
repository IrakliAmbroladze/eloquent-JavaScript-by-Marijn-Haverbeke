let todoList = ["first note", "second note"];

function remember(task) {
  todoList.push(task);
}

remember("new note");

function getTask() {
  return todoList.shift();
}

function rememberOrgently(task) {
  todoList.unshift(task);
}

rememberOrgently("orgent");
console.log(todoList);
console.log(getTask());
console.log(todoList);
