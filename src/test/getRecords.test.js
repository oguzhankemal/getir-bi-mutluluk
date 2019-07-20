const app=require("../app");
const request = require('supertest')

test('Test Post Request To Get Filtered ', async () => {
    const filter = {
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": 2700,
        "maxCount": 3000
    };
    await request(app)
        .post('/getRecords')
        .send(filter)
        .expect(200)
        .catch(err => {
            // write test for failure here
            console.log(`Error ${err}`)
            done()
        });
});
