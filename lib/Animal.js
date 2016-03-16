'use strict';

const Eukaryota = require('./Eukaryota.js');

export default class Animal extends Eukaryota {
	constructor(name, symmetry) {
		super(name, false, false, true, true);
		this._symmetry = symmetry;
	}
}