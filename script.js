const current=document.querySelector("#current");
const imgs=document.querySelector(".otherImages");
const img=document.querySelectorAll(".otherImages img");//.otherImages contains all the img tag
const opacity = 0.5;

imgs.addEventListener("click",(event)=>
{
    img.forEach(imgElement => {
        imgElement.style.opacity=1;
    });
    const clickedImg=event.target.src;
    current.src=clickedImg;
    current.classList.add("fade-In");
    setTimeout(() => {
        current.classList.remove("fade-In");
    },500);

    event.target.style.opacity=opacity;
})
