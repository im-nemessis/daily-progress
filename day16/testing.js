function test(label, body) {
  if (!body()) console.log(`"failed the ${label}"`);
}

test("convert latin to uppercase", () => {
  return "hoollo".toUpperCase() == "HELLO";
});
