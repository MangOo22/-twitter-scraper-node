# Twitter Stock Symbol Scraper

## Overview

This project is a Node.js-based web scraper designed to scrape specific Twitter accounts for mentions of stock symbols, using a headless browser to mimic real-user interactions. It identifies and counts the occurrences of specified stock symbols (e.g., $TSLA) within the tweets of a given list of Twitter accounts.

## Features

- Scrapes tweets from a list of Twitter accounts without using the Twitter API.
- Uses Puppeteer, a headless browser, to handle dynamic content rendering by JavaScript.
- Reports the number of times a stock symbol is mentioned over a specified interval.
- Logs output to the console for monitoring purposes.

## Prerequisites

- Node.js (version 12.x or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

Bash

    git clone https://github.com/yourusername/twitter-stock-symbol-scraper.git

2. Navigate to the project directory:

Bash

    cd twitter-stock-symbol-scraper

3. Install the required dependencies:

Bash

    npm install

## Usage

1. Make sure you have all required packages installed:

Bash

    npm install puppeteer

2. Run the scraper script with the desired stock symbol and interval (in minutes). For example:

Bash

    node scraper.js $TSLA 15

    This command will scrape the specified Twitter accounts for mentions of $TSLA every 15 minutes.

## Script Details

- Twitter Accounts Scraped:

  - @Mr_Derivatives
  - @warrior_0719
  - @ChartingProdigy
  - @allstarcharts
  - @yuriymatso
  - @TriggerTrades
  - @AdamMancini4
  - @CordovaTrades
  - @Barchart
  - @RoyLMattox

- Input Parameters:

  - Stock Symbol: The ticker symbol to look for, preceded by a $ sign (e.g., $TSLA).
  - Time Interval: The interval in minutes between each scraping session.

- Output: The script outputs the number of mentions of the stock symbol, the stock symbol itself, and the time interval used, formatted as:

  "$TSLA" was mentioned "10" times in the last "15" minutes on @Mr_Derivatives.

## Concurrency and Performance

- The script currently processes Twitter accounts sequentially. Future enhancements could include concurrency control to handle multiple accounts simultaneously without overwhelming Twitter's servers.

## Error Handling

- The script includes basic error handling to manage network issues or changes in Twitter's page structure. Errors are logged to the console for troubleshooting.
