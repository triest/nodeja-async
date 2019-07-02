Задание:

1.Promise reslove =>5


a= await   setTimeout(5, 250);

res=await(ex1(5))

2.Вернуть токен

async function ex2(){
	return {token:"token"}
}
 
res=await ex2()
console.log(res.token)

3. 

async function ex3(){
	throw new Error('Unknow error')
}
try{
res=await ex3()
console.log(res.token)
}catch{
	console.log("error")
}


5.   async function ex5(){
		let v="token example"
	    return await setTimeout(v, 250);
}

6.

 async function newError(){
	return new Error('Unknow error');
}

newError().catch(alert("Error"))

async function getError(){
 const {error, user} = await findUser(req.body.login)

if (!erro){
	console.log("error!")
}
}



