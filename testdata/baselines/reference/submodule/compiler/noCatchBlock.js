//// [tests/cases/compiler/noCatchBlock.ts] ////

//// [noCatchBlock.ts]
try {
 // ...
} finally {
 // N.B. No 'catch' block
}

//// [noCatchBlock.js]
try {
    // ...
}
finally {
    // N.B. No 'catch' block
}
