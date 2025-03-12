//csinálunk egy funkciót, ami kapcsolódik a mongoose adatbázishoz
import mongoose from 'mongoose';  //MongooseDB

const connectToDatabase = async () =>{ //async azt jelenti, hogy a kódunk végrehajtja ezt a funkciót, amíg valami mást tud csinálni és nincs blokkolva e funkció által
    try { //try catch: kivétel kezelés, ha hibát kapunk, akkor hogy reagáljon, illetve ha nincs hiba merre menjen tovább
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URI,{ //ez bemegy a .ENV fájlba

        });
        console.log(`MongoDb Connected: ${connect.connection.host}`); //kiírjuk magunknak, hogy létrejött a kapcsolat, hogy tudjuk, akarjuk tudni, hogy ki a host
    } catch (error) {
        console.log(`Error: ${error.message}`); //mi a hiba üzenet
    }
};
export default  connectToDatabase; //kivisszük az adatokat, mert használni akarjuk az index.js-ben