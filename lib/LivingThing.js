'use strict';
export default class LivingThing {
constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
  this._name = name;
  this._uniCellular = uniCellular;
  this._trueNucleus = trueNucleus;
  this._anaerobic = anaerobic;
  this._asexual = asexual;
  this._mobile = mobile;
}

get name() {
  return this._name;
}
set name(name) {
  this._name = name;
}
get uniCellular() {
  return this._uniCellular;
}
set uniCellular(uniCellular) {
  this._uniCellular = uniCellular;
}
get multiCellular() {
  return (!this._uniCellular);
}
set multiCellular(uniCellular) {
  this._uniCellular = (!uniCellular);
}
get eukaryote() {
  return this._trueNucleus;
}



}

