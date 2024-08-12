import express from 'express';
import {
  getAllMaintenances,
  getMaintenanceById,
  addMaintenance,
  updateMaintenance,
  deleteMaintenance
} from './models/maintenanceModel.mjs';

const app = express();
const port = 3000;

app.use(express.json());

// Rutas para mantenimientos
app.get('/api/maintenances', async (req, res) => {
  try {
    const maintenances = await getAllMaintenances();
    res.json(maintenances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/maintenances/:id', async (req, res) => {
  try {
    const maintenance = await getMaintenanceById(req.params.id);
    if (maintenance) {
      res.json(maintenance);
    } else {
      res.status(404).json({ message: 'Mantenimiento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/maintenances', async (req, res) => {
  try {
    const id = await addMaintenance(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/maintenances/:id', async (req, res) => {
  try {
    await updateMaintenance(req.params.id, req.body);
    res.status(200).json({ message: 'Mantenimiento actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/maintenances/:id', async (req, res) => {
  try {
    await deleteMaintenance(req.params.id);
    res.status(200).json({ message: 'Mantenimiento eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
