<template>
  <div id="nav">
    <router-link to="/home" style="padding-right: 10px">Home</router-link>
    <router-link to="/games" style="padding-right: 10px">Games</router-link>
    <router-link to="/scoreboard" style="padding-right: 10px">Scoreboard</router-link>
    <router-link to="/chat">Chat</router-link>
  </div>
  <router-view/>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

#nav{
  align-items: center;
  justify-content: center;
}
</style>
