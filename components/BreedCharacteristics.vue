<template>
  <div class="breed-characteristics-container">
    <table class="breed-characteristics">
      <tbody>
        <tr
          v-for="(characteristic, index) in characteristics"
          :key="index"
          class="breed-characteristics__row">
          <td class="breed-characteristics__column">
            <b>{{ characteristic }}:</b>
          </td>
          <td>{characteristic}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ComponentBreedCharacteristics',
  props: {
    characteristics: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.breed-characteristics-container {
  overflow: auto;
}

.breed-characteristics {
  font-size: 16px;
}

.breed-characteristics__row,
.breed-characteristics__column {
  padding: 10px 0;
}

.breed-characteristics__column:first-child {
  padding-right: 20px;
}
</style>
