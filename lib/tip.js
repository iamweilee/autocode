/**
 * @file  : tip.js
 * @author: liwei
 * @email : relativeli@qq.com
 * @date  : 2014/11/15
 */
var fileUtil = require('./fileUtil');
var path = require('path');
var pkg = JSON.parse(fileUtil.readFile(path.join(__dirname, '..', './package.json')));

function showVersion() {
	console.log(pkg.version);
}

function showHelp() {
	var conent = [
		'COMMAND LIST',
		'=================================================================',
		'init       initialize: create default configuration directory(.autocode) and file(config.json)',
		'',
		'ARGUMENT LIST',
		'=================================================================',
		'--help     look for help',
		'--version  look for version',
		'--force    copy and force overridding;',
		'           for example: autocode modA customModName --force'
	].join('\n');

	console.log(conent);
}

module.exports = {
	showVersion: showVersion,
	showHelp: showHelp
};