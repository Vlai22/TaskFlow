<script>

</script>

<template>
  <header>
    <img src="" alt="logo">
    <nav>
      <router-link to="/about">О нас</router-link>
      <router-link to="/login">Зарегистрироваться/войти</router-link>
      <router-link to="/work">Работать</router-link>
      <router-link to="/faq">FAQ</router-link>
    </nav>
  </header>
  <router-view />
  <footer>
    <p>Все права защищены мной епта;)</p>
  </footer>
</template>

<style scoped>
header{
  display: flex;
  background-color: #F5F5F5;
  justify-content: space-between;
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
  font-size: 25px;
  font-weight: 900;
}
</style>
