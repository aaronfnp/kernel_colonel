const Upgrade = require('../../models/upgrade')

module.exports = {
    index,
};

async function index(req, res) {
    const upgrades = await Upgrade.find();
    res.json(upgrades);
}

