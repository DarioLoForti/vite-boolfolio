<script>
import AppContactForm from '../components/AppContactForm.vue'
export default {
    name: 'AppContactsUs',
    components:{
        AppContactForm,
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-4"> Contatacci</h1>
            </div>
            <div class="col-12-col-md-6">
                <p><strong>Indirizzo:</strong> Via Monopoly</p>
                <p><strong>Città:</strong>Monopoly</p>
            </div>
            <div class="col-12-col-md-6">
                <p><strong>Telefono:</strong> 011-55884529</p>
                <p><strong>Email:</strong>Monopoly@mail.com</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <AppContactForm />
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>