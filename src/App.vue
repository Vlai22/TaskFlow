<script>

</script>

<template>
  <header>
    <router-link style="margin: 0;" to="/"><img src="/logo.svg" alt="logo"></router-link>
    <nav>
      <router-link to="/about">О нас</router-link>
      <router-link to="/login">Зарегистрироваться/войти</router-link>
      <router-link to="/work">Работать</router-link>
      <router-link to="/faq">FAQ</router-link>
    </nav>
  </header>
  <router-view />
  <footer>
    <div>
      <router-link style="margin: 0;" to="/"><img src="/logo.svg" alt="logo"></router-link>
      <p>© 2025 TaskFlow. Все права защищены.</p>
    </div>
    <div class="footer_second_box">
      <p>Именования компании: ИП Черков Влад Александрович</p>
      <p>Телефон: 8 918 328 10 90</p>
      <p>На данный момент данный сайт не несёт в себе никакой полезной назгрузки и номера телефона и другая информация может быть внесена ошибочно по этому не доваряйте этому сайту!!! Также данный сайт на данный момент находиться на этапе разработки по этому имя, компания, номер и другая ифнормация может меняться!!</p>
    </div>
    <div class="footer_tride_box">
      <router-link to="/about">О нас</router-link>
      <router-link to="/login">Зарегистрироваться/войти</router-link>
      <router-link to="/work">Работать</router-link>
      <router-link to="/faq">FAQ</router-link>
    </div>
  </footer>
</template>

<style scoped>
header{
  display: flex;
  background-image: linear-gradient(140deg, #5480b0 30%, #E6F7FF 34%);
  justify-content: space-between;
  align-items: center;
}
img{
  width: 200px;
  height: 70px;
  margin: 30px;
}
a{
  color: #6C7A89;
  text-decoration: none;
  margin: 20px;
  font-size: 20px;
  font-weight: 700;
  transition: color 0.5s;
}
a:hover{
  color: #6a94c0;
}
footer{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: linear-gradient(140deg, #5480b0 30%, #E6F7FF 34%);
}
footer p{
  margin-top: -30px;
  margin-left: 50px;
  font-size: 20px;
}
.footer_second_box{
  width: 600px;
  margin: 20px;
}
.footer_second_box p{
  margin: 20px;
}
.footer_tride_box{
  display: flex;
  flex-direction: column;
}
</style>
