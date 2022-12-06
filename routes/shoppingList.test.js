import {pool} from "../db/index.js";
import supertest from 'supertest';
import app from '../app'
import { expect, test } from '@jest/globals'

afterAll(async function (){
    await pool.end();
})
test('check if patch route is working', async function (){
    const response = await supertest(app).patch("/items/1").send({completed: false});
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
    success: true,
    payload: [{
        id: 1,
        item:"Biscuits",
        completed:false
    }]
})
})