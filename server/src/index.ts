import { mnemonicToSeedSync } from "bip39";
import { HDNodeWallet } from "ethers6";
import express  from "express";
import { NEUMONICS } from "./config";
import cors from "cors";
import { Client } from "pg";

const client = new Client();
client.connect();

const seed = mnemonicToSeedSync(NEUMONICS);

const app = express();

app.use(express.json());

app.use(cors());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const rows = client.query('INSERT INTO binanceUsers (username, password, depositAddress, privateKey) VALUES ($1 $2 $2 $4)', [username, password, "", ""]);
    const userId = rows[0].id;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`);
    
    await client.query('UPDATE TABLE binanceUsers (username, password, depositAddress, privateKey, balance')

    res.json({
        userId
    })
})

app.post("/depositAddress/:userId", (req, res) => {
    
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})