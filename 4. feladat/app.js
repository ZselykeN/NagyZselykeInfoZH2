// Define a Product constructor to represent the structure of a product
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Array to store the products
var products = [];

// Function to add a product
function addProduct() {
    var productNameInput = document.getElementById('productName');
    var productPriceInput = document.getElementById('productPrice');

    var productName = productNameInput.value;
    var productPrice = parseFloat(productPriceInput.value);

    // Check if both name and price are provided
    if (productName && !isNaN(productPrice)) {
        var newProduct = new Product(productName, productPrice);
        products.push(newProduct);
        updateStatistics();
    } else {
        alert('Please enter valid product name and price.');
    }
}

// Function to update statistics
function updateStatistics() {
    // Update cheapest product
    var cheapestProduct = getCheapestProduct();
    document.getElementById('cheapestProduct').innerText = cheapestProduct ? cheapestProduct.name : '';

    // Update average price
    var averagePrice = calculateAveragePrice();
    document.getElementById('averagePrice').innerText = averagePrice.toFixed(2);

    // Update price deviation
    var priceDeviation = calculatePriceDeviation();
    document.getElementById('priceDeviation').innerText = priceDeviation.toFixed(2);
}

// Function to get the cheapest product
function getCheapestProduct() {
    if (products.length === 0) {
        return undefined;
    }

    return products.reduce(function (min, product) {
        return product.price < min.price ? product : min;
    }, products[0]);
}

// Function to calculate the average price
function calculateAveragePrice() {
    if (products.length === 0) {
        return 0;
    }

    var total = products.reduce(function (sum, product) {
        return sum + product.price;
    }, 0);

    return total / products.length;
}

// Function to calculate the price deviation
function calculatePriceDeviation() {
    if (products.length === 0) {
        return 0;
    }

    var average = calculateAveragePrice();
    var squaredDifferences = products.map(function (product) {
        return Math.pow(product.price - average, 2);
    });
    var sumSquaredDifferences = squaredDifferences.reduce(function (sum, value) {
        return sum + value;
    }, 0);

    return Math.sqrt(sumSquaredDifferences / products.length);
}
