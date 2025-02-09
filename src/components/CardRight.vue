<template>
    <section data-aos="fade-right" data-aos-duration="1000" class="CardRight">
        <section class="CardRight-img"><img class="CardRight-img--fit" :src="servicio1" alt="servicio"></section>
        <section class="CardRight-text">
            <section class="CardRight-info">
                <h3 class="CardRight-h3">Título</h3>
                <p class="CardRight-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat corporis
                    illo
                    nemo autem possimus dolores, sequi similique tenetur earum itaque voluptatum? Odio obcaecati
                    delectus
                    inventore mollitia laudantium voluptatibus ad?</p>
            </section>
            <section class="CardRight-foot">Desde <span class="CardRight-price">$40</span></section>
        </section>
    </section>
</template>

<script>
import { servicio1 } from '@/assets/img.js';

export default {
    name: "CardRight",
    data() {
        return {
            servicio1
        }
    }
}
</script>