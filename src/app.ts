// index.js
// const express = require('express');
// const mongoose = require('mongoose');
// import bodyParser from 'body-parser';
// import messages from './routes/messages';

// const app = express();
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true });

// app.use('/api/messages', messages);

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import businessRoutes from "./routes/businessRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import meetingRoutes from "./routes/meetingRoutes";
import userRoutes from "./routes/userRoutes";
// import { errorHandler } from './middleware/errorHandler';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;

const DB_URI = process.env.DB_URI || "";

mongoose
  .connect("mongodb://localhost:27017/photography")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
app.use(cors());
// app.use(json());
app.use("/", businessRoutes);
app.use("/services", serviceRoutes);
app.use("/meetings", meetingRoutes);
app.use("/users", userRoutes);
// app.use('/api/messages', messages);

// app.use(errorHandler);

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "פרויקט ניהול עסק צלמת API",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.ts"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
