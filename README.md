# getir-bi-mutluluk
Getir Case Study

This is a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the result in the requested format.

## Case Details
- **Node.js**:
  - **[Node.js](https://nodejs.org/en/)**: 12.6.0 
- **Training**:
  - **[express](https://www.npmjs.com/package/express)**: Fast, unopinionated, minimalist web framework for node.
- **Heroku**:
  - **[Heroku](https://www.heroku.com/)**: Cloud Application Platform performance.
- **Unit Test**:
  - **[Jest](https://jestjs.io/)**: Jest is a delightful JavaScript Testing Framework with a focus on simplicity.


## Request Payload
The request payload will include a JSON with 4 fields.
**“startDate” and “endDate”** fields will contain the date in a “YYYY-MM-DD” format. You should filter the data using “createdAt”
**“minCount” and “maxCount”** are for filtering the data. Sum of the “count” array in the documents should be between “minCount and “maxCount”.
```
Sample:
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```
## Response Payload
Response payload should have 3 main fields.
**“code”** is for status of the request. 0 means success. Other values may be used for errors that you define.
**“msg”** is for description of the code. You can set it to “success” for successful requests. For unsuccessful requests, you should use explanatory messages.
**“records”** will include all the filtered items according to the request. This array should include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts” array in the document.

```
Sample:
{
    "code":0,
    "msg":"Success",
    "records":[
        {
            "key":"TAKwGc6Jr4i8Z487",
            "createdAt":"2017-01-28T01:22:14.398Z",
            "totalCount":2800
        },
        {
            "key":"NAeQ8eX7e5TEg7oH",
            "createdAt":"2017-01-27T08:19:14.135Z",
            "totalCount":2900
        }
    ]
}
```

## Installation
**Clone:** git clone https://github.com/oguzhankemal/getir-bi-mutluluk.git
**Environment:** Set the environment values
**Install Required Packages:** npm install
**Run Locally:** npm start
**Testing:** npm test

## Heroku
You can access the api directly by using the below heroku link
https://getir-bi-mutluluk.herokuapp.com/api/getRecords