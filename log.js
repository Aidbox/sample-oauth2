var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/app.log', {flags : 'w'});
var log_stdout = process.stdout;

module.exports = {
  log : function(type, d) {
    log_file.write(new Date() + " ["+type+"] : " + util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
  },

  info: function(d){
    this.log("INFO", util.format(d))
  },
  error: function(d){
    this.log("ERROR", util.format(d))
  },
}
