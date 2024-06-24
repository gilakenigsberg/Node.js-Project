import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { getUsers, signup, signin } from '../controllers/userController';

const router = Router();

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               role: 
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully signed up
 *       400:
 *         description: Bad request
 */
router.post('/signup', signup);

/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: Sign in a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully signed in
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/signin', signin);

/**
 * @swagger
 * /users/getUsers:
 *   get:
 *     summary: Get a list of users
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Successfully retrieved list of users
 *       401:
 *         description: Unauthorized
 */
router.get('/getUsers', authMiddleware, getUsers);

export default router;
