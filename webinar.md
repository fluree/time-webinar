# Time and Immutability Webinar

## Time Travel



## Block queries 

- query using
    -  block numbers `"block": 2`
    -  ISO-8601 time `"block": "2017-11-14T20:59:36.097Z"`
    -  ISO-8601 duration (`"block": "PT5M"` == Past Time 5 min ago)
    -  using block ranges `"block": [3, 5]` - from block 3 to block 5 inclusive
    -  lower limit (inclusive) `"block": [3]` - from block 3 to the current HEAD

Block queries are ways which you can query the state of the data at a specific point in time. Because Fluree uses has an immutable ledger to underpin the data, each point in time is essentially the all of the state of the data up to that point. By issuing a block query, you are pulling in the all of the known facts in the data set which are true and which have been made false *at that point*. This means that you are pulling in all of the context of the data at that point in time. This is not something which is easily or cheaply accomplished with other data stores or databases. If, for example, you wanted to track the history of your data over time, this is something which can be done, but it is a lot of work. An additional table or tables must be built which track the *history* of the data, which means that any time your production table is updated, a copy of that update must always be sent a copy. So to build this out, an additional API or some stored procedure must populate this other db table AND you will need an API built to consume this historical data. This must all be maintained and managed; all of this means a ballooning budget. Not to mention the functional hole this leaves. What happens to the relationships from the data to other tables? If joins need to happen, how does your historical table manage those relationships? Currently the main db table, points at another db table, both of which contain the current state of the data. When your data is populated into the historical table, what happens to those relationships? How will you query them? This gets extremely complex, extremely quickly; which again means $$. 

How does Fluree solve this problem? Well, because each block in Fluree is a transaction to the ledger which contains the "updates" to the facts in the dataset, but which actually only append to the dataset, they dont override anything because all of the data is immutable, you can query these immutable facts at will. By enabling querying at a block or at a point in time in the past you are able to pull in all of the data which was known at that time. This includes any true fact, any falsified fact, and all of the relationships will point at data which was known at that point in time as well. 

> Talk about connecting weather data to block queries in the flight data with the pricing. 

## Historical queries

- query using
  -  block numbers 
        ```json
            {
                "history": 369435906932737,
                "block": 4
            }
        ```
  -  time - ISO-8601 time or duration (`PT5M` == Past Time 5 min ago)
  -  using block ranges

Block queries are a good way to pull in all of the context at a specific point or over a range of time, but Fluree also enables what we call historical queries. The way we think about this is; if a block query enables a broad view of the data over time where you can move back and forward and see what was true at any point along the timeline for any subject stored in a Fluree ledger, a historical query is a way to view the evolution of a subject over the time is has existed in the Fluree ledger. It gives you a way to see how something has changed over time. Similar to what I was describing before but without all of the additional APIs or maintenance burdens. This functionality is native to Fluree. 
By using the Flake Format to issue a history query, you can do things like see a list of all of the people who a specific person followed over time, 
- (if your data contained a person/follows predicate you can issue a query `[["person/handle", "zsmith], "person/follows]` to get all of the people whom zsmith has followed.)

Another thing which historical queries add is an audit trail. By using the `showAuth` option, you get to see the auth id's of of every update on the subject which being queried. 