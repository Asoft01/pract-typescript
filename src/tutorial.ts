// console.log('typescript tutorial');

// interface someValues {
//     name: string; 
//     id: number;
// }

// let someObj:someValues = {
//     name : 'random', 
//     id: 123, 
// }; 

// console.log(someObj); 
///////////////////////////////////////////////////////////////////////////
// let awesomeName: string = 'shakeAndBake'; 
// awesomeName = 'something';
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let amount: number = 20; 
// amount = 12  - 1;

// let isAwesome:boolean = true; 
// isAwesome = false; 
// isAwesome = 'shakeAndBake'; 

////////////////////////////////////////challenge /////////////////////////
// let greeting: string = "Hello, Typescript"; 
// greeting = greeting.toUpperCase(); 

// let age: number = 25; 
// age = age + 2; 

// let isAdult: boolean = age >=18; 
// isAdult = !isAdult; 
// console.log(isAdult); 

// // greeting = 10; 
// // age = 'thirty'; 
// // isAdult = '25';
// console.log(greeting, age, isAdult); 

/////////////////////////////////////////////////////////////////////////////
// let tax: number | string = 10; 
// tax = 100; 
// tax = '$10'; 

// let requestStatus: 'pending' | 'success' | 'error' = 'pending';
// requestStatus = 'success'; 
// requestStatus = 'error'; 

///////////////////////////////////////////////////////////////////////////
// let notSure: any = 4; 
// notSure = 'maybe a string instead'; 
// notSure = false;

//////////////////////////////////////////////////////////////////////////
// const books = ['1984', 'Brave New World', 'Fahrenheit 451']; 
// let foundBook;

// for (let book of books) {
//     if(book === '1984') {
//         foundBook = book;
//         break;
//     }
// }

// foundBook = 10; 
// console.log(foundBook); 
////////////////////////////////////////////////////////////////////////////
const books = ['1984', 'Brave New World', 'Lookman 451']; 
let foundBook: string | undefined; 

for(let book of books) {
    if(book === '1984') {
        foundBook = book;

        foundBook = foundBook.toUpperCase(); 
        break;
    }
}
console.log(foundBook?.length);

////////////////////////////////////////////////////////////////////////////
// Challenge 
// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

// let orderStatus:  'processing' | 'shipped' | 'delivered' = 'processing'; 
// orderStatus = 'shipped' 
// orderStatus = 'delivered';

// let discount: number | string = 20;
// discount = '20%';
// console.log(discount);

////////////////////////////////////////////////////////////////////////////////
// let prices: number[] = [100, 75, 42]; 
// // prices.push('hello'); 

// let fruit: string[] = ['apple', 'orange']; 

// // let randomValues:[] = ['hello'];  // it will complain
// let emptyValue = []; 
//////////////////////////////////////////////////////////////////////////////
// let names = ['peter', 'susan', 1];
// let array:(string | boolean)[] = ['apple', true, 'orange', false];

//////////////////////////////////////////////////////////////////////////////
// let temperatures:number[] = [20, 25, 30]; 
// // console.log(temperatures); 
// // temperatures.push('hot');
// let colors: string[] = ['red', 'green', 'blue'];
// // colors.push(true);

// let mixedArrays:(number | string)[] = [1, 'two', 3];
// // console.log(mixedArrays);

///////////////////////////////// Objects in Typescripts ///////////////////////////
let car:{brand: string, year: number } = {brand: 'toyota', year: 2020};

car.brand = 'ford';
// car.color