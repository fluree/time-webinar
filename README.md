# Time and Immutability Webinar Demo

This is the repository used for the demo in the [Time and Immutability Webinar](https://www.youtube.com/watch?v=CLZm3ZjvQqM&t=1972s). 

## Set up
To begin working with this demo app, you will need to have Fluree running locally on your machine. 
For detailed instruction on getting Fluree installed, please visit the [installation page on the docs site](https://docs.flur.ee/docs/1.0.0/getting-started/installation). 

You will also need to have [Node.js](https://nodejs.org/en/download/) installed on your machine. 

The [data folder](https://github.com/fluree/time-webinar/tree/main/data) contains the seed data for using this application as it is shown in the webinar.
To get the data loaded into your Fluree instance, follow these steps:
1. Open the Admin UI and create a ledger called time/webinar. 
2. Using either the Admin UI or a REST client of your choosing (Postman, Insomnia, etc.) transact the files in the data/ folder, in order, to your ledger. 
   - This will transact the schema
    - The airports and tags for the statuses
    - The flight.json files contain references to the same set of flights but modify the data for each one

Now all that needs to be done is to run `npm install` and `npm run start` from the project root folder in a terminal.

If you have questions or issues, please raise them on the repo or join us in [Slack](https://launchpass.com/flureedb)