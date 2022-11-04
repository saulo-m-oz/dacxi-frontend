import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useCoinStore = defineStore("coin", () => {
  const isLoadingCoin = ref(true);
  const isLoadingDateCoin = ref(false);
  const isLoadingAllCoins = ref(true);
  const errorCoin = ref(null);
  const errorAllCoins = ref(null);
  const errorCoinDate = ref(null);
  const coinData = ref({});
  const allCoinsData = ref({});
  const coinDataByDate = ref("");
  const coins = ref([
    { id: "bitcoin", name: "bitcoin", symbol: "btc" },
    { id: "dacxi", name: "dacxi", symbol: "dacxi" },
    { id: "ethereum", name: "ethereum", symbol: "eth" },
    { id: "terra-luna-2", name: "luna", symbol: "luna" },
    { id: "cosmos", name: "atom", symbol: "atom" },
  ]);

  const coinGeckoUri = "https://api.coingecko.com/api/v3/coins/";
  const coinGeckoAllCoinsUri =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdacxi%2Cethereum%2Cterra-luna-2%2Ccosmos&vs_currencies=usd";

  async function fetchCoinPrice(coin) {
    try {
      const response = await axios.get(`${coinGeckoUri}/${coin}`);
      if (response) {
        errorCoin.value = null;
        coinData.value = response.data;
        setTimeout(() => {
          isLoadingCoin.value = false;
        }, 1300);
      }
    } catch (error) {
      isLoadingCoin.value = false;
      console.error(error.message);
      errorCoin.value = "There was an error. Try again...";
    }
  }

  async function fetchCoinPriceByDate(coin, date) {
    const coinGeckoByDateUri = `https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}&localization=false`;
    isLoadingDateCoin.value = true;
    coinDataByDate.value = 0;
    try {
      const response = await axios.get(coinGeckoByDateUri);
      if (response) {
        errorCoinDate.value = null;
         coinDataByDate.value = String(response.data.market_data.current_price.usd).split(".")[0];
        setTimeout(() => {
          isLoadingDateCoin.value = false;
        }, 1300);
      }
    } catch (error) {
      isLoadingDateCoin.value = false;
      console.error(error.message);
      errorCoinDate.value = "There was an error. Try again...";
    }
  }

  async function fetchAllCoins() {
    errorAllCoins.value = null;

    try {
      const response = await axios.get(coinGeckoAllCoinsUri);
      if (response) {
        errorAllCoins.value = null;
        allCoinsData.value = response.data;
        setTimeout(() => {
          isLoadingAllCoins.value = false;
        }, 1300);
      }
    } catch (error) {
      isLoadingAllCoins.value = false;
      console.error(error.message);
      errorAllCoins.value = "There was an error. Try again...";
    }
  }

  return {
    coins,
    isLoadingCoin,
    isLoadingAllCoins,
    isLoadingDateCoin,
    errorCoin,
    errorCoinDate,
    errorAllCoins,
    coinData,
    coinDataByDate,
    allCoinsData,
    fetchCoinPrice,
    fetchCoinPriceByDate,
    fetchAllCoins,
  };
});
