// component
class AddTodo extends Component {
  state = { submitted: false };

  onSubmit = () => {
    addTodo(this.newItem.value);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={ref = this.newItem = ref} />
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
// snapshot?
expect(wrapper.toJson()).toMatchSnapshot();

// test event
const wrapper = mount(<AddTodo />);
expect(wrapper.state().submiited).toBe(false);
wrapper.find('form').simulate('submit');
// 方案 1
// after simulate
const list = getTodoList();
expect(list).toContain(...);
// 方案 2
addTodo = jest.fn(); // mock function
// after simulate
expect(addTodo).toBeCalled();

// add onSubmit test
expect(wrapper.state().submitted).toBe(false);
wrapper.onSubmit();
expect(addTodo).toBeCalled();
expect(wrapper.state().submitted).toBe(true);

// 方案 3
wrapper.onSubmit = jest.fn(); // mock function
// after simulate
expect(wrapper.onSubmit).toBeCalled();
