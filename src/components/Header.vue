<script>
export default {
    name: 'Header'
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h1>Boolfolio</h1>
                </div>
                <div class="col-8">
                    <ul class='float-end'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Progetti</a></li>
                        <li><a href="#">Contatti</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

header{
    width: 100%;
    background-color: rgb(44, 44, 44);
    padding-top: 20px;
    h1{
        color: white;
    }
    ul{
        display: flex;
        list-style: none;
        li{
            line-height: 50px;
            color: white;
            margin-right: 10px;

            a{
                text-decoration: none;
                color: white;
            }
        }
    }
}
    
</style>