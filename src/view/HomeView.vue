<template>
    <section class="Home">
        <img class="Home-bg" :src="woman" alt="woman">
        <section data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1500"
            class="Home-content">
            <section class="Home-title">Spa <span class="Home-title--gold">Le Blond</span></section>
            <section class="Home-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolorum
                assumenda corporis,
                ratione quisquam ipsa atque aliquid, deserunt obcaecati id non cum expedita quidem commodi dolores at
                laudantium quas. Ex.</section>
        </section>
    </section>
</template>

<script>
import { woman } from '@/assets/img.js';

export default {
    name: "HomeView",
    data() {
        return {
            woman,
        }
    }
}
</script>