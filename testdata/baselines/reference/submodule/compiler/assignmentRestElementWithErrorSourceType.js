//// [tests/cases/compiler/assignmentRestElementWithErrorSourceType.ts] ////

//// [assignmentRestElementWithErrorSourceType.ts]
var tuple: [string, number];
[...c] = tupel; // intentionally misspelled

//// [assignmentRestElementWithErrorSourceType.js]
var tuple;
[...c] = tupel; // intentionally misspelled
