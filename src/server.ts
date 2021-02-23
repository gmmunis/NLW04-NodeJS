import 'reflect-metadata';
import express from 'express';
import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello User" });
});

app.post("/", (request, response) => {
    return response.json({ message: "O usuário foi adicionado com sucesso!" });
});

app.listen(3333, () => console.log("Servidor is running!"));