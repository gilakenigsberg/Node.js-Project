import { Router } from 'express';
import { getService, getServices, createService, updateService, deleteService } from '../controllers/serviceController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

/**
 * @swagger
 * /services:
 *   get:
 *     summary: Get a list of services
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: Successfully retrieved list of services
 *       401:
 *         description: Unauthorized
 */
router.get('/services', authMiddleware, getServices);

/**
 * @swagger
 * /service/{id}:
 *   get:
 *     summary: Get a specific service
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     responses:
 *       200:
 *         description: Successfully retrieved service
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Service not found
 */
router.get('/service/:id', authMiddleware, getService);

/**
 * @swagger
 * /service:
 *   post:
 *     summary: Create a new service
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Services
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created service
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/service', authMiddleware, createService);

/**
 * @swagger
 * /service/{id}:
 *   put:
 *     summary: Update a specific service
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated service
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Service not found
 */
router.put('/service/:id', authMiddleware, updateService);

/**
 * @swagger
 * /service/{id}:
 *   delete:
 *     summary: Delete a specific service
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The service ID
 *     responses:
 *       200:
 *         description: Successfully deleted service
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Service not found
 */
router.delete('/service/:id', authMiddleware, deleteService);

export default router;

