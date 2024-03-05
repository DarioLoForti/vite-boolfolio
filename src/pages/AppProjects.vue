<script>
import { store } from '../store.js'
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'AppProjects',
    components:{
        ProjectCard
    },
    data(){
        return{
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created(){
        this.getProjects();
    },
    methods: {
        getProjects(page_number) {
            axios.get(`${this.store.baseUrl}/api/projects`,{
                params: {
                    page: page_number
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page
                this.lastPage = response.data.results.last_page
            });
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
                    
                            <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
                    
                </div>
                <div class="d-flex justify-content-center">
                    <button :class="currentPage == 1 ? 'disabled' : '' " class="btn btn-sm btn-square" @click="getProjects(currentPage - 1 ) ">
                         precedente
                    </button>
                    <button :class="currentPage == lastPage ? 'disabled' : '' " class="btn btn-sm btn-square" @click="getProjects(currentPage + 1 ) ">
                        successivo
                    </button>
                   
                </div>
                
            </div>
        </div>
    </main>
</template>
<style lang="scss">
@use '../styles/generals.scss' as*;
    
</style>