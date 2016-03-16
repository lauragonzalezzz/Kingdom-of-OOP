'use strict';

const LivingThing = require('./LivingThing.js');

export default class Eukaryota extends LivingThing {
	constructor(name, UniCellular, asexual, mobile, heterotroph) {
		super()
		this._name = name;
	}
};