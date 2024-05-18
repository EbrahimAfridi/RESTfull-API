import { config } from "./src/config/config.ts";
import app from "./src/app";

const startServer = () => {
    const port = config.port || 3000;

    app.listen(port, () => {
        console.log("listening on port " + port);
    });
}

startServer();