//// [tests/cases/conformance/parser/ecmascript5/Generics/parserGenericsInTypeContexts1.ts] ////

//// [parserGenericsInTypeContexts1.ts]
class C extends A<T> implements B<T> {
}

var v1: C<T>;
var v2: D<T> = null;
var v3: E.F<T>;
var v3: G.H.I<T>;
var v6: K<T>[];


function f1(a: E<T>) {
}

function f2(): F<T> {
}



//// [parserGenericsInTypeContexts1.js]
class C extends A {
}
var v1;
var v2 = null;
var v3;
var v3;
var v6;
function f1(a) {
}
function f2() {
}
