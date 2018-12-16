var h = function(app) {
  var fs = require("fs");
  var appendThis = "height\n";

  for (var i = 0; i < 10; i++) {
    appendThis =
      appendThis + Math.ceil(Math.random() * (180 - 150 + 1) + 150) + "\n";
  }
  fs.writeFile("heightcsv.csv", appendThis, function(err) {
    if (err) throw err;
    console.log("random height generated");
  });
};

var gett = function(app) {
  //var a;

  app.get("/height", function(req, res) {
    const csv = require("csvtojson");

    //get height data to url
    csv() //converting csv to jsonObjson
      .fromFile("heightcsv.csv")
      .then(jsonObj => {
        console.log(jsonObj);
        console.log("hi");
        var lb = 150;
        var ub = 180;
        var r = 5;
        var data = [
          {
            values: []
          }
        ];
        var x = [];
        var y = [];
        var d = [];
        var cnt = 0;
        var lbr = lb + r;
        var xx = [
          {
            v: []
          }
        ];
        for (var i = 0; i < jsonObj.length; i++) {
          if (lb <= ub && lbr <= ub) {
            var abc = {};

            abc.x = lb + "-" + lbr;
            abc.y = 0;
            abc.d = "";
            data[0].values.push(abc);
            //console.log(abc);

            lb = lbr + 1;
            lbr = lbr + r;
          }
        }

        for (i = 0; i < abc.x.length - 1; i++) {
          //var cde = {};
          console.log(data[0].values[i].x);
          var num = data[0].values[i].x.split("-");

          //console.log(num[0] + " " + num[1]);
          num[0] = parseInt(num[0]);
          num[1] = parseInt(num[1]);
          console.log(num);
          var count = 0;
          var p = [];
          for (var k = 0; k < jsonObj.length; k++) {
            //  console.log("num0 :" + num[0] + "  num1: " + num[1] + "  jsonObj[k] :" + jsonObj[k]);

            if (num[0] <= jsonObj[k].height && jsonObj[k].height <= num[1]) {
              count++;
              p.push(jsonObj[k].height);
              console.log(p);
              console.log(count);
            }

            data[0].values[i].y = count;
            data[0].values[i].d = p;
          }
          //console.log(z[i]);
        }

        console.log("DATA : ");
        console.log(data[0]);
        res.send(JSON.stringify(data)); //jsonObjson objsonObject is send as response
      });
  });
};

exports.gett = gett;
exports.h = h;
