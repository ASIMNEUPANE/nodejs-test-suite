import express from 'express'
import {z} from 'zod'

export const app = express()


const sumSchema = z.object({
    a:z.number(),
    b:z.number()
})

app.use(express.json())

app.post("/sum",(req,res)=>{
    const parse = sumSchema.safeParse(req.body )
    console.log(parse)
    if(!parse.success){
        return res.status(411).json({
            message:"zod error"
        })
        
    }

    const answer = parse.data.a + parse.data.b
    res.json({
        answer
    })
})

