"use strict";

const project = process.argv[2];
const fs = require("fs");
const Path = require("path");

const Looper = (data, processData, done) => {
  if (data.length > 0) {
    var loop = (data, i, processData, done) => {
      processData(data[i], i, () => {
        if (++i < data.length) {
          loop(data, i, processData, done);
        } else {
          done();
        }
      });
    };
    loop(data, 0, processData, done);
  } else {
    done();
  }
};

const deleteFolderRecursive = (path) => {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach((file,index) => {
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

const copyRecursiveSync = (src, dest) => {
  var exists = fs.existsSync(src);
  var stats = exists && fs.statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (exists && isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(Path.join(src, childItemName),
                        Path.join(dest, childItemName));
    });
  } else {
    fs.linkSync(src, dest);
  }
};

fs.readdir("../developer/"+project+"/build/static/js/", (err, files) => {
  Looper(files, (file, i, next) => {
    if(file.indexOf(".map") === -1){
      deleteFolderRecursive("../public/"+project);
      fs.mkdirSync("../public/"+project);
      fs.createReadStream("../developer/"+project+"/build/static/js/"+file).pipe(fs.createWriteStream("../public/"+project+"/index.js"));
      copyRecursiveSync("../developer/"+project+"/build/","../public/"+project+"/css");
    }
    next();
  },() => {
    console.log("OK");
  });
});