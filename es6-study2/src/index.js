let name="dingge";
let a=1;
let b=2;
let dec=`<b>es6</b>是一门好用的<i>课程</i>,${name}正在学习改课程!${a+b}`
document.write(dec);
document.write("*".repeat(100));

// 二进制声明 Binary  以0B开头+二进制数
let binary=0B010101;
console.log(binary);
// 八进制声明 Octal 以0o开头+八进制数
let octal=0o666;
console.log(octal);
// 判断是否为数字
let c=918.2;
console.log(Number.isFinite(123));
console.log(Number.isNaN(123));
console.log(Number.isInteger(123.4));
console.log(Number.parseInt(c));
console.log(Number.parseFloat(c));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
let N=Number.MAX_SAFE_INTEGER;
console.log(Number.isSafeInteger(N+1));

// 箭头函数
let add=(a,b=1)=>a+b;
console.log(add(1))

let add1=(a,b,c)=>{
	return a+b+c;
}
console.log(add1(1,2,3))

// 对象的函数解构
let json={
	a:"westbrook",
	b:"george",
	c:"anthony"
}
let fun=({a,b,c})=>{
	console.log(a,b,c);
}
fun(json);

// 展开运算符
let arr1=[4,5,6];
let sum=(a,b,c)=>{
	console.log(a+b+c);
}
sum(...arr1);

// in的用法  判断某属性是否存在于对象中 返回true或false
let obj={
	a:"west",
	b:"george"
}
console.log("a" in obj);  // true  key  in obj
console.log("c" in obj); //false
// 判断数组对应下标是否为空位 没有值
let arr2=["west",,""];
console.log(0 in arr2); // true   i in arr  
console.log(1 in arr2); // false
console.log(2 in arr2); // true   

// 数组遍历 forEach
let arr3=["west0","ge","ding"];
arr3.forEach((val,index)=>console.log(index,val));

// filter some
arr3.filter(x=>console.log(x));
arr3.some(x=>console.log(x));

// map 替换
console.log(arr3.map(x=>"web"))

// toString() 和join()
console.log(arr3.toString());
console.log(arr3.join("-"));

// 对象的赋值
let name1="westbrook-ding";
let skill="es6";
let obj1={name1,skill};
console.log(obj1); 

// key值的构建
let key="skill";
let obj3={
	[key]:"es6"
}
console.log(obj3);

// is()方法
let obj4={name:"west"};
let obj5={name:"west"};
console.log(Object.is(obj4.name,obj5.name)); // true
// === 同值相等  is() 严格相等
console.log(+0===-0); // true
console.log(NaN===NaN); // false
console.log(Object.is(+0,-0)); // false
console.log(Object.is(NaN,NaN)) // true

// assign()方法 合并几个对象的属性 如果有相同属性则会覆盖
let a1={b:"west",c:"brook"};
let b1={c:"-",e:"ding"};
let c1={e:"perfect",g:"good"};
let d1=Object.assign(a1,b1,c1);
console.log(d1);

// Symbol的用法:对对象属性的保护  循环时不输出
let obj6={name:"dingge",skill:"web"};
// 将对象的属性定义成Symbol类型进行保护
let age=Symbol();
obj6[age]=18;
console.log(obj6);
for(let item in obj6){
	console.log(obj6[item]);
}
// 通过obj[age] 输出
console.log(obj6[age]); 

// Set 的用法   数组去重
let setArr=new Set(["west","george","anthony"]);
console.log(setArr); // Set(3){"west","george","anthony"} 跟json一样是一种数据结构
setArr.add("west");
console.log(setArr);  //不允许数组中元素重复
setArr.add("ding");   // add() 类似数组的push方法
console.log(setArr);
// has()查找元素是否存在于数组中 返回true 或false  
console.log(setArr.has("ding")); // true
console.log(setArr.has("li")); // false
// delete()  删除数组某个元素
setArr.delete("west");
console.log(setArr);
// clear() 删除数组所有元素
// setArr.clear();
console.log(setArr);

