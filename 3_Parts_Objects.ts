//                                    PART == 1
// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if
// any).

type Employee = {
    name : string ;
    departmenmt : string ;
    role : "Manager"| "engineer" | "Intern"    ;
    contact?:{
        phone ?: number ;
        email ?: string ;
    }
 skill? : string [] ;
} ;

//                                   PART == 2
// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the
// engine's horsepower

type Car = {
    make: string;
    model: string;
    year: number;
engine :{
horsePower : number ;
};
 getHorsepower : () => number ;
};


//                                   PART == 3
// Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object
// should have two properties:
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function
// accepts a new color string as an argument. When called, it should:
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g.,
// increase by 10% for red, decrease by 5% for blue).

type Product ={
    name :string ;
    price : number ;
    colour : string;
    inventory : {
        stock : number  ;
        colourOpion? : string [];
        changeColour : (newColour : string) => void ;
    };
};