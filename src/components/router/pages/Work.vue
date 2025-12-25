<script>
import CalendarViev from '@/components/CalendarViev.vue';
import Input from '@/components/UI/Input.vue';
import SelectViewCard from '@/components/UI/SelectViewCard.vue';
export default{
    components:{
        SelectViewCard, Input, CalendarViev
    },
    data(){
        /* задачи являются объектами типа json и имеют следующую структуру
        {
            sid: уникальный идентификатор задачи для определения какая задача создана и от кого она зависит
            title: краткое название задачи
            text: задача подробно
            priority: приоритет то есть на сколько важна эта задача это работает вместе с дедлайном
            teg: тег задачи для формирования задач в разные кластеры
            position: позиция выполения задачи необходимо для понимания если эта задача выполняется или выполнена 
            то задачи с таким же местом будут выходить вперёд по преоритету но в формате рекомендации а не принуждения
            dateSatart: дата начала выполнения задачи
            dataCreate: дата создания задачи
            dataFinish: дата завершения выполнения задачи
            parent: родительская задача то есть задача для решения которой нужно решить эту задачу может быть несколько задач
            children: дочернии задачи то есть задачи которые нужно решить для решения данной задачи, может быть несколько задач
            progressNotes: [ // История прогресса
                {date: "2024-01-20", note: "Начал исследование", percent: 10},
                {date: "2024-01-21", note: "Собрал материалы", percent: 30}
            ]
            recurring: { // Для повторяющихся задач
                pattern: "daily" | "weekly" | "monthly",
                daysOfWeek: [1, 3, 5], // для weekly
                endDate: "2024-12-31" | null
            }
            timeEstimate: 30, // В минутах, реалистичная оценка
            bestTime: ["morning", "afternoon", "evening", "any"], // Когда лучше выполнять   
            context: ["computer", "phone", "office", "home"], // Где/как выполнять
            urgency: 1-4, // Срочность (матрица Эйзенхауэра)
            importance: 1-4, // Важность
            effort: { // Более детальная оценка
              mental: 1-5, // Ментальное усилие
              physical: 1-5, // Физическое усилие
              emotional: 1-5, // Эмоциональная нагрузка
              total: 1-5 // Суммарная оценка
            },
            status: {
              state: "todo" | "in_progress" | "review" | "done" | "blocked",
              progress: 0-100, // Процент выполнения
              lastUpdated: "2024-01-20T10:30:00Z",
              autoCalculated: true // Авторасчет на основе детей
            }
            list: список к которому относиться задача
        }
                */ 
        return{
            tasks:[

            ],
            view: 'Календарь',
            view_select_style:{
                display: 'none',
                position: 'absolute',
                backgroundColor: '#a2a2a2',
                top: '50px',
                borderRadius: '5px',
            },
            renger: 60
        }
    },
    methods:{
        openSelectViev(){
            if(this.view_select_style.display == 'none'){
                this.view_select_style.display = 'block';
            }else{
                this.view_select_style.display = 'none';
            }
        },
        SelectView(e){
            this.view = e;
        },
        inputRange(data){
            this.$data.renger = Number(data.data);
        }
    }
}
</script>

<template>
    <main>
        <section class="section_top_bar">
            <div @click="openSelectViev()" class="section_top_bar_select_view">
                <p class="section_top_bar_select_view_now">Выберете вид:{{ view }}</p>
                <div :style="view_select_style">
                    <SelectViewCard @click="SelectView('Календарь')">Календарь</SelectViewCard>
                    <SelectViewCard @click="SelectView('Река')">Река</SelectViewCard>
                    <SelectViewCard @click="SelectView('Сплошной список')">Сплошной список</SelectViewCard>
                    <SelectViewCard @click="SelectView('Группа')">Группа</SelectViewCard>
                </div>
            </div>
            <div class="section_top_bar_input_name">
                <Input width="width: 700px;" :id="'input_name_task'" :placeholder="'Введите название'"></Input>
            </div>
            <div class="section_top_bar_select_color">
                <Input v-if="view == 'Календарь'" :value="renger" @input-data="inputRange" :id="'input_time_range'" :placeholder="'Введите время ранжирования'"></Input>
                <p>ПОка в разработке</p>
            </div>
        </section>
        <section class="section_main_workspace">
            <div class="section_main_workspace_left_bar">
                <p>Пока в разработке</p>
            </div>
            <div id="workspace" class="section_main_workspace_workspace">
                <CalendarViev v-if="view == 'Календарь'" :renger="this.$data.renger"></CalendarViev>
            </div>
        </section>
    </main>
</template>

<style scoped>
.section_top_bar{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.section_top_bar_select_view{
    width: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 68px;
    margin: 10px;
    border-radius: 5px;
    justify-content: center;
    background-color: #a2a2a2;
}
.section_top_bar_select_view_now{
    font-size: 20px;
    margin: 0 0 0 10px;
}
.section_main_workspace{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
}
.section_main_workspace_left_bar{
    width: 300px;
}
.section_top_bar_select_color{
    display: flex;
    flex-direction: row;
}
.section_main_workspace_workspace{
    width: 100%;
    background-color: #d1d1d1;
    padding: 10px;
}
</style>
