const express = require('express');
const path = require ('path');
const app = express(); //Iniciando nueva app en express
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
}); //HTML, CSS y JS son archivos estaticos 
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Servidor corriendo en http://localhost:${PORT}');
});
