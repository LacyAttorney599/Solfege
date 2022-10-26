<script>
export default {
    name: "SongComponent",
}
</script>

<template>
    <div class="songList">
        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
            <span class="songParams">Titre</span>
            <span class="songParams">Artiste</span>
            <span class="songParams">Album</span>
        </div>

        <div class="blockSong">
            <i id="logoPlay" class="bi bi-play-circle-fill"></i>
            <span><img class="imgAlbum"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" width="15px"
                    height="15px" alt=""></span>
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
    gap: 10px;
    padding: 10px;
    display: block;
    border-radius: 5px;
    height: 40px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.blockSong:hover {
    background: -webkit-linear-gradient(45deg, #8774FF, #ff98beb1);
    color: black;

}

#logoPlay {
    margin-right: 25px;
}

.imgAlbum {
    margin-right: 25px;
}

.songParams {
    margin-right: 200px;
}
</style>