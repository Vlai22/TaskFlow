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
        },
        style:{
            type: String,
            default: ''
        },
        value:{
        }
    },
    methods:{
        sendDataInput(){
            this.$emit('input-data', {data: document.getElementById(this.id).value})
        }
    } 
}
</script>

<template>
    <input :value="value" @input="sendDataInput" :style="style" :id="id" :type="type" :placeholder="placeholder">
</template>

<style scoped>
input{
    height: 20px;
    font-size: 15px;
    font-weight: 700;
    margin: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 4px solid #2a7496;;
    outline: none;
}
</style>
