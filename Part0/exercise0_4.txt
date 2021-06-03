def b=browser; s=server; HGET=HTTP GET; HPOST=HTTP POST
def theHttp=https://studies.cs.helsinki.fi/exampleapp
def ->=browser->server; <-=server-->browser;
def nob=note over browser; nos=note over server; en=end note;

->: HPOST [Form data:{note: "aaa"}] theHttp/new_note

nos:
  server adds new data in json
en

->: HGET theHttp/notes
<-: HTML-code

->: HGET theHttp/main.css
<-: main.css

->: HGET theHttp/main.js
<-: main.js

nob:
  browser starts executing js-code
  that requests JSON data from server 
en

->: HGET theHttp/data.json
<-: [whole json data]

nob:
  browser executes the event handler
  that renders notes to display
en

->: HGET theHttp/favicon.ico
<-: Favicon

nob:
  browser adds a favicon
en
