import express from "express"

const authMiddlewareRouter = express.Router()

authMiddlewareRouter.use((req:any,res:any,next: () => void)=>{
    console.log("auth middle ware passed ....")
    next()
})


export {authMiddlewareRouter}