import express from "express";
import {
  getMeeting,
  getMeetings,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} from "../controllers/meetingController";
import { authMiddleware } from "../middleware/authMiddleware";
const router = express.Router();

/**
 * @swagger
 * /meeting:
 *   get:
 *     summary: Get a specific meeting
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Meetings
 *     responses:
 *       200:
 *         description: Successfully retrieved meeting
 *       401:
 *         description: Unauthorized
 */
router.get('/meeting', authMiddleware, getMeeting);

/**
 * @swagger
 * /meetings:
 *   get:
 *     summary: Get all meetings
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Meetings
 *     responses:
 *       200:
 *         description: Successfully retrieved meetings
 *       401:
 *         description: Unauthorized
 */
router.get('/meetings', authMiddleware, getMeetings);

/**
 * @swagger
 * /meeting:
 *   post:
 *     summary: Create a new meeting
 *     tags:
 *       - Meetings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               date:
 *                 type: string
 *               attendees:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Successfully created meeting
 *       400:
 *         description: Bad request
 */
router.post("/meeting", createMeeting);

/**
 * @swagger
 * /meeting/{id}:
 *   put:
 *     summary: Update a specific meeting
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Meetings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               date:
 *                 type: string
 *               attendees:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Successfully updated meeting
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.put("/meeting/:id", authMiddleware, updateMeeting);

/**
 * @swagger
 * /meeting/{id}:
 *   delete:
 *     summary: Delete a specific meeting
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Meetings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The meeting ID
 *     responses:
 *       200:
 *         description: Successfully deleted meeting
 *       401:
 *         description: Unauthorized
 */
router.delete("/meeting/:id", authMiddleware, deleteMeeting);

export default router;
