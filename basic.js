// reduce catch time
App.game.pokeballs.pokeballs[2].catchTime = 1;

// auto attack
window.setInterval(function(){
  Battle.clickAttack();
}, 20);

// auto hatch
var attackBonusPercent = 0;
function autohatch() {
     let ppp = undefined;
  if(App.game.breeding.queueList().length < App.game.breeding.queueSlots())
  {
   	ppp = App.game.party._caughtPokemon().find(p => (
      p.level === 100 && p._breeding() === false && p.evolutions == undefined && p.attackBonusPercent <= attackBonusPercent
    )); 
    if (ppp === undefined) {
        attackBonusPercent = attackBonusPercent + 25;
        console.log("add attackBonusPercent:" + attackBonusPercent);
    } else {
    console.log(ppp.id);
    App.game.breeding.addPokemonToHatchery(ppp);
    }  
  }
}

let autoHatchId = setInterval(autohatch, 3000);
