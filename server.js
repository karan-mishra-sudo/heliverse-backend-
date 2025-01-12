import express from "express";
import * as router from "./router/index.js";
import * as middleware from  "./middleware/index.js";
import cors from "cors";

const app=express();

app.use(express.json());
app.use(cors());
app.use(middleware.bodyParserJson);
app.use(middleware.bodyParserUrlencoded);

app.use('/LoginFoodManger',router.loginFoodManager);
app.use('/LoginDeliveryPersonnel',router.loginDeliveryPersonnel);
app.use('/LoginInnerPantry',router.InnerPantry);

app.listen(80,()=>{
    console.log("server is running ...");
})

