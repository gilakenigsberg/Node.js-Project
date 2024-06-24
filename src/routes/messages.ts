// routes/messages.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
import { Request, Response } from "express";

// קבלת כל ההודעות
router.get('/', async (req:Request, res:Response) => {
  const messages = await Message.find();
  res.send(messages);
});

// הוספת הודעה חדשה
router.post('/', async (req:Request, res:Response) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });
  await newMessage.save();
  res.send(newMessage);
});

module.exports = router;
