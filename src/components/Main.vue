<script>
import { store } from '../store.js'
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'Main',
    components:{
        ProjectCard
    },
    data(){
        return{
            store,
            projects: [],
        }
    },
    created(){
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.results;
            })
        }
    }
}
</script>
<template lang="">
    <main>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center my-4">
                        Progetti
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus obcaecati at repudiandae fugiat asperiores sint, aliquam laudantium quis perferendis, animi reiciendis. Adipisci officia qui provident perferendis obcaecati dignissimos numquam tempore.</p>
                </div>
                <div class="row">
                    <div class="col-12 d-flex flex-wrap">
                        
                            <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
@use '../styles/generals.scss' as*;
    
</style>