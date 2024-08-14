import { Router } from 'express';
import {
  getAllMaintenances,
  getMaintenanceById,
  addMaintenance,
  updateMaintenance,
  deleteMaintenance
} from '../controllers/maintenanceController.mjs';

const router = Router();

router.get('/', getAllMaintenances);
router.get('/:id', getMaintenanceById);
router.post('/', addMaintenance);
router.put('/:id', updateMaintenance);
router.delete('/:id', deleteMaintenance);

export default router;
