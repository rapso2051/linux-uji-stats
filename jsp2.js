const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));
db = connect('mongodb://localhost/database');

const getJSON = async url => {
  const response = await fetch(url);
  if(!response.ok) // check if response worked (no 404 errors etc...)
    throw new Error(response.statusText);

  const data = response.json(); // get JSON from the response
  return data; // returns a promise, which resolves to this data value
}

console.log("fetching ...");
const data = getJSON("https://uji-data-ocupacion-se.s3.eu-west-1.amazonaws.com/status.json").then( data => {
  const ocup = data.status.ocupation;
  console.log(ocup);
  db.collection.insertOne({ ocupation:ocup })
});
