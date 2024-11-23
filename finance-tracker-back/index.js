const express = require("express");
const mongoose = require("mongoose");
const financialRecordRouter = require("./src/routes/financial-records")
const cors = require("cors");

const { PORT = 3001 } = process.env;
const app = express();

mongoose
    .connect("mongodb+srv://samsreither:svxFcHhhMWU2b0by@finance-tracker.27ip6.mongodb.net/")
    .then(() => console.log("Connected to Mongo DB!"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(cors());
app.use(express.json());

app.use("/financial-records", financialRecordRouter);

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
