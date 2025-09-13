import { describe, test, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '../app'



describe('test sum api', () => {
  it('test 1 +3', async () => {
    const res = await request(app).post('/sum').send({
      a: 1,
      b: 2,
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.answer).toBe(3)
  })
  it("throw err",async()=>{
    const res = await request(app).post("/sum").send({
        a:1,
        b:"2"
    })

    expect(res.statusCode).toBe(411)
    expect(res.body.message).toBe("zod error")
    

  })
})

describe("Test get sum",()=>{
    it("test for correct input",async()=>{
        const res = await request(app).get("/sum").set({
            a:"1",
            b:"2"
        }).send()
        expect(res.statusCode).toBe(200)
        expect(res.body.answer).toBe(3)

    })
    it("test for incorrect input",async()=>{
        const res = await request(app).get("/sum").set({
            a:"1",
            b:"v"
        }).send()
        expect(res.statusCode).toBe(411)
        expect(res.body.message).toBe("Incorrect inputs")

    })

})
