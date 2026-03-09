import express from "express"
import { dbconnect } from "./dbconnection/connection.js"
import { userRouter } from "./routes/user-route.js"
import { customerRouter } from "./routes/customer-route.js"



const app = express()
app.use(express.json())



app.get('/', (req: any, res: any) => {
    try {
        res.send({
            error: false,
            message: "welcome to gurukrupa kirana stores ...",
        })
    }
    catch (err) {
        res.send({
            error: false,
            errmessage: err
        })
    }
})

app.use('/api/user',userRouter);
app.use('/api/customer',customerRouter);

dbconnect().then(() => {
    app.listen(3000, () => {
        console.log("server is running....")
    })
}).catch((err) => {
    console.log(err)
})

