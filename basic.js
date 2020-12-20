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

// aotu trave
// 0 = kanto, 1 = johto, 2 = heonn
var region = 2; 
var route_index = 0;
var r = Routes.regionRoutes.filter(routeData => routeData.region == 2);
function changeRoute() {
    MapHelper.moveToRoute(r[route_index].number, region);

    route_index += 1;
    if (route_index > r.length) {
        route_index = 0;
    }
    console.log(route_index);
}
setInterval(changeRoute, 1000 * 60 * 10);
setInterval(changeRoute, 1000 * 60 * 10)
