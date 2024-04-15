import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
import cookieParser from "cookie-parser";

app.use(express.json());
// app.get("/", (req, res) => {
//     //route http://localhost:5000/
//     res.send("hello world");
// })

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is listening on port ${PORT}`);
})