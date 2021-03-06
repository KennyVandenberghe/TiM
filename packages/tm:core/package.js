Package.describe({
  name: 'tm:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  var c = 'client',
      s = 'server',
      cs = [c, s];

  api.use([
    'ui',
    'templating',
    'iron:router@1.0.1'
  ], c);

  api.addFiles([
    'layout.html',
    'head.html'
  ], c);

  api.addFiles([
    'namespace.js',
    'validators.js'
  ], cs);

  api.addFiles([
    'fixtures.js'
  ], s);

  api.addFiles([
    'router.js'
  ], c);

  api.export('TM');
});
