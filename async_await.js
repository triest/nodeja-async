Задание:

//1.Promise reslove =>5

ex2=function(){
	return {token:"token"}
}

async function  fun2(){
	return await ex2()
}

 

fun2().then(v => console.log(v))


//3. 

function ex3(){
	throw new Error('Unknow error')
}


async function ex31(){
try{
res=await ex2()
console.log(res.token)
}catch{
	console.log("error")
}
}


ex31()



const timeout = ms => new Promise(res => setTimeout(res, ms))

async function delay () {

  await timeout(5501)
  console.log("timeout")
}

delay()



//6.

 async function newError(){
	return new Error('Unknow error');
}

newError().catch(console.log("Error"))





async function getError(){
 const {error, user} = await newError();

if (!error){
	console.log("error!")
}
}

getError();

