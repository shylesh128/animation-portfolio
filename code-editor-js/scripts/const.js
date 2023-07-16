const codeSuggestions = [
  { label: "for loop", value: "for (let i = 0; i < 10; i++) {\n\n}" },
  { label: "if statement", value: "if (condition) {\n\n}" },
  { label: "function", value: "function functionName() {\n\n}" },
  { label: "while loop", value: "while (condition) {\n\n}" },
  {
    label: "switch statement",
    value:
      "switch (expression) {\n  case value1:\n    // code block\n    break;\n  case value2:\n    // code block\n    break;\n  default:\n    // default code block\n}",
  },
  {
    label: "try-catch block",
    value:
      "try {\n  // code block\n} catch (error) {\n  // error handling code block\n}",
  },
  {
    label: "forEach loop",
    value: "array.forEach((element) => {\n  // code block\n});",
  },
  {
    label: "class declaration",
    value:
      "class ClassName {\n  constructor() {\n    // constructor code\n  }\n\n  method1() {\n    // method code\n  }\n}",
  },
  {
    label: "object literal",
    value:
      "const obj = {\n  property1: value1,\n  property2: value2,\n  method() {\n    // method code\n  }\n};",
  },
  {
    label: "arrow function",
    value: "const functionName = () => {\n  // code block\n};",
  },
  { label: "template literal", value: "const message = `Hello, ${name}!`;" },
  {
    label: "async function",
    value: "async function functionName() {\n  // code block\n}",
  },
  {
    label: "promise",
    value:
      "const promise = new Promise((resolve, reject) => {\n  // code block\n});",
  },
  {
    label: "default parameter",
    value: "function functionName(param = defaultValue) {\n  // code block\n}",
  },
  {
    label: "destructuring assignment",
    value: "const { property1, property2 } = object;",
  },
  {
    label: "rest parameter",
    value: "function functionName(...args) {\n  // code block\n}",
  },
  { label: "spread operator", value: "const newArray = [...array];" },
  {
    label: "map method",
    value: "const newArray = array.map((element) => {\n  // code block\n});",
  },
  {
    label: "filter method",
    value: "const newArray = array.filter((element) => {\n  // code block\n});",
  },
  {
    label: "reduce method",
    value:
      "const result = array.reduce((accumulator, currentValue) => {\n  // code block\n}, initialValue);",
  },
  {
    label: "class inheritance",
    value:
      "class ChildClass extends ParentClass {\n  constructor() {\n    super();\n    // constructor code\n  }\n}",
  },
  {
    label: "class method overriding",
    value:
      "class ChildClass extends ParentClass {\n  method() {\n    // method code\n  }\n}",
  },
  {
    label: "class getter",
    value:
      "class ClassName {\n  get propertyName() {\n    // getter code\n  }\n}",
  },
  {
    label: "class setter",
    value:
      "class ClassName {\n  set propertyName(value) {\n    // setter code\n  }\n}",
  },
  {
    label: "class static method",
    value:
      "class ClassName {\n  static methodName() {\n    // static method code\n  }\n}",
  },
  { label: "array length", value: "const length = array.length;" },
  { label: "string length", value: "const length = string.length;" },
  {
    label: "string concatenation",
    value: "const newString = string1 + string2;",
  },
  {
    label: "string interpolation",
    value: "const message = `Hello, ${name}!`;",
  },
  { label: "array push", value: "array.push(element);" },
  { label: "array pop", value: "const removedElement = array.pop();" },
  { label: "array shift", value: "const removedElement = array.shift();" },
  { label: "array unshift", value: "array.unshift(element);" },
  {
    label: "array slice",
    value: "const newArray = array.slice(startIndex, endIndex);",
  },
  {
    label: "array splice",
    value:
      "const removedElements = array.splice(startIndex, deleteCount, element1, element2);",
  },
  {
    label: "array forEach",
    value: "array.forEach((element) => {\n  // code block\n});",
  },
  {
    label: "array map",
    value: "const newArray = array.map((element) => {\n  // code block\n});",
  },
  {
    label: "array filter",
    value: "const newArray = array.filter((element) => {\n  // code block\n});",
  },
  {
    label: "array reduce",
    value:
      "const result = array.reduce((accumulator, currentValue) => {\n  // code block\n}, initialValue);",
  },
  { label: "array sort", value: "array.sort();" },
  { label: "array reverse", value: "array.reverse();" },
  {
    label: "array find",
    value: "const element = array.find((element) => {\n  // code block\n});",
  },
  {
    label: "array includes",
    value: "const includesElement = array.includes(element);",
  },
  { label: "array indexOf", value: "const index = array.indexOf(element);" },
  { label: "array join", value: "const joinedString = array.join(separator);" },
  { label: "array toString", value: "const string = array.toString();" },
  { label: "object property access", value: "const value = object.property;" },
  { label: "object property assignment", value: "object.property = value;" },
  { label: "object method invocation", value: "object.method();" },
  {
    label: "object property existence check",
    value: "if ('property' in object) {\n  // code block\n}",
  },
  { label: "object property deletion", value: "delete object.property;" },
  {
    label: "object iteration with for...in",
    value:
      "for (const key in object) {\n  if (object.hasOwnProperty(key)) {\n    // code block\n  }\n}",
  },
  {
    label: "object iteration with Object.keys",
    value: "Object.keys(object).forEach((key) => {\n  // code block\n});",
  },
  {
    label: "object cloning with spread operator",
    value: "const clone = { ...object };",
  },
  { label: "date creation", value: "const currentDate = new Date();" },
  {
    label: "date formatting with toLocaleString",
    value: "const formattedDate = currentDate.toLocaleString();",
  },
  {
    label: "math random number generation",
    value: "const random = Math.random();",
  },
  {
    label: "math floor rounding",
    value: "const roundedNumber = Math.floor(number);",
  },
  {
    label: "math ceil rounding",
    value: "const roundedNumber = Math.ceil(number);",
  },
  {
    label: "math absolute value",
    value: "const absoluteValue = Math.abs(number);",
  },
  { label: "for...of loop", value: "for (const element of iterable) {\n\n}" },
  { label: "Array.from", value: "const newArray = Array.from(iterable);" },
  { label: "Array.isArray", value: "const isArray = Array.isArray(value);" },
  {
    label: "Array.of",
    value: "const newArray = Array.of(element1, element2, ...);",
  },
  {
    label: "Object.assign",
    value: "const newObj = Object.assign({}, object);",
  },
  { label: "Object.freeze", value: "Object.freeze(object);" },
  { label: "Object.seal", value: "Object.seal(object);" },
  {
    label: "Object.keys iteration with for...of loop",
    value: "for (const key of Object.keys(object)) {\n\n}",
  },
  {
    label: "Array.findIndex",
    value: "const index = array.findIndex((element) => {\n\n});",
  },
  {
    label: "String.includes",
    value: "const includesSubstring = string.includes(substring);",
  },
  {
    label: "String.startsWith",
    value: "const startsWithSubstring = string.startsWith(substring);",
  },
  {
    label: "String.endsWith",
    value: "const endsWithSubstring = string.endsWith(substring);",
  },
  {
    label: "String.slice",
    value: "const newString = string.slice(startIndex, endIndex);",
  },
  {
    label: "String.substring",
    value: "const newString = string.substring(startIndex, endIndex);",
  },
  {
    label: "String.toUpperCase",
    value: "const upperCaseString = string.toUpperCase();",
  },
  {
    label: "String.toLowerCase",
    value: "const lowerCaseString = string.toLowerCase();",
  },
  { label: "String.trim", value: "const trimmedString = string.trim();" },
  { label: "RegExp.test", value: "const isMatch = regExp.test(string);" },
  { label: "Math.max", value: "const maxNumber = Math.max(...numbers);" },
  { label: "Math.min", value: "const minNumber = Math.min(...numbers);" },
  { label: "Math.pow", value: "const result = Math.pow(base, exponent);" },
  { label: "Math.sqrt", value: "const squareRoot = Math.sqrt(number);" },
  { label: "Math.round", value: "const roundedNumber = Math.round(number);" },
  {
    label: "Math.random with range",
    value: "const randomNumber = Math.random() * (max - min) + min;",
  },
  {
    label: "Date manipulation with Moment.js",
    value:
      "// Requires Moment.js library\nconst formattedDate = moment(date).format(format);",
  },
  {
    label: "JSON.stringify",
    value: "const jsonString = JSON.stringify(object);",
  },
  {
    label: "JSON.parse",
    value: "const parsedObject = JSON.parse(jsonString);",
  },
  { label: "setTimeout", value: "setTimeout(() => {\n\n}, delay);" },
  { label: "setInterval", value: "setInterval(() => {\n\n}, interval);" },
  { label: "clearTimeout", value: "clearTimeout(timeoutId);" },
  { label: "clearInterval", value: "clearInterval(intervalId);" },
  {
    label: "Promisification of setTimeout",
    value:
      "const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));",
  },
  {
    label: "Promisification of setInterval",
    value:
      "const interval = (ms) => new Promise((resolve) => setInterval(resolve, ms));",
  },
  { label: "console.log", value: "console.log(value);" },
  { label: "console.error", value: "console.error(message);" },
  { label: "console.warn", value: "console.warn(message);" },
  { label: "console.info", value: "console.info(message);" },
  { label: "console.clear", value: "console.clear();" },
  { label: "console.table", value: "console.table(data);" },
  { label: "console.time", value: "console.time(label);" },
  { label: "console.timeEnd", value: "console.timeEnd(label);" },
  { label: "console.group", value: "console.group(label);" },
  { label: "console.groupCollapsed", value: "console.groupCollapsed(label);" },
  { label: "console.groupEnd", value: "console.groupEnd();" },
];

