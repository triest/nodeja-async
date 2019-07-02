195210

function later() {
  return new Promise(function(resolve) {
    setTimeout(resolve({ token: 'test' }), 250);
    //setTimeout(resolve, 250);
  });
};

function later() {
  return new Promise(function(resolve) {
    resolve(5);
  });
};


Вызов:
later().then(v => console.log(v))


Задание:

1.Promise reslove =>5


function later() {
  return new Promise(function(resolve) {
    setTimeout(resolve(5), 250);
  });
};

function later() {
  return new Promise(function(resolve) {
    resolve(5);
  });
};

2. Promise reslove =>{token:5}

function later() {
  return new Promise(function(resolve) {
    setTimeout(resolve({ token: 5 }), 250);
  });
};

function later() {
  return new Promise(function(resolve) {
   resolve({ token: 5 });
  });
};

3. Promice reject error 


Out:
{token: 5}token: 5__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()




Promise {<resolved>: undefined}
__proto__: Promise
catch: ƒ catch()
arguments: (...)
caller: (...)
length: 1
name: "catch"
__proto__: ƒ ()
[[Scopes]]: Scopes[0]
constructor: ƒ Promise()
all: ƒ all()
arguments: (...)
caller: (...)
length: 1
name: "Promise"
prototype: Promise {constructor: ƒ, then: ƒ, catch: ƒ, finally: ƒ, Symbol(Symbol.toStringTag): "Promise"}
race: ƒ race()
reject: ƒ reject()
resolve: ƒ resolve()
Symbol(Symbol.species): (...)
get Symbol(Symbol.species): ƒ [Symbol.species]()
__proto__: ƒ ()
[[Scopes]]: Scopes[0]
finally: ƒ finally()
then: ƒ then()
Symbol(Symbol.toStringTag): "Promise"
__proto__: Object
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: undefined

 
function later() {
  return new Promise(function(reject) {
    setTimeout(reject(new Error('Unknow error')), 250);
  });
}

function later() {
  return new Promise(function(reject) {
    reject(new Error('Unknow error'));
  });
}

Вывод: 
Error: Unknow error
    at <anonymous>:3:23
    at new Promise (<anonymous>)
    at later (<anonymous>:2:10)
    at <anonymous>:1:1


4.  С рандомом

function later() {
  return new Promise(function(reject, resolve) {
    let rand = Math.random();
    if (rand > 0.5) {
      setTimeout(resolve('ok'), 250);
    } else {
      setTimeout(reject(new Error('Unknow error')), 250);
    }
  });
}


function later() {
  return new Promise(function(reject, resolve) {
    let rand = Math.random();
    if (rand > 0.5) {
    resolve('ok');
    } else {
	reject(new Error('Unknow error'));
    }
  });
}

5.
Resolve через 250мс со значением "token example"

function func() {
  console.log("token example")
}

setTimeout(func(), 250);



6. Обработка ошибок в промис

p = function later() {
  return new Promise(function(resolve, reject) {
    reject(new Error('Unknow error'));
  });
};

p.catch(alert);

или

p.then(null, alert)

token=await test.env();


