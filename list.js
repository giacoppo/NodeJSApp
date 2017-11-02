var fs = require("fs");

// Read synchronical
//var files = fs.readdirSync('./lib');
// Read asynchronical
fs.readdir('./lib', function(err, files) {
  if(err) {
    throw err;
  }

  console.log(files);
});

//console.log(files);
console.log("Reading Files...");
