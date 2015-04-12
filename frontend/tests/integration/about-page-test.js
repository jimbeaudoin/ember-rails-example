import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - About Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the About page', function(assert) {
  visit('/').then(function() {
    click("a:contains('About')").then(function() {
      assert.equal(find('h3').text(), 'About');
    });
  });
});