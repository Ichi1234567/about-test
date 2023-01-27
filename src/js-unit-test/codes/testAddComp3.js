// component App
function App() {
  return (
    <div>
      <AddTodo />
    </div>
  );
}

// test
const wrapper = mount(<App />);
expect(wrapper).toContain('AddTodo');
