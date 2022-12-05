import symbolicate from "@dr-coton/atos";

symbolicate("test/TestDSYM", {
  object: "0x100250000",
  frame: "0x1002585e0",
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const result = await symbolicate("test/TestDSYM", {
  object: "0x100250000",
  frame: "0x1002585e0",
});

console.log(result);
