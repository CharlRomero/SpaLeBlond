<template>
    <section data-aos="fade-up" data-aos-duration="1000" class="CardServicio">
        <section class="CardServicio-img"><img class="CardServicio-img--fit" :src="servicio1" alt="servicio"></section>
        <section class="CardServicio-info">
            <h3 class="CardServicio-h3">Título</h3>
            <p class="CardServicio-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat corporis
                illo
                nemo autem possimus dolores, sequi similique tenetur earum itaque voluptatum? Odio obcaecati delectus
                inventore mollitia laudantium voluptatibus ad?</p>
        </section>
        <section class="CardServicio-foot">Desde <span class="CardServicio-price">$40</span></section>
    </section>
</template>

<script>
import { servicio1 } from '@/assets/img.js';

export default {
    name: "CardServicio",
    data() {
        return {
            servicio1
        }
    }
}
</script>