const friends = [12,45, 32, 22, 44, 62, 29, 69, 87];

//Remove eliments from array
//and,if necessary, inserts new eliments in there place,
//returning the deleted elements.
//will change the original array
const partial = friends.splice(2, 5, 99, 555, 7777);
console.log(partial);
console.log(friends);