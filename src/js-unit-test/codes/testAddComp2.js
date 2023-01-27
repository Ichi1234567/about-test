// test event
const wrapper = mount(<AddTodo />);
expect(wrapper.state().submitted).toBe(false);
wrapper.find('form').simulate('submit');
// 方案 1
// after simulate
const list = getTodoList();
expect(list).toContain(...);
expect(wrapper.state.submiited).toBe(true);
// 方案 2
addTodo = jest.fn(); // mock function
// after simulate
expect(addTodo).toBeCalled();
expect(wrapper.state.submiited).toBe(true);
// 方案 3
wrapper.onSubmit = jest.fn(); // mock function
// after simulate
expect(wrapper.onSubmit).toBeCalled();

// add onSubmit test
expect(wrapper.state().submitted).toBe(false);
wrapper.onSubmit();
expect(addTodo).toBeCalled();
expect(wrapper.state().submitted).toBe(true);
