// action
const todoList = [];
function addTodo(item = '') {
  if (item.length) { todoList.push(item); }
}
function getTodoList { return todoList; }

// test action
addTodo('fakeItem');
expect(getTodoList()).toContain('fakeItem');
addTodo();
expect(getTodoList().length).toBe(1);

// component
class AddTodo extends Component {
  state = { submitted: false };

  onSubmit = () => {
    addTodo(...);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input />
        <button type="submit" />
      </form>
    );
  }
};

// test content
const wrapper = mount(<AddTodo />);
expect(wrapper).toContain('form');
expect(wrapper).toContain('input');
expect(wrapper).toContain('button');

// test function onSubmit
expect(wrapper.state().submitted).toBe(false);
wrapper.onSubmit();
expect(addTodo).toBeCalled();
expect(wrapper.state().submitted).toBe(true);

// test event 方案 3
const wrapper = mount(<AddTodo />);
expect(wrapper.state().submitted).toBe(false);
wrapper.find('form').simulate('submit');
wrapper.onSubmit = jest.fn(); // mock function
expect(wrapper.onSubmit).toBeCalled();
