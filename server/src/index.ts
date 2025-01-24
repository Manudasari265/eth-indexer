import { mnemonicToSeedSync } from "bip39";
import { HDNodeWallet } from "ethers6";
import express  from "express";
import { NEUMONICS } from "./config";
import cors from "cors";

const seed = mnemonicToSeedSync(NEUMONICS);

const app = express();

app.use(express.json());

app.use(cors());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userId = 1;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`);
    
    console.log(child);

    res.json({
        userId
    })
})

app.post("/depositAddress/:userId", (req, res) => {
    
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})