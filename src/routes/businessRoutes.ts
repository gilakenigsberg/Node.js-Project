import { Router } from 'express';
import { getBusiness, createBusiness, updateBusiness } from '../controllers/businessController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

/**
 * @swagger
 * /business:
 *   get:
 *     summary: Get business details
 *     tags:
 *       - Business
 *     responses:
 *       200:
 *         description: Successfully retrieved business details
 */
router.get('/', getBusiness);

/**
 * @swagger
 * /business:
 *   post:
 *     summary: Create a new business
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Business
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created business
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/', authMiddleware, createBusiness);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update a specific business
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Business
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The business ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated business
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Business not found
 */
router.put('/:id', authMiddleware, updateBusiness);

export default router;
