const dotenv = require('dotenv');
dotenv.config();
const app=require("../app");
const request = require('supertest')

describe('Test the getRecords path', () => {
    //Correct test case
    test('Test Post Request To Get Filtered ', async () => {
        const filter = {
            "startDate": "2016-01-01",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        };
        const response = await request(app).post('/api/getRecords').send(filter);
        expect(response.statusCode).toBe(200);
    });

    //Wrong test case
    test('Test Post Request With Wrong Date Input. It Should be 400 Bad Request ', async () => {
        const filter = {
            "startDate": "2016-45-01",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        };
        const response = await request(app).post('/api/getRecords').send(filter);
        expect(response.statusCode).toBe(400);
    });

    //Wrong test case
    test('Test Post Request With Missing MinCount Input. It Should be 400 Bad Request ', async () => {
        const filter = {
            "startDate": "2016-45-01",
            "endDate": "2018-02-02",
            "maxCount": 3000
        };
        const response = await request(app).post('/api/getRecords').send(filter);
        expect(response.statusCode).toBe(400);
    });
})
