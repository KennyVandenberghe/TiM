Package.describe({
  name: 'tm:todo',
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
    'tm:core',
    'underscore',
    'momentjs:moment',
    'aldeed:collection2@2.3.3',
    'dburles:collection-helpers@1.0.2',
    'sewdn:collection-behaviours@0.2.0'
  ], cs);

  api.addFiles([
    'model/todo.js'
  ], cs);

  api.use([
    'ui',
    'templating',
    'iron:router'
  ], c);

  api.addFiles([
    'components/todo.html',
    'components/todo.js',
    'router.js'
  ], c);

  api.export('Todos');
});
