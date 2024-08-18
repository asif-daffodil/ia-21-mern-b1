/* function myFunc () {
    return 'Hello World!';
} */

/* const myFunc = function () {
    return 'Hello World!';
} */


/* const myFunc = () => {
    return 'Hello World!';
} */

// const myFunc = () => 'Hello World!';

const myPromise = new Promise((resolve, reject) => {
    if(5 == 5){
        setTimeout(() => {
            resolve('Hello World!');
        }, 2000);
    }else{
        reject('Some went wrong!');
    }
});
myPromise.then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});
console.log('Start');

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const myPromise2 = async () => {
    await delay(2000);  // Wait for 2 seconds
    console.log('Hello myPromise2!');
};

const myPromise3 = async () => {
    await delay(2000);  // Wait for 2 seconds
    console.log('Hello myPromise3!');
};

// Call myPromise2 and then myPromise3
myPromise2().then(async () => {
    await myPromise3();
});


const x = 6;
try{
    if(x !== 5){
        throw new Error('x is not 5');
    }else{
        console.log('x is 5');
    }
}catch(error){
    console.log(error.message);
}finally{
    console.log('Finally block');
}

console.log(myTestFunc());
function myTestFunc() {
    return 'Hello World! from myTestFunc';
}