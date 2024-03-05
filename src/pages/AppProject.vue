<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: 'AppProject',
    props: {
        project: Object
    },
    data(){
        return{
            store,
            project: null,
        }
    },
    created(){
        this.getProject();
    },
    methods: {
        getProject() {
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`,).then((response) => {
                this.project = response.data.project;
            });
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
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="image d-flex justify-content-center">
                    <img :src="getUrlImage()" alt="project.titolo">
                </div>
                <div class="col-12">
                    <h1 class="text-center py-5">Titolo: {{ project.titolo}} </h1>
                </div>
                <div class="col-12">
                    <p> Descrizione: <br> <br>
                        {{project.descrizione}}</p>
                </div>
                <div class="col-12">
                    <p> Autore:  {{project.autore}} </p>
                </div>
                <div class="col-12">
                    <p> Data fine progetto: {{project.fine_progetto}} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
.image{
    img{
        width: 200px;

    }

}
</style>