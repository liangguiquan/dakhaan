<template>
  <div id="app" class="app-container" ref="appContainer">
    <Layout>
      <template v-slot:header>
        <Header />
      </template>
      <template #default>
        <router-view />
      </template>
      <template #footer>
        <Footer />
      </template>
    </Layout>
    <Totop />
  </div>
</template>

<script>
import Layout from "./components/Layout/";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Totop from "./components/Totop";
export default {
  components: {
    Layout,
    Header,
    Footer,
    Totop,
  },
};
</script>

<style>
#app {
  font-family: "\9ED1\4F53-\7B80", "Microsoft YaHei", Arial, sans-serif;
}

.app-container {
  height: 100%;
}
</style>
