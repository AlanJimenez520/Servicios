const express = require('express')
const app = express();
const PORT = 3000; // Puerto en donde se ejecuta el servidor

app.use (express.json()); //Habilitando peticion de uso de json

//Base de datos estudiantes (Listas en formato de arreglo)

let estudiantes = [
{id: 1, nombre: 'Juancho'},
{id: 2, nombre: 'Pedro'},
{id: 3, nombre: 'Gabriel'},
];

//GET: Obtener a todos los estudiantes

app.get('/estudiantes',(req, res) =>{
    res.json(estudiantes);
});

//GET: Obtener a un estudiante por ID

app.get('/estudiantes/:id', (req, res) => {
    const id=parseInt(req.params.id); //parseInt, sirve para cambiar a entero
    const estudiante= estudiantes.find ( e=> e.id === id);

    if (estudiante){
        res.json(estudiante);
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
});

//POST: Crear un nuevo estudiante

app.post('/estudiante'
    
    , (req, res) => {
    const nuevoEstudiante = {
        id:estudiantes.length+1,
        nombre: req.body.nombre
    };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});

//Buscar un Item

app.put('/items/:id', (req, res)=> {
    const id= parseInt(req.params,id);
    const item= items.find(i=>i.id===id);
    if(item){
        item.name=req.body.name;
        res.json(item);
    }else{
        res.status(404).send('Item no encontrado');
    }
});

//Delete: eliminar un item por ID
app.delete('/estudiantes/:id', (req,res)=>{
    const id= parseInt (req.params.id);
    const index = estudiantes.findIndex(i=>i.id ===id);
    if (index!==-1){
        estudiantes.splice(index,1); 
        res.send('Item eliminado');
    }else{
        res.status(404).send('Item no encontrado')
    }
});

//Inicia el servidor

app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:$PORT');

})
