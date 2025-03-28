//// [tests/cases/compiler/lateBoundConstraintTypeChecksCorrectly.ts] ////

//// [lateBoundConstraintTypeChecksCorrectly.ts]
declare const fooProp: unique symbol;
declare const barProp: unique symbol;

type BothProps = typeof fooProp | typeof barProp;

export interface Foo<T> {
  [fooProp]: T;
  [barProp]: string;
}

function f<T extends Foo<number>>(x: T) {
    const abc = x[fooProp]; // expected: 'T[typeof fooProp]'

    /**
     * Expected: no error
     */
    const def: T[typeof fooProp] = x[fooProp];
    const def2: T[typeof barProp] = x[barProp];
}


//// [lateBoundConstraintTypeChecksCorrectly.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function f(x) {
    const abc = x[fooProp]; // expected: 'T[typeof fooProp]'
    /**
     * Expected: no error
     */
    const def = x[fooProp];
    const def2 = x[barProp];
}
