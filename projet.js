$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( {scrollTop: anchor.offset().top-80 }, 900);
            }
        }
    });
});


$.getJSON( "realisation.json")
  .done(function(resultat){

	$('#langue').change(function(){
		if( $('#langue option[value="en"]').prop('selected', true)){
			alert("English Version will be available soon!")
			$('#langue option[value="fr"]').prop('selected', true)
		}
	})

	var drap = false

$(".burgerMenu").click(function(){
	
	if (drap==false){
		$("nav").animate({"right":"0"})
		drap=true
	}
	else{
		$("nav").animate({"right":"-100vw"})
		drap=false
	}
	
})

$("nav ul li a").click(function(){
	if($(".burgerMenu").is(":visible")){
	$("nav").animate({"right":"-100vh"})
		drap=false}
})

	var realisation = 0;
	var realsMini= $(".miniatures");
	var realMini ="";
	var nombreAfficher=12;

	

	for (let i=0; i<resultat.length; i++){
		realMini="<a class='"+resultat[i].categ+"' href='realisation.html#"+i+"'>"+"<img src='"+resultat[i].miniature+"' alt='" +resultat[i].titre+"' title='" +resultat[i].titre+"'>"+"<p>"+resultat[i].titre+"</p>"+"</a>";
		$(realsMini).append(realMini);
	}

	//INDEX afficher 12 réalisations sur la homepage

		for (realisation; realisation<=nombreAfficher; realisation++){
			var i
			i=realisation
			$(realsMini).find("a:nth-of-type("+realisation+")").css({opacity:0})
			$(realsMini).find("a:nth-of-type("+realisation+")").show()
			afficherRealMini(realisation, i)
			
		}
	
	function afficherRealMini(realisation, i){

		setTimeout(function(){
			$(realsMini).find("a:nth-of-type("+realisation+")").animate({opacity:100})
		},50*i)
		
	}

	//INDEX afficher 12 de plus et cacher le bouton
	$(".btnPlus").click(voirplus);
	function voirplus(){
		nombreAfficher +=12;
		if (nombreAfficher>=resultat.length){
			nombreAfficher=resultat.length;
			$(".btnPlus").hide();
		}
			let i=0
		for (realisation; realisation<=nombreAfficher; realisation++){
			$(realsMini).find("a:nth-of-type("+realisation+")").css({opacity:0})
			$(realsMini).find("a:nth-of-type("+realisation+")").show()
			afficherRealMini(realisation,i)
			i++
		};
	}

	//filtre INDEX
$(".realisations .filtresHP .illustration").click(filtreHP)
$(".realisations .filtresHP .prepresse").click(filtreHP)
$(".realisations .filtresHP .web").click(filtreHP)
$(".realisations .filtresHP .photographie").click(filtreHP)
$(".realisations .filtresHP .video").click(filtreHP)
$(".realisations .filtresHP .ideation").click(filtreHP)
$(".realisations .filtresHP .tout").click(voirTout)

$(".apropos .apropos__services__programme a").click(filtreHP)

function filtreHP(){

	$(".btnPlus").hide();
	var filtreDetail= $(this).attr('class')
	
	$(".realisations .filtresHP li").each(function(){
		$(this).removeClass("actif")
	})

	$(".realisations .filtresHP ." + filtreDetail).addClass("actif")

	var i=0

		$(".realisations .miniatures a").each(function(){
			$(this).hide()
			$(this).css({opacity:0})
		})

		setTimeout(function(){
			$(".realisations .miniatures a").each(function(){
				if ($(this).attr('class').includes(filtreDetail)){
					i++
					$(this).delay(25*i).show()
					$(this).delay(25*i).animate({opacity:100})
				}
			})
		})
}



function voirTout(){
var i=0
	$(".realisations .filtresHP li").each(function(){
		$(this).removeClass("actif")
	})
	$(".realisations .miniatures a").each(function(){
			$(this).css({opacity:0})
			$(this).show()
			$(this).delay(50*i).animate({opacity:100})
		
	})
	$(".btnPlus").hide();
}




//A PROPOS JS************************************************************
//0-Tous les programmes
var iconPSD=`<a href="faq.html#Psd" target="_blank"><div class='PSD' target="_blank"><p>Photoshop</p></div></a>`
var iconAI=`<a href="faq.html#Illustrator" target="_blank"><div class='AI'><p>Illustrator</p></div></a>`
var iconKrita=`<a href="faq.html#Krita" target="_blank"><div class='Krita'><p>Krita</p></div></a>`
var SAI=`<a href="faq.html#SAI" target="_blank"><div class='SAI'><p>Sai Tool Paint</p></div></a>`;
var iconId=`<a href="faq.html#Indesign" target="_blank"><div class='IND'><p>Indesign</p></div></a>`;
var iconWord=`<a href="faq.html#Word" target="_blank"><div class='WORD'><p>Word</p></div></a>`;
var iconFigma=`<a href="faq.html#Figma" target="_blank"><div class='Figma'><p>Figma</p></div></a>`;
var iconWordpress=`<a href="faq.html#Wordpress" target="_blank"><div class='Wordpress'><p>Wordpress</p></div></a>`;
var iconVisual=`<a href="faq.html#VisualCode" target="_blank"><div class='Visual'><p>Visual Studio</p></div></a>`;
var iconLightroom=`<a href="faq.html#Lightroom" target="_blank"><div class='LightRoom'><p>Lightroom</p></div></a>`;
var iconAn=`<a href="faq.html#Animate" target="_blank"><div class='AN'><p>Animate</p></div></a>`
var iconAe=`<a href="faq.html#After" target="_blank"><div class='AE'><p>After Effect</p></div></a>`
var iconPr=`<a href="faq.html#Premiere" target="_blank"><div class='PR'><p>Premiere</p></div></a>`
var iconOBS=`<a href="faq.html#Obs" target="_blank"><div class='OBS'><p>OBS</p></div></a>`
var iconAudacity=`<a href="faq.html#Audacity" target="_blank"><div class='Audacity'><p>Audacity</p></div></a>`
var iconTVP=`<a href="faq.html#Tvpaint" target="_blank"><div class='TVP'><p>TVPaint</p></div></a>`


//0--afficher/enlever a propos et service

var time = 500;


$(".apropos__services__titre").click(afficherapropos);
	function afficherapropos(){
		$(".apropos__services").addClass("slideOut");
		$(".apropos__prezgenerale").removeClass("slideOut");
		setTimeout(function() {
			$(".apropos__services").hide();
			$('.apropos__prezgenerale').css('display', 'flex');
			$(".apropos__services").removeClass("slideOut");
		}, time);
}

function resetService(){
	if( !$(".apropos__services").is(":visible")){
		$(".apropos__services__select li").each(function(){
			$(this).removeClass("actif");
		})	
		
		$(".apropos__prezgenerale").addClass("slideOut");
	
		$(".apropos__services").addClass("slideOut");
	
		setTimeout(function() {
			$(".apropos__services__programme__icon").html("")
			$(".apropos__services").removeClass("slideOut");
			$(".apropos__services").show();
			$(".apropos__prezgenerale").hide();
		}, time);
	}
	else{
		$(".apropos__services__select li").each(function(){
			$(this).removeClass("actif");
		})	
		
		$(".apropos__prezgenerale").addClass("slideOut");

		$(".apropos__services__programme").addClass("FadeOutProgr");

		$('.apropos__services__bloctext__text').animate({
			opacity: 'toggle',
			height: 'toggle',
		  });
	
		setTimeout(function() {
			$(".apropos__services__programme__icon").html("")
			$('.apropos__services__bloctext__text').animate({
				opacity: 'toggle',
				height: 'toggle',
			  });

			$(".apropos__services__programme").removeClass("FadeOutProgr");
			$(".apropos__services__programme").show();
		}, time);
	}
}


//1--afficher illu
$(".apropos__services__select__illu").click(afficherServiceIllu);
$(".apropos__prezgenerale__services__illu").click(afficherServiceIllu);
	function afficherServiceIllu(){
		resetService()
		setTimeout(function() {
		$(".apropos__services__bloctext__text").html("Illustratrice diplômée de la Haute École Albert Jacquard, je dessine principalement grâce à l’ordinateur pour des dessins bitmaps ou vectoriels, mais m’applique aussi à des méthodes plus traditionnelles, comme l’aquarelle, l’encre de chine ou le crayon. <br> Je veille à la composition de l’image, au choix des couleurs et à la retouche d’image. Ainsi, je réalise des concepts, des décors, des personnages, des icônes, des photomontages et des logos, et cela pour l’impression ou une diffusion numérique.");
		$(".apropos__services__select__illu").addClass("actif");
		$(".apropos__services__programme__iconService").attr("src","graphismes/icones/service/illu-service-01.png");
		$(".apropos__services__programme__iconService").attr("alt","Illustration");
		$(".apropos__services__programme >h2").html("Illustration");
		$(".apropos__services__programme__icon").append(iconPSD+iconAI+iconKrita+SAI);
		$(".apropos__services__programme a").removeAttr('class');
		$(".apropos__services__programme a").addClass("illustration");
	}, time);
}
//2--afficher commu
$(".apropos__services__select__commu").click(afficherServiceCommu);
$(".apropos__prezgenerale__services__commu").click(afficherServiceCommu);
	function afficherServiceCommu(){
		resetService()
		setTimeout(function() {
		$(".apropos__services__bloctext__text").html("La préparation et la mise en page de document, principalement en vue de l’impression, font partie de mes attributions.  Le monde du print offre une large palette de supports : papier, textile, métal, plastique… Ainsi, je compose pour des flyers, des cartes de visite ou de vœux, des affiches, des catalogues, des manuels, des livres, des bannières…");
		$(".apropos__services__select__commu").addClass("actif");
		$(".apropos__services__programme__iconService").attr("src","graphismes/icones/service/Commu-service-01.png");
		$(".apropos__services__programme__iconService").attr("alt","Pré-presse");
		$(".apropos__services__programme >h2").html("Pré-presse")
		$(".apropos__services__programme__icon").append(iconPSD+iconAI+iconId+iconWord); 
		$(".apropos__services__programme a").removeAttr('class');
		$(".apropos__services__programme a").addClass("prepresse");
	}, time);
}
//3--afficher Web
$(".apropos__services__select__web").click(afficherServiceWeb);
$(".apropos__prezgenerale__services__web").click(afficherServiceWeb);
	function afficherServiceWeb(){
		resetService()
		setTimeout(function() {
		$(".apropos__services__bloctext__text").html("Ayant réalisé une formation en UX Webdesign, je m’investis dans l’élaboration de maquettes et de design pour sites web et pour des applications. Je pense beaucoup à l’expérience utilisateur et m’assure de la bonne hiérarchisation de l’information. Je compose aussi les éléments graphiques, animés ou non, cohérents avec l’image de l’entreprise ou du service <br> Je traduis aussi la maquette en code HTML5, CSS3 et Javascript. J’utilise aussi du Jquery, Bootstrap et SASS. Wordpress et Mailchimp sont également de précieuses interfaces pour les entrepreneurs ayant besoin de communiquer avec leur public.");
		$(".apropos__services__select__web").addClass("actif");
		$(".apropos__services__programme__iconService").attr("src","graphismes/icones/service/web-service-01.png");
		$(".apropos__services__programme__iconService").attr("alt","Web");
		$(".apropos__services__programme >h2").html("Web");
		$(".apropos__services__programme__icon").append(iconPSD+iconFigma+iconVisual+iconWordpress);
		$(".apropos__services__programme a").removeAttr('class');
		$(".apropos__services__programme a").addClass("web"); 
	}, time);
}
//4--afficher Photo
$(".apropos__services__select__photo").click(afficherServicePhoto);
$(".apropos__prezgenerale__services__photo").click(afficherServicePhoto);
	function afficherServicePhoto(){
		resetService()
		setTimeout(function() {
		$(".apropos__services__bloctext__text").html("Je photographie des décors, des personnes ou des articles pour la vente. <br> Je traite les photographies au niveau colorimétrique mais aussi par montages, grâce à Photoshop. <br> Les photos de mes montages ne viennent pas toujours de moi, mais je veille à ce qu’elles soient libres de droits pour éviter tout conflit. ");
		$(".apropos__services__select__photo").addClass("actif");
		$(".apropos__services__programme__iconService").attr("src","graphismes/icones/service/photo-service-01.png");
		$(".apropos__services__programme__iconService").attr("alt","Photographie");
		$(".apropos__services__programme >h2").html("Photographie");
		$(".apropos__services__programme__icon").append(iconPSD+iconLightroom); 
		$(".apropos__services__programme a").removeAttr('class');
		$(".apropos__services__programme a").addClass("photographie");
	}, time);
}
//5--afficher Video
$(".apropos__services__select__video").click(afficherServiceVideo);
$(".apropos__prezgenerale__services__video").click(afficherServiceVideo);
	function afficherServiceVideo(){
		resetService()
		setTimeout(function() {
		$(".apropos__services__bloctext__text").html("Grâce à ma formation en illustration et animation 2D, je peux réaliser le montage de film en prises de vues réelles, faire des captures d’écran ou créer des animations. Ainsi, je peux réaliser des animations traditionnelles, vectorielles, du motion design, des multiplans, ainsi qu’intégrer des éléments audio dans le film. La préparation d’une chaine de streaming, sur Twitch par exemple, est envisageable.");
		$(".apropos__services__select__video").addClass("actif");
		$(".apropos__services__programme__iconService").attr("src","graphismes/icones/service/video-service-01.png");
		$(".apropos__services__programme__iconService").attr("alt","Vidéo");
		$(".apropos__services__programme >h2").html("Vidéo");
		$(".apropos__services__programme__icon").append(iconAn+iconAe+iconPr+iconOBS+iconAudacity+iconTVP);  
		$(".apropos__services__programme a").removeAttr('class');
		$(".apropos__services__programme a").addClass("video");
	}, time);
}
//6--afficher Idéation
$(".apropos__services__select__ideation").click(afficherServiceIdee);
$(".apropos__prezgenerale__services__idee").click(afficherServiceIdee);
	function afficherServiceIdee(){
		resetService()
		setTimeout(function() {
		$(".apropos__services__bloctext__text").html("L’étape d’idéation concerne la pensée en amont de tout projet. Il s’agit de comprendre vos besoins et vos envies, de cerner votre public cible ou d’élaborer une stratégie marketing cohérente. <br> Ainsi, je réalise des personas, observe la concurrence, fais des recherches sur votre secteur d’activité, propose des solutions graphiques au travers de moodboards, de maquettes et de prototypes. <br> Votre avis compte et vous serez inscrit dans le processus de création: au fur et à mesure de l’avancée du projet, je vous présente des propositions et vous questionne sur mes déductions.");
		$(".apropos__services__select__ideation").addClass("actif");
		$(".apropos__services__programme__iconService").attr("src","graphismes/icones/service/idee-service-01.png");
		$(".apropos__services__programme__iconService").attr("alt","Idéation");
		$(".apropos__services__programme >h2").html("Idéation");
		$(".apropos__services__programme__icon").append(iconPSD+iconWord);
		$(".apropos__services__programme a").removeAttr('class');
		$(".apropos__services__programme a").addClass("ideation");
	}, time);
}

// Tarif


$(".tarifs__entreprises__impulsion").click(function(){
	
	$(".tarifs__entreprises__impulsion").toggleClass("icondirection")

	$(".tarifs__entreprises__impulsion__p").slideToggle("fast")
	
	})

$(".tarifs__entreprises__ape").click(function(){
	$(".tarifs__entreprises__ape__p").slideToggle("fast")
	$(".tarifs__entreprises__ape").toggleClass("icondirection")
	})	

// FAQ Page

var questions= $(".FAQ--modif div");

questions.each(function(){
	$(this).click(function(){
		$(this).find("p").slideToggle("fast")
		$(this).find("h2").toggleClass("icondirection")
	})
})

const url=window.location.href
$( window ).on( "load", function() {
	if(url.includes("faq")&&("#")){
		var detailUrlforId=url.split("#");
		console.log($("#"+detailUrlforId[1]).find("p"));
		$("#"+detailUrlforId[1]).find("p").toggle();
		$("#"+detailUrlforId[1]).find("h2").toggleClass("icondirection");
	}
});


	});



