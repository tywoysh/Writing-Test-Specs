const { multiplication, concatOdds, ShoppingCart } = require("./scripts");

describe("multiplication", () => {
  test("it multiplies two numbers correctly", () => {
    expect(multiplication(1, 2)).toEqual(2);
    expect(multiplication(-1, 2)).toEqual(-2);
    expect(multiplication(-1, -2)).toEqual(2);
    expect(multiplication(0, 2)).toEqual(0);
  });

  test("it will return null if input does not contain two numbers", () => {
    expect(multiplication(1)).toEqual(NaN);
    expect(multiplication(1, "a")).toEqual(NaN);
    expect(multiplication("a", 1)).toEqual(NaN);
    expect(multiplication("a", "b")).toEqual(NaN);
    expect(multiplication()).toEqual(NaN);
  });
});

describe("concatOdds", () => {
  test("concats two arrays into one correctly and only prints odds", () => {
    expect(concatOdds([1, 2, 3], [4, 5, 6])).toEqual([1, 3, 5]);
  });

  test("it will return empty array if input does not contain two arrays", () => {
    expect(concatOdds([1, 2, 3], 5)).toEqual([]);
    expect(concatOdds("hello", [1, 2, 3])).toEqual([]);
    expect(concatOdds([], [])).toEqual([]);
    expect(concatOdds([1, 2, "a"], ["b", 2, 3])).toEqual([]);
  });

  test("it will sort results in ascending order and will not return duplicates", () => {
    expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([
      -1, 1, 3, 9, 15,
    ]);
  });
});

describe("Shopping Cart", () => {
  const shoppingCartLoggedIn = new ShoppingCart(true);
  const shoppingCartNotLoggedIn = new ShoppingCart(false);

  test("is user logged in?", () => {
    expect(shoppingCartNotLoggedIn.loggedIn).toEqual(false);
  });

  test("check if cart renders propertly", () => {
    expect(shoppingCartLoggedIn.cart).toEqual({});
    expect(shoppingCartLoggedIn.loggedIn).toEqual(true);
    expect(shoppingCartNotLoggedIn.cart).toEqual({});
    expect(shoppingCartNotLoggedIn.loggedIn).toEqual(false);
  })

  test('add an item to the cart', () => {
    expect(shoppingCartLoggedIn.addToCart({ name: 'Toy', price: 5 }));
    expect(shoppingCartLoggedIn.cart).toEqual()
  })
});
