///////////////////////////////////////////////////////////////
// Module Dependencies
///////////////////////////////////////////////////////////////
let express         = require('express');
let fs              = require('fs');
let util            = require('util');

let objectSorterSvc = require('./controllers/object-sorter-service');

///////////////////////////////////////////////////////////////
// Bootstrap the Application
///////////////////////////////////////////////////////////////
let app = express();

/**
 * Introduce service specific configurations
 */
require('dotenv').config({path: __dirname + '/../.env'});

/**
 * Redirects the output to a debug file
 */
let log_file        = fs.createWriteStream(__dirname + '/../logs/console.log', {flags : 'w'});
let log_stdout      = process.stderr;

console.log = function(d) {
	log_file.write(util.format(d) + '\n');
	log_stdout.write(util.format(d) + '\n');
};

console.error = function(d) {
	log_file.write(util.format(d) + '\n');
	log_stdout.write(util.format(d) + '\n');
};

/**
 * Displays the ASCII logo text
 */
let figlet = require("figlet");
let logoText = 'Coding Challenge';

figlet.text(logoText, function(error, data) {
	if (error)
		console.error(error);
	else {
		console.log("========================================================================================");
		console.log('* Coding Challenge: Backend Service                           ');
		console.log('*     Released Date: ' + process.env.RELEASED_DATE + '                   ');
		console.log('*     Version: ' + process.env.VERSION + '                          ');
		console.log('*                                                 ');
		console.log(data);
		console.log("----------------------------------------------------------------------------------------");
	}
});

/**
 * Initiates the data reading process.
 */
objectSorterSvc.invokeObjectSorter();

/**
 * Exports the app for other module's usage
 */
module.exports = app;
