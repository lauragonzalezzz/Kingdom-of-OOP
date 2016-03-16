'use strict';

const Bilateral = require('./Bilateral.js');

export default class Mollusk extends Bilateral {
	constructor(name) {
		super(name, 'soft-bodied');
	}
}