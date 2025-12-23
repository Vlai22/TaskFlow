<script>
export default{
    props:{
        text:{
            type: String,
            default: 'Test'
        }
    }
}
</script>

<template>
    <div>
        <h3><slot></slot></h3>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
div{
    width: 500px;
    height: 500px;
    border-radius: 60px;
    box-shadow: 0 0 10px #3f81a05b;
    margin: 20px 0 20px 0;
    margin-left: -500px;
    opacity: 30%;
    transition: opacity 2s,
                margin-left 2s;
}
</style>