import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
const Tsrules = () => {
  const ObjectTs = () => {
    // {} 用来指定对象中可以包含哪一些属性
    //在属性后面加上？
    //  [propsName: string]: any 表示任意类型属性
    let a: { name: string; age?: number; [propsName: string]: any };
    a = { name: "1", age: 1, gender: "男" };
    /**
     * 设置函数结构的类型声明
     * 语法: (形参：类型) => 返回值
     */
    let d: (a: number, b: number) => number;
  };

  const ArrayTs = () => {
    // 数组类型
    let arr: number[] = [1, 2, 3];
    let arr2: Array<number> = [1, 2, 3];

    // 数组泛型
    let arr3: Array<number> = [1, 2, 3];

    // 数组泛型
    let arr4: Array<number | string> = [1, 2, 3, "1"];
  };

  const tupleTs = () => {
    // 元组类型: 固定长度的数据，效率高一些
    let arr: [number, string] = [1, "1"];
    let arr2: [number, string, boolean] = [1, "1", true];
  };

  const enumTs = () => {
    // 枚举类型
    enum Gender {
      Male = 0,
      Female = 1,
    }
    let i: { name: string; gender: Gender };
    i = {
      name: "1234",
      gender: Gender.Male,
    };
    console.log(i.gender === Gender.Male);
  };

  // 类型断言as 是用来
  const typeAssertion = () => {
    let a: any = 123;
    let b: number = a as number;
    // let c: number = <number>a;
  };

  const typeAlias = () => {
    // 类型别名
    type Name = string;
    let name: Name = "123";
  };

  const classTs = () => {
    // 类
    //abstract 抽象类 不能创建实例，只能用来继承，可添加抽象方法
    abstract class Person {
      name: string;
      age: number;
      //constructor构造函数，会在对象(new Person()->constructor会执行)创建时调用
      constructor(name: string, age: number) {
        //在实例方法中，this就表示当前的实例，添加的属性会往p实例上面加
        this.name = name;
        this.age = age;
      }

      //抽象方法 没法方法体，子类必须对抽象方法进行重写
      abstract sayHello(): void;
    }
    // let p = new Person('小狗', 5);
    //继承
    class Student extends Person {
      grade: number;
      // 不写会自动调用父类的construtor,子类写了必须手动调用父类的construtor
      constructor(name: string, age: number, grade: number) {
        //super当前类的父类，如果子类写了构造函数，在子类构造函数必须对父类进行调用，子类继承了父类的属性和方法，需要在构造函数中初始化父类的状态。
        super(name, age); //
        this.grade = grade;
      }
      //重写
      sayHello() {
        console.log("hello" + this.name + "/" + this.grade);
      }
    }
  };

  //接口
  const interfaceTs = () => {
    let arr = [[1, 2], 3, [4, [5, [6]]]];
    // 接口
    // interface IArray {
    //   [index: number]: number;
    // }
    // 扁平
    function flatten(arr: Array<any>): number[] {
      let result: number[] = [];
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          result = result.concat(flatten(arr[i]));
        } else {
          result.push(arr[i]);
        }
      }
      return result;
    }
    flatten(arr)
  };

  useEffect(() => {}, []);

  return <div>1234567</div>;
};
export default Tsrules;
