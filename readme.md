## Timestamp Microservice

This microservice takes a string as a parameter and will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).  
If it does, it returns both the Unix timestamp and the natural language form of that date.
If it does not contain a date or Unix timestamp, it returns null for those properties.

[demo](https://difre-timestamp-api.glitch.me/)

### Example Usage
`https://difre-timestamp-api.glitch.me/January 1, 2016`
will return
`{"natural":"January 01, 2016","unix":1451606400}`
