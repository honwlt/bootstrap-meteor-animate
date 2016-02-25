Package.describe({
  name: 'honmeteo:bootstrap-meteor-animate',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap Animate library for Meteor',
  // URL to the Git repository containing the source code for this package.
  //git: 'https://github.com/honwlt/bootstrap-meteor-animate.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('jquery', 'client');
 //api.use('twbs:bootstrap@4.0.0-alpha2', 'client', {weak: true});
//  api.use('twbs:bootstrap@4.0.0-alpha2', 'client', {weak: true});
  api.addFiles('animate.css/animate.css', 'client');
  api.addFiles('bootstrap-meteor-animate.js', 'client');
  api.export('AssignDropDownAnimateTriggers', 'client');
});
