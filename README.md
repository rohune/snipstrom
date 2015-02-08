# snipstrom
## snipstrom - url shortener
```
very simple url shortener service made with express

usage:

- change your root url to config.js when deployed

export NODE_ENV=production
npm install
npm start

replace http://localhost:3000/ with your root url:

curl --data "link=http://www.yliseppo.com" http://localhost:3000/shorten; echo
-> you will receive the shortened url

curl localhost:3000/id/xxxxxx
-> you will be 301 redirected to the full url

note: opening http://localhost:3000/ in a browser gives you a page to post urls
in a form and a list of shortened links since app reset
```

