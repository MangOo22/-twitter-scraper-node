const puppeteer = require("puppeteer");

// Define the Twitter accounts to scrape
const twitterAccounts = [
  "Mr_Derivatives",
  "warrior_0719",
  "ChartingProdigy",
  "allstarcharts",
  "yuriymatso",
  "TriggerTrades",
  "AdamMancini4",
  "CordovaTrades",
  "Barchart",
  "RoyLMattox",
];

// Function to scrape a Twitter account for a given ticker
async function scrapeTwitterAccount(page, username, ticker) {
  try {
    const url = `https://twitter.com/${username}`;
      await page.goto(url);
      console.log("Start")

    const tweets = await page.$$eval(
      'article div[data-testid="tweetText"]',
      (nodes) => nodes.map((node) => node.innerText)
    );

    const mentionCount = tweets.filter((tweet) =>
      tweet.includes(ticker)
    ).length;
    return mentionCount;
  } catch (error) {
    console.error(`Error scraping ${username}: ${error.message}`);
    return 0;
  }
}

// Main function to run the scraper
async function main(ticker, interval) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const mentionCounts = {};
  twitterAccounts.forEach((account) => {
    mentionCounts[account] = 0;
  });

  // Scrape each account at specified intervals
  setInterval(async () => {
    for (const account of twitterAccounts) {
      const count = await scrapeTwitterAccount(page, account, ticker);
      mentionCounts[account] += count;
      console.log(
        `"${ticker}" was mentioned "${mentionCounts[account]}" times in the last "${interval}" minutes on ${account}.`
      );
    }
  }, interval * 60 * 1000);

}

// Example usage: node scraper.js $TSLA 15
const ticker = "$NVDA";
const interval = 15;
main(ticker, interval);
