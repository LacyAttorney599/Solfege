<script>
export default {
    name: "CardPlaylist"
};
</script>

<template>

    <a href="#">
        <div class="blockCard">
            <img class="imgPlaylist" src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg"
                alt="">
            <p class="nomPlaylist">{{"Rap Fr"}}</p>
        </div>

    </a>

    <a href="#">
        <div class="blockCard">
            <img class="imgPlaylist" src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg"
                alt="">
            <p class="nomPlaylist">{{"Rap Fr"}}</p>
        </div>

    </a>

    <a href="#">
        <div class="blockCard">
            <img class="imgPlaylist" src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg"
                alt="">
            <p class="nomPlaylist">{{"Rap Fr"}}</p>
        </div>

    </a>
    <a href="#">
        <div class="blockCard">
            <img class="imgPlaylist" src="https://www.thebackpackerz.com/wp-content/uploads/2018/09/Josman-400x400.jpg"
                alt="">
            <p class="nomPlaylist">{{"Rap Fr"}}</p>
        </div>

    </a>


</template>

<style>
.blockCard {
    width: 200px;
    height: 250px;
    background-color: #525252;
    box-shadow: 0px 5px 20px black;
    border-radius: 10px;
    transition: 0.2s;
    margin-right: 70px;
}


.imgPlaylist {
    width: 200px;
    height: 200px;
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
    box-shadow: 0px 20px 50px black;
    transition: 0.8s;
}
</style>