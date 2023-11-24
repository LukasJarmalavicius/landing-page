const name = [ "Exo", "Knuck", "Darius", "Juerti", "Husbando", "Allmight", "Maz", "Viper", "Parth", "Earl", "Mochi", "Shad" ];
const rando = [ "isis", "league", "al queda", "albania", "sett", "terraria", "loan", "roblox", "allah", "hitler", "hoi4", "the bri'ish", "xin zhao", "the man behind the slaughter" ];
const greet = [ "Hello", "Greetings", "How's it going", "Yoooo", "The bite of 87", "RAAAAAAAH", "well well well", "sup fam", "ayo the pizza here" ];
const base = [ "name: greet nam2", "name: Guess what nam2 New rand just dropped", "name: damn nam2 rand just got nuked", "name: dribble dem balls nam2", "name: we makin' it out of rand with this one nam2" ];
const reply = [ "nam2: i woke up in a new bugatti", "nam2: you see name i destroyed your mother.", "nam2: Loser twerks oiled up and naked while doing some rand", "nam2: yes nigga", "nam2: no nigga", "nam2: perhaps", "nam2: kys", "nam2: stfu", "nam2: ok habibi", "nam2: devs must have had some mean ass zaza", "nam2: frfr", "nam2: ong fam" ];
const replyloop = [ "name: thats cool nam2 but what about", "name: how about", "name: what if", "name: maybe", "name: indeed my friend", "name: truly, without a doubt,", "name: ngl", "name: imo", "name: perhaps" ];
const SpecialDict = {}

SpecialDict["Exo"] = [ "nam2: im losing my mind making this shit", "nam2: why am i doing this to my self" ];
SpecialDict["Knuck"] = [ "nam2: i am currently not online as exo is making this", "nam2: i love wisp", "nam2: bravo vince for making this rand, truly the moment of all time." ];
SpecialDict["Husbando"] = [ "nam2: i love shantae" ];

function rand(max) {
  return Math.floor(Math.random() * max);
}
function replace(Word, namer, name2r, greetr, randr)
{
let ballin = {
  "name": namer,
  "nam2": name2r,
  "greet": greetr,
  "rand": randr
};

let word2 = Word.replace(/name|nam2|greet|rand/g, replacin => ballin[replacin]); 

return word2;
}

function randword(a, b) {
let c = a[rand(a.length - b)];
return c;
}

function test(count)
{

let basechosen = randword(base, 0);
let namechosen = randword(name, 0);
let namechosen2 = randword(name, 0);
let greetchosen = randword(greet, 0);
let randchosen = randword(rando, 0);
let replychosen = randword(reply, 0);
let replyloopchosen = randword(replyloop, 0); 

if (namechosen === namechosen2)
{
  namechosen2 = randword(name, 1);
}

if (SpecialDict[namechosen2]) {
  let sdecider = rand(2);
  if (sdecider == 1) {
    replychosen = SpecialDict[namechosen2][rand(SpecialDict[namechosen2].length)];
  }
}

response = replace(basechosen, namechosen, namechosen2, greetchosen, randchosen);
response2 = replace(replychosen, namechosen, namechosen2, greetchosen, randchosen);
responseloop = replace(replyloopchosen, namechosen, namechosen2, greetchosen, randchosen);
response3 = replace(replychosen = randword(reply, 0), namechosen2, namechosen, greetchosen, randchosen);


return response + "<br>" + response2 + "<br>" + responseloop + "<br>" + response3;

}
function myFunction() {
document.getElementById("demo").innerHTML = test(1);
}