<script>
import Button from '@/components/UI/Button.vue';
import CardHomePage from '@/components/UI/CardHomePage.vue';
import Input from '@/components/UI/Input.vue';

export default {
    components: {
        CardHomePage, Input, Button
    },
    data() {
        return {
            isInViewport: false,
            observers: [], 
            observer: null,
            Loginis: true,
            Login_click: false,
            isError:{
                display: 'none',
            },
            error_form: 'test',
            cards: [
                {
                    id: 'first_card_home_page',
                    title: 'Настройте свой день',
                    text: 'С TaskFlow вы можете легко создавать, редактировать и отслеживать задачи. Система уведомлений поможет вам не упустить ничего важного.',
                    rigth: false,
                    visible: false,
                    img: ''
                },
                {
                    id: 'second_card_home_page',
                    title: 'Управляйте задачами с легкостью',
                    text: 'Используйте интуитивный интерфейс для управления вашими задачами. Драг-энд-дроп, фильтры и теги помогут организовать работу.',
                    rigth: true,
                    visible: false,
                    img: ''
                },
                {
                    id: 'third_card_home_page',  // Исправлено
                    title: 'Оставайтесь на связи',
                    text: 'TaskFlow предлагает встроенные инструменты для общения с командой. Обменивайтесь сообщениями, файлами и обновлениями в реальном времени.',
                    rigth: false,
                    visible: false,
                    img: ''
                },
                {
                    id: 'fourth_card_home_page',
                    title: 'Доступен везде',
                    text: 'TaskFlow доступен на всех ваших устройствах — компьютере, смартфоне и планшете. Планируйте и управляйте задачами в любое время и в любом месте.',
                    rigth: true,
                    visible: false,
                    img: ''
                },
                {
                    id: 'fifth_card_home_page',
                    title: 'Ваши данные в безопасности',
                    text: 'Мы используем современные методы шифрования и защиты данных, чтобы обеспечить безопасность вашей информации. Ваши данные всегда под защитой.',
                    rigth: false,
                    visible: false,
                    img: ''
                }
            ]
        };
    },
    mounted() {
        // Создаем один наблюдатель для всех элементов
        this.observer = new IntersectionObserver(
            (entries) => {//все элементы перечисляем
                entries.forEach(entry => {
                    this.isInViewport = entry.isIntersecting;
                });
            },
            {
                threshold: 0.1,//поцегь видимости 
            }
        );
        // Наблюдаем за секцией
        let sectionElement = document.getElementById('first_section_home_page');
        this.observer.observe(sectionElement);
        this.$data.cards.forEach(card =>{
            let cardobjerver = new IntersectionObserver(
                (entries)=>{
                    entries.forEach(entry =>{
                        let targetId = entry.target.id;
                        if(targetId == card.id){
                            card.visible = entry.isIntersecting;
                        }
                    });
                },
                {
                    threshold: 0.1,//процент видимости обхекта
                }
            );
            cardobjerver.observe(document.getElementById(card.id));//добавление элемента наблюдения
            this.observers.push(cardobjerver);//добавление наблюдателя в список наблюдателеей
        });
    },
    beforeUnmount() {
        // Отключаем наблюдатель
        if (this.observer) {
            this.observer.disconnect();
        }
        this.observers.forEach(cardobserver => {
            cardobserver.disconnect();
        });
    },
    methods:{
        onClickLogin(){
            if(this.Loginis){
                document.getElementById('tride_section_login_form_login').style.marginLeft = '-' + String(document.getElementById('tride_section_login_form_login').getBoundingClientRect().width + 20) + 'px';
            }else{
                document.getElementById('tride_section_login_form_login').style.marginLeft = '0px';
            }
            this.Loginis = !this.Loginis;
        },
        Login(){
            if(this.Login_click){

            }else{

            }
        },
        OpenWork(){
            this.$router.push('/work');
        }
    }
};
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
        <section id="second_section_home_page" class="section_adveantes">
            <h2>Нащи преимущества</h2>
            <CardHomePage v-for="card in cards" :img="card.img" :key="card.id" :id="card.id" :rigth="card.rigth" :visible="card.visible" :text="card.text">{{ card.title }}</CardHomePage>
        </section>
        <section id="tride_section_login" class="section_login">
            <h2>Зарегистрируйся или войди в свой аккаунт</h2>
            <div class="section_login_button_singUp_Login">
                    <button @click="onClickLogin()" class="section_login_button_singUp_Login_button" :class="{'active': Loginis}">Login</button>        
                    <button @click="onClickLogin()" class="section_login_button_singUp_Login_button" :class="{'active': !Loginis}">Sing Up</button>        
            </div>
            <form  @submit.prevent="Login()">
                    <div id="tride_section_login_form_login">
                        <Input :id="'form_login_name'"  :placeholder="'Введите почту или логин аккаунта'">Ваш логин:</Input>
                        <Input :id="'form_login_name'" :type="'password'" :placeholder="'Введите пароль'">Ваш пароль:</Input>
                        <p :style="isError" id="tride_section_login_form_login_error">{{ error_form }}</p>
                        <Button @click="Login_click = true" type="submit">Войти</Button>
                    </div>
                    <div id="tride_section_login_form_singUp">
                        <Input :id="'form_login_name'"  :placeholder="'Введите логин аккаунта'">Логин:</Input>
                        <Input :id="'form_login_name'" :type="'password'" :placeholder="'Введите почту'">Электронная почта:</Input>
                        <Input :id="'form_login_name'" :type="'password'" :placeholder="'Необязательно!'">Компания:</Input>
                        <Input :id="'form_login_name'" :type="'password'" :placeholder="'Введите почту или логин аккаунта'">Пароль:</Input>
                        <Input :id="'form_login_name'" :type="'password'" :placeholder="'Введите почту или логин аккаунта'">Подтвердить пароль:</Input>
                        <p :style="isError" id="tride_section_login_form_singUp_error">{{ error_form }}</p>
                        <Button @click="Login_click = true">Зарегестрироваться</Button>
                    </div>
            </form>
        </section>
        <section class="fourth_section_open_app">
            <h2>Если не хочекшь регистрироваться или входить модно просто войти</h2>
            <Button @click="OpenWork()">Войти без регестрации</Button>
            <p>P.S. после входа без регистрации у вас откроется приложение но если вы перезагрузите страницу то все изменения вероятно сбросяться!!!</p>
        </section>
    </main>
</template>

<style scoped>
section{
    box-shadow: 5px 0 10px  #3f81a05b,
                -5px 0 10px #3f81a05b;
    clip-path: inset(10px -10px 10px -10px);
    width: 70%;
}
h2{
    font-size: 34px;
}
.section_hello {
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
    font-size: 34px;
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
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
}
.section_adveantes h2{
    align-self: center;
}
.section_login{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.section_login form{
    width: 800px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
}
.section_login div{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.section_login p{
    margin: 20px;
    color: red;
}
.section_login_button_singUp_Login{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.section_login_button_singUp_Login_button{
    height: 50px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-weight: 900;
    color: #3f81a0;
    margin: 20px;
}
.section_login_button_singUp_Login_button.active{
    border-bottom: 4px solid #3f81a0;
}
#tride_section_login_form_login{
    min-width: 800px;
    display: flex;
    margin: 20px;
    flex-direction: column;
}
#tride_section_login_form_singUp{
    min-width: 800px;
    display: flex;
    flex-direction: column;

}
.fourth_section_open_app{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.fourth_section_open_app p{
    width: 400px;
    font-size: 16px;
    color: #a2a2a2;
}
</style>
