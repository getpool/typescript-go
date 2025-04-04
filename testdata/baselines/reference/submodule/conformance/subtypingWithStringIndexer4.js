//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypingWithStringIndexer4.ts] ////

//// [subtypingWithStringIndexer4.ts]
// Derived type indexer must be subtype of base type indexer

interface Base { foo: string; }
interface Derived extends Base { bar: string; }
interface Derived2 extends Derived { baz: string; }

class A {
    [x: string]: Derived;
}

class B extends A {
    [x: string]: string; // error
}

module Generics {
    class A<T extends Derived> {
        [x: string]: T;
    }

    class B extends A<Base> {
        [x: string]: string; // error
    }

    class B3<T extends Derived> extends A<T> {
        [x: string]: string; // error
    }
}

//// [subtypingWithStringIndexer4.js]
class A {
}
class B extends A {
}
var Generics;
(function (Generics) {
    class A {
    }
    class B extends A {
    }
    class B3 extends A {
    }
})(Generics || (Generics = {}));
