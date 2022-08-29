
        // Array.prototype.map()
        // The map() method creates a new array populated with the results of
        //  calling a provided function on every element in the calling array.


        // Exercise 1: 
        //  * 
        //  * Make an array of numbers that are doubles of the first array
        //  *
        //  * Test Case: 
        //  *
        //  * console.log(doubleNumbers([2, 5, 100]));
        //  * 
        //  * Result:
        //  * [4, 10, 200]





        const numbers = [2, 5, 100];

        // pass a function to map
        const doubles = numbers.map(num => num * 2);

        console.log("EX1 = ", doubles);





        //  Exercise 2 : 
        //  * 
        //  * Take an array of numbers and make them strings
        //  *
        //  * Test Case: 
        //  *
        //  * console.log(stringItUp([2, 5, 100]));
        //  * 
        //  * Result:
        //  * ["2", "5", "100"]




        const number = [2, 5, 100];
        const stringsItUp = number.map(num => {
            return String(num);
        });
        console.log("EX2 = ", stringsItUp);




        //   Exercise 3:  
        //  * 
        //  * Capitalize each of an array of names
        //  *
        //  * Test Case: 
        //  *
        //  * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
        //  * 
        //  * Result:
        //  *  ["John", "Jacob", "Jingleheimer", "Schmidt"]




        // I Used The slice() method returns a shallow copy of a portion of an array into a new 
        // array object selected from start to end (end not included) where start and end 
        // represent the index of items in that array. The original array will not be modified.


        function capitalizeWords(arr) {
            return arr.map(element => {
                return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            });
        }


        console.log("EX3 = ", capitalizeWords(['hello', 'world']));





        // Exercise 4:  
        //  * 
        //  * Make an array of strings of the names
        //  *
        //  * Test Case: 
        //  *
        //  * console.log(namesOnly([
        //  *   {
        //  *       name: "Angelina Jolie",
        //  *       age: 80
        //  *   },
        //  *   {
        //  *       name: "Eric Jones",
        //  *       age: 2
        //  *   },
        //  *   {
        //  *       name: "Paris Hilton",
        //  *       age: 5
        //  *   },
        //  *   {
        //  *       name: "Kayne West",
        //  *       age: 16
        //  *   },
        //  *   {
        //  *       name: "Bob Ziroll",
        //  *       age: 100
        //  *   }
        //  *   ])); 
        //  * 
        //  * Result:
        //  *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]




        function namesOnly(arr) {
            return arr.map(i => i.name);
        }
        var data = namesOnly([
            {
                name: "Angelina Jolie",
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Paris Hilton",
                age: 5
            },
            {
                name: "Kayne West",
                age: 16
            },
            {
                name: "Bob Ziroll",
                age: 100
            }
        ])
        console.log("EX4 = ", data);






        // Exercise 5:  
        //  * 
        //  * Make an array of strings of the names saying whether or not they can go to The Matrix
        //  *
        //  * Test Case: 
        //  *
        //  * console.log(makeStrings([
        //  *    {
        //  *       name: "Angelina Jolie",
        //  *       age: 80
        //  *   },
        //  *   {
        //  *       name: "Eric Jones",
        //  *       age: 2
        //  *   },
        //  *   {
        //  *       name: "Paris Hilton",
        //  *       age: 5
        //  *   },
        //  *   {
        //  *       name: "Kayne West",
        //  *       age: 16
        //  *   },
        //  *   {
        //  *       name: "Bob Ziroll",
        //  *       age: 100
        //  *   }
        //  * ]));  
        //  * 
        //  * Result:
        //  * 
        //  * ["Angelina Jolie can go to The Matrix", 
        //  * "Eric Jones is under age!!", 
        //  * "Paris Hilton is under age!!", 
        //  * "Kayne West is under age!!", 
        //  * "Bob Ziroll can go to The Matrix"]




        function makeStrings(arr) {
            let strings = arr.map(function (string) {

                if (string.age >= 18) {
                    return string.name + 'can go to The Matrix';
                } else if (string.age) {
                    return string.name + 'is under age!';
                }
            })
            return strings;
        }

        console.log("EX5 = ", makeStrings([
            {
                age: 80
            },
            {
                name: "Eric Jones",
                age: 2
            },
            {
                name: "Paris Hilton",
                age: 5
            },
            {
                name: "Kayne West",
                age: 16
            },
            {
                name: "Bob Ziroll",
                age: 100
            }
        ]));



        // Exercise 6:  
        //  * 
        //  * Make an array of the names in h1s, and the ages in h2s
        //  *
        //  * Test Case: 
        //  *
        //  * console.log(readyToPutInTheDOM([
        //  *   {
        //  *       name: "Angelina Jolie",
        //  *       age: 80
        //  *   },
        //  *   {
        //  *       name: "Eric Jones",
        //  *       age: 2
        //  *   },
        //  *   {
        //  *       name: "Paris Hilton",
        //  *       age: 5
        //  *   },
        //  *   {
        //  *       name: "Kayne West",
        //  *       age: 16
        //  *   },
        //  *   {
        //  *       name: "Bob Ziroll",
        //  *       age: 100
        //  *   }
        //  * ])); 
        //  * 


        var result = readyToPutInTheDOM([{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }]);


        function readyToPutInTheDOM(arr) {

            return arr.map(function (obj) {
                return "<h1>" + obj.name + "</h1>" + "<h2>" + obj.age + "</h2>";
            });
        }





        console.log("EX6 = ", result)



        //  */
        // * Exercise 7:
        // * Write a function called doubleValues which accepts an array and returns a new array with all the values in 
        // the array passed to the function doubled
        // *
        // * Test Cases:
        // *   Test Case 1:  doubleValues([1,2,3]) 
        // *   Test Case 2:  doubleValues([1,-2,-3])  
        // *
        // * Result:
        // * Test Case 1: [2,4,6] 
        // * Test Case 2: [2,-4,-6]



        var my_array = [1, 2, 3];
        result = my_array.map(function doubleValues(item) {
            return item * 2;
        });


        console.log("EX7 = ", result);



        //  Exercise 8:
        //   * Write a function called valTimesIndex which accepts an array and returns
        //  a new array with each value multiplied by the index it is currently at in the array.
        //   *
        //   *
        //   * Test Cases :
        //   *   Test Case 1:  valTimesIndex([1,2,3])  
        //   *   Test Case 2:  valTimesIndex([1,-2,-3]) 
        //   * 
        //   * Result
        //   * Test Case 1: [0,2,6]
        //   * Test Case 2: [0,-2,-6]



        function valTimesIndex(arr) {
            return arr.map(function (value, index) {
                return value * index;
            });
        }
        console.log("EX8 = ", valTimesIndex([1, 2, 3]));




        //   * Exercise 9:
        //   * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
        //   * of that key in each object.
        //   * 
        //   * Test Case:
        //   * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
        //   * 
        //   * Result:
        //   * ['Elie', 'Tim', 'Matt', 'Colt']
        //   */



        function extractKey(arr, key) {
            return arr.map(function (value) {
                return value[key];
            });
        }

        console.log("EX9 = ", extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'name'));



        // * Exercise 10:
        //   * Write a function called extractFullName which accepts an array of objects and
        //   *  returns a new array with the value of the key with a name of "first" and the value of a key with the name of 
        //   *  "last" in each object, concatenated together with a space. 
        //   * 
        //   * Examples:
        //   * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"},
        //   *  {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
        //   */




        function extractFullName(arr) {
            return arr.map(function (val) {
                return val.first + " " + val.last;
            });
        }


        console.log("EX10 = ", extractFullName([{ first: 'Elie', last: "Schoppik" },
        { first: 'Tim', last: "Garcia" }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele" }]));





        //  *****************************************  Array.prototype.filter EX *****************************************

        // Array.prototype.filter()
        // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the 
        // elements from the given array that pass the test implemented by the provided function.




        // * Exercise 11:
        // Create a function called evenOnly
        // that accept an array
        // and return an array of even number only

        // Ex: evenOnly([1,8,6,4]) => [8,6,4]



        var arr1 = [1, 8, 6, 4];

        var evenNumber = arr1.filter(function evenOnly(x) {
            return x % 2 === 0;
        })

        console.log("EX11 = ", evenNumber);




        // * Exercise 12:
        // Create a function called multiFour
        // that accept an array
        // and return an array of these number that is a mutiply by 4

        // Ex: multiFour([1,8,6,4]) => [8,4]


        function multiFour(arr) {

            return arr.filter(function (x) {
                if (x % 4 == 0) {
                    return x;
                }
            }
            )
        }

        console.log("EX12 = ", multiFour([1, 8, 6, 4]));



        // * Exercise 13:
        // **this question not that easy mybe you will need to use two function inside each other

        // Create a function called containChar
        // that accept an array of string
        // and return an array of these string that contain this char

        // Ex: containChar(["hello","world"],w) => ["world"]
        // Ex: containChar(["hello","world"],l) => ["hello","world"]


        function containChar(arr, str) {
            return arr.filter(function(x,index) {
                if (x[index] == str || x[0]== str) {
                    return x;
                }
            })

        }
        console.log("EX13 = ", containChar(["hello", "world", "now"], "w"));




        // // * Exercise 14:
        // Create a function called evenIndexOddLength
        // that accept an array of strings
        // and return an array that have the string with odd length in even index

        // var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
        // Ex: evenIndexOddLength(strings) => ["madrasa"]
        // */




        function evenIndexOddLength(arr) {
            return arr.filter(function (x, index) {
                if ((index % 2 == 0) && (x.length % 2 !== 0)) {
                    return x;
                }
            })


        }

        console.log("EX14 = ", evenIndexOddLength(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]));




        // // * Exercise 15:
        // Using the varabile persons
        // Create a function called olderThan
        // that accept an array and number
        // and return the person that have age older than this number

        // Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
        // */




function olderThan(arr , num ) {
    return arr.filter(function(x){
        if (x.age > 56  ) {
            return x ;
        }



    })
    
}
        console.log("EX15 = ", olderThan([{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]));




        // var users = [{
        //     first_name: "Brithany",
        //     last_name: "Allison",
        //     birthday: "1993-11-13",
        // },
        // {
        //     first_name: "Sonya",
        //     last_name: "Slowers",
        //     birthday: "1967-02-21",
        // },
        // {
        //     first_name: "Ashley",
        //     last_name: "Pratt",
        //     birthday: "1987-11-10",
        // }
        // ];

        // const under30 = users.filter(user => {
        //     const ageInSeconds = new Date().getTime() - new Date(user.birthday).getTime();
        //     return ageInSeconds < 30 * 365 * 86400 * 1000;
        // })

        // console.log(under30);



        // let people = [
        //     {name: "aaron",age: 65},
        //     {name: "beth",age: 2},
        //     {name: "cara",age: 13},
        //     {name: "daniel",age: 3},
        //     {name: "ella",age: 25},
        //     {name: "fin",age: 1},
        //     {name: "george",age: 70},
        // ]

        // let toddlers = people.filter(person => person.age <= 56 )

        // console.log(toddlers)



        // // * Exercise 16:
        // Create a function called shorterThan
        // that accept an array of strings and a number
        // and return the shorter string than the number

        // var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
        // Ex: shorterThan(strings,5) => ["alex","emad","hala"]


        function shorterThan(arr, num) {
            return arr.filter(function (x, index) {
                if (x.length < num) {
                    return x;

                }

            })

        }

        console.log("EX16 = ", shorterThan(["alex", "mercer", "madrasa", "rashed2", "emad", "hala"], 5));






// const words = ["alex","mercer","madrasa","rashed2","emad","hala"];

// const result2 = words.filter(word => word.length < 5);

// console.log("EX16 = " , result2);





// const array = [32, 523, 5632, 920, 6000];

// let largestNum = arr[0];
// let secondLargestNum = 0;

// for(let i = 1; i < array.length; i++) {
// 	if(array[i] > largestNum) {
//     secondLargestNum = largestNum;
//     largestNum = array[i];  
//     }
//   else {
    
  
//     (array[i] !== largestNum && array[i] > secondLargestNum) {
//   secondLargestNum = array[i];
//     }}
// };
// console.log(largestNum);
// console.log(secondLargestNum);



function findSecondLargest(arr){

    let largest=0, secondLargest = 0

    for (i of arr){
        if (i > largest){
            largest = i
        }
    }

    for (x of arr){
        if(x>secondLargest && x<largest){
            secondLargest =   x
        }
    }

    return secondLargest;

}


console.log("Second Largest",findSecondLargest([1,4,2,3,0]))




var stringArray = new Array('10','9','3','4','5','6','7','8','2','1');

var intArray = stringArray.map(Number);

var second = intArray.sort(function(a,b){return b-a})[1]; 

console.log(second)
