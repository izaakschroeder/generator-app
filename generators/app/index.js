
'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	peerDependencies: function() {
		// Build out all the kinds of things that are used
		var types = [ 'api', 'web', 'android', 'ios' ];
		_.forEach(types, function(type) {
			this.composeWith(type, { dest: this.destinationPath(type) });
		}, this);
	},
	writing: function() {

	}
});
