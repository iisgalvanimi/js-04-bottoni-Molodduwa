const btns_List=document.querySelectorAll(".tab-btn")
const btns_arr=Array.from(btns_List)

btns_arr[0].addEventListener("click", evidBottone)
btns_arr[1].addEventListener("click", evidBottone)
btns_arr[2].addEventListener("click", evidBottone)

function evidBottone(e){
    console.log(e.target.id)
    for (let i=0;i<btns_arr.length;i++){
        btns_List.classList.remove("ActiveButtonClass");
    }
    e.target.classList.add("ActiveButtonClass");
}
