                                  //  EVENTS

// 1
// function showAlert() {
//     alert("You clicked the link!");
// }

// 2
// // JavaScript function to show alert message
// function showAlert(message) {
//     alert(message);
// }


// 3
// // Function to delete a row
// function deleteRow(button) {
//     // Find the row containing the button and delete it
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }


// 4
// Function to change the image on mouseover
// function changeImage() {
//     document.getElementById("hoverImage").src = "car1";
// }

// // Function to reset the image on mouseout
// function resetImage() {
//     document.getElementById("hoverImage").src = "car2";
// }


// 5
// Initial counter value
// let counter = 0;

// // Function to increase the counter
// function increaseCounter() {
//     counter++;
//     updateCounterDisplay();
// }

// // Function to decrease the counter
// function decreaseCounter() {
//     counter--;
//     updateCounterDisplay();
// }

// // Function to update the displayed counter value
// function updateCounterDisplay() {
//     document.getElementById("counterValue").textContent = counter;
// }




//                                      FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS 

// 1
// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// let base = 2;
// let exponent = 3;
// console.log(`${base} raised to the power of ${exponent} is: ${power(base, exponent)}`);



// // 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example usage
// let inputYear = 2024;
// if (isLeapYear(inputYear)) {
//     console.log(`${inputYear} is a leap year.`);
// } else {
//     console.log(`${inputYear} is not a leap year.`);
// }


// 3
// // Function to calculate the semi-perimeter S
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// // Function to calculate the area of the triangle
// function calculateArea(a, b, c) {
//     const S = calculateSemiPerimeter(a, b, c);
//     // Area formula: area = sqrt(S * (S - a) * (S - b) * (S - c))
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// // Example usage
// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const area = calculateArea(sideA, sideB, sideC);
// console.log(`The area of the triangle with sides ${sideA}, ${sideB}, and ${sideC} is: ${area.toFixed(2)}`);



// // 4
// // Function to calculate the average of marks
// function calculateAverage(marks) {
//     const total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
// }

// // Function to calculate the percentage of marks
// function calculatePercentage(marks) {
//     const total = marks.reduce((sum, mark) => sum + mark, 0);
//     return (total / (marks.length * 100)) * 100; // Assuming each subject is out of 100
// }

// // Main function to receive marks and display the results
// function mainFunction() {
//     // Sample marks for three subjects
//     const marks = [85, 90, 78]; // You can replace these values with user input

//     const average = calculateAverage(marks);
//     const percentage = calculatePercentage(marks);

//     console.log(`Marks: ${marks.join(', ')}`);
//     console.log(`Average: ${average.toFixed(2)}`);
//     console.log(`Percentage: ${percentage.toFixed(2)}%`);
// }

// // Call the main function
// mainFunction();



// 5
// Custom indexOf function to find the index of a single character
// function customIndexOf(str, char) {
//     // Iterate over each character in the string
//     for (let i = 0; i < str.length; i++) {
//         // Check if the current character matches the specified character
//         if (str[i] === char) {
//             return i; // Return the index if found
//         }
//     }
//     return -1; // Return -1 if the character is not found
// }

// // Example usage
// const string = "Hello, world!";
// const character = "o";
// const index = customIndexOf(string, character);

// if (index !== -1) {
//     console.log(`The character '${character}' is found at index: ${index}`);
// } else {
//     console.log(`The character '${character}' is not found in the string.`);
// }



// // 6
// // Function to delete all vowels from a sentence
// function deleteVowels(sentence) {
//     // Ensure the sentence is not longer than 25 characters
//     if (sentence.length > 25) {
//         return "Error: Sentence exceeds 25 characters.";
//     }

//     // Define a regular expression to match vowels (both lowercase and uppercase)
//     const vowels = /[aeiouAEIOU]/g;

//     // Replace all vowels in the sentence with an empty string
//     const result = sentence.replace(vowels, '');

//     return result;
// }

// // Example usage
// const inputSentence = "Hello, how are you?";
// const outputSentence = deleteVowels(inputSentence);

