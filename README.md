## Webpagetest with Keen.io

## Motivation
To store and analzye webpagetest results using Keen.io

## Getting the required keys
1. (WebpageTest)[https://www.webpagetest.org/getkey.php]
2. (Webpage Test Locations)[https://www.webpagetest.org/getLocations.php?f=html&k=A]
3. (Keen.io)[https://keen.io/guides/getting-started/]

## install
`npm install -g webpagetest-keen`

## Usage
```npm
wpt-keen --help

  Usage: index [options]

  Options:
    -u, --url [url]                           Add url
    -w, --web-page-test-key [webPageTestKey]  Add web page test key
    -p, --keen-project-id [keenProjectId]     Add Keen project id
    -k, --keen-write-key [keenWriteKey]       Add Keen write keey

```