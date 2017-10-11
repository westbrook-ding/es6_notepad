"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//json数组格式
var json = {
	"0": "westbrook",
	"1": "qiaozhi",
	"2": "andongni",
	length: 3
	// 将json数组格式转化为数组
};var arr1 = Array.from(json);
console.log(arr1);

// Array of  将以逗号分隔的字符串转化成数组
var str = "westbrook,george,anthony"; // "westbrook","george","anthony"
var arr2 = Array.of(str);
console.log(arr2);

// 数组的find()实例方法  查找数组中的元素
var arr3 = ["1", "2", "3", "4", "westbrook", "george", "anthony"];
// value 代表数组中的元素 index表示下标 arr3表示调用find方法的数组 
var res1 = arr3.find(function (value, index, arr3) {
	return index > 4;
});
console.log(res1);

// fill(要替换成的元素,要替换的位置的起始下标,要替换的位置的结束下标) 替换数组元素  包含开始不包含结束
var arr4 = ["we", "ghe", "saf"];
var res2 = arr4.fill("westbrook", 1, 3);
console.log(res2);

// 遍历数组 for of     
//item of arr  item为数组元素  
//item of arr.keys() item 为下标
// item of arr.entries()  item 为[0,"we"]
// [index,val] of arr.entries()  index为下标 val为数组元素
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = arr4.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 2),
		    index = _step$value[0],
		    val = _step$value[1];

		console.log(index + ":" + val);
	}

	// entries  条目
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var list = arr4.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

function add(a, b) {
	return a + b;
}
alert(add.length);
