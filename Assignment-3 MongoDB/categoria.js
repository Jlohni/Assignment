const Categories = new Schema({
    name     : String,
    subcategories : {
    name : String,
    model : String
     }
});


var ShopSchema = new Schema({

    Email: {
        type: String,
        default: '',
        trim: true,

    },
    Storename: {
        type: String,
        default: '',
        trim: true
    },
    Type: {
        type: String,
        default: '',
        trim: true
    },
    Categories : [Categories]
});