import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const output = [];

  // Câu 27: Function that will receive an array of numbers and return a new array with distinct elements
  const distinctElements = (arr) => [...new Set(arr)];
  output.push(`Distinct elements: ${distinctElements([1, 2, 2, 3, 4, 4, 5]).join(', ')}`);

  // Câu 28: Calculate the sum of the first 100 prime numbers and return them in an array
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const sumOfFirst100Primes = () => {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes;
  };
  const primes = sumOfFirst100Primes();
  output.push(`Sum of first 100 prime numbers: ${primes.reduce((a, b) => a + b, 0)}`);

  // Câu 29: Print the distance between the first 100 prime numbers
  const distances = primes.slice(1).map((num, idx) => num - primes[idx]);
  output.push(`Distances between first 100 primes: ${distances.join(', ')}`);

  // Câu 30: Add two positive numbers of indefinite size
  const addLargeNumbers = (num1, num2) => {
    let carry = 0;
    let result = '';
    const maxLength = Math.max(num1.length, num2.length);

    for (let i = 0; i < maxLength; i++) {
      const digit1 = +num1[num1.length - 1 - i] || 0;
      const digit2 = +num2[num2.length - 1 - i] || 0;
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }
    if (carry) result = carry + result;
    return result;
  };
  output.push(`Sum of large numbers: ${addLargeNumbers("12345678901234567890", "98765432109876543210")}`);

  // Câu 31: Return the number of words in a text
  const countWords = (text) => text.split(/\s+/).filter(Boolean).length;
  output.push(`Number of words: ${countWords("Hello world, this is a test.")}`);

  // Câu 32: Capitalize the first letter of each word in a text
  const capitalizeWords = (text) => text.replace(/\b\w/g, char => char.toUpperCase());
  output.push(`Capitalized text: ${capitalizeWords("hello world, this is a test.")}`);

  // Câu 33: Calculate the sum of numbers in a comma delimited string
  const sumFromString = (str) => str.split(',').reduce((sum, num) => sum + Number(num), 0);
  output.push(`Sum of numbers in string: ${sumFromString("1,2,3,4,5")}`);

  // Câu 34: Return an array with words inside a text
  const wordsArray = (text) => text.split(/\s+/).filter(Boolean);
  output.push(`Words in text: ${wordsArray("Hello world, this is a test.").join(', ')}`);

  // Câu 35: Convert a CSV text to a bi-dimensional array
  const csvToArray = (csv) => csv.split('\n').map(row => row.split(','));
  const csvExample = "name,age\nAlice,30\nBob,25";
  output.push(`CSV to array: ${JSON.stringify(csvToArray(csvExample))}`);

  // Câu 36: Convert a string to an array of characters
  const stringToArray = (str) => Array.from(str);
  output.push(`String to array: ${stringToArray("Hello").join(', ')}`);

  // Câu 37: Convert a string to an array of ASCII codes
  const stringToAscii = (str) => Array.from(str).map(char => char.charCodeAt(0));
  output.push(`String to ASCII: ${stringToAscii("Hello").join(', ')}`);

  // Câu 38: Convert an array of ASCII codes to a string
  const asciiToString = (arr) => arr.map(code => String.fromCharCode(code)).join('');
  output.push(`ASCII to string: ${asciiToString([72, 101, 108, 108, 111])}`);

  // Câu 39: Implement the Caesar cipher
  const caesarCipher = (str, shift) => {
    return str.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const a = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - a + shift) % 26) + a);
      }
      return char;
    }).join('');
  };
  output.push(`Caesar cipher: ${caesarCipher("Hello, World!", 3)}`);

  // Câu 40: Implement the bubble sort algorithm
  const bubbleSort = (arr) => {
    let sorted = [...arr];
    for (let i = 0; i < sorted.length - 1; i++) {
      for (let j = 0; j < sorted.length - 1 - i; j++) {
        if (sorted[j] > sorted[j + 1]) {
          [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        }
      }
    }
    return sorted;
  };
  output.push(`Bubble sort: ${bubbleSort([5, 3, 8, 1, 2]).join(', ')}`);

  // Câu 41: Calculate the distance between two points
  const calculateDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  output.push(`Distance between points: ${calculateDistance(1, 1, 4, 5)}`);

  // Câu 42: Check if two circles are intersecting
  const circlesIntersect = (x1, y1, r1, x2, y2, r2) => {
    const distance = calculateDistance(x1, y1, x2, y2);
    return distance < r1 + r2;
  };
  output.push(`Circles intersect: ${circlesIntersect(0, 0, 5, 3, 4, 5)}`);

  // Câu 43: Extract a column from a bi-dimensional array
  const extractColumn = (matrix, colIndex) => matrix.map(row => row[colIndex]);
  const matrixExample = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  output.push(`Extracted column: ${extractColumn(matrixExample, 1).join(', ')}`);

  // Câu 44: Convert a binary string to a number
  const binaryToNumber = (binary) => parseInt(binary, 2);
  output.push(`Binary to number: ${binaryToNumber("1101")}`);

  // Câu 45: Calculate the sum of all numbers in a jagged array
  const sumJaggedArray = (arr) => arr.reduce((sum, item) => sum + (Array.isArray(item) ? sumJaggedArray(item) : item), 0);
  output.push(`Sum of jagged array: ${sumJaggedArray([1, [2, 3], [4, [5, 6]]])}`);

  // Câu 46: Find the maximum number in a jagged array
  const maxInJaggedArray = (arr) => {
    return arr.reduce((max, item) => {
      if (Array.isArray(item)) {
        return Math.max(max, maxInJaggedArray(item));
      }
      return Math.max(max, item);
    }, -Infinity);
  };
  output.push(`Max in jagged array: ${maxInJaggedArray([1, [2, 3], [4, [5, 6]]])}`);

  // Câu 47: Deep copy a jagged array
  const deepCopyJaggedArray = (arr) => {
    return arr.map(item => Array.isArray(item) ? deepCopyJaggedArray(item) : item);
  };
  const jaggedArray = [1, [2, 3], [4, [5, 6]]];
  const copiedArray = deepCopyJaggedArray(jaggedArray);
  output.push(`Deep copied jagged array: ${JSON.stringify(copiedArray)}`);

  // Câu 48: Return the longest word in a string
  const longestWord = (text) => text.split(/\s+/).reduce((longest, current) => current.length > longest.length ? current : longest, '');
  output.push(`Longest word: ${longestWord("Find the longest word in this sentence.")}`);

  // Câu 49: Shuffle an array of strings
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
  output.push(`Shuffled array: ${shuffleArray(['apple', 'banana', 'cherry']).join(', ')}`);

  // Câu 50: Return an array of n unique random numbers from 1 to n
  const uniqueRandomNumbers = (n) => {
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    return shuffleArray(numbers).slice(0, n);
  };
  output.push(`Unique random numbers: ${uniqueRandomNumbers(10).join(', ')}`);

  // Câu 51: Frequency of letters in a string
  const letterFrequency = (text) => {
    const frequency = {};
    for (const char of text.replace(/\s+/g, '').toLowerCase()) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    return Object.entries(frequency);
  };
  output.push(`Letter frequency: ${JSON.stringify(letterFrequency("Hello world"))}`);

  // Câu 52: Calculate Fibonacci(500) with high precision
  const fibonacciHighPrecision = (n) => {
    const fib = [0n, 1n];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n].toString();
  };
  output.push(`Fibonacci(500): ${fibonacciHighPrecision(500)}`);

  // Câu 53: Calculate 70! with high precision
  const factorialHighPrecision = (n) => {
    let result = 1n;
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result.toString();
  };
  output.push(`70!: ${factorialHighPrecision(70)}`);

  return (
    <View style={styles.container}>
      <ScrollView>
        {output.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
