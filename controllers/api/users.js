const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken,
  updateScore,
  updateInfo,
  loadLB,
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
    } catch {
        res.status(400).json('Bad Credentials');
    }
  }

  function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp);
  }

  async function updateScore(req, res) {
    try {
      const userId = req.params.userId;
      const newScore = req.body.newScore;
      const newTotalScore = req.body.newTotalScore
      const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the score and totalScore
    user.score = newScore;
    user.totalScore = newTotalScore;

    // Save the updated user
    await user.save();
      res.json({ message: 'Score updated successfully', user });
    } catch (error) {
      console.error('Error updating score:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async function updateInfo(req, res) {
    try {
      const userId = req.params.userId;
      const newName = req.body.name; 
      const newEmail = req.body.email; 
  
      const user = await User.findByIdAndUpdate(userId, { name: newName, email: newEmail }, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'Info updated successfully', user });
    } catch (error) {
      console.error('Error updating info:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


async function loadLB(req, res) {
  try {
    // Find users and sort by score in descending order, limit to 3
    const leaderboard = await User.find().sort({ totalScore: -1 }).limit(3);
    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Server error' });
  }}
