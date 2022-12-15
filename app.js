const header = document.querySelector(".header")
const name = document.querySelector(".resName")
const bar1 = document.querySelector(".nameLine1")
const bar2 = document.querySelector(".nameLine2")
const nav = document.querySelector(".nav")
const goFullMenu = document.querySelector(".goFullMenu")

if (window.matchMedia("(max-width: 430px)").matches) {
	name.style.position = "absolute"
	bar1.style.display = "none"
	bar2.style.display = "none"
}

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



const options = {
	rootMargin: "-100px" 
}


const menus = document.querySelector(".menus")


const incrementWidth = (entries)=>{
	const entry = entries[0]
	if (entry.isIntersecting == true) {
		menus.style.animation = "MenusUp 0.5s"
		menus.style.opacity = "1"
		setTimeout(()=>{
			menus.style.transform = "translateY(-200px)"
		},500)
	}
}

const observer = new IntersectionObserver(incrementWidth,options)


if (menus) {
	observer.observe(menus)
}

const goMenu = document.querySelector(".go-menu")

if (goMenu) {
	goMenu.addEventListener('click', () => window.scrollTo({
  top: 650,
  behavior: 'smooth',
}));
}

window.addEventListener("load",()=>{
	let underline = document.querySelector(".underline")
	if (underline) {
		setTimeout(()=>{
		underline.style.animation = "incrementSize 0.3s"
		underline.style.width = "305px"
	},1000)
	}
})

if (goFullMenu) {
	goFullMenu.addEventListener("click",()=>{
	window.open("http://localhost/Restaurant/menu.html", "_self")
})
}

if (document.querySelector(".goHome")) {
	document.querySelector(".goHome").addEventListener("click",()=>{
	window.open("http://localhost/Restaurant/restaurant.html", "_self")
})
}