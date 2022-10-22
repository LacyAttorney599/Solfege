<script>
import CardPlayList from '../components/CardPlayList.vue';
import NavBar from "../components/Navbar.vue";
import SongComponent from '../components/SongComponent.vue';
export default {
    name: "HomeView",
    components: { CardPlayList, NavBar, SongComponent },
    methods: {
        showProfile: function (name) {
            this.$router.push({ name: 'profile', params: { name: name } });
        }
    }
};
</script>

<!-- ///////////////////////////////////////////////////////////////////// -->
<template>
    <div class="navBar">
        <NavBar />
    </div>
    <div class="body">
        <div class="header">
            <div class="titleHeader">
                <p class="colorText">{{"Bonjour"}}</p>
                <a @click="showProfile('Clement');" class="pseudo">{{"@Pseudo"}}</a>
            </div>
        </div>
        <div class="CardPlaylists">
            <CardPlayList />
        </div>
        <div class="SongList">
            <SongComponent />

        </div>
    </div>

</template>


<!-- ///////////////////////////////////////////////////////////////////// -->
<style>
.navBar {
    margin-right: 70px;
}

/* --- Les composants du header --- */
.colorText {
    font-size: 64px;
    background: -webkit-linear-gradient(#8774FF, #FF98BD);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
}

.pseudo {
    color: white;
    font-size: 45px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    transition: 0.5S;
}

.pseudo:hover {
    background: -webkit-linear-gradient(#8774FF, #FF98BD);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transition: 0.5s;
}

/* --- la disposition des Cards Playlist */
.CardPlaylists {
    display: flex;
}

.SongList {
    margin-top: 50px;
}
</style>