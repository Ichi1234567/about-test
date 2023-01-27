// action
const todoList = [];
function addTodo(item = '') {
  if (item.length && todoList.length < 11) {
    todoList.push(item);
  }
}
function getTodoList { return todoList; }

// test action
addTodo('fakeItem');
expect(getTodoList()).toContain('fakeItem');
addTodo();
expect(getTodoList().length).toBe(1);

// limit 10
(new Array(10)).forEach((val, idx) => addTodo(`fakeItem${idx}`));
expect(getTodoList().length).toBe(10);
addTodo('fakeItem11');
expect(getTodoList).not.toContain('fakeItem11');

// component
class AddTodo extends Component {
  state = {
    submitted: false,
    message: '',
  };

  onSubmit = () => {
    const todoList = getTodoList();

    if (todoList.length < 11) {
      addTodo(this.newItem.value);
      this.setState({ submitted: true });
    } else {
      this.setState({ message: 'Something error' });
    }
  };

  render() {
    const { message } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        {message.length &&
          <div className="alert">{message}</div>
        }
        <input ref={ref => this.newItem = ref} />
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

// test message block
// message == ''
expect(wrapper.state().message.length).toBe(0);
expect(wrapper).not.toContain('div.alert');
// message !== ''
wrapper.setState({ message: 'Something error' });
expect(wrapper.state().message.length).not.toBe(0);
expect(wrapper).toContain('div.alert');

// test function onSubmit
// submit with un-limit todoList
expect(wrapper.state().submitted).toBe(false);
expect(getTodoList().length).toBeLessThan(11);
wrapper.onSubmit();
expect(addTodo).toBeCalled();
expect(wrapper.state().submitted).toBe(true);

// submit with limit todoList
// limit todoList 方案 1
(new Array(10)).forEach((val, idx) => addTodo(`fakeItem${idx}`));
addTodo = jest.fn();
expect(getTodoList().length).toBe(10);
wrapper.onSubmit();
expect(addTodo).not.toBeCalled();

// limit todoList 方案 2
getTodoList = jest.fn().mockReturnValue(new Array(10)); // mock getTodoList
expect(getTodoList().length).toBe(10);
wrapper.onSubmit();
expect(addTodo).not.toBeCalled();

// submitted is not used?

// test event 方案 3
const wrapper = mount(<AddTodo />);
expect(wrapper.state().submitted).toBe(false);
wrapper.find('form').simulate('submit');
wrapper.onSubmit = jest.fn(); // mock function
expect(wrapper.onSubmit).toBeCalled();
