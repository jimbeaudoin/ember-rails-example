import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Student Page', {
  beforeEach: function() {
    App = startApp();
    var students = [
      {
        id: 1,
        name: 'Mélissa'
      },
      {
        id: 2,
        name: 'Sophie'
      },
      {
        id: 3,
        name: 'Marie-Claude'
      }
    ];

    server = new Pretender(function() {
      this.get('/api/students', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({students: students})];
      });

      this.get('/api/students/:id', function(request) {
        var student = students.find(function(student) {
          if (student.id === parseInt(request.params.id, 10)) {
            return student;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({student: student})];
      });
    });

  },
  afterEach: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Should allow navigation to the students page from the landing page', function(assert) {
  visit('/').then(function() {
    click('a:contains("Students")').then(function() {
      assert.equal(find('h3').text(), 'Students');
    });
  });
});

test('Should list all students', function(assert) {
  visit('/students').then(function() {
    assert.equal(find('a:contains("Mélissa")').length, 1);
    assert.equal(find('a:contains("Sophie")').length, 1);
    assert.equal(find('a:contains("Marie-Claude")').length, 1);
  });
});

test('Should be able to navigate to a student page', function(assert) {
  visit('/students').then(function() {
    click('a:contains("Mélissa")').then(function() {
      assert.equal(find('h4').text(), 'Mélissa');
    });
  });
});

test('Should be able visit a student page', function(assert) {
  visit('/students/1').then(function() {
    assert.equal(find('h4').text(), 'Mélissa');
  });
});