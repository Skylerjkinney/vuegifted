<template>
    <div class="col-3">
        <img :src="giftProp.url" alt="gif">
        <span class="fw-bold">{{ giftProp.tag }}</span>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { Gift } from '../models/Gift';
import { giftService } from '../services/GiftService';
import Pop from '../utils/Pop';
export default {
    props: {
        giftProp: { required: true, type: Gift }
    },
    setup(props) {
        return {
            async selectActiveGift() {
                try {
                    await giftService.openGift(props.giftProp.id)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>