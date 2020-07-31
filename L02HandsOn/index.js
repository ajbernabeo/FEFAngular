"use strict";
var Entry = /** @class */ (function () {
    function Entry(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    return Entry;
}());
var newPerson = new Entry('Albert', 'Einstein', new Date('5/14/1879'));
console.log("First Name: " + newPerson.firstName + " \nLast Name: " + newPerson.lastName + " \nBirthday: " + newPerson.birthday);
//Part 2 =========================================================================================================================
var numbers = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];
function sortArray(array) {
    return array.sort();
}
console.log("Array before sorting: " + numbers);
console.log("Array after sorting: " + sortArray(numbers));
