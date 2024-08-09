import mysql from 'mysql2';

// Configuración de la conexión
const connection = mysql.createConnection({
  host: 'localhost', // Cambia a la dirección de tu servidor MySQL
  user: 'dev_user', // Cambia al usuario de tu base de datos
  password: 'dev_password', // Cambia a la contraseña de tu base de datos
  database: 'conjunto_residencial' // Cambia al nombre de tu base de datos
});

// Intento de conexión
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');

  // Realizar una consulta de prueba
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
    } else {
      console.log('Resultados de la consulta:', results);
    }

    // Cerrar la conexión a la base de datos
    connection.end();
  });
});
