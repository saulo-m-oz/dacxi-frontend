# Project KrypCap

This project was created using Vue3 (Composition API), Vite, Tailwind, Pinia and Axios.

Everything API-related is from [CoinGecko API Docs](https://www.coingecko.com/en/api/documentation) and fetched through axios.

# The Project Itself

This project was created so you can track in realtime with almost no delay (1s) some pre-estabilished crypto coins.

On the homepage you'll be greeted with a smooth animation showing what the webapp is about.

Clicking on the "Get Started" button, you'll be redirected through Vue's SPA to the "Explore" route. In this route, you'll be able to see and check in realtime all the main coins of the app. Clicking them will then take you to it's respective route for better price tracking.

At the coin route, you can still keep tracking it's current price in realtime and check what the price was on a certain date. 

As for the project structure, it works around **Pinia** custom store for collecting data from the api, storing them on states and passing them to the components.

For the styling, I decided to go with Tailwind as a challenge for myself. Everything except for some route-transition animations (because it got really clustered on the template itself) is made using tailwind.

The folder structure (tree) was kept based on what vue recommends. Having everything inside ***/src/*** except for some files like ***package.json, tailwind.config.js***.


## Project's Code

The main code for fetching the API and accessing some of the coin data can be found inside the custom ***Coin*** store made with Pinia at **/src/stores/coin**.

There you'll find some STATES and some ACTIONS.

States were used to contain some reactive data and pass them without suffering some prop drilling. Actions which are our functions, were used to fetch and alter the necessary data to create the app.

 - fetchCoinPrice - Action to fetch a specific coin data. It's automatically triggered whenever you enter a valid coin route. E.g: /coins/bitcoin
 - fetchCoinPriceByDate - Action to fetch a specific coin value filtered by the date input. It's triggered whenever the user presses the button with the date-input filled.
 - fetchAllCoins - Action to fetch the data for all the main coins from the app. It's first triggered when you enter /explore/ and it's triggered whenever you revisit it.

At CoinDetail's component, you'll see the logic behind the system implemented to keep tracking the actual coin based on the `params id`. The system itself was designed with the intention of not having to switch the actual "base route" (coins) and use it as some kind of container for the api data.

On the first time you access a valid `/coins/:id` route, our component will access the custom pinia store to run a function fetching the necessary data of the coin based on the `:id`. While fetching, the template will adjust to show a static loading message and if there's an error, it'll display a message asking to reload the page. If it's sucessful, it'll then display on a flex-based layout, the `name, price, min 24h price, max 24h price` and give the user an option to find the price based on a previous date.

If the user wishes so, he can use the header navbar to switch between the available coins. To track this change, the system contains a `watch` function checking for some change on the `params.id`. If it triggers, we reset the `loading and errors` states to its default values and fetch the new coin data using `fetchCoinPrice(route.params.id);`.
 
Besides the main code and the CoinDetail' code, you'll find at /src/composables/ what I used to format the input date from YYYY-MM-DD to DD-MM-YYYY.

## Project Setup


`npm install` - Install all necessary dependencies to run locally. 
`npm run dev` - After installing all dependencies, use npm run dev to start the project locally.
