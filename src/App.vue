<template>

  <BaseCard>
    <h1>Überschrift</h1>
    <p>Beispiel</p>
  </BaseCard>


</template>

<script>
import BaseCard from './components/BaseCard.vue';
import StockService from "@/services/stockService";

const stockService = new StockService(); // ✅ create instance

export default {
  name: 'App',
  components: { BaseCard },

  async created() {
    try {
      this.stockData = await stockService.fetchData('AAPL'); // ✅ call instance method
      console.log("Loaded data", this.stockData);
    } catch (err) {
      console.error("Failed to fetch stock data", err);
    }
  }
}
</script>

<style>
body {
  margin: 0;

}

#app {
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
  width: 100vw;
  min-height: 100vh;
  padding: 100px;
  box-sizing: border-box;
}
</style>
