import {config} from './src/config/config';   
import app from "./src/app";
import connectDB from "./src/config/db";

const startServer = () => {
    // connect to the database

    const port = 3000;

    app.listen(port, async () => {
        await connectDB();
        console.log(`listening on port: ${port}`);
    });
}

startServer();