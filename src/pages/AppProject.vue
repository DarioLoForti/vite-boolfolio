<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: 'AppProject',
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
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="roe">
            <div class="col-12">
                <div class="image">
                    <img :src="`${this.store.baseUrl}/storage/${project.cover_image}`" alt="project.titolo">
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

    
</style>