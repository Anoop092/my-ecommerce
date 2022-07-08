import mongoose  from "mongoose";

const connection = {};

async function connect(){
    if(connection.isConnected){
      console.log('already connected');
      return
    
    }
    if(mongoose.connections.length>0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1){
            console.log(' use previous connection');
            return
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log('connected');
    connection.isConnected =db.connections[0].readyState;

}

async function disconnect(){
    if(connection.isConnected){
        if(process.env.NODE_ENV){
            await mongoose.disconnect();
            connection.isConnected = false;
        }else{
            console.log('not disconnected due to it is connected in development mode');
        }
    }
}
function convertDocsToObject(docs){
    docs._id = docs._id.toString();
    docs.createdAt= docs.createdAt.toString();
    docs.updatedAt = docs.updatedAt.toString();
    return docs;

}
const db = {connect,disconnect,convertDocsToObject}
export default db;