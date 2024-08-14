import express from 'express';
import maintenanceRoutes from './routers/maintenanceRoutes.mjs';

const app = express();
const port = 3000;


// Middleware para que express entienda JSON
app.use(express.json());

// Usa las rutas de mantenimiento
app.use('/api/maintenances', maintenanceRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


