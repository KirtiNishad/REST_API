const express = require('express');
const crud = require("./mongodb");

const app = express()
app.use(express.json());

const hostname = "localhost";
const port = process.env.PORT || 3000;

app.post("/crud", async(req,res) => {
    try {
        const data = new crud(req.body)
        console.log(req.body)
        const a1 = await data.save()
        res.status(201).send(a1)
    } catch (error) {
        res.status(400).send("error")
    }
})


app.get("/crud", async(req,res) => {
    try {
        const getData = await crud.find({})
        res.status(200).send(getData)
    } catch (error) {
        res.status(400).send("error")
    }
})

app.get("/crud/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const getData1 = await crud.findById(_id)
        res.status(200).send(getData1)
    } catch (error) {
        res.status(404).send("error")
    }
})

app.patch("/crud/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const getData1 = await crud.findByIdAndUpdate(_id, req.body)
        res.status(200).send(getData1)
    } catch (error) {
        res.status(400).send("error")
    }
})


app.delete("/crud/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const getData1 = await crud.findByIdAndDelete(_id)
        res.status(204).send(getData1)
    } catch (error) {
        res.status(404).send("error")
    }
})


app.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})