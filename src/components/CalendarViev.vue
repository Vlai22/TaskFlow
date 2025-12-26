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
        },
    },
    data(){
        return{
            count_days: 0,
            observer: null,
        }
    },
    mounted(){
        let w = Math.floor(Number(document.getElementById('calendar_workspace').getBoundingClientRect().width));
        this.count_days = Math.floor(w / 420)+3;
        this.observer = new IntersectionObserver(
            (entries) =>{
                entries.forEach((enty) => {
                    if(enty.isIntersecting == true){
                        this.count_days += 3;
                    }
                });
            },
            {
                threshold: 0.1
            }
        );
        let arr_elem = document.getElementsByClassName('container_column');
        this.observer.observe(arr_elem[arr_elem.length - 3]);
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
    <div class="date_tasks" id="calendar_workspace">
        <div class="container_column">
            <CalendarCard :type="'Time'" v-for="time in Math.round(1440/renger)">{{ timeReturn(time) }}</CalendarCard>
        </div>
        <div class="container_column" v-for="num in count_days">
            <CalendarCard v-for="time in Math.round(1440/renger)"></CalendarCard>
        </div>
    </div>
</template>

<style scoped>
.date_tasks{
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    overflow-x: scroll;
}
.container_column{
    display: flex;
    flex-direction: column;
}
</style>