// server.mjs
import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida.');
});

// Ruta para la raíz del servidor
app.get('/', (req, res) => {
  res.send('Servidor corriendo. Accede a /users para ver los datos.');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Error al realizar la consulta');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
