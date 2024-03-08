<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppContactForm',

    data(){
        return{
            store,
            nome: '',
            cognome: '',
            email: '',
            telefono: '',
            messaggio: '',
            loading: false,
            success: false,
        }
    }, methods:{
        sendForm(){

            this.loading = true;

            const data = {
            nome: this.nome,
            cognome: this.cognome,
            email: this.email,
            telefono: this.telefono,
            messaggio: this.messaggio,
            }

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if(response.data.success){
                    this.nome = '';
                    this.cognome = '';
                    this.email = '';
                    this.telefono = '';
                    this.messaggio = '';

                    this.success = true
                }
              
                this.loading = false;
            })
        }
    }
}
</script>
<template lang="">
    <div class="container" v-if="success">
        <div class="row">
            <div class="col-12">
                <div class="alert alert-success">
                    email inviata
                </div>
            </div>
        </div>
    </div>
    <form @submit.prevent="sendForm()" method="POST">
        <div class="row">
            <div class="col-6">
                <label for="nome" class="control-label">Nome</label>
                <input type="text" class="form-control" name="nome" id="nome" placeholder="Inserisci il tuo Nome" v-model= "nome" required>
            </div>
            <div class="col-6">
                <label for="cognome" class="control-label">Cognome</label>
                <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Inserisci il tuo ognome" v-model= "cognome" required>
            </div>
            <div class="col-6">
                <label for="email" class="control-label">Email</label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Inserisci la tua email" v-model= "email" required>
            </div>
            <div class="col-6">
                <label for="telefono" class="control-label">Telefono</label>
                <input type="text" class="form-control" name="telefono" id="telefono" placeholder="Inserisci il tuo numero di telefono" v-model= "telefono" required>
            </div>
            <div class="col-12 mt-3">
                <label for="nome" class="control-label">Messaggio</label>
                <textarea class="form-control" name="messaggio" id="messaggio" placeholder="Inserisci il tuo messaggio" v-model= messaggio required cols="30" rows="10"></textarea>
            </div>
            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-sm btn-success" :disabled="loading">{{ loading ? 'Invio in corso...' : 'Invia' }}</button>
            </div>
        </div>

    </form>
</template>
<style lang="">
    
</style>