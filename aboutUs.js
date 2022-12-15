const header = document.querySelector(".header")
const name = document.querySelector(".resName")
const nav = document.querySelector(".nav")

document.addEventListener("scroll",()=>{
	nav.style.animation = "up 0.5s forwards"
	if(window.matchMedia("(max-width: 900px)").matches){
			nav.style.animation = "upRes 0.5s forwards"
	}
	header.style.position = "fixed"
	header.style.height = "40px"
	name.style.fontSize = "25px"
	if (window.scrollY == 0) {
		nav.style.animation = "down 0.5s forwards"
		if(window.matchMedia("(max-width: 900px)").matches){
			nav.style.animation = "downRes 0.5s forwards"
	}
		header.style.height = "80px"
		name.style.fontSize = "40px"
		if (window.matchMedia("(max-width: 900px)").matches) {
			header.style.height = "60px"
			name.style.fontSize = "30px"
		}
	}
})

const aboutUs = document.querySelector(".VellerIMG")
const aboutUsText = document.querySelector(".aboutUs")

window.addEventListener("load",()=>{
	setTimeout(()=>{
		aboutUsText.style.animation = "appear 0.5s"
		aboutUs.style.animation = "appear 0.5s"
		aboutUs.style.opacity = "1"
		aboutUsText.style.opacity = "1"
	},500)
	setTimeout(()=>{
		document.querySelector(".wNYT").style.animation = "appear 0.8s"
		document.querySelector(".wNYT").style.opacity = "1"
	},1500)
})