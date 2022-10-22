<script>
export default {
    name: "SongComponent",
}
</script>

<template>
    <div class="songList">
        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <img src="" alt="">
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <img src="" alt="">
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <img src="" alt="">
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i class="bi bi-play-circle-fill"></i>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>
    </div>

</template>

<style>
.songList {
    overflow-x: scroll;
    display: block;
    height: 300px;
}

.blockSong {
    color: white;
    padding: 10px;
    display: block;
    border-radius: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.blockSong:hover {
    background: -webkit-linear-gradient(45deg, #8774FF, #ff98beb1);
    color: black;

}

.songParams {
    margin-right: 300px;
}
</style>