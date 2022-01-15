const oi = 'oi'
console.log(oi)

function foo() {
  const oi = 'ola, como vai voce'
  console.log(oi)

  function bar() {
    const oi = 'ola, bar'
    console.log(oi)
  }
  bar()
}

foo()
console.log(oi)

obj = {
  oi: 'obj deu oi'
}

console.log(obj, obj.oi)

class OPA {
  oi = 'dentro da classe'
}

console.log(new OPA().oi)
