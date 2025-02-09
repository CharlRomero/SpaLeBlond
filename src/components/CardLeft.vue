<template>
    <section data-aos="fade-left" data-aos-duration="1000" class="CardLeft">
        <section class="CardLeft-text">
            <section class="CardLeft-info">
                <h3 class="CardLeft-h3">Título Izquierda</h3>
                <p class="CardLeft-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet iusto
                    blanditiis, voluptatum, reiciendis dolor odio placeat ratione facilis corrupti consequuntur id.
                    Maiores
                    possimus vel quibusdam. Sapiente sunt perspiciatis consequatur.</p>
            </section>
            <section class="CardLeft-foot">Desde <span class="CardLeft-price">$40</span></section>
        </section>
        <section class="CardLeft-img"><img class="CardLeft-img--fit" :src="servicio1" alt="servicio"></section>
    </section>
</template>

<script>
import { servicio1 } from '@/assets/img.js';

export default {
    name: "CardLeft",
    data() {
        return {
            servicio1
        }
    }
}
</script>