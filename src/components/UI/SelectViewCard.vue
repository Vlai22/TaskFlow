<script>
export default{
    props:{
        img:{
            type: String,
            default: '/logo.svg'
        },
    }
}
</script>

<template>
    <div>
        <img :src="img" alt="img">
        <p><slot></slot></p>
    </div>
</template>
<style scoped>
div{
    height: 40px;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    transition: background-color 0.5s;
    padding: 10px;
    border-radius: 5px;
}
div:hover{
    background-color: #3f81a0;
}
img{
    width: 40px;
    height: 40px;
}
</style>