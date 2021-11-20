var title = "VegleeTv"
var videos = ["2021/11/blog-post_19.html", "2021/11/sanic.html", "2021/11/meu-jogo.html", "tching-tchong.html", "2021/11/office-dance.html", "2021/11/blog-post.html", "2021/11/como-criar-um-canal-no-veggletv.html", "2021/11/minecraft-skywars-com-meu-amigo.html"]
var texts = ["Olha que video legal!!! 😁", "Não perca esse video 😎", "Como ele fez isso? 🤯", "Olha que interessante", "Somente Épico", "HAHA, muito bom mesmo", "Como ele pode!!!","Look what a cool video!!! 😁", "Don't miss this video 😎", "How did he do it? 🤯", "Look how interesting", "Only Epic", "HAHA, really good", "Like him he can!!!"]
var bgcolors = ["#111111", "#171717", "#383836"]
var pcolors = ["#aa00aa","#ff00ff","#ff0000"]

class ADS{
	constructor(object=document.body){
		this.selector = object
	}
	create(){
		this.getVideoOfVeggle = Math.random() * videos.length
		this.linkOfVeggleVideo = "https://vegglesite.blogspot.com/" + videos[parseInt(this.getVideoOfVeggle)]
		this.getTextOfVeggle = Math.random() * texts.length
		this.textOfVeggleVideo = texts[parseInt(this.getTextOfVeggle)]
		this.bgcolor = Math.random() * bgcolors.length
		this.getbgcolor = bgcolors[parseInt(this.bgcolor)]
		this.pcolor = Math.random() * pcolors.length
		this.getpcolor = pcolors[parseInt(this.pcolor)]
		this.gettitle = title
	}
	showBanner(){
		//SEPARATOR
		var sep = document.createElement("br")
		//ADS BODY
		var adsbody = document.createElement("div")
		adsbody.style.maxWidth = "220px"
		adsbody.style.width = "auto"
		adsbody.style.height = "auto"
		adsbody.style.padding = "5px"
		adsbody.style.background = this.getbgcolor
		adsbody.style.border = "2px solid " + this.getpcolor
		adsbody.style.boxShadow = "0 0 1vh " + this.getpcolor
		adsbody.style.borderRadius = "15px"
		adsbody.style.textAlign = "center"
		adsbody.style.fontSize = "18px"
		//ADS TEXT
		var adstext = document.createElement("span")
		adstext.innerText = this.gettitle + "\n" + this.textOfVeggleVideo
		adstext.style.color = this.getpcolor
		adstext.style.textShadow = "0 0 1vh "+this.getpcolor+", 0 0 2vh "+this.getpcolor+", 0 0 3vh " + this.getpcolor
		adstext.style.fontFamily = "sans-serif"
		//ADS LINK
		var adslink = document.createElement("a")
		adslink.href = this.linkOfVeggleVideo
		adslink.target = "_Blank"
		adslink.innerText = ">>"
		adslink.style.textDecoration = "none"
		adslink.style.color = "white"
		adslink.style.textShadow = "0 0 1vh white, 0 0 2vh white, 0 0 4vh white"
		adslink.style.fontFamily = "sans-serif"
		//SHOW ADS
		adsbody.appendChild(adstext)
		adsbody.appendChild(sep)
		adsbody.appendChild(adslink)
		this.selector.appendChild(adsbody)
	}
	showFooter(){
		//SEPARATOR
		var sep = document.createElement("br")
		//ADS BODY
		var adsbody = document.createElement("div")
		adsbody.style.width = "99%"
		adsbody.style.height = "auto"
		adsbody.style.padding = "5px"
		adsbody.style.background = this.getbgcolor
		adsbody.style.border = "2px solid " + this.getpcolor
		adsbody.style.boxShadow = "0 0 1vh " + this.getpcolor
		adsbody.style.borderRadius = "5px"
		adsbody.style.textAlign = "center"
		adsbody.style.fontSize = "18px"
		adsbody.style.position = "absolute"
		adsbody.style.bottom = "0"
		adsbody.style.left = "0"
		//ADS TEXT
		var adstext = document.createElement("span")
		adstext.innerText = this.gettitle + "\n" + this.textOfVeggleVideo
		adstext.style.color = this.getpcolor
		adstext.style.textShadow = "0 0 1vh "+this.getpcolor+", 0 0 2vh "+this.getpcolor+", 0 0 3vh " + this.getpcolor
		adstext.style.fontFamily = "sans-serif"
		//ADS LINK
		var adslink = document.createElement("a")
		adslink.href = this.linkOfVeggleVideo
		adslink.target = "_Blank"
		adslink.innerText = ">>"
		adslink.style.textDecoration = "none"
		adslink.style.color = "white"
		adslink.style.textShadow = "0 0 1vh white, 0 0 2vh white, 0 0 4vh white"
		adslink.style.fontFamily = "sans-serif"
		//SHOW ADS
		adsbody.appendChild(adstext)
		adsbody.appendChild(sep)
		adsbody.appendChild(adslink)
		document.body.appendChild(adsbody)
	}
	showPop(size=220){
		//SEPARATOR
		var sep = document.createElement("br")
		//ADS BODY
		var adsbody = document.createElement("div")
		adsbody.style.width = size+"px"
		adsbody.style.height = size+"px"
		adsbody.style.padding = "5px"
		adsbody.style.background = this.getbgcolor
		adsbody.style.border = "2px solid " + this.getpcolor
		adsbody.style.boxShadow = "0 0 1vh " + this.getpcolor
		adsbody.style.borderRadius = "15px"
		adsbody.style.textAlign = "center"
		adsbody.style.fontSize = "18px"
		adsbody.style.lineHeight = "70px"
		adsbody.style.position = "absolute"
		adsbody.style.left = "50%"
		adsbody.style.top = "50%"
		adsbody.style.marginTop = "-150px"
		adsbody.style.marginLeft = "-150px"
		//CLOSE ADS
		var closeAds = document.createElement("div")
		closeAds.style.width = "20px"
		closeAds.style.height = "20px"
		closeAds.style.backgroundColor = "red"
		closeAds.style.borderRadius = "5px"
		closeAds.style.cursor = "pointer"
		closeAds.addEventListener("click", (e)=>{
			adsbody.style.display = "none"
		})
		//ADS TEXT
		var adstext = document.createElement("span")
		adstext.innerText = this.gettitle + "\n" + this.textOfVeggleVideo
		adstext.style.color = this.getpcolor
		adstext.style.textShadow = "0 0 1vh "+this.getpcolor+", 0 0 2vh "+this.getpcolor+", 0 0 3vh " + this.getpcolor
		adstext.style.fontFamily = "sans-serif"
		//ADS LINK
		var adslink = document.createElement("a")
		adslink.href = this.linkOfVeggleVideo
		adslink.target = "_Blank"
		adslink.innerText = ">>"
		adslink.style.textDecoration = "none"
		adslink.style.color = "white"
		adslink.style.textShadow = "0 0 1vh white, 0 0 2vh white, 0 0 4vh white"
		adslink.style.fontFamily = "sans-serif"
		//SHOW ADS
		adsbody.appendChild(closeAds)
		adsbody.appendChild(adstext)
		adsbody.appendChild(sep)
		adsbody.appendChild(adslink)
		this.show = function(){
			adsbody.style.display = "inline-block"
			this.selector.appendChild(adsbody)
		}
	}
}