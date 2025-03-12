import dotenv from 'dotenv';
dotenv.config(); //dotenv-s kapcsolat
import connectToDatabase from './db.js'; //megengedi, hogy a db.js fájlből hívjunk meg függvényeket
import express from 'express';
import cors from 'cors'; //megengedi, hogy beszéljünk a böngészőnkkel különböző porotkon keresztül

//Routes:
import productRoutes from './routes/productRoutes.js';


connectToDatabase(); //funkció meghívás a db.js-ből
const app = express(); //initializing our express server
app.use(express.json()); //ez lesz a formátuma az adatnak, amit küldünk
app.use(cors()); //akarjuk, hogy a szerver tudja, hogy van corsunk és akarjuk, hogy használja is azt a szerver


app.use('/api/products', productRoutes); //elérhetővé tesszük a productroute-t, a productroutes elérhető az api product alatt

//localhost:5000/api/products

const port = 5000; //létrehozunk egy portot 5000-nél, itt lesz elérhető a szerverünk

app.get('/', (req, res) => {//csinálunk egy egyszerű get rikvesztet, hogy tudjuk, hogy a bekendünk fut. akarjuk a kérést és a választ http default request
    res.send('Api is running...');//és ha valaki kérdezi ezen a porton, akkor meg tudjuk mondani  

});

app.listen(port, () =>{ //elindítjuk a portot, áthaladunk a porton, itt megadunk néhány információt, hogy tudjuk, hogy a port éppen fut a konzolon
    console.log(`Server runs on port ${port}`); //átküldjük a port változót, mint az adatot, és láthatjuk, hogy melyik porton fut a szerver    

});
