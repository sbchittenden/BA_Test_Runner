# Unit tests for Bov Academy `validator` and `utilities` functions

A simple way to quickly assess how complete and robust each student's project assignment is. The majority of the unit tests are taken directly from the project assignment directions.

As long as the student has followed the function names as laid out in the directions the test files should hook up nicely.

## Use

1. Clone this repo to your local machine

2. Install the Mocha.js test framework and Chai.js assertion libraries:

  ```
   cd BA_Test_Runner (or whatever you named the repo locally)
   
   npm install
  ```

3. For the student you are reviewing make a local copy of their `validator.js` and `utilities.js` files. 

4. For ease of testing make sure to expose both the `validator` and `utilities` objects (remove or comment out the IIFE if present) in each student file.

5. In `testrunner.html` load up the student's `utilities.js` and `validator.js` files under the "load student code files for testing here" comment. I've included a directory for both student utilities and student validator files but they can live anywhere.

6. Open up `testrunner.html` in a new browser window. The results of each test should show up along with any error messages.
