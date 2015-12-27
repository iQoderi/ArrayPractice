/**
 *
 * Created by qoder on 15-12-27.
 */

//查找数组里面所有年龄大于18的对象
var arr = [
    {age: 19, name: 'jack'},
    {age: 20, name: 'qoder'},
    {age: 17, name: 'john'},
    {age: 16, name: 'tom'},
    {age: 22, name: 'andy'}
];
function filterAdult(arr) {
    var adultArr = [];
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].age > 18) {
                adultArr.push(arr[i]);
            }
        }

        return adultArr;
    } else {
        console.log("函数参数不正确!");
        return false;
    }
}

console.log(filterAdult(arr));
console.log('**********************************这是分割线*************************************')

//判断数组里面的所有元素是不是都大于0

function isAllNumPOsive(arr) {
    if (Array.isArray(arr)) {
        var flag = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] <= 0) {
                flag = false;
            }
        }
        return flag;
    } else {
        return false;
    }
}

console.log(isAllNumPOsive([1, 2, 3, 4, 5]));
console.log('**********************************这是分割线*************************************')
//改变传入的数组，将数组的第n（从0开始算）个元素放到数组的开头
function putFirst(arr, index) {
    if (Array.isArray(arr)) {
        var item = arr[index];
        arr.splice(index, 1)[0];
        arr.unshift(item);
        return arr;
    } else {
        console.log('传入参数不合法');
        return false;
    }
}

console.log(putFirst([1, 2, 3, 4, 5, 6, 7], 3));
console.log('**********************************这是分割线*************************************')
//将argument对象转换成数组
function toArray(arguments) {
    var newArr = [];
    for (var i = 0; i < arguments.length; i++) {
        newArr.push(newArr);
    }
    return newArr;
}

(function () {
    var arr = toArray(arguments);
    console.log(Array.isArray(arr));
})(1, 2);
console.log('**********************************这是分割线*************************************')

//将数组中的数字内容求和
function sum(arr) {
    if (Array.isArray(arr)) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                sum += arr[i];
            }
        }
        return sum;
    } else {
        console.log('传入参数不合法');
        return false;
    }
}

console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(sum([1, 2, 3, 4, {'name': 'Qoder'}, 6]));
console.log('**********************************这是分割线*************************************');

//将数组中元素按age字段的值，从小到大排序
function sortAge(arr, key) {
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            //if (typeof  arr[i] == 'object') {
            for (var j = i; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    var item = arr[j];
                    arr[j] = arr[i];
                    arr[i] = item;
                }
                //}
            }
        }
        return arr;
    } else {
        console.log('传入参数不合法');
        return false;
    }
}

console.log(sortAge(arr, 'age'));
console.log('**********************************这是分割线*************************************')

//将数组元素去重，其中数组元素均为基本类型
function uniq(arr) {
    if (Array.isArray(arr)) {
        var arrLen = arr.length;
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] == item) {
                    var k = j;
                    arr.splice(k, 1);
                }
            }
        }
        return arr;
    } else {
        console.log('传入参数不合法');
        return false;
    }
}
console.log(uniq([1, 2, 3, 3, 4, 4, 5, 6]));
console.log('**********************************这是分割线*************************************');

//编写函数将数组的内容乱序
function redom(arr) {
    var newArr = [];
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            var length = arr.length;
            var rNum = parseInt(Math.random() * length);
            newArr.push(arr[rNum]);
            arr.splice(rNum, 1);
        }
        return newArr;
    } else {
        console.log('输入参数不合法');
        return false;
    }
}

console.log(redom([1, 2, 3, 4, 5, 6, 7]));
console.log('**********************************这是分割线*************************************');

//数组联系API
//查找数组对象中age大于18对象
function filterAdult2(arr) {
    var res = [];
    if (Array.isArray(arr)) {
        if (arr.filter) {
            //如果浏览器支持filter
            res = arr.filter(function (each) {
                return each.age > 18;
            })
        } else {
            arr.forEach(function (each) {
                if (each.age > 18) {
                    res.push(each);
                }
            })
        }
    }
    return res;
}

console.log('**********************************这是分割线*************************************');
//判断数组中所有的数字是否大于0；
function isAllNumPosive2(arr) {
    var res = true;
    if (Array.isArray(arr)) {
        if (arr.every) {
            res = arr.every(function (each) {
                var isPosive = true;
                if (typeof each == 'number' && each < 0) {
                    isPosive = false;
                }
                return isPosive;
            })
        } else {
            arr.forEach(function (each) {
                if (typeof each == 'number' && each < 0) {
                    res = false;
                }
            })
        }
    } else {
        throw  new TypeError('param is not array');
    }
    return res;
}

//改变传入的数组，将数组的第n个元素（从0开始计算）个元素放到数组的开头
function putFirst2(arr, n) {
    if (Array.isArray(arr)) {
        var item = arr.splice(n, 1)[0];
        arr.unshift(item);
    }
}

//将arguments对象转换为数组
function toArray(isAllLikeArray) {
    return [].slice.call(isAllLikeArray);
}


//将数组中的数字内容求和
function sum2(arr) {
    var res = 0;
    if (Array.isArray(arr)) {
        if (arr.reduce) {
            res = arr.reduce(function (prev, curr) {
                if (typeof curr == 'number') {
                    return prev + curr;
                }
                return prev;
            }, 0);
        } else {
            arr.forEach(function (each) {
                if (typeof each == 'number') {
                    res += each;
                }
            })
        }
        return res;
    }
}


//将数组中的元素按照age字段排序
function sortAge2(arr) {
    var res = false;
    if (Array.isArray(arr)) {
        res = arr.sort(function (a, b) {
            return a.age < b.age ? -1 : 1;
        });
    } else {
        throw new TypeError('param is not Array');
    }
}

//将数组中的元素去重,其中元素都为基本类型
function uniq2(arr) {
    var res = [];
    if (Array.isArray(arr)) {
        arr.forEach(function (each) {
            if (res.indexOf(each) === -1) {
                res.push(each);
            }
        })
    } else {
        throw new TypeError('param is not Array');
    }
    return arr;
}

//or
function uniq3(arr) {
    var res = [];
    var cache = {};
    if (Array.isArray(arr)) {
        arr.forEach(function (each) {
            if (cache[each] === undefined) {
                res.push(each);
            }
            cache[each] = true;
        });
    } else {
        throw  new TypeError('param is not Array');
    }
    return res;
}


//将数组中的元素乱序
function  random2(arr){
    var res;
    if (Array.isArray(arr)){
        res=arr.sort(function () {
            return Math.random()>0.5?1:-1;
        });
    }else {
        throw  new TypeError('param is not Array');
    }
    return res;
}




































