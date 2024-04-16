const mongoose = require('mongoose');
const Upgrade = require('./models/upgrade');

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
        name: "Frying Pan",
        description: "Just like grammy used to use",
        quantity: 0,
        price: 15,
        productionRate: 1,
        isPassive: false,
        img: "https://cdn.iconscout.com/icon/premium/png-512-thumb/popcorn-machine-10736056-8784226.png?f=webp&w=256"
      },
      {
        name: "Popcorn Machine",
        description: "Everyone loves popcorn from the movie theater",
        quantity: 0,
        price: 100,
        productionRate: 1,
        isPassive: true,
        img: "https://cdn.iconscout.com/icon/free/png-512/free-cannon-1777375-1512065.png?f=webp&w=256"
      },
      {
        name: "Popcorninator X",
        description: "Unleash the power of the Popcorninator X to pop kernels at lightning speed",
        quantity: 0,
        price: 1100,
        productionRate: 8,
        isPassive: true,
        img: "fakelink"
      },
      {
        name: "Popcorn Party Cannon",
        description: " Launch popcorn into the air with the Popcorn Party Cannon, spreading joy and popcorn everywhere!",
        quantity: 0,
        price: 12000,
        productionRate: 47,
        isPassive: true,
        img: "fakelink"
      },
      {
        name: "Popcorn Fountain",
        description: "The rivers run yellow with butter",
        quantity: 0,
        price: 130000,
        productionRate: 260,
        isPassive: true,
        img: "fakelink"
      },
      {
        name: "Popcorn Popper Platoon",
        description: " Recruit an army of popcorn poppers to multiply your production power and conquer the popcorn market",
        quantity: 0,
        price: 1400000,
        productionRate: 1400,
        isPassive: true,
        img: "fakelink"
      },
      {
        name: "THE FACTORY",
        description: "The newest state-of-the-art popcorn factory, even Orville would be jealous.",
        quantity: 0,
        price: 20000000,
        productionRate: 7800,
        isPassive: true,
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