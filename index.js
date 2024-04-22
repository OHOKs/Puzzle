let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let counter = 0;
let starttime = 0;

function createKocka(szam, id){
    let a = document.createElement("div");
    a.id = id;
    a.className = "kocka";
    a.innerHTML = szam;
    a.addEventListener("click", Click)
    return a;
}

function Start(){
    let currentPosY = 1;
    let currentPosX = 1
    let currentId = 1;
    const asdasd = numbers.sort((a, b) => 0.5 - Math.random());

    for(let i = 0; i <= 14; i++){
        let num = asdasd[i];
        document.getElementById(`${currentPosY}x${currentPosX}`).appendChild(createKocka(num, num))
        
        if(currentPosX != 4){currentPosX++}
        else{
            currentPosY++
            currentPosX = 1;
        }
    }

    starttime = Date.now();
    document.getElementById("SB").disabled = true;
}

function checkRight(pos, opos){
    let currentPosY = pos.split('x')[0];
    let currentPosX = pos.split('x')[1];

    if(document.getElementById(`${currentPosY}x${currentPosX}`).innerHTML == 0){
      let a = document.getElementById(`${opos.split('x')[0]}x${opos.split('x')[1]}`).childNodes[0]
      document.getElementById(`${currentPosY}x${currentPosX}`).appendChild(a)
    }
}
function checkLeft(pos, opos){
    let currentPosY = pos.split('x')[0];
    let currentPosX = pos.split('x')[1];

    if(document.getElementById(`${currentPosY}x${currentPosX}`).innerHTML == 0){
      let a = document.getElementById(`${opos.split('x')[0]}x${opos.split('x')[1]}`).childNodes[0]
      document.getElementById(`${currentPosY}x${currentPosX}`).appendChild(a)
    }
}
function checkUp(pos, opos){
    let currentPosY = pos.split('x')[0];
    let currentPosX = pos.split('x')[1];

    if(document.getElementById(`${currentPosY}x${currentPosX}`).innerHTML == 0){
      let a = document.getElementById(`${opos.split('x')[0]}x${opos.split('x')[1]}`).childNodes[0]
      document.getElementById(`${currentPosY}x${currentPosX}`).appendChild(a)
    }
}
function checkDown(pos, opos){
    let currentPosY = pos.split('x')[0];
    let currentPosX = pos.split('x')[1];
    
    if(document.getElementById(`${currentPosY}x${currentPosX}`).innerHTML == 0){
      let a = document.getElementById(`${opos.split('x')[0]}x${opos.split('x')[1]}`).childNodes[0]
      document.getElementById(`${currentPosY}x${currentPosX}`).appendChild(a)
    }
}

function ellenorzes(){
  let a = document.getElementById("1x1").childNodes[0].id == 1
  let b = document.getElementById("1x2").childNodes[0].id == 2
  let c = document.getElementById("1x3").childNodes[0].id == 3
  let d = document.getElementById("1x4").childNodes[0].id == 4
  let e = document.getElementById("2x1").childNodes[0].id == 5
  let f = document.getElementById("2x2").childNodes[0].id == 6
  let g = document.getElementById("2x3").childNodes[0].id == 7
  let h = document.getElementById("2x4").childNodes[0].id == 8
  let i = document.getElementById("3x1").childNodes[0].id == 9
  let j = document.getElementById("3x2").childNodes[0].id == 10
  let k = document.getElementById("3x3").childNodes[0].id == 11
  let l = document.getElementById("3x4").childNodes[0].id == 12
  let m = document.getElementById("4x1").childNodes[0].id == 13
  let n = document.getElementById("4x2").childNodes[0].id == 14
  let ny = document.getElementById("4x3").childNodes[0].id == 15

    if(a && b && c && d && e && f && g && h && i && j && k && l && m && n && ny){
        elteltIdo = new Date( Date.now() - starttime)
        alert(`nyertel, ${counter} kattintas, 
        ${elteltIdo.getHours() - 1} ora 
        ${elteltIdo.getMinutes()} perc 
        ${elteltIdo.getSeconds()} masodperc`)
    document.getElementById("tablee").disabled = true
  }
}

function Click(){
    counter++;
    
    let currentPosY = this.parentNode.id.split('x')[0];
    let currentPosX = this.parentNode.id.split('x')[1];
    let currentId = this.id;

    if(currentPosX == 1){
      checkRight(`${currentPosY}x${Number(currentPosX)+1}`,`${currentPosY}x${currentPosX}`)

      if(currentPosY == 1){ checkDown(`${Number(currentPosY)+1}x${currentPosX}`,`${currentPosY}x${currentPosX}`) }
      else if(currentPosY == 4){ checkUp(`${Number(currentPosY)-1}x${currentPosX}`,`${currentPosY}x${currentPosX}`) }
      else {
        checkUp(`${Number(currentPosY)-1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)
        checkDown(`${Number(currentPosY)+1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)
      }
    }
    else if(currentPosX == 4){
      checkLeft(`${currentPosY}x${Number(currentPosX)-1}`,`${currentPosY}x${currentPosX}`)

      if(currentPosY == 1){ checkDown(`${Number(currentPosY)+1}x${currentPosX}`,`${currentPosY}x${currentPosX}`) }
      else if(currentPosY == 4){ checkUp(`${Number(currentPosY)-1}x${currentPosX}`,`${currentPosY}x${currentPosX}`) }
      else {
        checkUp(`${Number(currentPosY)-1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)
        checkDown(`${Number(currentPosY)+1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)
      }
    }
    else if(currentPosY == 1){
      checkDown(`${Number(currentPosY)+1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)

      if(currentPosX == 1){ checkLeft(`${currentPosY}x${Number(currentPosX)-1}`,`${currentPosY}x${currentPosX}`) }
      else if(currentPosX == 4){ checkRight(`${currentPosY}x${Number(currentPosX)+1}`,`${currentPosY}x${currentPosX}`) }
      else {
        checkLeft(`${currentPosY}x${Number(currentPosX)-1}`,`${currentPosY}x${currentPosX}`)
        checkRight(`${currentPosY}x${Number(currentPosX)+1}`,`${currentPosY}x${currentPosX}`)
      }
    }
    else if(currentPosY == 4){
      checkUp(`${Number(currentPosY)-1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)

      if(currentPosX == 1){ checkLeft(`${currentPosY}x${Number(currentPosX)-1}`,`${currentPosY}x${currentPosX}`) }
      else if(currentPosX == 4){ checkRight(`${currentPosY}x${Number(currentPosX)+1}`,`${currentPosY}x${currentPosX}`) }
      else {
        checkLeft(`${currentPosY}x${Number(currentPosX)-1}`,`${currentPosY}x${currentPosX}`)
        checkRight(`${currentPosY}x${Number(currentPosX)+1}`,`${currentPosY}x${currentPosX}`)
      }
    }
    else{
        checkDown(`${Number(currentPosY)+1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)
        checkUp(`${Number(currentPosY)-1}x${currentPosX}`,`${currentPosY}x${currentPosX}`)
        checkLeft(`${currentPosY}x${Number(currentPosX)-1}`,`${currentPosY}x${currentPosX}`)
        checkRight(`${currentPosY}x${Number(currentPosX)+1}`,`${currentPosY}x${currentPosX}`)
    }

    ellenorzes()

}