// Instructions:
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// - title (a string)
// - uploader (a string, the person who uploaded it)
// - time (a number, the duration of the video - in seconds)

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

// Define the Video class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  // Method to display a message about watching the video
  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// Instantiate a new Video instance and call the watch() method
const video1 = new Video('JavaScript Basics', 'Alice', 120);
video1.watch();
// Expected output: Alice watched all 120 seconds of JavaScript Basics!

// Instantiate a second Video instance with different values
const video2 = new Video('Advanced JavaScript', 'Bob', 180);
video2.watch();
// Expected output: Bob watched all 180 seconds of Advanced JavaScript!

// Bonus: Use an array to store data for five Video instances
const videoData = [
  { title: 'Introduction to HTML', uploader: 'Carol', time: 90 },
  { title: 'CSS for Beginners', uploader: 'Dave', time: 150 },
  { title: 'Responsive Design', uploader: 'Eve', time: 200 },
  { title: 'JavaScript DOM Manipulation', uploader: 'Frank', time: 160 },
  { title: 'ES6 Features', uploader: 'Grace', time: 140 }
];

// Bonus: Loop through the array to instantiate those instances
const videoInstances = videoData.map(data => new Video(data.title, data.uploader, data.time));

// Call the watch() method on each video instance
videoInstances.forEach(video => video.watch());
// Expected output:
// Carol watched all 90 seconds of Introduction to HTML!
// Dave watched all 150 seconds of CSS for Beginners!
// Eve watched all 200 seconds of Responsive Design!
// Frank watched all 160 seconds of JavaScript DOM Manipulation!
// Grace watched all 140 seconds of ES6 Features!
