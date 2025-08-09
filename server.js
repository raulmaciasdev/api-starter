const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Example route
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Pong 🏓' });
});

// User routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Error handling middleware
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
