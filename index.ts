            //🚀 Day 33 Challenge: Start Coding! 🚀//
//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
       
function CurrentDateFormat(): string {
    let now = new Date();
    let day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    let month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    let year = now.getFullYear();
    return `${day}-${month}-${year}`;
}console.log(CurrentDateFormat()); // Outputs the current date in DD-MM-YYYY format

//Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function daysLeftNewYear(): number {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    let diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;}
console.log(daysLeftNewYear() + " days until New Year.");

//Question 99: Generate a date object representing your next birthday and log it to the console.
// Generates a Date object for the next occurrence of a specific birthday

function next_Birthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1)}
    return birthday;}
// Replace with your birth month and day
const nextBirthday = next_Birthday(3, 16); 
console.log("Next birthday on:", nextBirthday.toLocaleDateString());




