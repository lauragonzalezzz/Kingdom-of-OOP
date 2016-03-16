'use strict';

const LivingThing = require('./LivingThing.js');

export default class Archaea extends LivingThing {
	constructor(name) {
		super(name, true, false, true, true, false)
		this._name = name;
	}
};