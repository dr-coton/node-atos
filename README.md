# node-atos

Node.js에서 사용할 수 있는 Atos 라이브러리

## Install

- atosl-rs 설치

### Install Atosl Rust

https://github.com/everettjf/atosl-rs

본 프로젝트에서는 위 Atosl-rs 오픈소스를 기준으로 작성이 되었습니다.

```bash
# install guide for ubuntu
sudo apt update
sudo apt install git
sudo apt install curl
sudo apt install build-essential
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install atosl

# install guide for macos
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install atosl
```

## Usage

test.js 를 참고하세요.

```js
import symbolicate from "@dr-coton/atos";

// then catch
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

// or async/await
const result = await symbolicate("test/TestDSYM", {
  object: "0x100250000",
  frame: "0x1002585e0",
});

console.log(result);
```
