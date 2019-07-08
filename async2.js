//195210

function later() {
  return new Promise(function(resolve) {
    setTimeout(resolve({ token: "test" }), 250);
    //setTimeout(resolve, 250);
  });
}

//later();

console.log("1.Resolve token 'test'");
later().then(v => console.log(v));

function later2() {
  return new Promise(function(resolve) {
    resolve(5);
  });
}

console.log("2.Resolve 5");
later2().then(v => console.log(v));
/*
Вызов:
later().then(v => console.log(v))
*/

//Задание:

//1.Promise reslove =>5

function later3() {
  return new Promise(function(resolve) {
    setTimeout(resolve(5), 250);
  });
}

console.log("3.Resolve from 250ms");
later3().then(v => console.log(v));

function later4() {
  return new Promise(function(resolve) {
    resolve(5);
  });
}

console.log("4.Resolve from 250ms");
later4().then(v => console.log(v));

//2. Promise reslove =>{token:5}

function later5() {
  return new Promise(function(resolve) {
    setTimeout(resolve({ token: 5 }), 250);
  });
}

console.log("5.Resolve token from 250ms");
later5().then(v => console.log(v));

function later6() {
  return new Promise(function(resolve) {
    resolve({ token: 5 });
  });
}

/*4.  С рандомом*/

function later7() {
  return new Promise(function(reject, resolve) {
    let rand = Math.random();
    if (rand > 0.5) {
      setTimeout(resolve("ok"), 250);
    } else {
      setTimeout(reject(new Error("Unknow error")), 250);
    }
  });
}

console.log("7.Return rando error");
later7()
  .then(v => console.log(v))
  .catch(v => console.log(v));

//5.Resolve через 250мс со значением "token example"

function func() {
  console.log("token example");
}

//setTimeout(func(), 250);

//6. Обработка ошибок в промис

function later9() {
  return new Promise(function(resolve, reject) {
    reject(new Error("Unknow error1"));
  });
}

//p.catch(alert);

//или
later9().catch(console.log("error"));
//p.then(null, console.log("error"))
