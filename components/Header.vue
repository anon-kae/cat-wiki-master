<template>
  <div>
    <header class="header">
      <div class="header__hero-image">
        <div class="header__hero-text">
          <h1 class="header__hero-text__title">
            CatWiki
          </h1>
          <span class="header__hero-text__logo">
            <component-logo size="lg" color="white" />
          </span>
          <p class="header__hero-text__description">
            Get to know more about your cat breed
          </p>
          <div style="width: 350px">
            <component-search-bar />
          </div>
        </div>
      </div>
      <div class="header__most-searched-breeds">
        <h2 class="header__most-searched-breeds__title">
          Most Searched Breeds
        </h2>
        <div class="header__most-searched-breeds__info">
          <p class="header__most-searched-breeds__discover">
            66+ Breeds For you to discover
          </p>
          <span
            class="header__most-searched-breeds__see-more"
            to="/most-searched-breeds">
            SEE MORE <v-icon>arrow_right_alt</v-icon>
          </span>
        </div>
        <div class="header__most-searched-breeds__breeds">
          <div v-for="cat in cats" :key="cat.id">
            <img
              class="most-searched-breeds__breed__image"
              :src="cat.imageCat"
              alt="Breed reference image">
            <div class="most-searched-breeds__breed__name">
              {{ cat.name }}
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import ComponentLogo from './Logo.vue'
import ComponentSearchBar from './SearchBar.vue'

export default {
  name: 'ComponentHeader',
  components: { ComponentLogo, ComponentSearchBar },
  data () {
    return {
      pagination: {
        limit: 4,
        page: 0,
      },
      cats: [],
    }
  },
  async mounted () {
    await this.findAll()
  },
  methods: {
    async findAll () {
      this.cats = await this.$api.catService.getCats(this.pagination)
    },
  },
}
</script>

<style>
.header {
  margin-top: 40px;
  border-radius: 38px;
  overflow: hidden;
}

.header__hero-image {
  width: 100%;
  height: auto;
  background-image: url('/HeroImagesm.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.header__hero-text {
  color: #fff;
  width: 100%;
  padding: 20px 25px;
}

.header__hero-text__title {
  font-size: 16px;
}

.header__hero-text__logo {
  display: none;
}

.header__hero-text__description {
  font-size: 13px;
  margin-top: 10px;
}

.header__most-searched-breeds {
  padding: 20px 25px;
  background-color: #e3e1dc;
}

.header__most-searched-breeds__title {
  font-size: 16px;
  font-weight: normal;
  position: relative;
  margin-bottom: 25px;
}

.header__most-searched-breeds__title::after {
  content: '';
  display: block;
  position: absolute;
  width: 50px;
  height: 5px;
  border-radius: 5px;
  background-color: #4d270c;
  bottom: -8px;
}

.header__most-searched-breeds__discover {
  font-weight: bold;
  font-size: 20px;
  max-width: 200px;
}

.header__most-searched-breeds__see-more {
  font-size: 18px;
  cursor: pointer;
  color: #291507a3;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
}

.header__most-searched-breeds__see-more:hover {
  color: #291507ec;
}

.header__most-searched-breeds__breeds {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.most-searched-breeds__breed__image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 24px;
}

.most-searched-breeds__breed__name {
  font-size: 18px;
  margin-top: 10px;
}

@media (min-width: 500px) {
  .header__hero-text {
    padding: 35px 30px;
  }

  .header__hero-text__title {
    font-size: 20px;
  }

  .header__hero-text__description {
    font-size: 16px;
  }
}

@media (min-width: 700px) {
  .header__hero-image {
    background-image: url('/HeroImagemd.png');
  }
}

@media (min-width: 1000px) {
  .header__hero-image {
    background-image: url('/HeroImagelg.png');
  }

  .header__hero-text {
    padding: 150px 108px;
    width: 395px;
  }

  .header__hero-text__title {
    display: none;
  }

  .header__hero-text__logo {
    display: block;
  }

  .header__hero-text__description {
    font-size: 28px;
    width: 390px;
  }

  .header__most-searched-breeds {
    padding: 40px 108px;
  }

  .header__most-searched-breeds__title {
    font-size: 18px;
  }

  .header__most-searched-breeds__info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .header__most-searched-breeds__discover {
    font-size: 48px;
    max-width: 500px;
  }

  .header__most-searched-breeds__breeds {
    margin-top: 40px;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
}
</style>
