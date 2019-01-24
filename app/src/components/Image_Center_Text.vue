<template>
    <div class="image-center-text-comp">
        <div class="center-text">{{ text }}</div>
    </div>
</template>

<script>
    export default {
        name: 'image-center-text',
        props: ['text', 'image']
    }
</script>

<style>
.image-center-text-comp {
    background: linear-gradient(122deg, rgba(107,191, 255, 0.7), rgba(63, 0, 70, 0.7)), url("https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
}

.center-text {
    text-align: center;
    position: relative;
    top: 45%;
    width: 300px;
    color: #ffffff;
    font-family:'Raleway' sans-serif;
    font-size: 35px;
    letter-spacing: -1px;
    font-weight: bold;
}
</style>

