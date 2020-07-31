// Part 1 =========================================================================================================================
interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person {
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(firstName: string, lastName: string, birthday: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}

let newPerson = new Entry('Albert', 'Einstein', new Date('5/14/1879'));
console.log(`First Name: ${newPerson.firstName} \nLast Name: ${newPerson.lastName} \nBirthday: ${newPerson.birthday}`);


//Part 2 =========================================================================================================================
let numbers: string[] = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];

function sortArray<S>(array: S[]): S[] {
    return array.sort();
}

console.log(`Array before sorting: ${numbers}`);
console.log(`Array after sorting: ${sortArray(numbers)}`);