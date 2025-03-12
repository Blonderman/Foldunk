import mongoose from "mongoose"; //mongoose segítségével létrehozunk egy object mapper-t, ami tudja majd, hogy hogyan definiáljuk a product
                                    //datát és a product objectet
const productSchema = new mongoose.Schema({ //rakunk a schema-ba objecteket:
    name: {
        type: String,
        required: true,
        
    },
    images: {
        type: Array, //mert sok képet fogunk használn
        required: true,
        default: [],

    },
    brand: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,

    },
    reviews: {
        type: Array,
        required: true,
        default: [],

    },
    rating: {
        type: Number,
        required: true,
        default: 0,

    },
    numberOfReviews: {
        type: Number,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    },
    stock: {
        type: Number,
        required: true,

    },
    ProductIsNew: {
        type: Boolean,
        required: true,

    },
    stripeId: {
        type: String,

    },
}   ,{timestamps: true}  ); //mindig, amikor valami beírásra kerül az adatbázisba, összegyűjti ezt az adatot a pontos időben


//itt használjuk a schemat, amit létrehoztunk:
const Product = mongoose.model('Product',productSchema);

export default Product;