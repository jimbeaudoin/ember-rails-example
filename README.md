# ember-rails-tdd
An Ember (frontend) &amp; Rails (backend) Application with the TDD Process.

This project is based on this [work](http://reefpoints.dockyard.com/2014/05/07/building-an-ember-app-with-rails-part-1.html).

## Prerequisites
 * **Backend**
  * ruby 2.2.1p85
  * rails 4.2.1
 * **Frontend**
  * node v0.12.2
  * npm 2.7.4
  * ember-cli 0.2.3

## Usage
Clone this repository
```sh
git clone https://github.com/jimbeaudoin/ember-rails-tdd.git
```
Backend Preparation
```sh
cd backend
bundle install
rake db:migrate
rake db:seed
rails s
```
Frontend Preparation
```sh
cd frontend
npm install
bower install
ember s --proxy http://localhost:3000
```
You can now visit http://localhost:4200

## Tests
To see your tests visit http://localhost:4200/tests

## [WIP] Documentations
https://github.com/jimbeaudoin/ember-rails-tdd-docs

--
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Except where otherwise noted, ember-rails-tdd</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://jim-beaudoin.com" property="cc:attributionName" rel="cc:attributionURL">Jimmy Beaudoin</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
