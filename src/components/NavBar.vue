<template>
    <nav class="NavBar">
        <ul class="NavBar-ul">
            <li class="NavBar-li"><a href="#home" @click.prevent="scrollTo('home')">Inicio</a></li>
            <li class="NavBar-li"><a href="#servicios" @click.prevent="scrollTo('servicios')">Servicios</a></li>
            <li class="NavBar-li"><a href="#contacto" @click.prevent="scrollTo('contacto')">Contacto</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        scrollTo(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
};
</script>
