<template>
  <div class="container">
    <div v-for="gift in gifts">
      <Gift :giftProp="gift" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { giftService } from '../services/GiftService.js'
import Pop from '../utils/Pop';
import { AppState } from '../AppState';
import Gift from '../components/Gift.vue';


export default {
  setup() {
    onMounted(() => {
      getGifts()
    })
    async function getGifts() {
      try {
        await giftService.getGift()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      gifts: computed(() => AppState.gifts),
    }
  },
  components: { Gift }
}

</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
