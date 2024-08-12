import express from 'express';
import * as maintenanceController from '../controllers/maintenanceController.mjs';

const router = express.Router();

router.get('/maintenances', maintenanceController.listMaintenances);
router.post('/maintenances', maintenanceController.createMaintenance);

// Añade más rutas según sea necesario

export default router;
