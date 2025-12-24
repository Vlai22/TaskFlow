<script>
export default{
    props:{
        text:{
            type: String,
            default: 'Test'
        },
        rigth:{
            type: Boolean,
            default: false
        },
        visible:{
            type: Boolean,
            default: false
        },
        img:{
            type: String,
            default: '/logo.svg'
        }
    }
}
</script>

<template>
    <div  :class="{'visible': visible}, {' rigth': rigth}" class="div_box_card">
        <img :src="img" alt="logo_card">
        <h3><slot></slot></h3>
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
.div_box_card{
    width: 500px;
    height: 500px;
    border-radius: 60px;
    box-shadow: 0 0 10px #3f81a05b;
    margin: 20px 0 20px 0;
    margin-left: -300px;
    opacity: 30%;
    transition: opacity 2s,
                margin-left 2s,
                margin-right 2s;
}
.div_box_card img{
    width: 200px;
    height: 200px;
    margin: 20px;
}
.div_box_card h3{
    font-size: 28px;
    margin: 20px;
}
.div_box_card p{
    font-size: 24px;
    margin: 20px;
}
.div_box_card.visible{
    margin-left: 0px;
    margin-right: 0px;
    opacity: 100%;
}
.rigth{
    margin-left: 0;
    margin-right: -300px;
    align-self: flex-end;
}
</style>