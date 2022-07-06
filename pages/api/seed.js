import db from "../../utils/db";
import User from "../../models/Users";
import { data } from "../../utils/products";
import Product from "../../models/Product";

const Handler = async(req,res)=>{
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await db.disconnect();
    res.send({message:'seeded successfully'})

};
export default Handler;