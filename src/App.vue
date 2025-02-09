<template>
  <section id="app">
    <NavBar />
    <main>
      <section class="content" id="home">
        <HomeView />
      </section>
      <section class="content" id="servicios">
        <ServiciosView />
      </section>
      <section class="content" id="contacto">
        <ContactoView />
      </section>
    </main>
    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Spa Relax. Todos los derechos reservados.</p>
    </footer>
  </section>
</template>
<script>
import NavBar from './components/NavBar.vue';
import HomeView from './view/HomeView.vue';
import ServiciosView from './view/ServiciosView.vue';
import ContactoView from './view/ContactoView.vue';

export default {
  name: "App",
  components: {
    NavBar,
    HomeView,
    ServiciosView,
    ContactoView
  }
}
</script>