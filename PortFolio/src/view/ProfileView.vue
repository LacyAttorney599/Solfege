<script>
import Navbar from "../components/Navbar.vue";
import CardPlayList from "../components/CardPlayList.vue";
export default {
    name: "ProfileView",
    props: ["name"],
    components: { Navbar, CardPlayList, }
};
</script>

<template>
    <div class="navBar">
        <Navbar />
    </div>
    <p class="text">{{"c'est la page profil de l'utilisateur"}}</p>
</template>

<style>
.text {
    font-size: 70px;
}
</style>