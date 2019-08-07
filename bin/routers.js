const express = require ("express");
const app = express();
const { controller }= require("./Controller");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (rep, res)=>{
    res.send("funciona");
})

app.get("/user", (rep, res)=>{
   controller.getUsers( res);
})

app.post("/users", (req, res)=>{
    controller.postUsers(req, res)
})

app.get("/actividades/:id_contenidos", (req, res)=>{
    var id_contenidos=req.params.id_contenidos;
  console.log(id_contenidos);
   //controller.getUsers( res);
   res.send("activo");
   //saber que actividades estan registradas en un contenido
})

app.get("/temas/:id_alumnos", (req, res)=>{
    var id_alumnos=req.params.id_alumnos;
  console.log(id_alumnos);
   //controller.getUsers( res);
   res.send("servidoron");
   //saber cuales alumnos estan registrados en un tema
})

app.get("/evaluaciones/:id_alumnos", (req, res)=>{
var id_alumnos=req.params.id_alumnos;
  console.log(id_alumnos);
   //controller.getUsers( res);
   res.send("servidorfunciona");
   //saber que evaluacion obtiene un alumno
})


app.get("/profesores/:id_temas", (req, res)=>{
var id_temas=req.params.id_temas;
  console.log(id_temas);
   //controller.getUsers( res);
   res.send("funciana ok");
   //saber que profesor esta registrado en un tema
})

app.get("/contenidos/:id_temas", (req, res)=>{
var id_temas=req.params.id_temas;
  console.log(id_temas);
   //controller.getUsers( res);
   res.send("esta bien");
   //saber cuales contenidos tiene un tema
})


app.get("/contenidos/:id_actividades/:id_temas", (req, res)=>{
var{id_actividades, id_temas} = req.params;

  console.log(id_actividades, id_temas);
   //controller.getUsers( res);
   res.send("listo");
   //saber en que nivel de actividades, esta registrado un contenido
})

exports.app = app;