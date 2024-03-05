<script>
import { store } from '../store.js'
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        creatLimit(){
            return this.project.descrizione.substr(0, 30) + '...';
        },

        getUrlImage(){
            let image;
            if(this.project.cover_image != null){
                image = '/storage/' + this.project.cover_image;
            }
            else{
                image = 'img/folder.png'
            }
            return `${this.store.baseUrl}/storage/${image}`;
        }
    }
}
</script>
<template lang="">
    <div class="col-12 col-md-3">
        <router-link :to="{ name: 'project', params: { slug: project.slug} }">
          <div class="card text-center">
              <img :src="getUrlImage()" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Titolo: <br>{{ project.titolo }}</h5>
                <p class="card-text">{{ creatLimit()}}</p>
                <p>Autore: {{ project.autore }}</p>
                <p>Fine progetto: <br>{{ project.fine_progetto }}</p>
              </div>
            </div>
        </router-link>
    </div>
    
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
.card{
    
    margin: 10px;

    img{
        width: 50%;
        margin-left: 40px;
    }
   
}
</style>