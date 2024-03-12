# What is this?

This project builds a docker image which contains [reg-suit](https://github.com/reg-viz/reg-suit), a tool for comparing screenshots.

It exists because reg-suit, while an awesome tool, has a ridiculous number of dependencies that I don't want in my dependency tree.

## Usage

First, generate screenshots that you want to compare. An easy way to do this is `firefox -screenshot ./index.html`

```
docker pull ghcr.io/gerrit0/reg-suit-container:main
docker run -v $PWD/old:/old -v $PWD/new:/new -v $PWD/out:/out ghcr.io/gerrit0/reg-suit-container:main
```

## Development

```bash
docker build -t reg-suit .
docker run -v $PWD/old:/old -v $PWD/new:/new -v $PWD/out:/out reg-suit
```
