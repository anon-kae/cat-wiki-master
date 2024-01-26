<template>
  <v-autocomplete
    v-model="model"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    clearable
    hide-details
    hide-selected
    item-text="name"
    item-value="id"
    label="Enter your breed"
    class="search-bar"
    append-icon="search"
    solo>
    <template #item="{ item }">
      <v-list-item-content>
        <v-list-item-title @click="viewCat(item)" v-text="item.name" />
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
    }
  },
  watch: {
    model (val) {
      if (val != null) this.tab = 0
      else this.tab = null
    },
    async search (val) {
      if (this.items.length > 0) return

      this.isLoading = true

      // Lazily load input items
      this.items = await this.$api.catService.getCats(
        { limit: 50, page: 0 },
        'SEARCH'
      )
      this.isLoading = false
    },
  },
  methods: {
    viewCat (item) {
      this.$router.push({ name: 'breed-id', params: { id: item.id } })
    },
  },
}
</script>

<style>
.search-bar-container {
  position: relative;
}

.search-bar {
  border-radius: 60px;
  overflow: hidden;
  border: 1px solid #000;
  display: flex;
  background-color: #fff;
  margin-top: 10px;
}

.search-bar__field {
  border-radius: 60px;
  min-width: 0;
  padding: 10px 0 10px 20px;
  border: none;
  flex-grow: 1;
  outline: none;
}

.search-bar__field::placeholder {
  color: #291507;
}

.search-bar__search-button {
  background-color: inherit;
  border: none;
  padding: 0 12px;
  cursor: pointer;
}

.search-bar__suggestions {
  max-height: 200px;
  list-style: none;
  overflow: auto;
  box-shadow: 0 2px 6px #0000001f;
  border-radius: 12px;
  color: #000;
  position: absolute;
  background-color: #fff;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
}

.suggestion {
  display: block;
  width: 100%;
  text-align: left;
  background-color: #fff;
  border: none;
  padding: 15px;
}

.suggestion--selected {
  background-color: #9797972a;
}

@media (min-width: 1000px) {
  .search-bar {
    margin-top: 50px;
  }

  .search-bar__field {
    padding: 23px 0 23px 26px;
    font-size: 18px;
    cursor: auto;
  }

  .search-bar__search-button {
    padding: 23px 26px;
    font-size: 20px;
  }
}
</style>
