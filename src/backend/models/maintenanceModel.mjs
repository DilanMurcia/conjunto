// src/backend/models/maintenanceModel.mjs
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();
// Configura la conexión a la base de datos usando las variables de entorno
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


// Función para obtener todas las mantenimientos
export async function getAllMaintenances() {
  const [rows] = await pool.query('SELECT * FROM maintenances');
  return rows;
}

// Función para obtener una mantenimiento por ID
export async function getMaintenanceById(id) {
  const [rows] = await pool.query('SELECT * FROM maintenances WHERE id = ?', [id]);
  return rows[0];
}

// Función para agregar una nueva mantenimiento
export async function addMaintenance(maintenance) {
  const { title, description, maintenance_date } = maintenance;
  const [result] = await pool.query(
    'INSERT INTO maintenances (title, description, maintenance_date) VALUES (?, ?, ?)',
    [title, description, maintenance_date]
  );
  return result.insertId;
}

// Función para actualizar una mantenimiento
export async function updateMaintenance(id, updates) {
  const { title, description, maintenance_date } = updates;
  await pool.query(
    'UPDATE maintenances SET title = ?, description = ?, maintenance_date = ? WHERE id = ?',
    [title, description, maintenance_date, id]
  );
}

// Función para eliminar una mantenimiento
export async function deleteMaintenance(id) {
  await pool.query('DELETE FROM maintenances WHERE id = ?', [id]);
}
