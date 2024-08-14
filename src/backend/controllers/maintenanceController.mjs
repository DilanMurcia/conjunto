import * as maintenanceModel from '../models/maintenanceModel.mjs';

export async function getAllMaintenances(req, res) {
  try {
    const maintenances = await maintenanceModel.getAllMaintenances();
    res.json(maintenances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getMaintenanceById(req, res) {
  try {
    const maintenance = await maintenanceModel.getMaintenanceById(req.params.id);
    if (maintenance) {
      res.json(maintenance);
    } else {
      res.status(404).json({ message: 'Mantenimiento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addMaintenance(req, res) {
  try {
    const id = await maintenanceModel.addMaintenance(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateMaintenance(req, res) {
  try {
    await maintenanceModel.updateMaintenance(req.params.id, req.body);
    res.status(200).json({ message: 'Mantenimiento actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteMaintenance(req, res) {
  try {
    await maintenanceModel.deleteMaintenance(req.params.id);
    res.status(200).json({ message: 'Mantenimiento eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
