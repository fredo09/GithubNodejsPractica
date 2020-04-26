const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hola mundo!!');
});

//Agregando otra ruta en rama de desarrollo
app.get('/desarrollo', (req, res) =>{
    res.status(200).send('Hola Desarrollo');
})

app.listen(PORT , () =>{
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});