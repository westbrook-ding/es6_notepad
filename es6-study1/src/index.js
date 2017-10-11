//json数组格式
let json={
	"0":"westbrook",
	"1":"qiaozhi",
	"2":"andongni",
	length:3
}
// 将json数组格式转化为数组
let arr1=Array.from(json);
console.log(arr1);

// Array of  将以逗号分隔的字符串转化成数组
let str="westbrook,george,anthony";  // "westbrook","george","anthony"
let arr2=Array.of(str);
console.log(arr2);

// 数组的find()实例方法  查找数组中的元素
let arr3=["1","2","3","4","westbrook","george","anthony"];
// value 代表数组中的元素 index表示下标 arr3表示调用find方法的数组 
let res1=arr3.find(function(value,index,arr3){
	return index>4;
})
console.log(res1);

// fill(要替换成的元素,要替换的位置的起始下标,要替换的位置的结束下标) 替换数组元素  包含开始不包含结束
let arr4=["we","ghe","saf"];
let res2=arr4.fill("westbrook",1,3);
console.log(res2);

// 遍历数组 for of     
//item of arr  item为数组元素  
//item of arr.keys() item 为下标
// item of arr.entries()  item 为[0,"we"]
// [index,val] of arr.entries()  index为下标 val为数组元素
for(let [index,val] of arr4.entries()){
	console.log(index+":"+val);
}
 
// entries  条目
let list=arr4.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

function add(a,b){
	return a+b;
}
alert(add.length);
