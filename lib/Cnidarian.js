'use strict';

const Animal = require('./Animal.js');

export default class Cnidarian extends Animal {
	constructor(name) {
		super(name, 'radial');
	}
}