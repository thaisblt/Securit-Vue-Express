<script setup>
</script>

<template>
    <div class="app">
        <header class="header">
            <img src="/securit_logo.png" alt="Logo Securit" class="logo">
        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped>

    
.header {
text-align: center;
margin: 10px;
}

.logo {
width: 100px;
}
</style>
