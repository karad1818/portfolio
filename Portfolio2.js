/* navigationn */
let toggle = document.querySelector(".toggle")
toggle.addEventListener("click",function(){
	let its=document.querySelector(".menu");
	its.classList.toggle("toggle_show");
});

/*   home card */
let my_img = document.querySelector(".my_img");
my_img.addEventListener("mouseout",function(){
	my_img.style.backgroundImage="url('Images/My1.jpg')";
	my_img.style.cursor="auto";
});
let link = document.querySelector(".c1");
link.addEventListener("mouseover",function(){
	my_img.style.backgroundImage="url('Images/link.PNG')";
	my_img.style.cursor="pointer";
});
let link2 = document.querySelector(".c2");
link2.addEventListener("mouseover",function(){
	my_img.style.backgroundImage="url('Images/link2.PNG')";
	my_img.style.cursor="pointer";

});
let link3 = document.querySelector(".c3");
link3.addEventListener("mouseover",function(){
	my_img.style.backgroundImage="url('Images/link3.PNG')";
	my_img.style.cursor="pointer";
});

