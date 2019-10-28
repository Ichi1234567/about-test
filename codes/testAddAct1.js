// action
const todoList = [];
function addTodo(item) { todoList.push(item); }
function getTodoList { return todoList; }

// test
//expect(addTodo(fakeItem)).?
addTodo('fakeItem');
expect(getTodoList()).toContain('fakeItem');
