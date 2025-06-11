// // let a:null = null;
// // a = []
// // a = 'sdf'
// // a = 7
// // console.log('Hello')
// // type infer
// // data types
// // number string boolean null undefined
// // any unknown, never
// // let a:number = 20
// // let b:number = 40
// // console.log( a + b)
// // array
// let numbers: number[] = [1, 2, 3, 4];
// let arr: Array<number> = [1, 2, 3, 4];
// // arr.push('as')
// // tuples
// const tuple: [number, string, boolean] = [1, "Alice", true];
// // enum
// // enum Roles {
// //     user="USER",
// //     admin = 'ADMIN',
// //     super_admin = 'SUPER_ADMIN'
// // }
// // let UserRole:Roles = Roles.user
// // console.log(Roles.user)
// // console.log(Roles.admin)
// // console.log(Roles.super_admin)
// // objects
// // interface IUser {
// //     name:string;
// //     last_name?:string;
// //     age:number;
// // }
// // const user:IUser = {
// //     name:'abc',
// //     age:28,
// //     last_name: 'xyz'
// // }
// // const user2:IUser = {
// //     name:'abc',
// //     age:28,
// //     // last_name: 'xyz'
// // }
// // type
// type IUser = {
// 	name: string;
// 	last_name?: string;
// 	age: number;
// };
// const user2: IUser = {
// 	name: "abc",
// 	age: 28,
// 	last_name: "xyz",
// };
// // | &
// // let value:number | string
// // value =
// // &
// interface IUser1 {
// 	name: string;
// 	last_name?: string;
// }
// interface IUser2 extends IUser1 {
// 	email: string;
// 	age: number;
// }
// type User = IUser1 & IUser2;
// let user4: User = {
// 	email: "",
// 	age: 10,
// 	name: "",
// };
// // custom type
// // success, pending error fail
// type responseType = "success" | "pending" | "error" | "fail";
// let responseStatus: responseType;
// responseStatus = "pending";
// function
// function add(a:number,b:number=10) {
//     // console.log(a + b)
//     return a + b
// }
// add(12,23)
// class type
// class Account {
//     protected  amount:number
//     constructor(amount:number){
//         this.amount = amount
//     }
// }
// const acc = new Account(200)
// console.log(acc.amount)
// class


// utility types

interface IUser {
name:string;
email:string;
password:string
}

type IUserPartial = Partial<IUser>

type IUserRequired = Required<IUserPartial>

const user:IUser ={
 name:'abc',
 email:'abc@gmail.com',
 password:'123456',

}

// user.email = 'xyz@gmail.com'

// Omit ,Pick

type OnlyName = Omit<IUser, 'password' | 'email'>
type OnlyEmail = Pick<IUser, 'email'>









// required
// readonly
// partial


interface ILocale {en:string,ne:string}

let obj:Record<string,ILocale> = {
    name:{
      en:'',
      ne:''
    },   
}

//generic type

//interface

interface Box<T> {
    value:T
}


const box:Box<string> ={
    value:''
}

const numberBox:Box<number> = {
    value:1
}

// function

const identity = <T>(value:T ):T =>{

            return value
}


identity<number>(1)
identity<string>('hello')



class Store<T> {
     data:T[]
    constructor(initialData:T[]){
        this.data = initialData;
    }

    push(ele:T){
       return  this.data.push(ele)
    }

    pop(){
       return this.data.pop()
    }
}

const store = new Store<number>([1,2,3,4])
const storeStr = new Store<string>(['1','2','3'])