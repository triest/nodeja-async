//Задание: //1.Promise reslove =>5
ex1 = function() {
  return 5;
};

async function fun1() {
  return await ex1();
}

fun1().then(v => console.log(v));

ex2 = function() {
  return { token: "test" };
};

async function fun2() {
  return await ex2();
}

fun2().then(v => console.log(v));

//3.

function ex3() {
  throw new Error("Unknow error");
}

async function ex31() {
  try {
    res = await ex2();
    // console.log(res.token);
  } catch (er) {
    console.log("error");
  }
}

ex31()
  .then(v => console.log(v))
  .catch(v => console.log(v));

const timeout = ms => new Promise(res => setTimeout(res, ms));

async function delay() {
  await timeout(250);
  console.log("token example");
}

delay();

//6.

async function newError() {
  return await new Error("Unknow error");
}

newError()
  .then(v => console.log(v))
  .catch(v => console.log(err));

//7

async function ranError() {
  let rand = Math.random();
  if (rand > 0.5) {
    return "No rand error";
  } else {
    return await new Error("Rand  error");
  }
}

ranError()
  .then(v => console.log(v))
  .catch(v => console.log(err));
