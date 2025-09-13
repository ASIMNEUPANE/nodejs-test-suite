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

app.get("/sum", (req, res) => {
    const parsedResponse = sumSchema.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});