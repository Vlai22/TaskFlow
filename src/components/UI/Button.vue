<script>

</script>

<template>
    <button><slot></slot></button>
</template>

<style scoped>
button{
    font-size: 20px;
    font-weight: 700;
    color: #3f81a0;
    border-radius: 10px;
    outline: none;
    background-color: transparent;
    border: 4px solid #3f81a0;
    margin: 20px;
    padding: 20px;
    transition:  background-color 0.5s;
}
button:hover{
    background-color: #3f81a0;
    color: #F5F5F5;
}
</style>