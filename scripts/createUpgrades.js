const mongoose = require('mongoose');
const Upgrade = require('../models/upgrade');


mongoose.connect('mongodb+srv://aaronfnp:CFTC6oA2Zp180L9D@student-cluster.l8a3zvl.mongodb.net/kernel_colonel?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const upgradesData = [
    {
        name: "Popcorn Machine",
        level: 0,
        price: 20,
        productionRate: 1,
        effect: "Passive",
        img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/popcorn-machine-10736056-8784226.png?f=webp&w=256"
      },
      {
        name: "Popcorn Cannon",
        level: 0,
        price: 40,
        productionRate: 2,
        effect: "Passive",
        img: "https://cdn.iconscout.com/icon/free/png-512/free-cannon-1777375-1512065.png?f=webp&w=256"
      },
      {
        name: "Frying Pan",
        level: 0,
        price: 60,
        productionRate: 0.5,
        effect: "Active",
        img: "fakelink"
      },

];


Upgrade.insertMany(upgradesData)
    .then((createdUpgrades) => {
        console.log("Upgrades created successfully:", createdUpgrades);
    })
    .catch((error) => {
        console.error("Error creating upgrades:", error);
    });
