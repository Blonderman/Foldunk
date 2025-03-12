import express from 'express';
import Product from '../models/Product.js';


const productRoutes = express.Router();

const getProducts =async (req, res) =>{   //definiálunk először egy módszert, ami felel az útvonalért (route) get request
    //szürke a változó neve, ha még nem használtuk
//van egy kérésünk,ahova beérkezhet az adat és itt adjuk meg, hogy mi legyen erre a válasz reakció
    const products = await Product.find({}); //bemegyünk az adatbázisunkba és azt mondjuk, hogy küldj el minden adatot a termékről, ami ott van
    //ha átadjuk az üres objectet, akkor midnent lekér

    res.json({ //megadjuk a válasz reakciót: hey megtaláltam a termékeket, megadjuk még a paginationt: lapszámlálást
            products, 
            pagination: {},
    });
};

productRoutes.route('/').get(getProducts); //megadjuk a funkciót, amit meghatároztunk az útvonalnak. A válasz (get): a getProducts

export default productRoutes;   