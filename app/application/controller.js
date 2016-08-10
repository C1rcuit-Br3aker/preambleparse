import Ember from 'ember';

export default Ember.Controller.extend({
  numTs: 0,

  parse() {
    const preamble = `We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.`;
    console.log(preamble);

  },

  numberOfT() {
    const preamble = `We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.`;
    const nocommas = preamble.replace(/,/g, '');
    const nodots = nocommas.replace(/\./g, '');

    const arr = nodots.split(" ");
    var numT = 0;

    arr.forEach((word) => {
      if(word.substring(0, 1) == "t") {
        return numT++;
      } else if(word.substring(0, 1) == "T") {
        return numT++;
      } else return 0;
    });
    console.log(numT);
  },
});