const tips = [
  {
    description:
      "Use destructuring assignment to extract values from objects or arrays.",
    code: "const person = { name: 'John', age: 30 };\nconst { name, age } = person;\nconsole.log(name, age); // Output: John 30",
  },
  {
    description:
      "Use the Array.isArray() method to check if a value is an array.",
    code: "const arr = [1, 2, 3];\nconsole.log(Array.isArray(arr)); // Output: true",
  },
  {
    description:
      "Use the Array.from() method to convert an array-like or iterable object to an array.",
    code: "const arrayLike = 'hello';\nconst arr = Array.from(arrayLike);\nconsole.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']",
  },
  {
    description:
      "Use the Array.prototype.map() method to create a new array by transforming each element of an existing array.",
    code: "const numbers = [1, 2, 3];\nconst doubledNumbers = numbers.map((num) => num * 2);\nconsole.log(doubledNumbers); // Output: [2, 4, 6]",
  },
  {
    description:
      "Use the Array.prototype.filter() method to create a new array with elements that pass a certain condition.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst evenNumbers = numbers.filter((num) => num % 2 === 0);\nconsole.log(evenNumbers); // Output: [2, 4]",
  },
  {
    description:
      "Use the Array.prototype.reduce() method to calculate a single value by accumulating elements of an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((accumulator, num) => accumulator + num, 0);\nconsole.log(sum); // Output: 15",
  },
  {
    description:
      "Use the Array.prototype.find() method to find the first element in an array that satisfies a condition.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst evenNumber = numbers.find((num) => num % 2 === 0);\nconsole.log(evenNumber); // Output: 2",
  },
  {
    description:
      "Use the Array.prototype.findIndex() method to find the index of the first element in an array that satisfies a condition.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst index = numbers.findIndex((num) => num === 3);\nconsole.log(index); // Output: 2",
  },
  {
    description:
      "Use the Array.prototype.some() method to check if at least one element in an array satisfies a condition.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst hasEvenNumber = numbers.some((num) => num % 2 === 0);\nconsole.log(hasEvenNumber); // Output: true",
  },
  {
    description:
      "Use the Array.prototype.every() method to check if all elements in an array satisfy a condition.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst allEvenNumbers = numbers.every((num) => num % 2 === 0);\nconsole.log(allEvenNumbers); // Output: false",
  },
  {
    description:
      "Use the Array.prototype.sort() method to sort the elements of an array in place.",
    code: "const fruits = ['apple', 'banana', 'cherry'];\nfruits.sort();\nconsole.log(fruits); // Output: ['apple', 'banana', 'cherry']",
  },
  {
    description:
      "Use the Array.prototype.reverse() method to reverse the order of the elements in an array.",
    code: "const numbers = [1, 2, 3];\nnumbers.reverse();\nconsole.log(numbers); // Output: [3, 2, 1]",
  },
  {
    description:
      "Use the Array.prototype.concat() method to merge two or more arrays.",
    code: "const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst mergedArray = arr1.concat(arr2);\nconsole.log(mergedArray); // Output: [1, 2, 3, 4]",
  },
  {
    description:
      "Use the Array.prototype.slice() method to create a new array from a portion of an existing array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst slicedArray = numbers.slice(1, 4);\nconsole.log(slicedArray); // Output: [2, 3, 4]",
  },
  {
    description:
      "Use the Array.prototype.splice() method to add or remove elements from an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nnumbers.splice(2, 1, 'a', 'b');\nconsole.log(numbers); // Output: [1, 2, 'a', 'b', 4, 5]",
  },
  {
    description:
      "Use the Array.prototype.join() method to join the elements of an array into a string.",
    code: "const fruits = ['apple', 'banana', 'cherry'];\nconst result = fruits.join(', ');\nconsole.log(result); // Output: 'apple, banana, cherry'",
  },
  {
    description:
      "Use the Array.prototype.includes() method to check if an array contains a certain element.",
    code: "const numbers = [1, 2, 3];\nconsole.log(numbers.includes(2)); // Output: true",
  },
  {
    description:
      "Use the Array.prototype.indexOf() method to find the first occurrence of an element in an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers.indexOf(3)); // Output: 2",
  },
  {
    description:
      "Use the Array.prototype.lastIndexOf() method to find the last occurrence of an element in an array.",
    code: "const numbers = [1, 2, 3, 4, 5, 2];\nconsole.log(numbers.lastIndexOf(2)); // Output: 5",
  },
  {
    description:
      "Use the Array.prototype.toString() method to convert an array to a string.",
    code: "const numbers = [1, 2, 3];\nconst result = numbers.toString();\nconsole.log(result); // Output: '1,2,3'",
  },
  {
    description:
      "Use the Array.prototype.forEach() method to iterate over the elements of an array.",
    code: "const numbers = [1, 2, 3];\nnumbers.forEach((num) => console.log(num));\n// Output:\n// 1\n// 2\n// 3",
  },
  {
    description:
      "Use the Array.from() method with a mapping function to create a new array with modified elements.",
    code: "const numbers = [1, 2, 3];\nconst doubledNumbers = Array.from(numbers, (num) => num * 2);\nconsole.log(doubledNumbers); // Output: [2, 4, 6]",
  },
  {
    description:
      "Use the Array.from() method with a set to remove duplicates from an array.",
    code: "const numbers = [1, 2, 2, 3, 3, 3];\nconst uniqueNumbers = Array.from(new Set(numbers));\nconsole.log(uniqueNumbers); // Output: [1, 2, 3]",
  },
  {
    description:
      "Use the Array.from() method with a generator function to generate an array of values.",
    code: "function* generateNumbers() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst numbers = Array.from(generateNumbers());\nconsole.log(numbers); // Output: [1, 2, 3]",
  },
  {
    description:
      "Use the Object.keys() method to get an array of keys from an object.",
    code: "const person = { name: 'John', age: 30 };\nconst keys = Object.keys(person);\nconsole.log(keys); // Output: ['name', 'age']",
  },
  {
    description:
      "Use the Object.values() method to get an array of values from an object.",
    code: "const person = { name: 'John', age: 30 };\nconst values = Object.values(person);\nconsole.log(values); // Output: ['John', 30]",
  },
  {
    description:
      "Use the Object.entries() method to get an array of key-value pairs from an object.",
    code: "const person = { name: 'John', age: 30 };\nconst entries = Object.entries(person);\nconsole.log(entries); // Output: [['name', 'John'], ['age', 30]]",
  },
  {
    description:
      "Use the Object.assign() method to copy the values of all enumerable properties from one or more source objects to a target object.",
    code: "const target = { name: 'John' };\nconst source = { age: 30 };\nconst result = Object.assign(target, source);\nconsole.log(result); // Output: { name: 'John', age: 30 }",
  },
  {
    description:
      "Use the Object.freeze() method to prevent the modification of an object.",
    code: "const person = { name: 'John', age: 30 };\nObject.freeze(person);\nperson.age = 40;\nconsole.log(person); // Output: { name: 'John', age: 30 }",
  },
  {
    description:
      "Use the Object.seal() method to prevent the addition or deletion of properties from an object, while still allowing property values to be changed.",
    code: "const person = { name: 'John', age: 30 };\nObject.seal(person);\nperson.age = 40;\nperson.city = 'New York';\nconsole.log(person); // Output: { name: 'John', age: 40 }",
  },
  {
    description:
      "Use the String.prototype.trim() method to remove leading and trailing whitespace from a string.",
    code: "const str = '  Hello, World!  ';\nconst trimmedStr = str.trim();\nconsole.log(trimmedStr); // Output: 'Hello, World!'",
  },
  {
    description:
      "Use the String.prototype.toUpperCase() method to convert a string to uppercase.",
    code: "const str = 'hello';\nconst uppercaseStr = str.toUpperCase();\nconsole.log(uppercaseStr); // Output: 'HELLO'",
  },
  {
    description:
      "Use the String.prototype.toLowerCase() method to convert a string to lowercase.",
    code: "const str = 'HELLO';\nconst lowercaseStr = str.toLowerCase();\nconsole.log(lowercaseStr); // Output: 'hello'",
  },
  {
    description:
      "Use the String.prototype.includes() method to check if a string contains a certain substring.",
    code: "const str = 'Hello, World!';\nconsole.log(str.includes('World')); // Output: true",
  },
  {
    description:
      "Use the String.prototype.indexOf() method to find the first occurrence of a substring in a string.",
    code: "const str = 'Hello, World!';\nconsole.log(str.indexOf('World')); // Output: 7",
  },
  {
    description:
      "Use the String.prototype.lastIndexOf() method to find the last occurrence of a substring in a string.",
    code: "const str = 'Hello, World!';\nconsole.log(str.lastIndexOf('o')); // Output: 8",
  },
  {
    description:
      "Use the String.prototype.replace() method to replace occurrences of a substring with a new string.",
    code: "const str = 'Hello, World!';\nconst newStr = str.replace('Hello', 'Hi');\nconsole.log(newStr); // Output: 'Hi, World!'",
  },
  {
    description:
      "Use the String.prototype.split() method to split a string into an array of substrings.",
    code: "const str = 'Hello, World!';\nconst parts = str.split(', ');\nconsole.log(parts); // Output: ['Hello', 'World!']",
  },
  {
    description:
      "Use the String.prototype.substring() method to extract a portion of a string.",
    code: "const str = 'Hello, World!';\nconst extractedStr = str.substring(7, 12);\nconsole.log(extractedStr); // Output: 'World'",
  },
  {
    description:
      "Use the String.prototype.substr() method to extract a portion of a string with a specified length.",
    code: "const str = 'Hello, World!';\nconst extractedStr = str.substr(7, 5);\nconsole.log(extractedStr); // Output: 'World'",
  },
  {
    description:
      "Use the String.prototype.slice() method to extract a portion of a string.",
    code: "const str = 'Hello, World!';\nconst extractedStr = str.slice(7, 12);\nconsole.log(extractedStr); // Output: 'World'",
  },
  {
    description:
      "Use the String.prototype.padStart() method to pad the start of a string with a specified character.",
    code: "const str = '5';\nconst paddedStr = str.padStart(4, '0');\nconsole.log(paddedStr); // Output: '0005'",
  },
  {
    description:
      "Use the String.prototype.padEnd() method to pad the end of a string with a specified character.",
    code: "const str = '5';\nconst paddedStr = str.padEnd(4, '0');\nconsole.log(paddedStr); // Output: '5000'",
  },
  {
    description:
      "Use the String.prototype.charAt() method to get the character at a specified index in a string.",
    code: "const str = 'Hello';\nconsole.log(str.charAt(2)); // Output: 'l'",
  },
  {
    description:
      "Use the String.prototype.charCodeAt() method to get the UTF-16 code unit at a specified index in a string.",
    code: "const str = 'Hello';\nconsole.log(str.charCodeAt(1)); // Output: 101",
  },
  {
    description:
      "Use the String.prototype.repeat() method to repeat a string a certain number of times.",
    code: "const str = 'Hello';\nconsole.log(str.repeat(3)); // Output: 'HelloHelloHello'",
  },
  {
    description:
      "Use the Number.prototype.toFixed() method to format a number with a fixed number of decimal places.",
    code: "const num = 3.14159;\nconsole.log(num.toFixed(2)); // Output: '3.14'",
  },
  {
    description:
      "Use the Number.prototype.toPrecision() method to format a number with a specified precision.",
    code: "const num = 3.14159;\nconsole.log(num.toPrecision(3)); // Output: '3.14'",
  },
  {
    description:
      "Use the Number.prototype.toString() method to convert a number to a string.",
    code: "const num = 42;\nconst str = num.toString();\nconsole.log(str); // Output: '42'",
  },
  {
    description:
      "Use the Math.abs() method to get the absolute value of a number.",
    code: "console.log(Math.abs(-5)); // Output: 5",
  },
  {
    description:
      "Use the Math.ceil() method to round a number up to the nearest integer.",
    code: "console.log(Math.ceil(4.3)); // Output: 5",
  },
  {
    description:
      "Use the Math.floor() method to round a number down to the nearest integer.",
    code: "console.log(Math.floor(4.7)); // Output: 4",
  },
  {
    description:
      "Use the Math.round() method to round a number to the nearest integer.",
    code: "console.log(Math.round(4.5)); // Output: 5",
  },
  {
    description:
      "Use the Math.max() method to find the maximum value from a set of numbers.",
    code: "console.log(Math.max(1, 2, 3)); // Output: 3",
  },
  {
    description:
      "Use the Math.min() method to find the minimum value from a set of numbers.",
    code: "console.log(Math.min(1, 2, 3)); // Output: 1",
  },
  {
    description:
      "Use the Math.random() method to generate a random number between 0 and 1.",
    code: "console.log(Math.random()); // Output: a random number between 0 and 1",
  },
  {
    description:
      "Use the Math.pow() method to calculate the power of a number.",
    code: "console.log(Math.pow(2, 3)); // Output: 8",
  },
  {
    description: "Use arrow functions to create concise anonymous functions.",
    code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3)); // Output: 5",
  },
  {
    description:
      "Use destructuring assignment to extract values from objects or arrays.",
    code: "const person = { name: 'John', age: 30 };\nconst { name, age } = person;\nconsole.log(name); // Output: 'John'\nconsole.log(age); // Output: 30'",
  },
  {
    description:
      "Use default function parameters to assign default values to function parameters.",
    code: "function greet(name = 'Anonymous') {\n  console.log(`Hello, ${name}!`);\n}\ngreet(); // Output: 'Hello, Anonymous!'\ngreet('John'); // Output: 'Hello, John!'",
  },
  {
    description:
      "Use the rest parameter syntax (...) to capture multiple function arguments as an array.",
    code: "function sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\nconsole.log(sum(1, 2, 3)); // Output: 6",
  },
  {
    description: "Use the spread operator (...) to combine arrays or objects.",
    code: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combinedArray = [...arr1, ...arr2];\nconsole.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]",
  },
  {
    description: "Use the map() method to transform elements of an array.",
    code: "const numbers = [1, 2, 3];\nconst doubledNumbers = numbers.map((num) => num * 2);\nconsole.log(doubledNumbers); // Output: [2, 4, 6]",
  },
  {
    description:
      "Use the filter() method to create a new array with elements that pass a condition.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst evenNumbers = numbers.filter((num) => num % 2 === 0);\nconsole.log(evenNumbers); // Output: [2, 4]",
  },
  {
    description:
      "Use the reduce() method to calculate a single value from an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((total, num) => total + num, 0);\nconsole.log(sum); // Output: 15",
  },
  {
    description:
      "Use the find() method to find the first element that satisfies a condition in an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst evenNumber = numbers.find((num) => num % 2 === 0);\nconsole.log(evenNumber); // Output: 2",
  },
  {
    description:
      "Use the some() method to check if at least one element satisfies a condition in an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst hasEvenNumber = numbers.some((num) => num % 2 === 0);\nconsole.log(hasEvenNumber); // Output: true",
  },
  {
    description:
      "Use the every() method to check if all elements satisfy a condition in an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst allPositive = numbers.every((num) => num > 0);\nconsole.log(allPositive); // Output: true",
  },
  {
    description: "Use the sort() method to sort elements of an array.",
    code: "const numbers = [3, 1, 2];\nnumbers.sort();\nconsole.log(numbers); // Output: [1, 2, 3]",
  },
  {
    description:
      "Use the reverse() method to reverse the order of elements in an array.",
    code: "const numbers = [1, 2, 3];\nnumbers.reverse();\nconsole.log(numbers); // Output: [3, 2, 1]",
  },
  {
    description:
      "Use the slice() method to extract a portion of an array without modifying the original array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconst subArray = numbers.slice(2, 4);\nconsole.log(subArray); // Output: [3, 4]",
  },
  {
    description:
      "Use the splice() method to add, remove, or replace elements in an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nnumbers.splice(2, 2, 6, 7);\nconsole.log(numbers); // Output: [1, 2, 6, 7, 5]",
  },
  {
    description: "Use the concat() method to merge arrays into a new array.",
    code: "const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst mergedArray = arr1.concat(arr2);\nconsole.log(mergedArray); // Output: [1, 2, 3, 4]",
  },
  {
    description:
      "Use the includes() method to check if an array contains a specific element.",
    code: "const numbers = [1, 2, 3];\nconsole.log(numbers.includes(2)); // Output: true",
  },
  {
    description:
      "Use the indexOf() method to find the first occurrence of an element in an array.",
    code: "const numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers.indexOf(3)); // Output: 2",
  },
  {
    description:
      "Use the lastIndexOf() method to find the last occurrence of an element in an array.",
    code: "const numbers = [1, 2, 3, 4, 5, 2];\nconsole.log(numbers.lastIndexOf(2)); // Output: 5",
  },
  {
    description: "Use the toString() method to convert an array to a string.",
    code: "const numbers = [1, 2, 3];\nconst result = numbers.toString();\nconsole.log(result); // Output: '1,2,3'",
  },
  {
    description:
      "Use the join() method to join elements of an array into a string with a specified separator.",
    code: "const numbers = [1, 2, 3];\nconst result = numbers.join('-');\nconsole.log(result); // Output: '1-2-3'",
  },
  {
    description:
      "Use the Object.assign() method to copy the values of all enumerable properties from one or more source objects to a target object.",
    code: "const obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst mergedObject = Object.assign({}, obj1, obj2);\nconsole.log(mergedObject); // Output: { a: 1, b: 2 }",
  },
  {
    description: "Use the typeof operator to check the type of a value.",
    code: "console.log(typeof 42); // Output: 'number'\nconsole.log(typeof 'Hello'); // Output: 'string'\nconsole.log(typeof true); // Output: 'boolean'",
  },
  {
    description:
      "Use the instanceof operator to check if an object is an instance of a specific class.",
    code: "class Person {}\nconst person = new Person();\nconsole.log(person instanceof Person); // Output: true",
  },
  {
    description:
      "Use the Date() constructor to create a new Date object representing the current date and time.",
    code: "const currentDate = new Date();\nconsole.log(currentDate); // Output: current date and time",
  },
  {
    description:
      "Use the Date.now() method to get the current timestamp in milliseconds.",
    code: "const timestamp = Date.now();\nconsole.log(timestamp); // Output: current timestamp in milliseconds",
  },
  {
    description:
      "Use the Date.prototype.getFullYear() method to get the full year from a Date object.",
    code: "const date = new Date();\nconsole.log(date.getFullYear()); // Output: current year",
  },
  {
    description:
      "Use the Date.prototype.getMonth() method to get the month (0-11) from a Date object.",
    code: "const date = new Date();\nconsole.log(date.getMonth()); // Output: current month (0-11)",
  },
  {
    description:
      "Use the Date.prototype.getDate() method to get the day of the month (1-31) from a Date object.",
    code: "const date = new Date();\nconsole.log(date.getDate()); // Output: current day of the month (1-31)",
  },
  {
    description:
      "Use the Date.prototype.getDay() method to get the day of the week (0-6) from a Date object.",
    code: "const date = new Date();\nconsole.log(date.getDay()); // Output: current day of the week (0-6)",
  },
  {
    description:
      "Use the Date.prototype.getHours() method to get the hour (0-23) from a Date object.",
    code: "const date = new Date();\nconsole.log(date.getHours()); // Output: current hour (0-23)",
  },
  {
    description:
      "Use the Date.prototype.getMinutes() method to get the minutes (0-59) from a Date object.",
    code: "const date = new Date();\nconsole.log(date.getMinutes()); // Output: current minutes (0-59)",
  },
  {
    description:
      "Use the Date.prototype.getSeconds() method to get the seconds (0-59) from a Date object.",
    code: "const date = new Date();\nconsole.log(date.getSeconds()); // Output: current seconds (0-59)",
  },
  {
    description:
      "Use the Date.prototype.toISOString() method to convert a Date object to an ISO 8601 string.",
    code: "const date = new Date();\nconsole.log(date.toISOString()); // Output: current date and time in ISO 8601 format",
  },
  {
    description:
      "Use the setTimeout() function to execute a function after a specified delay.",
    code: "function sayHello() {\n  console.log('Hello!');\n}\nsetTimeout(sayHello, 2000); // Output: 'Hello!' after a 2-second delay",
  },
  {
    description:
      "Use the setInterval() function to repeatedly execute a function with a specified interval.",
    code: "function sayHello() {\n  console.log('Hello!');\n}\nsetInterval(sayHello, 1000); // Output: 'Hello!' every 1 second",
  },
  {
    description:
      "Use the clearTimeout() function to cancel a timeout created with setTimeout().",
    code: "function sayHello() {\n  console.log('Hello!');\n}\nconst timeoutId = setTimeout(sayHello, 2000);\nclearTimeout(timeoutId); // The 'Hello!' message will not be printed",
  },
  {
    description:
      "Use the clearInterval() function to stop the execution of a function created with setInterval().",
    code: "function sayHello() {\n  console.log('Hello!');\n}\nconst intervalId = setInterval(sayHello, 1000);\nclearInterval(intervalId); // The 'Hello!' message will not be printed repeatedly",
  },
  {
    description:
      "Use the try...catch statement to handle exceptions and prevent program crashes.",
    code: "try {\n  // Code that may throw an error\n  throw new Error('Something went wrong!');\n} catch (error) {\n  console.log('Error:', error.message);\n}",
  },
  {
    description: "Use the throw statement to manually throw an error.",
    code: "function divide(a, b) {\n  if (b === 0) {\n    throw new Error('Division by zero is not allowed!');\n  }\n  return a / b;\n}\nconsole.log(divide(10, 0)); // Throws an error",
  },
  {
    description:
      "Use the instanceof operator to check if an error is an instance of a specific error class.",
    code: "try {\n  // Code that may throw an error\n  throw new TypeError('Type mismatch!');\n} catch (error) {\n  console.log(error instanceof TypeError); // Output: true",
  },
  {
    description:
      "Use the Error.prototype.stack property to get the stack trace of an error.",
    code: "try {\n  // Code that may throw an error\n  throw new Error('Something went wrong!');\n} catch (error) {\n  console.log(error.stack); // Output: stack trace of the error",
  },
  {
    description:
      "Use the Promise object to handle asynchronous operations and avoid callback hell.",
    code: "function fetchData() {\n  return new Promise((resolve, reject) => {\n    // Asynchronous code\n    // Call resolve(data) if the operation succeeds\n    // Call reject(error) if the operation fails\n  });\n}\nfetchData()\n  .then((data) => {\n    console.log('Data:', data);\n  })\n  .catch((error) => {\n    console.log('Error:', error);\n  });",
  },
  {
    description:
      "Use the async/await syntax to write asynchronous code in a synchronous style.",
    code: "async function fetchData() {\n  try {\n    // Asynchronous code\n    // Return the result if the operation succeeds\n    // Throw an error if the operation fails\n  } catch (error) {\n    throw new Error('Failed to fetch data!');\n  }\n}\n\n(async () => {\n  try {\n    const data = await fetchData();\n    console.log('Data:', data);\n  } catch (error) {\n    console.log('Error:', error);\n  }\n})();",
  },
  {
    description:
      "Use the Array.isArray() method to check if a value is an array.",
    code: "console.log(Array.isArray([1, 2, 3])); // Output: true\nconsole.log(Array.isArray('Hello')); // Output: false",
  },
  {
    description:
      "Use the Math.random() function to generate a random number between 0 (inclusive) and 1 (exclusive).",
    code: "console.log(Math.random()); // Output: a random number between 0 and 1",
  },
  {
    description:
      "Use the Math.floor() function to round a number down to the nearest integer.",
    code: "console.log(Math.floor(3.9)); // Output: 3",
  },
  {
    description:
      "Use the Math.ceil() function to round a number up to the nearest integer.",
    code: "console.log(Math.ceil(3.1)); // Output: 4",
  },
  {
    description:
      "Use the Math.round() function to round a number to the nearest integer.",
    code: "console.log(Math.round(3.5)); // Output: 4",
  },
];

window.codeSuggestions = codeSuggestions;
window.tips = tips;
