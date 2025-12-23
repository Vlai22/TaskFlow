<script>
import CardHomePage from '@/components/UI/CardHomePage.vue';
export default {
    components:{
        CardHomePage
    },
    data() {
      return {
        isInViewport: false,
        observer: null,
        cards:[
            {
                id: 'first_card_home_page',
                title: 'Настройте свой день',
                text: 'С TaskFlow вы можете легко создавать, редактировать и отслеживать задачи. Система уведомлений поможет вам не упустить ничего важного.'

            },{
                id: 'second_card_home_page',
                title: 'Управляйте задачами с легкостью',
                text: 'С TaskFlow вы можете легко создавать, редактировать и отслеживать задачи. Система уведомлений поможет вам не упустить ничего важного.'

            },{
                id: 'tride_card_home_page',
                title: 'Оставайтесь на связи',
                text: 'TaskFlow предлагает встроенные инструменты для общения с командой. Обменивайтесь сообщениями, файлами и обновлениями в реальном времени.'

            },{
                id: 'fourst_card_home_page',
                title: 'Доступен везде',
                text: 'TaskFlow доступен на всех ваших устройствах — компьютере, смартфоне и планшете. Планируйте и управляйте задачами в любое время и в любом месте.'

            },{
                id: 'fifts_card_home_page',
                title: 'Ваши данные в безопасности',
                text: 'Мы используем современные методы шифрования и защиты данных, чтобы обеспечить безопасность вашей информации. Ваши данные всегда под защитой.'

            }
            
        ]
      }
    },
    mounted() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            this.isInViewport = entry.isIntersecting
          })
        },
        {
          threshold: 0.1
        }
      )
      
      this.observer.observe(document.getElementById("first_section_home_page"));
    },
    beforeUnmount() {
      if (this.observer) {
        this.observer.disconnect()
      }
    }
}
</script>

<template>
    <main>
        <section id="first_section_home_page" :class="{'visible': isInViewport}" class="section_hello">
            <h1>Добро пожаловать в мир TaskFlow!</h1>
            <div>
                <p class="section_hello_message">Планируйте, управляйте и достигайте с легкостью.</p>
                <p class="section_hello_message rigth">Создавайте идеальный распорядок дня.</p>
                <p class="section_hello_message">Начните свой путь к успеху уже сегодня.</p>
            </div>
        </section>
        <section id="second_section_home_page"  class="section_adveantes">
            <CardHomePage v-for="card in cards" :key="card.id" :text="card.text">{{ card.title }}</CardHomePage>
        </section>
    </main>
</template>

<style scoped>
section{
    box-shadow: 5px 0 10px  #3f81a05b,
                -5px 0 10px #3f81a05b;
  clip-path: inset(10px -10px 10px -10px);
}
.section_hello {
    width: 70%;
    height: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: opacity 2s;
    opacity: 0%;
}
.section_hello.visible{
    opacity: 100%;
}
.section_hello div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.section_hello h1 {
    font-size: 30px;
    font-weight: 900;
}
.section_hello_message {
    text-align: left;
    width: 400px;
    background-color: #3f81a05b;
    font-size: 26px;
    font-weight: 400;
    border-radius: 40px;
    padding: 20px;  
}
.rigth{
    align-self: flex-end;
}
.section_adveantes{
    width: 70%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
}
</style>
