<script>
export default{
    props:{
        id:{
            type:String,
        },
        placeholder:{
            type: String,
            default: 'text'
        },
        type:{
            type: String,
            default: 'text'
        }
    }
}
</script>

<template>
    <label :for="id"><slot></slot></label>
    <input :id="id" :type="type" :placeholder="placeholder">
</template>

<style scoped>
input{
    height: 60px;
    font-size: 20px;
    font-weight: 700;
    margin: 10px;
    border-radius: 20px;
    border: 4px solid #2a7496;;
    outline: none;
}
label{
    font-size: 24px;
    font-weight: 600;
    margin-left: 10px;
}
</style>
