var team1={
    name :"CSK",
    score:0,
    runs:[]
};
var team2={
    name :"MI",
    score:0,
    runs:[]
};

var score=[0,1,2,3,4,5,6]
console.log(team1)
console.log(team2)

var toss
window.onload=()=>{
selectToss();
updateName();
updateButton();
updateScores();
}

function selectToss()
{
    toss=Math.round(Math.random())+1
    console.log(toss)
}
function updateName()
{
    console.log("team1 name "+team1.name)
    console.log("team2 name "+team2.name)
}
function updateButton()
{
   console.log(`${toss===1?team1.name:team2.name} BATTING`);

   if(team1.runs.length==6 && team1.runs.length==6 )
   {
        console.log("Both team finished their chances")
   }
   else{
       toss=team1.runs.length === 6 ? 2:
       team2.runs.length === 6 ? 1 : toss;
   }
}

handlestrike=()=>{
    console.log("onclik works")
    var runs = score[Math.floor(Math.random()*score.length)]
    console.log(runs)
    if(toss==1){
        team1.runs.push(runs)
        console.log(runs)
        team1.score=calcScore(team1.runs)
    }
    else{
        team2.runs.push(runs)
        console.log(runs)
        team2.score=calcScore(team2.runs)
    }
    updateButton();
    updateScores();
}
function updateScores(){
    console.log("team1.score " + team1.score)
    console.log("team1.score " + team2.score)
}
var calcScore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}






