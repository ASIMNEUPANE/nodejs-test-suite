import { describe, test, expect, it } from '@jest/globals'
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
