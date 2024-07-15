const MyObject = {
  foo: 'bar'
};

function html(strings, ...values) {
  return JSON.stringify(values[0], null, 2);
}
class Foo {
  bar() {
    return html`${MyObject}`;
  }
}
const foo = new Foo();
console.log(foo.bar());
