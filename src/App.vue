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
    <p>Все права защищены мной епта;)</p>
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
  font-size: 25px;
  font-weight: 900;
}
</style>
