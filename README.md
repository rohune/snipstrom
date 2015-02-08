# snipstrom
### snipstrom -- url shortener

very simple url shortener service made with express

### usage:

- change your root url to /app/config.js if needed

`export NODE_ENV=production`
`npm install`
`npm start`

in the following examples, replace http://localhost:3000/ with your root url:

`curl --data "link=http://www.yliseppo.com" http://localhost:3000/shorten; echo`
* you will receive the shortened url

`curl localhost:3000/xxxxxx`
* you will be 301 redirected to the original url

note 1: by default POST requests limited to 100 per hour/ip

note 2: opening http://localhost:3000/ in a browser gives you a page to post urls
in a form and a list of shortened links since app reset

