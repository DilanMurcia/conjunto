import * as maintenanceModel from '../models/maintenanceModel.mjs';

export async function getMaintenances() {
  return await maintenanceModel.getAllMaintenances();
}

export async function addMaintenance(maintenance) {
  return await maintenanceModel.createMaintenance(maintenance);
}

// Añade más servicios según sea necesario
