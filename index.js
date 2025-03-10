const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  const server = express();

  // Middleware para servir archivos estáticos
  server.use(express.static(path.join(__dirname, 'public')));

  // Manejo de todas las demás rutas por Next.js
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Iniciar el servidor
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});