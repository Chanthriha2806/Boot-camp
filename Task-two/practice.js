const con = document.getElementById('container')
const arr=["./movie1.jpg","./movie2.jpg","./movie3.jpg","./movie4.jpg"]
//text data
const titles=["The panda family","Taylor launter","Avathar","Conjuring"];
const descs=[
"After three death-defying adventures defeating world class villians with his unmatched courage and mad art skiks.",
" A young man sets out to uncover the truth about his life after finding his baby photo on a missing persons website.",
"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
"Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
];
let i=0;
document.getElementById("title").innerText=titles[i];
document.getElementById("desc").innerText=descs[i];

let changeimg=()=>{
  if(i==4)
{
    i=0;
}
con.style.backgroundImage= `url('${arr[i]}')`;
document.getElementById("title").innerText=titles[i];
document.getElementById("desc").innerText=descs[i];
i++;
}
let changeimgback=()=>{
  if(i==0){
    i=4;
  }
  i--
con.style.backgroundImage= `url('${arr[i]}')`
document.getElementById("title").innerText=titles[i];
document.getElementById("desc").innerText=descs[i];
};
function showImage(index){
  i=index;
  con.style.background=`url('${arr[i]}')`;
}
const img = document.getElementsByClassName('img');
console.log(img);
i=0;
let next=()=>{
    img[i].classList.remove('active');
    i++;
    if (i==arr.length)
    {
        i=0;
    }

    if(i==arr.length)
    {
        i=0;
    }
    img[i].classList.add('active');
}
setInterval(changeimg,3000)

