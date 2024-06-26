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
        name: "Butter Finger",
        description: "The instrument of the Gods",
        quantity: 0,
        price: 100,
        productionRate: 1,
        isPassive: false,
        img: "https://static1.squarespace.com/static/57098b7e9f726623e0c32ff6/57102251fb436d81dc54af43[…]/1460675282470/007-goldfinger-700x350.png?format=original",
      },
      {
        name: "Frying Pan",
        description: "Just like grammy used to use",
        quantity: 0,
        price: 15,
        productionRate: 0.1,
        isPassive: true,
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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNUIDnfdC3IFW407mIWoXZ-6zlOGgpYaTIA&usqp=CAU"
      },
      {
        name: "Popcorn Party Cannon",
        description: " Launch popcorn into the air with the Popcorn Party Cannon, spreading joy and popcorn everywhere!",
        quantity: 0,
        price: 12000,
        productionRate: 47,
        isPassive: true,
        img: "https://cdn-icons-png.flaticon.com/512/6659/6659603.png"
      },
      {
        name: "Popcorn Fountain",
        description: "The rivers run yellow with butter",
        quantity: 0,
        price: 130000,
        productionRate: 260,
        isPassive: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fpMrYW7zHBenAPzPIOeeOb3_ZHo9GUtHPQ&usqp=CAUpopcorn"
      },
      {
        name: "Popcorn Popper Platoon",
        description: " Recruit an army of popcorn poppers to multiply your production power and conquer the popcorn market",
        quantity: 0,
        price: 1400000,
        productionRate: 1400,
        isPassive: true,
        img: "https://static.thenounproject.com/png/4837570-200.png"
      },
      {
        name: "THE FACTORY",
        description: "The newest state-of-the-art popcorn factory, even Orville would be jealous.",
        quantity: 0,
        price: 20000000,
        productionRate: 7800,
        isPassive: true,
        img: "https://cdn-icons-png.flaticon.com/512/3256/3256216.png"
      },
];


Upgrade.insertMany(upgradesData)
    .then((createdUpgrades) => {
        console.log("Upgrades created successfully:", createdUpgrades);
    })
    .catch((error) => {
        console.error("Error creating upgrades:", error);
    });