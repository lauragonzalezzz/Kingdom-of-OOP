'use strict';

const Bilateral = require('./Bilateral.js');

export default class Vertibrate extends Bilateral {
	constructor(name) {
		super(name, 'vertebral-column');
	}
}