// Import necessary modules
const CRUD = require('../crud-helper');
const mongoose = require('mongoose');
const User = require('../models/user');

// Initialize an instance of the CRUD helper for the User collection
const userCRUD = new CRUD(User);

// Define the MongoDB connection string
const mongoURI = 'mongodb+srv://aaronfnp:CFTC6oA2Zp180L9D@student-cluster.l8a3zvl.mongodb.net/kernel_colonel?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
});

// Define the upgrade data to be added
const upgradesData = [
    {
        name: "Popcorn Machine",
        level: 0,
        price: 20,
        productionRate: 5,
        effect: "WIP",
        img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/popcorn-machine-10736056-8784226.png?f=webp&w=256"
    },
    {
        name: "Popcorn Cannon",
        level: 0,
        price: 40,
        productionRate: 10,
        effect: "WIP",
        img: "https://cdn.iconscout.com/icon/free/png-512/free-cannon-1777375-1512065.png?f=webp&w=256"
    }
];

// Define the user ID for which upgrades will be added
const userId = '6617f0a643509692be2a7075'; // Replace this with the actual user ID

// Find the user by ID
userCRUD.getById(userId)
    .then(user => {
        if (!user) {
            console.error('User not found');
            return;
        }

        // Update the upgrades array of the user document
        user.upgrades.push(...upgradesData);

        // Save the updated user document back to the database
        return user.save();
    })
    .then(updatedUser => {
        if (updatedUser) {
            console.log('Upgrades added successfully:', updatedUser);
        }
    })
    .catch(error => {
        console.error('Error adding upgrades:', error);
    });