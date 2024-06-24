import dotenv from 'dotenv';
dotenv.config();

export default {
  mongoURI: process.env.MONGO_URI || '',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  port: process.env.PORT || 5000,
};
