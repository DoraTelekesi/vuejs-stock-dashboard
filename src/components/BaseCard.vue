<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped>
.card {
  background-color: #011F35;
  padding: 24px 32px;
  border-radius: 16px;

}
</style>
