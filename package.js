Npm.depends({
	'tether': '1.1.1',
});

Package.describe({
	name: 'simply:tether',
	version: '1.1.1',
	summary: 'A positioning engine to make overlays, tooltips and dropdowns better',
	git: '',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.use(['cosmos:browserify@0.9.3'], 'client');
	api.addFiles('client.browserify.js', 'client');
	api.export('Tether', 'client');
});
