interface User{
    name:string;
    age:number;
}

function sumOfAge(user1: User, user2:User){
    return user1.age + user2.age;
}

const age = sumOfAge({name:"Somesh",age:27},{name:"Meshram",age:7});
console.log(age);

