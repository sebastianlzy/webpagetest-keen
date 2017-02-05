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

## Sample report sent to Keen.io
```json
{
    "url": "www.shopback.sg",
    "keen": {
        "timestamp": "2017-02-05T04:59:54.951Z",
        "created_at": "2017-02-05T04:59:54.951Z",
        "id": "5896b14a420f9a57f80dfaf0"
    },
    "repeatView": {
        "loadEventStart": 6140,
        "score_cookies": -1,
        "requestsFull": 41,
        "domLoading": 348,
        "images": {
            "checklist": "http://www.webpagetest.org/results/17/02/05/C8/622/1_Cached_optimization.png",
            "waterfall": "http://www.webpagetest.org/results/17/02/05/C8/622/1_Cached_waterfall.png",
            "connectionView": "http://www.webpagetest.org/results/17/02/05/C8/622/1_Cached_connection.png",
            "screenShot": "http://www.webpagetest.org/getfile.php?test=170205_C8_622&file=1_Cached_screen.jpg"
        },
        "responses_404": 0,
        "docTime": 6353,
        "domContentLoadedEventEnd": 4923,
        "image_total": 156,
        "firstPaint": 3132,
        "score_cdn": 66,
        "score_minify": -1,
        "SpeedIndex": 3778,
        "lastVisualChange": 9489,
        "loadTime": 6353,
        "score_keep-alive": 100,
        "score_combine": 100,
        "score_etags": -1,
        "responses_200": 13,
        "visualComplete": 6873,
        "pages": {
            "breakdown": "http://www.webpagetest.org/breakdown.php?test=170205_C8_622&run=1&cached=1",
            "checklist": "http://www.webpagetest.org/performance_optimization.php?test=170205_C8_622&run=1&cached=1",
            "domains": "http://www.webpagetest.org/domains.php?test=170205_C8_622&run=1&cached=1",
            "details": "http://www.webpagetest.org/details.php?test=170205_C8_622&run=1&cached=1",
            "screenShot": "http://www.webpagetest.org/screen_shot.php?test=170205_C8_622&run=1&cached=1"
        },
        "domInteractive": 4587,
        "score_gzip": 100,
        "score_compress": 100,
        "domContentLoadedEventStart": 4588,
        "cached": 1,
        "score_progressive_jpeg": -1,
        "browser_version": "56.0.2924.87",
        "browser_name": "Google Chrome",
        "loadEventEnd": 6197,
        "score_cache": 41,
        "fullyLoaded": 7454,
        "image_savings": 0,
        "TTFB": 340
    },
    "firstView": {
        "loadEventStart": 9256,
        "score_cookies": -1,
        "requestsFull": 174,
        "domLoading": 523,
        "images": {
            "checklist": "http://www.webpagetest.org/results/17/02/05/C8/622/1_optimization.png",
            "waterfall": "http://www.webpagetest.org/results/17/02/05/C8/622/1_waterfall.png",
            "connectionView": "http://www.webpagetest.org/results/17/02/05/C8/622/1_connection.png",
            "screenShot": "http://www.webpagetest.org/getfile.php?test=170205_C8_622&file=1_screen.jpg"
        },
        "responses_404": 0,
        "docTime": 9374,
        "domContentLoadedEventEnd": 5100,
        "image_total": 2446722,
        "firstPaint": 2782,
        "score_cdn": 94,
        "score_minify": -1,
        "SpeedIndex": 6165,
        "lastVisualChange": 12859,
        "loadTime": 9374,
        "score_keep-alive": 100,
        "score_combine": 100,
        "score_etags": -1,
        "responses_200": 165,
        "visualComplete": 9190,
        "pages": {
            "breakdown": "http://www.webpagetest.org/breakdown.php?test=170205_C8_622&run=1",
            "checklist": "http://www.webpagetest.org/performance_optimization.php?test=170205_C8_622&run=1",
            "domains": "http://www.webpagetest.org/domains.php?test=170205_C8_622&run=1",
            "details": "http://www.webpagetest.org/details.php?test=170205_C8_622&run=1",
            "screenShot": "http://www.webpagetest.org/screen_shot.php?test=170205_C8_622&run=1"
        },
        "domInteractive": 4712,
        "score_gzip": 100,
        "score_compress": 94,
        "domContentLoadedEventStart": 4713,
        "cached": 0,
        "score_progressive_jpeg": 83,
        "browser_version": "56.0.2924.87",
        "browser_name": "Google Chrome",
        "loadEventEnd": 9309,
        "score_cache": 77,
        "fullyLoaded": 10832,
        "image_savings": 130514,
        "TTFB": 515
    }
}    

```