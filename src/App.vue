<script>
import Project from './components/Project.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  components:{
    Project,
    Header,
    Main
  }
}
</script>
<template lang="">
    <Header />
    <Main />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>