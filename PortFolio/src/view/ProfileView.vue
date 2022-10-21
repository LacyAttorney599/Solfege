<script>
export default {
    name: "ProfileView",
    props: ['name'],

};
</script>

<template>
    <p class="text">{{"c'est la page profil de l'utilisateur"}}</p>
</template>

<style>
.text {
    font-size: 70px;
}
</style>