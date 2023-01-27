// action
const todoList = [];
function addTodo(item) { todoList.push(item); }

// component
class AddTodo extends Component {
  onSubmit = () => {
    addTodo(...);
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
