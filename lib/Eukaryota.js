'use strict';

const LivingThing = require('./LivingThing.js');

export default class Eukaryota extends LivingThing {
	constructor(name, UniCellular, asexual, mobile, heterotroph) {
		super(name, UniCellular, true, false)
		this._name = name;
		this._UniCellular = UniCellular;
		this._asexual = asexual;
		this._mobile = mobile;
		this._heterotroph = heterotroph;
	}
	get heterotroph() {
		return this._heterotroph;
	}
	set heterotroph(heterotroph) {
		this._heterotroph = heterotroph;
	}
	get autotroph() {
		return !this._heterotroph;
	}
	set autotroph(heterotroph) {
		this._heterotroph = !heterotroph;
	}
};