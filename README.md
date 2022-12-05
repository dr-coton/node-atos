# node-atos
Node.js에서 사용할 수 있는 Atos 라이브러리

## Install

- Mac OS에서는 Xcode가 설치되어 있으면 사용이 가능합니다. 
- Linux 환경에서는 Atosl 을 설치해야지만 사용이 가능합니다. 

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
```
