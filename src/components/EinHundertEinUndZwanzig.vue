<template>
    <div class="121">
        <div id="ueberschrift">
            <h1>Game: 121-170</h1>
        </div>
        <div class="container">
            <div id="throwWay">
                <label for="">D25 - D25 - D16</label>
            </div>
            <div id="leftScore">
                <label for="">{{ scoreBeginn }}</label>
            </div>
            <div id="scoreInput">
                <form action="#" method="post">
                    Score: <input name="score" type="number" min="0" max="180" step="1" onkeypress='return event.charCode >= 48 && event.charCode <= 57' title="Numbers only">
                </form>
            </div>
            <div id="submit">
                <button type="submit">Eingeben</button>
            </div>
        </div>
    </div>
</template>

<script>
import Startseite121 from "./Startseite121.vue"


const scoreBeginn = Startseite121.getScore();

let array =
[
    { id: 2, checkout: 'D1' },
    { id: 3, checkout: 'S1 D1' },
    { id: 4, checkout: 'D2' },
    { id: 5, checkout: 'S1 D2' },
    { id: 6, checkout: 'D3' },
    { id: 7, checkout: 'S3 D2' },
    { id: 8, checkout: 'D4' },
    { id: 9, checkout: 'S1 D4' },
    { id: 10, checkout: 'D5' },
    { id: 11, checkout: 'S3 D4' },
    { id: 12, checkout: 'D6' },
    { id: 13, checkout: 'S5 D4' },
    { id: 14, checkout: 'D7' },
    { id: 15, checkout: 'S7 D4' },
    { id: 16, checkout: 'D8' },
    { id: 17, checkout: 'S1 D8' },
    { id: 18, checkout: 'D9' },
    { id: 19, checkout: 'S3 D8' },
    { id: 20, checkout: 'D10' },
    { id: 21, checkout: 'S5 D8' },
    { id: 22, checkout: 'D11' },
    { id: 23, checkout: 'S7 D8' },
    { id: 24, checkout: 'D12' },
    { id: 25, checkout: 'S9 D8' },
    { id: 26, checkout: 'D13' },
    { id: 27, checkout: 'S11 D8' },
    { id: 28, checkout: 'D14' },
    { id: 29, checkout: 'S13 D8' },
    { id: 30, checkout: 'D15' },
    { id: 31, checkout: 'S15 D8' },
    { id: 32, checkout: 'D16' },
    { id: 33, checkout: 'S1 D16' },
    { id: 34, checkout: 'D17' },
    { id: 35, checkout: 'S3 D16' },
    { id: 36, checkout: 'D18' },
    { id: 37, checkout: 'S5 D16' },
    { id: 38, checkout: 'D19' },
    { id: 39, checkout: 'S7 D16' },
    { id: 40, checkout: 'D20' },
    { id: 41, checkout: 'S9 D16' },
    { id: 42, checkout: 'S10 D16' },
    { id: 43, checkout: 'S11 D16' },
    { id: 44, checkout: 'S12 D16' },
    { id: 45, checkout: 'S13 D16' },
    { id: 46, checkout: 'S14 D16' },
    { id: 47, checkout: 'S15 D16' },
    { id: 48, checkout: 'S16 D16' },
    { id: 49, checkout: 'S17 D16' },
    { id: 50, checkout: 'S18 D16' },
    { id: 51, checkout: 'S19 D16' },
    { id: 52, checkout: 'S20 D16' },
    { id: 53, checkout: 'S13 D20' },
    { id: 54, checkout: 'S14 D20' },
    { id: 55, checkout: 'S15 D20' },
    { id: 56, checkout: 'S16 D20' },
    { id: 57, checkout: 'S17 D20' },
    { id: 58, checkout: 'S18 D20' },
    { id: 59, checkout: 'S19 D20' },
    { id: 60, checkout: 'S20 D20' },
    { id: 61, checkout: 'T15 D8' },
    { id: 62, checkout: 'T10 D16' },
    { id: 63, checkout: 'T13 D12' },
    { id: 64, checkout: 'T16 D8' },
    { id: 65, checkout: 'T11 D16' },
    { id: 66, checkout: 'T10 D18' },
    { id: 67, checkout: 'T17 D8' },
    { id: 68, checkout: 'T20 D4' },
    { id: 69, checkout: 'T15 D12' },
    { id: 70, checkout: 'T18 D8' },
    { id: 71, checkout: 'T13 D16' },
    { id: 72, checkout: 'T16 D12' },
    { id: 73, checkout: 'T19 D8' },
    { id: 74, checkout: 'T14 D16' },
    { id: 75, checkout: 'T17 D12' },
    { id: 76, checkout: 'T20 D8' },
    { id: 77, checkout: 'T19 D10' },
    { id: 78, checkout: 'T18 D12' },
    { id: 79, checkout: 'T19 D11' },
    { id: 80, checkout: 'T20 D10' },
    { id: 81, checkout: 'T19 D12' },
    { id: 82, checkout: 'D25 D16' },
    { id: 83, checkout: 'T17 D16' },
    { id: 84, checkout: 'T20 D12' },
    { id: 85, checkout: 'T15 D20' },
    { id: 86, checkout: 'T18 D16' },
    { id: 87, checkout: 'T17 D18' },
    { id: 88, checkout: 'T20 D14' },
    { id: 89, checkout: 'T19 D16' },
    { id: 90, checkout: 'T20 D15' },
    { id: 91, checkout: 'T17 D20' },
    { id: 92, checkout: 'T20 D16' },
    { id: 93, checkout: 'T19 D18' },
    { id: 94, checkout: 'T18 D20' },
    { id: 95, checkout: 'T19 D19' },
    { id: 96, checkout: 'T20 D18' },
    { id: 97, checkout: 'T19 D20' },
    { id: 98, checkout: 'T20 D19' },
    { id: 99, checkout: 'T19 S10 D16' },
    { id: 100, checkout: 'T20 D20' },
    { id: 101, checkout: 'TT20 S9 D16' },
    { id: 102, checkout: 'T20 S10 D16' },
    { id: 103, checkout: 'T19 S14 D16' },
    { id: 104, checkout: 'T18 S18 D16' },
    { id: 105, checkout: 'T20 S13 D16' },
    { id: 106, checkout: 'T20 S14 D16' },
    { id: 107, checkout: 'T19 S18 D16' },
    { id: 108, checkout: 'T20 S16 D16' },
    { id: 109, checkout: 'T20 S9 D20' },
    { id: 110, checkout: 'T20 S10 D20' },
    { id: 111, checkout: 'T20 S11 D20' },
    { id: 112, checkout: 'T20 S12 D20' },
    { id: 113, checkout: 'T19 S16 D20' },
    { id: 114, checkout: 'T20 S14 D20' },
    { id: 115, checkout: 'T20 S15 D20' },
    { id: 116, checkout: 'T20 S16 D20' },
    { id: 117, checkout: 'T20 S17 D20' },
    { id: 118, checkout: 'T20 S18 D20' },
    { id: 119, checkout: 'T19 T12 D13' },
    { id: 120, checkout: 'T20 S20 D20' },
    { id: 121, checkout: 'T20 T11 D14' },
    { id: 122, checkout: 'T18 T18 D7' },
    { id: 123, checkout: 'T19 T16 D9' },
    { id: 124, checkout: 'T20 T16 D8' },
    { id: 125, checkout: 'D25 T17 D12' },
    { id: 126, checkout: 'T19 T19 D6' },
    { id: 127, checkout: 'T20 T17 D8' },
    { id: 128, checkout: 'T18 T14 D16' },
    { id: 129, checkout: 'T19 T16 D12' },
    { id: 130, checkout: 'T20 T20 D5' },
    { id: 131, checkout: 'T20 T13 D16' },
    { id: 132, checkout: 'D25 T14 D20' },
    { id: 133, checkout: 'T20 T11 D20' },
    { id: 134, checkout: 'T20 T14 D16' },
    { id: 135, checkout: 'D25 T15 D20' },
    { id: 136, checkout: 'T20 T20 D8' },
    { id: 137, checkout: 'T20 T19 D10' },
    { id: 138, checkout: 'T20 T18 D12' },
    { id: 139, checkout: 'T19 T14 D20' },
    { id: 140, checkout: 'T20 T20 D10' },
    { id: 141, checkout: 'T20 T19 D12' },
    { id: 142, checkout: 'T18 T20 D14' },
    { id: 143, checkout: 'T20 T17 D16' },
    { id: 144, checkout: 'T20 T20 D12' },
    { id: 145, checkout: 'T20 T15 D20' },
    { id: 146, checkout: 'T19 T19 D16' },
    { id: 147, checkout: 'T20 T17 D18' },
    { id: 148, checkout: 'T18 T18 D20' },
    { id: 149, checkout: 'T20 T19 D16' },
    { id: 150, checkout: 'T19 T19 D18' },
    { id: 151, checkout: 'T20 T17 D20' },
    { id: 152, checkout: 'T20 T20 D16' },
    { id: 153, checkout: 'T20 T19 D18' },
    { id: 154, checkout: 'T19 T19 D20' },
    { id: 155, checkout: 'T20 T19 D19' },
    { id: 156, checkout: 'T20 T20 D18' },
    { id: 157, checkout: 'T20 T19 D20' },
    { id: 158, checkout: 'T20 T20 D19' },
    { id: 160, checkout: 'T20 T20 D20' },
    { id: 161, checkout: 'T20 T17 D25' },
    { id: 164, checkout: 'T19 T19 D25' },
    { id: 167, checkout: 'T20 T19 D25' },
    { id: 170, checkout: 'T20 T20 D25' }
]

</script>

<style>

</style>