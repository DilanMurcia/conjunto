import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();

// Modifica esto en función de la opción `base` de tu archivo astro.config.mjs.
// Deben coincidir. El valor predeterminado es "/".
const base = '/inicio';

// Servir archivos estáticos (por ejemplo, CSS, JS) desde la carpeta dist/client
app.use(base, express.static('dist/client/'));

// Definir endpoints
app.get('/inicio', (req, res) => {
  res.send('Contenido de la página de inicio');
});

app.get('/conjunto-residencial', (req, res) => {
  res.send('Contenido de la página del conjunto residencial');
});

app.get('/administracion', (req, res) => {
  res.send('Contenido de la página de administración');
});

app.get('/servicios-reservas', (req, res) => {
  res.send('Contenido de la página de servicios y reservas');
});

app.get('/noticias-actualidad', (req, res) => {
  res.send('Contenido de la página de noticias y actualidad');
});

app.get('/mantenimiento-operaciones', (req, res) => {
  res.send('Contenido de la página de mantenimiento y operaciones');
});

// Manejar el renderizado d
