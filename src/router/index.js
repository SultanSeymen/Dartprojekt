import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Scoreboard from '../views/Scoreboard.vue'
import Games from '../views/Games.vue'
import Chat from '../views/Chat.vue'
import Startseite121 from '../components/Startseite121.vue'
import EinHundertEinUndZwanzig from '../components/EinHundertEinUndZwanzig.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: Scoreboard
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/games/Startseite121',
    name: 'Startseite121',
    component: Startseite121
  },
  {
    path: '/games/Startseite121/121',
    name: 'EinHundertEinUndZwanzig',
    component: EinHundertEinUndZwanzig
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
