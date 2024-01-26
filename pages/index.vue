<template>
  <div>
    <component-header />
    <section class="have-a-cat">
      <div>
        <h2 class="have-a-cat__title">
          Why should you have a cat?
        </h2>
        <p class="have-a-cat__reasons">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <a
          id="have-a-cat__read-more"
          href="https://animalkind.org/blog/top-5-reasons-cat/"
          target="_blank"
          rel="noreferrer">
          READ MORE <v-icon>arrow_right_alt</v-icon>
        </a>
      </div>
      <div class="have-a-cat__images">
        <div v-for="number in numbers" :key="number" class="have-a-cat__image">
          <img
            v-if="number === 2"
            :src="require(`../assets/images/image ${number}.png`)"
            width="250px"
            alt="Have a cat">
          <img
            v-else
            :src="require(`../assets/images/image ${number}.png`)"
            width="160px"
            alt="Have a cat">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ComponentHeader from '../components/Header.vue'

export default {
  name: 'IndexPage',
  components: { ComponentHeader },
  data () {
    return {
      numbers: [2, 3, 1],
    }
  },
  mounted () {},
  methods: {},
}
</script>

<style>
.have-a-cat {
  margin-top: 30px;
}

.have-a-cat__title {
  font-size: 42px;
  position: relative;
}

.have-a-cat__title::before {
  content: '';
  display: block;
  position: absolute;
  width: 50px;
  height: 5px;
  border-radius: 5px;
  background-color: #4d270c;
  top: -15px;
}

.have-a-cat__reasons {
  margin-top: 30px;
  font-size: 20px;
}

#have-a-cat__read-more {
  display: inline-block;
  margin-top: 25px;
  font-size: 18px;
  color: #291507a3;
  text-decoration: none;
}

#have-a-cat__read-more:hover {
  color: #291507ec;
}

.have-a-cat__images {
  max-width: min(100%, 500px);
  margin: 35px auto 0;
  display: grid;
  gap: 1px;
  grid-template-columns: 65% 1fr;
}

.have-a-cat__image:first-child,
.have-a-cat__image:nth-child(2) {
  width: 100%;
}

.have-a-cat__image:nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

.have-a-cat__image:nth-child(3) {
  width: 65%;
  justify-self: right;
}

@media (min-width: 1000px) {
  .have-a-cat {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, min(50%, 500px));
    gap: 15px;
    margin: 0 auto;
    justify-content: center;
    margin-top: 5px;
  }
}
</style>
