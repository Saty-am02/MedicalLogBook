import express from 'express';
import Admin from '../models/admin.js';
import { connectDB, closeDB } from '../config/db.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received credentials:', { email, password });

  try {
    // Connect to the medical database
    await connectDB();

    // Find the admin with the provided email
    const admin = await Admin.findOne({ email });
    console.log(admin);

    if (admin && admin.comparePassword(password)) {
      // Passwords match, send a success message
      console.log('Admin successfully logged in');
      res.json({ message: 'Successfully logged in!' });
    } else {
      // Invalid credentials
      console.log('Invalid credentials:', { email, password });
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the database connection
    await closeDB();
  }
});

export default router;
