# snipstrom
snipstrom
url shortener

usage:
npm install
npm start

curl --data "url=http://www.yliseppo.com" http://www.localhost:3000/shorten; echo
-> you will receive the shortened url

curl localhost:3000/id/xxxxxx
-> you will be 301 redirected to the full url


