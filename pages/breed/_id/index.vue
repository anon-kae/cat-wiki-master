<template>
  <div class="breed-page">
    <div class="breed-info">
      <img
        class="breed-reference-image"
        :src="cat?.imageCat"
        alt="Breed reference image"
        width="370"
        height="370">
      <div class="breedDetails">
        <h2 class="breed-name">
          {{ cat?.name }}
        </h2>
        <p class="breed-description">
          {{ cat?.description ?? 'No description to display' }}
        </p>
        <div class="breed-description">
          <b> Temperament: </b> {{ cat?.temperament }}
        </div>
        <div class="breed-description">
          <b> Origin: </b> {{ cat?.origin }}
        </div>
        <div class="breed-description">
          <b> Life Span: </b> {{ cat?.life_span }}
        </div>
        <div class="rate-container">
          <b> Adaptability: </b> <rating-component :count="cat?.adaptability" />
        </div>
        <div class="rate-container">
          <b> Affection level: </b>
          <rating-component :count="cat?.affection_level" />
        </div>
        <div class="rate-container">
          <b> Child Friendly: </b>
          <rating-component :count="cat?.child_friendly" />
        </div>
        <div class="rate-container">
          <b> Grooming: </b> <rating-component :count="cat?.grooming" />
        </div>
        <div class="rate-container">
          <b> Intelligence: </b> <rating-component :count="cat?.intelligence" />
        </div>
        <div class="rate-container">
          <b> Health issues: </b>
          <rating-component :count="cat?.health_issues" />
        </div>
        <div class="rate-container">
          <b> Social needs: </b> <rating-component :count="cat?.social_needs" />
        </div>
        <div class="rate-container">
          <b> Stranger friendly: </b>
          <rating-component :count="cat?.stranger_friendly" />
        </div>
      </div>
    </div>
    <div>
      <h2>Other photos</h2>
      <div class="photo-gallery">
        <img
          class="breed-reference-image"
          :src="cat?.imageCat"
          alt="Breed reference image">
      </div>
    </div>
  </div>
</template>

<script>
import RatingComponent from '~/components/Rating.vue'

export default {
  name: 'PageViewBreed',
  components: { RatingComponent },
  data () {
    return {
      id: '',
      cat: {},
    }
  },
  async created () {
    this.id = this.$route.params.id
    await this.findCatById()
  },
  methods: {
    async findCatById () {
      this.cat = await this.$api.catService.getCatById(this.id)
      console.log(this.cat)
    },
  },
}
</script>

<style>
.breed-page {
  padding: 23px 18px 0;
  box-sizing: border-box;
  min-height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-columns: 100%;
}

.fullview .col:last-child .photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.fullview .col:last-child .photo-gallery img {
  max-width: 100%;
  height: auto;
  border-radius: 24px;
  aspect-ratio: 1/1;
  min-width: 220px;
}

.breed-page .col > h2 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #291507;
}

.breed-page .breed-description .rate-container {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.breed-page .breed-description .rate-container .rate {
  margin-left: auto;
}
.breed-info {
  padding: 20px 0;
}

.breed-reference-image {
  object-fit: contain;
  width: max-content;
  max-width: min(100%, 370px);
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 24px;
}

.breed-name {
  font-size: 36px;
  font-weight: normal;
  margin-bottom: 15px;
}

.breed-description {
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;
}
.rate-container {
  font-size: 18px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 3rem;
}

@media (min-width: 700px) {
  .breed-page {
    padding: 26px 96px 0;
  }
}

@media (min-width: 1000px) {
  .breed-info {
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: flex-start;
  }

  .breed-reference-image {
    margin: 0;
    min-width: 0;
  }

  .breed-description {
    max-width: 600px;
  }
}
</style>
