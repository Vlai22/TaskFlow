<script>
import CalendarCard from './UI/CalendarCard.vue';
export default{
    components:{
        CalendarCard
    },
    props:{
        tasks:{
            type: Array
        },
        renger:{
            type: Number,
        }
    },
    mounted(){

    },
    methods:{
        timeReturn(time){
            /* Возращение строки времени для форматирования*/ 
            let str = '';
            let hour = Math.floor(time*this.renger/60)-1;
            let minute = Math.floor(time*this.renger%60);
            if( String(hour).length == 1){
                str += '0' + String(hour);
            }else{
                str += String(hour);
            }
            if( String(minute).length == 1){
                str +=  ':0' + String(minute);
            }else{
                str += ':' + String(minute);
            }
            return str;
        }
    }
}
</script>

<template>
    <div class="date_tasks">
        <div class="container_column">
            <CalendarCard :type="'Time'" v-for="time in Math.round(1440/renger)">{{ timeReturn(time) }}</CalendarCard>
        </div>
        <div class="container_column">
            <CalendarCard v-for="time in Math.round(1440/renger)"></CalendarCard>
        </div>
    </div>
</template>

<style scoped>
.date_tasks{
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}
.container_column{
    display: flex;
    flex-direction: column;
}
</style>