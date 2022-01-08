<template>
    <div class="121">
        <div id="ueberschrift">
            <h1>Game: 121-170</h1>
        </div>
        <div class="container">
            <div id="checkpointLabel">
                <label id="">Nach jedem geschafften Score ein Checkpoint setzen?</label>
            </div>
            <div id="jaNein">
                <input type="radio" name="checkpointRadio" id="jaRadio" value="Ja">
                <label for="jaRadio">Ja</label>
                <input type="radio" name="checkpointRadio" id="neinRadio" value="Nein">
                <label for="neinRadio">Nein, nur wenn ich mit 3 Darts checke</label>
            </div>
            <div id="scoreLabel">
                <label for="">Wo möchtest du beginnen?</label>
            </div>
            <div id="scoreAnfang">
                <input type="number" v-model="scoreBeginn" id="scoreBeginn" placeholder="Score" min="121" max="170"> 
            </div>
            <div id="dartsversucheLabel">
                <label for="">Wie viele Darts pro Versuch?</label>
            </div>
            <div id="dartsVersuche">
                <input type="radio" name="anzahlDarts" id="3Darts" value="3">
                <label for="3Darts">3</label>
                <input type="radio" name="anzahlDarts" id="6Darts" value="6">
                <label for="6Darts">6</label>
                <input type="radio" name="anzahlDarts" id="9Darts" value="9">
                <label for="9Darts">9</label>
                <input type="radio" name="anzahlDarts" id="12Darts" value="12">
                <label for="12Darts">12</label>
            </div>
            <div id="spielen">
                <router-link to="/games/Startseite121/121">Spielen</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import EinHundertEinUndZwanzig from '../components/EinHundertEinUndZwanzig.vue'

const scoreBeginn = '';

export default {
  name: 'Startseite121',
  components: {
    EinHundertEinUndZwanzig
  },
  data() {
      return{
        scoreBeginn: scoreBeginn 
      }
  }
}

</script>

<style>
.container{
  border: 1.5px solid #1B1B1A;
  background-color: #1B1B1A;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  flex-direction: column;
}

#fragenContainer{
    height: 1000px;
}

#checkpointLabel, #scoreLabel, #dartsversucheLabel{
    margin-top: 40px;
}

input{
    color: #1B1B1A;
}

label{
    font-size: medium;
}

#jaNein, #scoreAnfang, #dartsVersuche{
    margin: 10px 0 20px 0;
}

#spielen{
    margin-top: -10px;
    margin-bottom: 10px;
}

</style>