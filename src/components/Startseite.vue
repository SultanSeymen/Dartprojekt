<template>
  <div class="home">
    <h1>Home</h1>
    <div class="container" id="containerOne">
      <div class="linkerBereich">
        <div id="image">
          <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="180_1" width="500px" height="500px">
        </div>
      </div>
      <div id="vlContainerOne"></div>
      <div class="rechterBereich">
        <div id="ueberschrift">
          <h2>Intention</h2>
        </div>
        <div id="text">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</p>
        </div>
      </div>
    </div>

    <!-- Caroussel -->
    <div class="container" id="containerTwo">
      <div class="mittlererBereich">
        <div id="image">
          <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="Bildergalerie" width="500px" height="500px">
        </div>
      </div>
    </div>

    <!-- Challenges -->
    <div class="container" id="containerThree">
      <div class="mittlererBereich">
        <div id="image">
          <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="Challenges Bild zum anklicken" width="500px" height="500px">
        </div>
      </div>
    </div>

    <div class="container" id="containerFour">
      <div class="mittlererBereich" id="topGamesMittlererBereich">
        <div id="ueberschriftTopGames">
          <h2>Popular Games</h2>
        </div>
        <div id="topGames">
          <div class= "games" id="gameOne">
            <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="Popular Game 1" width="100px" height="100px">
          </div>
          <div class="vl"></div>
          <div class= "games" id="gameTwo">
            <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="Popular Game 2" width="100px" height="100px">
          </div>
          <div class="vl"></div>
          <div class= "games" id="gameThree">
            <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="Popular Game 3" width="100px" height="100px">
          </div>
          <div class="vl"></div>
          <div class= "games" id="gameFour">
            <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="Popular Game 4" width="100px" height="100px">
          </div>
          <div class="vl"></div>
          <div class= "games" id="gameFive">
            <img src="D:\VS Workspace\dart-app\src\assets\180_1.jpg" alt="Popular Game 5" width="100px" height="100px">
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container" id="containerFive">
      <div class="mittlererBereich" id="kontaktFormular">
        <div id="ueberschriftKontakFormular">
          <h2>Kontakt</h2>
        </div>
        <div id="zweiterBereich">
          <div id="nameKontaktFormular">
            <textarea name="name" id="name" cols="30" rows="2" maxlength="15" placeholder="Name"></textarea>
          </div>
          <div id="emailKontaktFormular">
            <input type="email" id="email" placeholder="E-Mail">
          </div>
        </div>
        <div id="textfeldKontakFormular">
          <textarea name="textfeld" id="textfeld" cols="100" rows="30" maxlength="250"></textarea>
        </div>
      </div>
    </div> -->
  </div>

  <footer>
    <div id="footer">
      <button>Impressum</button>
      <button>Datenschutz</button>
      <button>Kontakt</button>
    </div>   
  </footer>
</template>

<script>

</script>

<style>
*{
  color: white;
}

body{
  background: #0F0F0E;
  display: block;
}
.container{
  border: 1.5px solid #1B1B1A;
  background-color: #1B1B1A;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
}

h1{
  display: flex;
  align-items: center;
  justify-content: center;
}

#containerOne{
  flex-direction: row;
}

.linkerBereich{
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 750px;
  height: 500px;
}

.rechterBereich{
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 750px;
  height: 500px;
}

#text{
  text-align: justify;
	text-align-last: none;
  margin: 0 10px 0 10px;
}

#containerTwo, #containerThree, #containerFour, #containerFive{
  margin-top: 20px ;
}

.mittlererBereich{
  /* border: 1px brown solid; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 750px;
  height: 500px;
}

#topGames{
  border: 1.5px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 700px;
  height: 250px;
  margin-top: 20px;
  overflow-x: auto;
}

.games{
  margin-right: 5px;
}

.vl {
  border-left: 1.5px solid #333333;
  height: 250px;
}

#vlContainerOne{
  border-left: 1.5px solid #333333;
  height: 500px;
}

/* #ueberschrift, #text, #image{
border: 2px solid yellow;
} */

#topGamesMittlererBereich, #kontaktFormular{
  flex-direction: column;
}

/* #containerFive{
  height: 1000px;
}

textarea, input{
  background-color: #1B1B1A;
  border-color: #333333;
  resize: none;
}

#ueberschriftKontakFormular{
  display: flex;
  align-items: center;
  justify-content: center;

}

#zweiterBereich{
  display: flex;
  flex-direction: row;
}

 #nameKontaktFormular, #emailKontaktFormular{
   margin: 0 5px 0 5px;
 } */

#footer{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}

button{
  background: none;
  border: none;
  padding: 40px 10px 20px 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: medium;
}
</style>