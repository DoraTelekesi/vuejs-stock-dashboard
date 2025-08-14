<template>

  <BaseCard>
    <h1>Überschrift</h1>
    <p>Beispiel</p>
  </BaseCard>


</template>

<script>
import BaseCard from './components/BaseCard.vue';



export default {
  name: 'App',
  components: {
    BaseCard
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
