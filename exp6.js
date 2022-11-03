function normaladdition (a,b){
    console.log("this is a normal function which returns ADDITION")
    console.log("answer =",a+b);
}

normaladdition(3,5);

const arrowfun = (a) =>{
    console.log("this is a arrow function ")
    console.log("table of given number is ")
    for(let r=1;r<=10;r++){

        let table=a*r;

        console.log(a,"*",r,"=",table);
    }
}
arrowfun(5);

const anonymousfun=function(s){
    console.log("this is anonymous function ")
    let sum=0;
    for (num of s){
        sum +=num
    }
    console.log("sum of the given numbers are =",sum)
}
anonymousfun([1,2,3,4,5,6,7,8,9,10]);

function* generatorFunc() {
    console.log("rohit")
    var y="huihfh";
    yield y;
    console.log("patil")
    yield y;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());