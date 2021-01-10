let GameOver=0
const allbtn =[]
const btns =document.querySelectorAll(".l-div button")
for(const btn of btns ){
    allbtn.push(btn)
}
const btn_delete=document.querySelector("#btn-delete")
const Div_winner =document.querySelector("#Div-winner")
const Div_GameOver =document.querySelector("#Div-GameOver")
const div1 = document.querySelector("#bg-div1")
const div2 = document.querySelector("#bg-div2")
const div3 = document.querySelector("#bg-div3")
const m_div = document.querySelector(".m-div")
const l_div = document.querySelector(".l-div")
const arrBigDiv =[div1,div2,div3]
for (let i = 0; i < arrBigDiv.length; i++) {
    arrBigDiv[i].classList.add("bg-divhedden")
}
Div_winner.classList.add("bg-divhedden")
Div_GameOver.classList.add("bg-divhedden")
let btnschange0 =document.querySelectorAll("#bg-div1 .btn-dark")
let btnschange1 =document.querySelectorAll("#bg-div2 .btn-dark")
let btnschange2 =document.querySelectorAll("#bg-div3 .btn-dark")
let ran =Math.random()*3
ran=Math.floor(ran)
arrBigDiv[ran].classList.remove("bg-divhedden")
ifs()
function ifs(){
    if(ran==0){
        allbtnchange =[]
        for(const btn of btnschange0 ){
            allbtnchange.push(btn)
        }
    }
    else if(ran==1){
        allbtnchange =[]
        for(const btn of btnschange1 ){
            allbtnchange.push(btn)
        }
    }
    else{
        allbtnchange =[]
        for(const btn of btnschange2 ){
            allbtnchange.push(btn)
        }
    }
}
let btnSlected
let btnNum

const btnNewgame = document.querySelector("#btn-Newgame");
btnNewgame.addEventListener('click',getNewGame)
function getNewGame(event){
    for (let i = 0; i < arrBigDiv.length; i++) {
        arrBigDiv[i].classList.add("bg-divhedden")
    }
    let ranfu =Math.random()*3
    ranfu=Math.floor(ranfu) 
    arrBigDiv[ranfu].classList.remove("bg-divhedden")
    ran=ranfu
    ifs()
    Div_winner.classList.add("bg-divhedden")
    Div_GameOver.classList.add("bg-divhedden")
    m_div.classList.remove("bg-divhedden")
    l_div.classList.remove("bg-divhedden")
    Start_OR_Continue_game ()   
}
function Start_OR_Continue_game  (){
    for (let i = 0; i < allbtnchange.length; i++) {
        allbtnchange[i].addEventListener('click',setvaluo)
    }
    
    for (let i = 0; i < allbtn.length; i++) {
        allbtn[i].addEventListener('click',setNum)
    }
    btn_delete.addEventListener('click',del_item)

    
}
Start_OR_Continue_game()
function setvaluo(evet){
    btnSlected =this
}

function setNum(event){
    btnNum=this
    document.dispatchEvent(new CustomEvent("set-value"))
}
document.addEventListener("set-value",finalSet);
function finalSet(event) {
    if(btnNum.textContent==parseInt(btnSlected.dataset.index)){
        btnSlected.textContent=btnNum.textContent
        btnSlected.classList.remove("btn-danger")
        btnSlected.classList.remove("btn-dark")
        btnSlected.classList.add("btn-primary")
        winner()
    }
    else{
        btnSlected.classList.remove("btn-dark")
        btnSlected.classList.add("btn-danger")
        btnSlected.textContent=btnNum.textContent
        GameOver+=1
        if(GameOver==4){
            GameOver_img()
        }
    }
}
function del_item(event){
    btnSlected.textContent="?"
    btnSlected.classList.remove("btn-danger")
    btnSlected.classList.add("btn-dark")
    btnSlected.classList.remove("btn-primary")
}
function winner(){
    let v=0
    for (let i = 0; i < allbtnchange.length; i++) {
        
        if(allbtnchange[i].textContent==parseInt(allbtnchange[i].dataset.index)){
            v=v+1
        }
        else{
            break
        }
    }
    if(v==allbtnchange.length){
        Div_winner.classList.remove("bg-divhedden")
        arrBigDiv[ran].classList.add("bg-divhedden")
        m_div.classList.add("bg-divhedden")
        l_div.classList.add("bg-divhedden")
    }
}
function GameOver_img(){
        Div_GameOver.classList.remove("bg-divhedden")
        arrBigDiv[ran].classList.add("bg-divhedden")
        m_div.classList.add("bg-divhedden")
        l_div.classList.add("bg-divhedden")
}