const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// MATCHERS

// The simplest way to test a value is with exact equality
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// If you want to check the value of an object, use toEqual instead
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// You can also test for the opposite of a matcher
test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

// TRUTHINESS
test("null", () => {
  const n = null;
  expect(n).toBeNull(); // matches only null
  expect(n).toBeDefined(); // matches only undefined
  expect(n).not.toBeUndefined(); // opposite of toBeDefined
  expect(n).not.toBeTruthy(); // matches anything 'if' treats as true
  expect(n).toBeFalsy(); // matches anything 'if' treats as false
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// NUMBERS
// Most ways of comparing numbers have matcher equivalents.

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// For floating point equality, use toBeCloseTo instead of toEqual
// because you don't want a test to depend on a tiny rounding error
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3); // This won't work because of a rounding error
  expect(value).toBeCloseTo(0.3);
});

// STRINGS
// You can check strings against RegExs with toMatch
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

// ARRAYS AND ITERABLES
// You can check if an array or iterable contains a particular item
// by using toContain
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "seltzer"
];

test("the shopping list has seltzer on it", () => {
  expect(shoppingList).toContain("seltzer");
  expect(new Set(shoppingList)).toContain("seltzer");
});

// Exceptions
// If you want to test that a particular function throws an error when
// it's called use toThrow
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});

// This is just a taste. For a complete list of matchers
// Check out https://jestjs.io/docs/en/expect
