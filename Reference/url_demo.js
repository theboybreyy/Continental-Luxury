const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host Root
console.log(myUrl.host)

// Hostname
console.log(myUrl.hostname)

// Path Name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search)

// Parameter Objects
console.log(myUrl.searchParams)

// Add Params
myUrl.searchParams.append('abc', "145")
console.log(myUrl.searchParams);

// Loop Through Params
myUrl.searchParams.forEach((value, name) =>  console.log(`${name}: ${value}`));