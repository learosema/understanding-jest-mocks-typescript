# Understanding Jest mocks in TypeScript

## Why

I created this repository because I was totally confused about how to use `jest.mock()` with TypeScript.

## Confusions

First, I struggled with the official guide about how to [use TypeScript in jest](https://jestjs.io/docs/en/getting-started#using-typescript), which involved installing lots of babel packages and configuring it inside your project.

The next struggle was about how to access properties of the mock object from inside the test without type errors. 
One thing that worked was telling TypeScript to shut up via `//@ts-ignore`. But that didn't feel quite right.

The solution was to use [ts-jest](https://github.com/kulshekhar/ts-jest) and the `mocked` utility function from `ts-jest/utils` as described in this [Github issue comment](https://github.com/kulshekhar/ts-jest/issues/576#issuecomment-458178545). Saved my day :).

## The program to be tested

This program consumes the `people/:id` endpoint from the [Star Wars API](http://swapi.co) and logs the output.
The test tests the implementation of the api function `getPeople`. 
The fetch call in the test is mocked.

