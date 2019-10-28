// 方案 1
function redirect(dest) {
  window.location.href = dest;
}

function clickAbout() {
  redirect('/about');
}

// test 方案1
redirect = jest.fn(); // mock function
clickAbout();
expect(redirect).toBeCalledWith('/about');

// 方案 2
function redirect(location, dest) {
  location.href = dest;
}

function clickAbout(location) {
  redirect(location, '/about');
}

// test 方案 2
let location = {};
clickAbout(location);
expect(location.href).toBe('/about');
