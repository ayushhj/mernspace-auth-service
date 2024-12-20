import request from 'supertest'
import app from '../../src/app'

describe('POST /auth/register', () => {
    describe('Given all fiels', () => {
        it('should return status 201', async () => {
            //AAA
            //Arrage
            const userData = {
                name: 'ayush',
                lastName: 'joshi',
                email: 'ayush@gmail.com',
                password: 'secret',
            }

            //ACT
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            //Assert
            expect(response.statusCode).toBe(201)
        })

        it('should return a valid JSON', async () => {
            //Arrage
            const userData = {
                name: 'ayush',
                lastName: 'joshi',
                email: 'ayush@gmail.com',
                password: 'secret',
            }

            //ACT
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            //Assert
            expect(
                (response.headers as Record<string, string>)['content-type'],
            ).toEqual(expect.stringContaining('json'))
        })
    })

    describe('Fields are missing', () => {})
})
