//  对象的多态性
const makeSound = function(animal) {
  animal.sound();
}
//  鸭子叫
const Duck = function() {
  Duck.prototype.sound = function() {
    console.log(`嘎嘎嘎`);
  }
}
//  鸡叫
const Chicken = function() {
  Chicken.prototype.sound = function() {
    console.log(`咯咯咯`)
  }
}
//  狗叫
const Dog = function() {
  Dog.prototype.sound = function() {
    console.log(`汪汪汪`)
  }
}

//  提出公共方法
const renderMap = function(map) {
  //  判断map.show是否在方法的原型上
  if (map.show instanceof Function) {
    map.show();
  }
}
//  写入需调用方法
const baiduMap = {
  show: function() {
    console.log(`百度地图`)
  }
}
//  模拟出public、private
const myObject = function() {
  const __name = 'sven';  //  私有变量(private)
  return {
    //  公有方法(public)
    getName: function() {
      return __name;
    }
  }
};

//闭包
const mult = (function() {
  let chche = {};
  const calculate = function() {
    let a = 1;
    for(let i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return a;
  }
  return function() {
    const args = Array.prototype.join.call(arguments, ',');
    if (args in chche) {
      return chche[args]
    }
    return chche[args] = calculate.apply(null, arguments);
  }
})();
//  电视的方法
class Tv {
  constructor(name) {
    //
  };
  open() {
    console.log(`打开电视`)
  };
  close() {
    console.log(`关闭电视`)
  }
}
const openTvCommand = function(receiver) {
  this.receiver = receiver;
}
//  执行命令
openTvCommand.prototype.execute = function() {
  this.receiver.open()
}
//  撤销命令
openTvCommand.prototype.undo = function() {
  this.receiver.close()
}
export default {
  makeSound,
  Duck,
  Chicken,
  Dog,
  renderMap,
  baiduMap,
  myObject,
  mult
}
