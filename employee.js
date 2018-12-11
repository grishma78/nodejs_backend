
var mypost = function (app) {
    var fs = require('fs'); //file system
    const csv = require('csvtojson');////convert csv to json object


    app.post('/emp', function (request, response) { //post in emp url


        var appendThis = "\n" + request.body.name + "," + request.body.designation + "," + request.body.salary;//extracting data from request in csv format



        console.log(csv);
        fs.appendFile('sample.csv', appendThis, function (err) { //appending in csv file
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
            response.send("Added Successfully");
        });
        console.log(request.body);


    });
};
var myget = function (app) {
    app.get('/listEmp', function (req, res) { //get in listEmp url

        const csv = require('csvtojson');

        //app.get('/listEmp', function(req,res){
        csv()       //converting csv to json
            .fromFile('sample.csv')
            .then((jsonObj) => {
                console.log(jsonObj);
                res.send(JSON.stringify(jsonObj));//json object is send as response

            })
    });
};
exports.mypost = mypost;
exports.myget = myget;