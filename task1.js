//I have n title
//each title has ONE letter
let titles = ['A', 'A', 'B'];
let n = titles.length;
// console.log(n);

//example 1
//in example one i have only three title, because I have only three letters
//the out put here needs to be 8
// totalNumOfSequence = titles(without duplicates letters) + possible sequence
// that means I will need two functions
let numOfSingleLetters = 0;
let possibleSequence = 0;


//first I will take out the duplicates
//using set due to the fact is simple and the fastest way
//set is a object that will always return unique values.
function returnNumOfPossibleSequences(array, numberOftitle) {
    const noDuplicate = new Set(array);
    const arrayWithNoDuplicates = [...noDuplicate];
    console.log(arrayWithNoDuplicates);

    numOfSingleLetters = arrayWithNoDuplicates.length;
    console.log("Total of single letters: " + numOfSingleLetters);

    //now i need to return a number of sequences
    //the sequences is always the first letter with the next one, following the index array
    //so, what I need is a factorial math with the number of titles I have
    //for example, with the number three I need to do 3 * 2 * 1
    //if we want to write this in a "generic" way it will be something like this:
    // let possibleSequence = n * (n-1) * (n-2);

    //first we need to check if the number of tiles is equal to zero or one
    //because this is always be 1
    let result = 1;
    if (numberOftitle === 0 || numberOftitle === 1) {
        return result;
    } else {
        //then I do a for loop beginning with the num of tiles I have
        //and multiplying the result variable by "i" which will decrease until is equal to 1
        for (let i = numberOftitle; i >= 1; i--) {
            result = result * i;
        }
        possibleSequence = result;
    }

    //final result
    let totalNumOfSequence = numOfSingleLetters + possibleSequence
    console.log('Your total number of sequence is: ' + totalNumOfSequence);
    
}
returnNumOfPossibleSequences(titles, n); // example 1
returnNumOfPossibleSequences(['A', 'A', 'A', 'B', 'B', 'C'], 5); // example 2 I have a bug because this is not the value from the task page.
returnNumOfPossibleSequences(['V'], 1); // example 3
