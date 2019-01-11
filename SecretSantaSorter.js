// Write a function that takes in an array of names then pairs up each name with another in a copy of the array, and returns an array of paired names
// 1. Cannot be an empty array
// 2. Must test to ensure the two names paired are NOT the same
// HOW TO MAKE IT WORK
// 1. An array is entered as an argument <= test to ensure it's not empty
// 2. A copy of the array is created
// 3. The copy array is shuffled
// 4. Each name in the original array is paired with a name at the same index
// 5. IF the two names to be paired are the same, the loop is stopped and restarted, to ensure each person in the list gets someone else.

function secretSantaSorter(arr) {
    if (arr.length === 0) {
        console.log('Please enter some names');
    }
    let copy = [...arr];

    copy = shuffle(copy); // Shuffle the array

    for (let i in arr) { // Check to see if copy array is different to original array
        if(arr[i] === copy[i]) {
            copy = shuffle(copy);
            i = -1; // If there are any values the same, start the for loop again
        }
    }

    for (let j in arr) {
        console.log(`${arr[j]}\'s Secret Santa is: ${copy[j]}`); // Log the results!
    }
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

secretSantaSorter(['Emma', 'Carol', 'Jimmy', 'Sam', 'Jackie', 'Rob', 'Andrew']);
