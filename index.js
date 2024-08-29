
import express from 'express';
import 'dotenv/config'
import cors from 'cors'

const app = express();

const port = 4000;

const posts = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
        desc: "Winter Coming",
        price: 20,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/6669285/pexels-photo-6669285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Autumn Sale",
        price: 45,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Winter Sale",
        price: 50,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/18977034/pexels-photo-18977034/free-photo-of-western-dresses-shoot-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Winter Sale",
        price: 55,
    },
]


app.use(cors({
    origin: '*', // Allow all origins (not recommended for production)
}));

app.get('/api', (req, res) => {
    res.send('Server Runing...');
})

app.get('/api/posts', (req, res) => {
    res.send(posts);
})

app.listen(port, (req, res) => {
    console.log(`The Backend is Running on Port ${port}`);
})