// console.log(`Original sentence: "${inputSentence}"`);
// console.log(`Sentence without vowels: "${outputSentence}"`);



// // 7

// // Function to count occurrences of two successive vowels
// function countSuccessiveVowels(sentence) {
//     let count = 0;
//     var vowels = "aeiouAEIOU";

//     // Loop through the sentence to check each pair of characters
//     for (let i = 0; i < sentence.length - 1; i++) {
//         var firstChar = sentence[i];
//         var secondChar = sentence[i + 1];

//         // Check if both characters are vowels
//         switch (true) {
//             case vowels.includes(firstChar) && vowels.includes(secondChar):
//                 count++;
//                 break;
//         }
//     }

//     return count;
// }

// // Example usage
// var inputSentence = "Please read the book carefully.";
// var occurrences = countSuccessiveVowels(inputSentence);

// console.log(`Number of successive vowel pairs: ${occurrences}`);



// // 8

// Function to convert kilometers to meters
// function convertToMeters(km) {
//     return km * 1000;
// }

// // Function to convert kilometers to feet
// function convertToFeet(km) {
//     return km * 3280.84;
// }

// // Function to convert kilometers to inches
// function convertToInches(km) {
//     return km * 39370.1;
// }

// // Function to convert kilometers to centimeters
// function convertToCentimeters(km) {
//     return km * 100000;
// }

// // Main function to take input and display the conversions
// function displayConversions(distanceInKm) {
//     const meters = convertToMeters(distanceInKm);
//     const feet = convertToFeet(distanceInKm);
//     const inches = convertToInches(distanceInKm);
//     const centimeters = convertToCentimeters(distanceInKm);

//     console.log(`Distance in Kilometers: ${distanceInKm} km`);
//     console.log(`Distance in Meters: ${meters} m`);
//     console.log(`Distance in Feet: ${feet} ft`);
//     console.log(`Distance in Inches: ${inches} in`);
//     console.log(`Distance in Centimeters: ${centimeters} cm`);
// }

// // Example usage
// const distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
// displayConversions(distanceInKm);



// // 9

// // Function to calculate overtime pay
// function calculateOvertimePay(hoursWorked) {
//     const overtimeRate = 12.00;
//     const regularHours = 40;

//     // Check if hours worked is greater than regular hours
//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     } else {
//         return 0; // No overtime pay if hours worked are 40 or less
//     }
// }

// // Main function to input the number of hours worked and calculate overtime pay
// function main() {
//     const hoursWorked = parseInt(prompt("Enter the number of hours worked:"));

//     // Calculate overtime pay
//     const overtimePay = calculateOvertimePay(hoursWorked);

//     // Display the result
//     if (overtimePay > 0) {
//         console.log(`Overtime pay is: Rs. ${overtimePay}`);
//     } else {
//         console.log("No overtime pay. The employee has worked 40 or fewer hours.");
//     }
// }

// // Call the main function
// main();



// // 10

// Function to calculate the number of notes for a given amount
function calculateNotes(amount) {
    // Note denominations
    const hundredNote = 100;
    const fiftyNote = 50;
    const tenNote = 10;

    // Calculate the number of 100 notes
    let hundredCount = Math.floor(amount / hundredNote);
    amount = amount % hundredNote;

    // Calculate the number of 50 notes
    let fiftyCount = Math.floor(amount / fiftyNote);
    amount = amount % fiftyNote;

    // Calculate the number of 10 notes
    let tenCount = Math.floor(amount / tenNote);
    
    // Display the number of notes for each denomination
    console.log(`100-Rupee notes: ${hundredCount}`);
    console.log(`50-Rupee notes: ${fiftyCount}`);
    console.log(`10-Rupee notes: ${tenCount}`);
}

// Main function to input the amount and calculate the notes
function main() {
    const amount = parseInt(prompt("Enter the amount to withdraw (in multiples of 10):"));

    // Check if the amount is a multiple of 10
    if (amount % 10 !== 0) {
        console.log("Please enter an amount in multiples of 10.");
    } else {
        calculateNotes(amount);
    }
}

// Call the main function
main();