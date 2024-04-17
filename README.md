# Kernel Colonel

## About The Game

**Kernel Colonel** is an incremental, clicker game where players earn "corn" (currency) by clicking and use their earnings to purchase upgrades that automate and increase corn production. Drawing inspiration from classics like "Cookie Clicker," Kernel Colonel offers engaging passive and active gameplay mechanics aimed at maximizing corn production to dominate the leaderboard.

### Game Features

- **Active Clicking**: Earn corn by clicking. The more you click, the more you earn.
- **Passive Income**: Invest in upgrades that generate corn per second, automating your production.
- **Strategic Upgrades**: Use corn to buy upgrades, boosting your active and passive earning potential.
- **Leaderboard**: Compete against other players for the top spot and become the ultimate Kernel Colonel.

## Technical Overview

### Technologies Used

- **React.js**: Manages the dynamic UI and state throughout the game.
- **Node.js & Express.js**: Back-end server setup for handling routing and API requests.
- **MongoDB**: Used for storing user data, scores, and upgrades securely.
- **Mongoose**: Facilitates object data modeling to simplify interactions with the database.
- **Heroku**: Hosts the application, making it accessible online.

### Core Features

1. **Dynamic UI Updates**:
   - Powered by React.js for responsive and interactive user interfaces.
   - Efficient state management to handle scores and game dynamics.

2. **Data Persistence**:
   - Regular data saves to backend to prevent loss and maintain game continuity.
   - MongoDB and Mongoose ensure data integrity and provide robust query capabilities.

3. **Modular Component Design**:
   - Uses components like `StoreButton` and `StoreButtonList` for upgrade management, maintaining a clean and manageable codebase.

4. **Enhanced Security**:
   - Secure password hashing with bcrypt.
   - Safe user authentication managed through JWT (JSON Web Tokens).

## Resources

For planning and collaboration, we use the following tools:
- [Trello](https://trello.com/b/LYjAp5H3/kernel) - Our project management and task tracking tool.

## Contributing

Contributions are welcome and greatly appreciated. Follow these steps to contribute:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
