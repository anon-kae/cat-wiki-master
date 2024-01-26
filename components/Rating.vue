<template>
  <div class="rate">
    <template v-for="(item, index) in 5">
      <div
        v-if="index <= count - 1"
        :key="index"
        style="background-color: #544439" />
      <div v-else :key="index" style="background-color: #e0e0e0" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'RatingComponent',
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style>
.rate {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  margin-left: auto;
}
.rate div {
  width: 60px;
  height: 12px;
  background: #e0e0e0;
  border-radius: 8px;
}
</style>
