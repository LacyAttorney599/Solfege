<script>
export default {
    name: "Navbar",
};

</script>

<template>
    <div class="navbar">
        <ul class="menu">
            <li>
                <p>{{"yo"}}</p>
            </li>
            <li>
                <p>{{"yo"}}</p>
            </li>
        </ul>

    </div>
</template>

<style>
.navbar {
    display: flex;
    scroll-snap-type: none;
    vertical-align: text-top;
    width: 200px;
    text-align: center;
    height: 832px;
    background-color: #9392CC;
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
}

.menu {
    text-decoration: none;
    list-style: none;
}
</style>