<template>
    <section class="Servicios">
        <h2 class="Servicios-h2">Servicios</h2>
        <section class="Servicios-content">
            <CardRight />
            <CardLeft />
            <!-- <CardRight /> -->
        </section>
        <section class="Servicios-content--other">
            <CardServicio />
            <CardServicio />
            <CardServicio />
        </section>
    </section>
</template>
<script>
import CardServicio from '@/components/CardServicio.vue';
import CardRight from '@/components/CardRight.vue';
import CardLeft from '@/components/CardLeft.vue';

export default {
    name: "ServiciosView",
    components: {
        CardServicio,
        CardRight,
        CardLeft
    },
    data() {
        return {
        }
    }
}
</script>