import * as maintenanceService from '../services/maintenanceService.mjs';

export async function listMaintenances(req, res) {
  try {
    const maintenances = await maintenanceService.getMaintenances();
    res.json(maintenances);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving maintenances' });
  }
}

export async function createMaintenance(req, res) {
  try {
    const maintenance = req.body;
    await maintenanceService.addMaintenance(maintenance);
    res.status(201).json({ message: 'Maintenance created' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating maintenance' });
  }
}

// Añade más funciones de controlador según sea necesario
