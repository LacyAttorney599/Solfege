<script>
export default {
    name: "CardPlaylist"
};
</script>

<template>

    <div class="playlists">
        <!-- component playlist -->
        <a href="#">
            <div class="blockCard">
                <img class="imgPlaylist"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" alt="">
                <p class="nomPlaylist">{{"Rap Fr"}}</p>
            </div>

        </a>

        <a href="#">
            <div class="blockCard">
                <img class="imgPlaylist"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" alt="">
                <p class="nomPlaylist">{{"Rap Fr"}}</p>
            </div>

        </a>

        <a href="#">
            <div class="blockCard">
                <img class="imgPlaylist"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" alt="">
                <p class="nomPlaylist">{{"Rap Fr"}}</p>
            </div>

        </a>
        <a href="#">
            <div class="blockCard">
                <img class="imgPlaylist"
                    src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg" alt="">
                <p class="nomPlaylist">{{"Rap Fr"}}</p>
            </div>

        </a>

    </div>

</template>

<style>
.playlists {
    display: flex;
    flex-direction: row;
}

.blockCard {
    width: 150px;
    height: 200px;
    background-color: #191919;
    border-radius: 10px;
    transition: 0.3s;
    margin-right: 70px;
}


.imgPlaylist {
    width: 150px;
    height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.nomPlaylist {
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 30px;
    text-align: center;

}


.blockCard:hover {
    background: -webkit-linear-gradient(45deg, #8774FF, #ff98be);
    transition: 0.3s;

}
</style>