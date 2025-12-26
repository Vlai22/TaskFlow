<script>
import Button from './Button.vue';
import InputCardCalendar from './InputCardCalendar.vue';

export default{
    components:{
        InputCardCalendar, Button
    },
    props:{
        task:{
            type: Object
        },
        type: {
            type: String,
            default: 'Default'
        },
        time:{
            type: String
        },
        sid:{
            type: String
        }
    }
}
</script>
<template>
    <div class="card">
        <p class="card_time" v-if="type == 'Time'"><slot></slot></p>
        <div class="card_default" v-else-if="type == 'Default'">
            <div>
                <InputCardCalendar :id="'name_task_'+this.sid" :placeholder="'Введите назваие задачи'"></InputCardCalendar>
                <InputCardCalendar :id="'text_task_'+this.sid" :placeholder="'Введите описание задачи'"></InputCardCalendar>
            </div>
            <div>
                <Button>Редактор</Button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card{
    height: 100px;
    justify-content: center;
    align-items: center;
    margin: 10px;
}
.card_time{
    font-size: 28px;
}
.card_default{
    width: 400px;
    height: 100px;
    background-color: #e6f7ff4d;
    display: flex;
    border-radius: 5px;
}
</style>