const cors = require('cors');
const express = require("express");
const fs = require('fs');
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.options('*', cors());


app.get("/api/companies", (req, res) => {
    const fullPath = path.join(__dirname, "/API/companies.json");
    let rawdata = fs.readFileSync(fullPath);
    let json = JSON.parse(rawdata);
    res.json(json);
});


app.get("/api/performance/countries", (req, res) => {
    const fullPath = path.join(__dirname, "/API/performance/countries/company_1.json"); //
    let rawdata = fs.readFileSync(fullPath);
    let json = JSON.parse(rawdata);
    res.json(json);
});

app.get("/api/performance/countries/company", (req, res) => {
    const fullPath = path.join(__dirname, `/API/performance/countries/${req.query.companyId}.json`);
    let rawdata = fs.readFileSync(fullPath);
    let json = JSON.parse(rawdata);
    res.json(json);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
