<script>

export default {
    name: "Navbar",
};

</script>

<template class="componentNav">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />


    <nav aria-label="Principal" class="navbar">
        <div class="menu">
            <div class="bannerLogo" role="banner">
                <img class="logoAPP" src="../assets/logo_app-event.png" alt="" />
            </div>

            <li class="listItems">

                <div class="search">
                    <!-- <i role="img" class="bi bi-house"></i> -->
                    <input type="search" />
                </div>

            </li>

            <li class="listItems">
                <a href="">
                    <div class="btnMenu">
                        <i role="img" class="bi bi-house"></i>
                        <span>{{"Accueil"}}</span>
                    </div>
                </a>
            </li>
            <li class="listItems">
                <a href="">
                    <div class="btnMenu">
                        <i class="bi bi-music-note-list"></i>
                        <span>{{"Bibliothèque"}}</span>
                    </div>
                </a>
            </li>
            <li class="listItems">
                <a href="">
                    <div class="btnMenu">
                        <i class="bi bi-hearts"></i>
                        <span>{{"Titres likés"}}</span>
                    </div>
                </a>
            </li>

            <div class="case"></div>

        </div>
    </nav>




</template>

<style>
.componenentNav {
    display: inline;
}

.navbar {
    /* padding: 20px;
    width: auto;
    text-align: center;
    height: 832px;
    background: -webkit-linear-gradient(#8774FF, #FF98BD);
    margin-top: 0px;
    margin-bottom: 0;
    margin-left: 0px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    list-style: none; */
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    background: -webkit-linear-gradient(#8774FF, #FF98BD);
    display: flex;
    flex-direction: column;
    grid-area: nav-bar;
    min-height: 0;
    position: relative;
    width: calc(232px + 9px);
    height: 832px;


}

.bannerLogo {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-box-pack: justify;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-shrink: 0;
    justify-content: space-between;
}

.logoAPP {
    width: 100px;
    height: 100px;
}

.menu {
    text-decoration: none;

}


.listItems {
    list-style: none;
    vertical-align: baseline;
    padding: 0px 12px
}

.btnMenu {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 10px;
    border: white 2px solid;
    border-radius: 5px;
    color: white;
    transition: 0.3s
}

.btnMenu:hover {
    background-color: white;
    color: black;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.765);
    transition: 0.3s
}

.search {

    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 20px;
    border-radius: 5px;
    box-sizing: border-box;
}

.case {
    --left-sidebar-item-height: 32px;
    --left-sidebar-padding-left: 24px;
    --left-sidebar-padding-right: 24px;
    --left-sidebar-item-pill-horizontal-padding: 7px;
    --left-sidebar-item-indentation-width: 16px;
    --left-sidebar-edit-input-height: 26px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    margin-top: 24px;
    min-height: 0;
    position: relative;
    flex: 1;
    display: flex;

}
</style>