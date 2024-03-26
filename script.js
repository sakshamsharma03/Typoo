const typingText=document.querySelector(" .typing-text p");
const inp=document.querySelector(" .wrapper .input-fielf");
const time = document.querySelector(" .time span b");
const msitakes =document.querySelector(" .mistake span");
const wpm =document.querySelector(" .wpn span");
const cpm= document.querySelector(" .cpm span");
const btn = document.querySelector("button");
const ta= document.querySelector(" .tryagain");

let timer;
let maxTime=60;
let timeLeft =maxTime;
let charIndex=0;
let mistakes=0;
let isTyping=false;
 

function LoadParagraph()
{
    const paragraph =["The old man sat on the park bench, watching the children play. He smiled as he remembered when hewas young and carefree. He had spent many happy hours playing in this park, just like these children."];
    
    const randomIndex = Math.floor(Math.random() *paragraph.length);
    typingText.innerHTML=" ";
    for(const char of paragraph[randomIndex])
    {
       console.log(char);
        typingText.innerHTML+= `<span>${char}</span>`;
    }
    typingText.querySelectorAll("span")[0].classList.add("active");
};

LoadParagraph();


/*function initTyping ()
{
    console.log("chlra hai ");
 const char=typingText.querySelectorAll("span");
 const typechar= inp.value.charAt(charIndex);

 if(charIndex < char.length && timeLeft>0 )
 {
    if(char[charIndex].innerText===typechar)
    {
        char[charIndex].classList.add("correct");
        console.log("Correct");
    }
    else{
        char[charIndex].classList.add("incorrect");
        console.log("Correct");
    }
    charIndex++;
 }
 else{

 }
}*/

inp.addEventListener("input", ()=>
{
   
    const char=typingText.querySelectorAll("span");
    const typechar= inp.value.charAt(charIndex);
   
    if(charIndex < char.length && timeLeft>0 )
    {
       if(char[charIndex].innerText===typechar)
       {
           char[charIndex].classList.add("correct");
           console.log("Correct");
       }
       else{
           mistakes++;
           char[charIndex].classList.add("incorrect");
           console.log("inCorrect");
       }
       charIndex++;
    }
    else{
   
    }
});

ta.addEventListener("click",()=>
{
    window.location.reload();
})