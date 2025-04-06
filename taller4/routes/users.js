const express = require('express');
const router = express.Router();
let users = require('../data/24-taller-04-datos.json');

// 1. GET /users/hobby?hobby=HOBBY
router.get('/hobby', (req, res) => {
  const { hobby } = req.query;
  if (!hobby) return res.status(400).json({ error: 'Hobby no especificado' });

  const result = users.filter(user =>
    user.hobbies.map(h => h.toLowerCase()).includes(hobby.toLowerCase())
  );
  res.json(result);
});

// 2. GET /users/exists?codigo=CODIGO
router.get('/exists', (req, res) => {
  const { codigo } = req.query;
  if (!codigo) return res.status(400).json({ error: 'Código no especificado' });

  const exists = users.some(user => user.codigo === codigo);
  res.json({ exists });
});

// 3. GET /users/hobby/count?hobby=HOBBY
router.get('/hobby/count', (req, res) => {
  const { hobby } = req.query;
  if (!hobby) return res.status(400).json({ error: 'Hobby no especificado' });

  const count = users.filter(user =>
    user.hobbies.map(h => h.toLowerCase()).includes(hobby.toLowerCase())
  ).length;

  res.json({ hobby, count });
});

// 4. GET /users/is-free
router.get('/is-free', (req, res) => {
  const freeUsers = users.filter(user => user.hobbies.length < 3);
  res.json(freeUsers);
});

// 5. POST /users/suggest { codigo, hobby }
router.post('/suggest', (req, res) => {
  const { codigo, hobby } = req.body;
  if (!codigo || !hobby) return res.status(400).json({ error: 'Código y hobby requeridos' });

  const user = users.find(u => u.codigo === codigo);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

  if (user.hobbies.length >= 3) {
    return res.status(400).json({ message: 'El usuario ya tiene 3 hobbies' });
  }

  if (!user.hobbies.includes(hobby)) {
    user.hobbies.push(hobby);
  }

  res.json({ message: 'Hobby sugerido correctamente', user });
});

// 6. POST /users (crear nuevo usuario)
router.post('/', (req, res) => {
  const { codigo, nombre, apellido, hobbies } = req.body;
  if (!codigo || !nombre || !apellido || !hobbies || hobbies.length < 2) {
    return res.status(400).json({ error: 'Información incompleta o inválida' });
  }

  const exists = users.some(u => u.codigo === codigo);
  if (exists) return res.status(400).json({ error: 'El usuario ya existe' });

  const newUser = { codigo, nombre, apellido, hobbies };
  users.push(newUser);

  res.status(201).json({ message: 'Usuario creado correctamente', user: newUser });
});

module.exports = router;