// 遍历 for of
for(let item of setArr){
	console.log(item);
}
// forEach() 方法
setArr.forEach((val)=>console.log(val));
// size属性 等价于length属性
console.log(setArr.size);

// WeakSet() 添加对象  相同的内存地址不允许重复
let weakObj=new WeakSet();
let obj7={a:"westbrook",b:"georeg"};
let obj8={a:"westbrook",b:"georeg"};
weakObj.add(obj7);
weakObj.add(obj8);
console.log(weakObj); // obj7和obj8都存在  因为obj7和obj8是不同的内存地址
let obj9=obj7;
weakObj.add(obj9);
console.log(weakObj); //  obj7存在 obj9不存在  因为obj7和obj9指向同一块内存空间

// map数据结构 key和value非常灵活 key和value可以设置任意值
let json1={
	name:"jsding",
	age:25
}
let map=new Map();
// set() 添加值
map.set(json,"wesbrook-ding");
map.set("person",json);
console.log(map);
// get() 通过key获取value
console.log(map.get(json));
console.log(map.get("person"));
// delete(key) 删除 clear() 清除所有
map.delete(json);
console.log(map);
// has()查找
console.log(map.has("person")); // true
console.log(map.has(json)); // false
// size 长度

//proxy 代理 ES6增强  对象和函数(方法) 预处理  生命周期函数
let obj10={
	add:function(a,b){
		return a+b;
	},
	name:"ding"
}
let pro=new Proxy({
	add:function(a,b){
		return a+b;
	},
	name:"ding"
},{
	get:function(target,key,property){
		// 获取值前干些什么
		console.log("获取值前干什么");
		console.log(target);  // target 为obj10
		console.log(key);
		return target[key];
	},
	// value 为新设置的值  receiver为旧值
	set:function(target,key,value,receiver){
		// 设置值前干点什么
		console.log("设置之前干点什么");
		console.log(`设置${key}=${value}`);
		return target[key]=value;
	}
})
console.log(pro.name);
pro.name="westbrook";
console.log(pro.name);

// apply()
let target1=()=>"I am westbrook-ding";
let handler={
	apply(target,ctx,args){
		// 调用函数前做些什么
		console.log("do apply");
		return Reflect.apply(...arguments);
	}
}
let pro1=new Proxy(target1,handler);
console.log(pro1());

// promise 回调地狱 1.洗菜做饭  2.坐下来吃饭 3.收拾桌子洗碗
let state=1;
function step1(resolve,reject){
	console.log("1.开始-洗菜做饭");
	if(state==1){
		resolve("洗菜做饭完成");
	} else{
		reject("洗菜做饭错误");
	}
}
function step2(resolve,reject){
	console.log("2.开始-坐下来吃饭");
	if(state==1){
		resolve("吃饭完成");
	} else{
		reject("吃饭错误");
	}
}
function step3(resolve,reject){
	console.log("3.开始-收拾桌子洗碗");
	if(state==1){
		resolve("收拾桌子洗碗完成");
	} else{
		reject("收拾桌子洗碗错误");
	}
}
new Promise(step1)
.then(function(val){
	// 第一步完成时  打印第一步resolve信息
	console.log(val);
	// 执行第二步
	return new Promise(step2);
})
.then(function(val){
	console.log(val);
	return new Promise(step3);
})
.then(function(val){
	console.log(val);
});

// class的用法 
class People{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	eat(){
		console.log(this.name+"吃大餐");
	}
	play(){
		this.eat();
		console.log(this.name+"环游世界");
	}
	add(){
		console.log("会加法运算");
	}
}
let person=new People("dingge",25);
console.log(person.name);
console.log(person.age);
console.log(person.eat());
console.log(person.play());

//继承 extends
class Per extends People{
 constructor(name,age,sex){
    // 通过supper去继承
    super(name,age);
    this.sex=sex;
 }
}
let p=new Per("west",18,"男");
console.log(p.name);
console.log(p.age);
console.log(p.sex);
console.log(p.eat());
