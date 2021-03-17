const unirest = require("unirest");
const express = require("express");
const app = express();
const cors=require("cors")

const hostname = "localhost";
const port = 3001;


app.use(cors())
;app.use(express.json());

app.get("/", (req, res) => {
  var request = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers");

  request.query({
    "region": "US"
  });

  request.headers({
    "x-rapidapi-key": "7812700e0emshebb9de4a28ebf3cp183990jsn341a8981b93a",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "useQueryString": true
  });

  request.end(function (response) {
    if (res.error) throw new Error(res.error);
    
    var stocks = [];
    for (var i = 0; i < 10; i++) {
      var stock = []
      var quote = response.body.finance.result[0].quotes[i];
      var name = quote.shortName;
      var price = quote.regularMarketPrice;
      var ticker = quote.symbol;

      stock.push(name);
      stock.push(price);
      stock.push(ticker);
      stocks.push(stock);
      console.log(stock);
    }
    console.log(stocks);
res.json({"topTenTrendingStocks": stocks});
  });
});

app.get("/search", function (req, res) {
  //let ticker = req.query.ticker;
  let ticker = "AMRN";

  var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary");

  req.query({
    "symbol": ticker
  });

  req.headers({
    "x-rapidapi-key": "7812700e0emshebb9de4a28ebf3cp183990jsn341a8981b93a",
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "useQueryString": true
  });


  req.end(function (response) {
    if (response.error) throw new Error(res.error);

    let name = response.body.price.shortName;
    let price = response.body.price.regularMarketOpen.fmt;
    let margin = response.body.defaultKeyStatistics.profitMargins.fmt;
  res.json({"tickerName": name, "tickerMarketOpen": price, "tickerProfitMargin": margin});
    console.log(name, price, margin);
  });
});

app.listen(port, hostname, () => {
  console.log(`Listening at: http://${hostname}:${port}`);
});
