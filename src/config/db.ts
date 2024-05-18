// import mongoose from "mongoose";
// import { config } from "./config";

// const connectDB = async () => {
//     try {

//         // these are event listeners ("connected" and "error) to handle the connection
//         mongoose.connection.on("connected", () => {
//             console.log("Connected to Database sucessfully.");
//         });

//         // to handle error after connection is established
//         mongoose.connection.on("error", (err) => {
//             console.error("Failed to connect to Database" + err);
//         });

//         // await mongoose.connect(mongodb+srv://Ebrahim:Vu&v9d0U*3R*QH94%23z@cluster25299.vuuzgwy.mongodb.net/ABQ);
//         await mongoose.connect(config.databaseUrl as string);

//     }
//     // to handle error during initial connection this won't be thrown  
//     // after connection is established
//     catch (err) {
//         console.error("Failed to connect to Database" + err);
//         process.exit(1);
//     }
// };

// export default connectDB;





import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://Ebrahim:Vu&v9d0U*3R*QH94%23z@cluster25299.vuuzgwy.mongodb.net/ABQ");
        console.log(`Database Connected : ${connect.connection.host}`);
    } catch (error: string | any) {
        console.log(`Error: ${error.message as string}`);
        process.exit(1);
    }
};

export default connectDB;