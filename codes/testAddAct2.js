function addTodo(item = '') {
  if (item.length) { todoList.push(item); }
}

// test
addTodo('fakeItem');
expect(getTodoList()).toContain('fakeItem');
addTodo();
expect(getTodoList().length).toBe(1);
