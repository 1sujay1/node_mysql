import express from 'express'
const app = express();
import { getNotes, createNote, getId } from './database.js'


app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    res.json(notes)
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log("listening to port 3000");
})