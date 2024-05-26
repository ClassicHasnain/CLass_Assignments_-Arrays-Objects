// Array of product objects
var products = [
    {
        name: "T-shirt",
        price: 20,
        inventory: {
            stock: 50,
            colorOptions: ["red", "blue", "green"],
        },
    },
    {
        name: "Jeans",
        price: 2000,
        inventory: {
            stock: 1000,
            colorOptions: ["black", "blue", "grey"],
        },
    },
    {
        name: "Sneakers",
        price: 3000,
        inventory: {
            stock: 50,
            colorOptions: ["white", "black", "red"],
        },
    },
];
// Function to change color and adjust price
function changeColor(product, newColor) {
    var colorIndex = product.inventory.colorOptions.indexOf(newColor);
    if (colorIndex !== -1) {
        // Update color
        product.inventory.colorOptions[0] = newColor;
        // Adjust price based on color (example logic)
        switch (newColor) {
            case "red":
                product.price *= 1.1; // Increase by 10%
                break;
            case "blue":
                product.price *= 0.95; // Decrease by 5%
                break;
            default:
                break;
        }
    }
    else {
        console.log("Color ".concat(newColor, " is not available for ").concat(product.name));
    }
}
// Function to display product details
function displayProductDetails(product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: $".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(", ")));
}
// Display details of each product
products.forEach(function (product) {
    displayProductDetails(product);
});
