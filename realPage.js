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

	//ENGLISH VERSION

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


	//Page des réalisations générations des images
	
	var realVisu="";
	var realVisuimg="";

for (let i=0; i<resultat.length;i++){

	var realVisuimg="";
	var	btnBlock=""
	for(let j=0; j<resultat[i].photos.length;j++){

		if(!resultat[i].photos[j].src.includes("youtube")){
			realVisuimg+="<img class='"+j+"' src='"+resultat[i].photos[j].src+"'>"
		}
		else{
			realVisuimg+="<iframe class='"+j+"'"+resultat[i].photos[j].src
		}
		if (resultat[i].photos.length>1){
		btnBlock+="<div class='btnBlock "+j+"'> o </div>"
		}
	}

	if(!resultat[i].avec){
		if(!resultat[i].lien){
			realVisu= "<section class='"+resultat[i].categ+"' id='"+i+"'>"+"<div><span class='before'><span>Before </span></span><div class='section__picturecontent'>"+realVisuimg+"</div><span class='after'><span>After</span></span></div>"+"<div class='section_contenu'>"+"<h2>"+resultat[i].titre+"</h2>"+"<p>"+resultat[i].texte+"</p>"+"<span class='tag'>"+resultat[i].categ+"</span> <div class='actions'>"+btnBlock+"<span>+</span></div> </div class='agrandir'>"+"</section>"; 
		}
		else{
			realVisu= "<section class='"+resultat[i].categ+"' id='"+i+"'>"+"<div><span class='before'><span>Before </span></span><div class='section__picturecontent'>"+realVisuimg+"</div><span class='after'><span>After</span></span></div>"+"<div class='section_contenu'>"+"<h2>"+resultat[i].titre+"<span>"+ resultat[i].lien+"</span>"+  "</h2>"+ "<p>" + resultat[i].texte+"</p>"+"<span class='tag'>"+resultat[i].categ+"</span> <div class='actions'>"+btnBlock+"<span class='agrandir'>+</span></div> </div>"+"</section>"; 
		}
	}
	else if (resultat[i].avec){
		if(!resultat[i].lien){
			realVisu= "<section class='"+resultat[i].categ+"' id='"+i+"'>"+"<div><span class='before'><span>Before </span></span><div class='section__picturecontent'>"+realVisuimg+"</div><span class='after'><span>After</span></span></div>"+"<div class='section_contenu'>"+"<h2>"+resultat[i].titre+"</h2>"+ "<p> Avec: "+resultat[i].avec +"<br>"+ resultat[i].texte+"</p>"+"<span class='tag'>"+resultat[i].categ+"</span> <div class='actions'>"+btnBlock+"<span class='agrandir'>+</span></div> </div>"+"</section>"; 
		}
		else{
			realVisu= "<section class='"+resultat[i].categ+"' id='"+i+"'>"+"<div><span class='before'><span>Before </span></span><div class='section__picturecontent'>"+realVisuimg+"</div><span class='after'><span>After</span></span></div>"+"<div class='section_contenu'>"+"<h2>"+resultat[i].titre+"<span>" +resultat[i].lien+"</span>"+"</h2>"+ "<p>Avec: "+resultat[i].avec +"<br>" + resultat[i].texte+"</p>"+"<span class='tag'>"+resultat[i].categ+"</span> <div class='actions'>"+btnBlock+"<span class='agrandir'>+</span></div> </div>"+"</section>"; 
		}
	}

	$(".realisationpage").append(realVisu);


	$(".realisationpage").find("section .section__picturecontent >").hide();
	$(".realisationpage").find("section .actions .btnBlock:first-of-type").addClass("section__action__btnvisible");
	$(".realisationpage").find("section .section__picturecontent >:first-child").show();
	// dans la section, 1 div image, 1 div qui contient les h2, les categ, les textes, les gens avec qui j'ai bossé,
}

//hashtag corrigés et insérés

for(let i=0;i<$(".realisationpage section").length;i++){
	// console.log($(".realisationpage #"+i).find(".tag").text().split(" "))
	var morceauTag=""
	for(let j=0;j<$(".realisationpage #"+i).find(".tag").text().split(" ").length;j++){

		if($(".realisationpage #"+i).find(".tag").text().split(" ")[j]=="prepresse"){
			morceauTag+="<span class='"+$(".realisationpage #"+i).find(".tag").text().split(" ")[j]+"'>#pré-presse </span>"
		}
		else if($(".realisationpage #"+i).find(".tag").text().split(" ")[j]=="ideation"){
			morceauTag+="<span class='"+$(".realisationpage #"+i).find(".tag").text().split(" ")[j]+"'>#idéation </span>"
		}
		else if($(".realisationpage #"+i).find(".tag").text().split(" ")[j]=="video"){
			morceauTag+="<span class='"+$(".realisationpage #"+i).find(".tag").text().split(" ")[j]+"'>#vidéo </span>"
		}
		else{
			morceauTag+="<span class='"+$(".realisationpage #"+i).find(".tag").text().split(" ")[j]+"'>#" + $(".realisationpage #"+i).find(".tag").text().split(" ")[j] +" </span>"
		}
	}
	$(".realisationpage #"+i).find(".tag").html(morceauTag)
}

//page réalisation Filtres

$(".realisationpage section .tag span").click(filtreRP)
$(".realisationPage_wrapper .filtresRP .illustration").click(filtreRP)
$(".realisationPage_wrapper .filtresRP .prepresse").click(filtreRP)
$(".realisationPage_wrapper .filtresRP .web").click(filtreRP)
$(".realisationPage_wrapper .filtresRP .photographie").click(filtreRP)
$(".realisationPage_wrapper .filtresRP .video").click(filtreRP)
$(".realisationPage_wrapper .filtresRP .ideation").click(filtreRP)
$(".realisationPage_wrapper .filtresRP .tout").click(voirToutRP)

function filtreRP(){
	$("html, body").animate({scrollTop: 0},500);
	var filtreDetailRP= $(this).attr('class')
	console.log($(this).attr('class'))
	
	$(".realisationPage_wrapper .filtresRP li").each(function(){
		$(this).removeClass("actif")
	})
	$(".realisationPage_wrapper .filtresRP ." + filtreDetailRP).addClass("actif")

	$(".realisationPage_wrapper section").each(function(){
		$(this).fadeOut()

		if ($(this).attr('class').includes(filtreDetailRP)){
			$(this).delay(200).fadeIn()

		}
	})
}

function voirToutRP(){
	
	$(".realisationPage_wrapper section").each(function(){
		$(".realisationPage_wrapper .filtresRP li").each(function(){
			$(this).removeClass("actif")
		})
		$(this).fadeOut()
		$(this).delay(200).fadeIn()
	})

}

//Page réalisation agrandir

$(".realisationsPage section .actions span").each(function(){
	$(this).click(function(){
		$(".realisationsPage_visionneuse_picture").html("")
		$(".realisationsPage_visionneuse_fleches").html("")
		$(this).parent().parent().parent().find($(".section__picturecontent")).each(function(){
			console.log($(this).html())
			console.log($(this).parent().parent().find(".section_contenu").find(".actions"))
			$(".realisationsPage_visionneuse_picture").append($(this).html())

			$(".realisationsPage_visionneuse_picture").append("<p>"+$(this).parent().parent().find(".section_contenu").find("h2").html()+"<br>"+$(this).parent().parent().find(".section_contenu").find("p").html()+"</p>")
		})

		$(".realisationsPage_visionneuse_fleches").find(".btnBlock").length

		$(".realisationsPage_visionneuse_picture").children().click(function(e){
			let center = $(this).width() / 2;
			var imgActive=$(".realisationsPage_visionneuse_picture").find(":visible")
			if ($(window).width() > 800) {
				if($(".realisationsPage_visionneuse_picture").find("p").is(":visible")){
					$(".realisationsPage_visionneuse_picture").find("p").slideUp()
				}
			
			
			else if (e.offsetX > center) {

				if(!$(this).next().next().is("img")&&!$(this).next().next().is("iframe")){
					$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .after").hide()
				}

				if($(this).next().is("img")||$(this).next().is("iframe")){

					$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).removeClass("section__action__btnvisible")
					$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).next().addClass("section__action__btnvisible")
					$(this).hide()
					$(this).next().show()
				}
			} 
			else {

				if(!$(this).prev().prev().is("img")&&!$(this).prev().prev().is("iframe")){
					$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .before").hide()
				}

				if($(this).prev().is("img")||$(this).prev().is("iframe")){
					$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).removeClass("section__action__btnvisible")
					$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).prev().addClass("section__action__btnvisible")
					$(this).hide()
					$(this).prev().show()
					
			}}}
		});
		$(".realisationsPage_visionneuse").fadeIn("fast")
	$(".realisationsPage_visionneuse").css('display','flex');

	//boules jaunes dans le visu

	for(let i=0;i<$(".realisationsPage_visionneuse_picture").children().length - 1;i++){
		if($(".realisationsPage_visionneuse_picture").children().length>2){
			$(".realisationsPage_visionneuse_fleches").append("<div class='btnBlock "+ i +"'>o</div>")
		}
		$(".realisationsPage_visionneuse_fleches").find("."+$(".realisationsPage_visionneuse_picture").find(":visible").attr("class")).addClass("section__action__btnvisible")
		
	}

	for(let i=0;i<$(".realisationsPage_visionneuse_fleches .btnBlock").length;i++){

		$(".realisationsPage_visionneuse_fleches ."+i).click(function(){
			
			$(".realisationsPage_visionneuse_fleches").find(":visible").removeClass("section__action__btnvisible")

			$(".realisationsPage_visionneuse_picture").find(":visible").hide()

			$(this).addClass("section__action__btnvisible")

			$(".realisationsPage_visionneuse_picture").find("."+i).show()

		})}
	})
})

//apparition description

$(".realisationsPage_visionneuse_texte").click(function(){
	$(".realisationsPage_visionneuse_picture").find("p").slideToggle("fast")
})

//Page réalisation agrandie, naviguer au clavier

$(document).keydown(function(e){
	
	if(e.which==39){
		var imgActive=$(".realisationsPage_visionneuse_picture").find(":visible")
		if ($(window).width() > 800) {
		if($(".realisationsPage_visionneuse_picture").find("p").is(":visible")){
			$(".realisationsPage_visionneuse_picture").find("p").slideUp()
		}
		else if(imgActive.next().is("img")||imgActive.next().is("iframe")){
			imgActive.next().show()
			console.log(imgActive.attr("class"))
			$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).removeClass("section__action__btnvisible")
			$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).next().addClass("section__action__btnvisible")
			imgActive.hide()
		}}}
	if(e.which==37){
		var imgActive=$(".realisationsPage_visionneuse_picture").find(":visible")
		if ($(window).width() > 800) {
		if($(".realisationsPage_visionneuse_picture").find("p").is(":visible")){
			$(".realisationsPage_visionneuse_picture").find("p").slideUp()
		}
		else if(imgActive.prev().is("img")||imgActive.prev().is("iframe")){
			imgActive.prev().show()
			$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).removeClass("section__action__btnvisible")
			$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).prev().addClass("section__action__btnvisible")
			imgActive.hide()
		}}
	}
})

//Page réalisation agrandie fermer

$(".realisationsPage_visionneuse_x").click(function(){
	$(".realisationsPage_visionneuse").fadeOut("fast")
})


$('.realisationsPage_visionneuse').click(function(event) { 
	var $target = $(event.target);
	if(!$target.closest('.realisationsPage_visionneuse--span').length && 
	$('.realisationsPage_visionneuse').is(":visible")) {
	  $('.realisationsPage_visionneuse').fadeOut("fast");
	}        
  });

//Switch click et hover img visionneuse

$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .after").click(function(){
	let imgActive=$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse_picture").children(":visible")

	if ($(window).width() > 800) {
	if($(".realisationsPage_visionneuse_picture").find("p").is(":visible")){
		$(".realisationsPage_visionneuse_picture").find("p").slideUp()
	}
	else if(imgActive.next().is("img")||imgActive.next().is("iframe")){

		if(!imgActive.next().next().is("img")&&!imgActive.next().next().is("iframe")){
			$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .after").hide()
		}

		imgActive.next().show()
		$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).removeClass("section__action__btnvisible")
		$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).next().addClass("section__action__btnvisible")
		imgActive.hide()
	}
	else{
		$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").css("cursor","default")
	}}
	
})

$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .before").click(function(){
	let imgActive=$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse_picture").children(":visible")
	if ($(window).width() > 800) {
	if($(".realisationsPage_visionneuse_picture").find("p").is(":visible")){
		$(".realisationsPage_visionneuse_picture").find("p").slideUp()
	}
	else if(imgActive.prev().is("img")||imgActive.prev().is("iframe")){

		if(!imgActive.prev().prev().is("img")&&!imgActive.prev().prev().is("iframe")){
			$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .before").hide()
		}

		imgActive.prev().show()
		$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).removeClass("section__action__btnvisible")
		$(".realisationsPage_visionneuse_fleches").find("."+imgActive.attr("class")).prev().addClass("section__action__btnvisible")
		imgActive.hide()
	}
	else{
		$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").css("cursor","default")
	}}
	
})

	$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .realisationsPage_visionneuse_picture").mousemove(function(e){

		let center = $(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .realisationsPage_visionneuse_picture").width() / 2;

		

		if (e.offsetX > center) {
			$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").find(".before").hide()
			if($(".realisationsPage_visionneuse_picture").find("p").is(":visible")){
				$(".realisationsPage_visionneuse").find(".after").hide()
			}
			else if($(".realisationsPage_visionneuse_picture").children(":visible").next().is("img")||$(".realisationsPage_visionneuse_picture").children(":visible").next().is("iframe")){
				$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").css('cursor', 'pointer');
				$(".realisationsPage_visionneuse").find(".after").show()
			}
			
			else{
				$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").css('cursor', 'default');
				$(".realisationsPage_visionneuse").find(".after").hide()
			}
		} 
		else{
			$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").find(".after").hide()
			if($(".realisationsPage_visionneuse_picture").find("p").is(":visible")){
				$(".realisationsPage_visionneuse").find(".before").hide()
			}
			else if($(".realisationsPage_visionneuse_picture").children(":visible").prev().is("img")||$(".realisationsPage_visionneuse_picture").children(":visible").prev().is("iframe")){
				$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").css('cursor', 'pointer');
				$(".realisationsPage_visionneuse").find(".before").show()
			}
			else{
				$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").css('cursor', 'default');
				$(".realisationsPage_visionneuse").find(".before").hide()
			}
	}
	})

	$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span .realisationsPage_visionneuse_picture").hover(function(e){
		for(let i=0;i<$(".realisationsPage_visionneuse").length;i++){
			var center = $("#"+i).find(".section__picturecontent").children().width() / 2;
		}

		
			if (e.offsetX > center) {
				
				if($(".realisationsPage_visionneuse_picture").children(":visible").next().is("img")||$(".realisationsPage_visionneuse_picture").children(":visible").next().is("iframe")){
					$(".realisationsPage_visionneuse").find(".after").show()
				}
			} 
			else{
				$(this).parent().parent().find(".after").hide()
				if($(".realisationsPage_visionneuse_picture").children(":visible").prev().is("img")||$(".realisationsPage_visionneuse_picture").children(":visible").prev().is("iframe")){
					$(".realisationsPage_visionneuse").find(".before").show()
				}
			}
	})

	$(".realisationsPage_visionneuse").find(".realisationsPage_visionneuse--span").mouseleave(function(e){
		$(this).find(".before").hide()
		$(this).find(".after").hide()
	})

//actu reals

for(let i=0; i < $(".realisationpage section").length; i++){

	$("#"+i).find(".section__picturecontent").children().click(function(e){

		
		let center = $("#"+i).find(".section__picturecontent").children().width() / 2;

		if (e.offsetX > center) {

				
				
				if($(this).next().is("img")||$(this).next().is("iframe")){

					if(!$(this).next().next().is("img") && !$(this).next().next().is("iframe")){
						$(this).parent().parent().find(".after").hide()
					}

					$(this).next().show()
                    $(this).hide()
                    $(this).parent().parent().parent().find(".section_contenu .actions").find("."+$(this).attr("class")).removeClass("section__action__btnvisible")
                    $(this).parent().parent().parent().find(".section_contenu .actions").find("."+$(this).attr("class")).next().addClass("section__action__btnvisible")

				}
				
			} 
			else {
				if($(this).prev().is("img")||$(this).prev().is("iframe")){

					if(!$(this).prev().prev().is("img") && !$(this).prev().prev().is("iframe")){
						$(this).parent().parent().find(".before").hide()
					}

					$(this).prev().show()
                    $(this).hide()
                    $(this).parent().parent().parent().find(".section_contenu .actions").find("."+$(this).attr("class")).removeClass("section__action__btnvisible")
                    $(this).parent().parent().parent().find(".section_contenu .actions").find("."+$(this).attr("class")).prev().addClass("section__action__btnvisible")
				}
		}

		
	})	
}


// quand on passe la souris sur l'image, les span d'indication apparaissent

for(let i=0; i < $(".realisationpage section").length; i++){

	$("#"+i).find(".section__picturecontent").children().mousemove(function(e){

		let center = $("#"+i).find(".section__picturecontent").children().width() / 2;
			if (e.offsetX > center) {
				$(this).parent().parent().find(".before").hide()
				if($(this).next().is("img")||$(this).next().is("iframe")){
					$(this).css('cursor', 'pointer');
					$(this).parent().parent().find(".after").show()

				}
				else{
					$(this).css('cursor', 'default');
					$(this).parent().parent().find(".after").hide()
				}
			} 
			else if (e.offsetX <= center) {
				$(this).parent().parent().find(".after").hide()
				if($(this).prev().is("img")||$(this).prev().is("iframe")){
					$(this).css('cursor', 'pointer');
					$(this).parent().parent().find(".before").show()


				}
				else{
					$(this).css('cursor', 'default');
					$(this).parent().parent().find(".before").hide()
				}
		}
	})

	$("#"+i).find(">div").mouseleave(function(e){
		$(this).find(".before").hide()
		$(this).find(".after").hide()
	})
}

//click sur span sur image dans le fil de réalisation pour voir img/frame suivante ou precedente

for(let i=0; i < $(".realisationpage section").length; i++){

		$("#"+i).find("div .after").click(function(){
			let echActif = $(this).parent().parent().find(".section__picturecontent").find(":visible").attr("class")
			if($(this).parent().parent().find(".section__picturecontent").find("."+echActif).next().is("img")||$(this).parent().parent().find(".section__picturecontent").find("."+echActif).next().is("iframe")){

				if(!$(this).parent().parent().find(".section__picturecontent").find("."+echActif).next().next().is("img")&&!$(this).parent().parent().find(".section__picturecontent").find("."+echActif).next().next().is("iframe")){
					$(this).hide()
				}

				$(this).parent().parent().find(".section__picturecontent").find("."+echActif).next().show()
				$(this).parent().parent().find(".section__picturecontent").find("."+echActif).hide()
				
				$(this).parent().parent().find(".section_contenu .actions .section__action__btnvisible").next(".btnBlock ").addClass("section__action__btnvisible")
				$(this).parent().parent().find(".section_contenu .actions .section__action__btnvisible").prev(".btnBlock ").removeClass("section__action__btnvisible")

				if($(this).parent().parent().find(".section__picturecontent").find("."+echActif).prev().prev().is("img")||$(this).parent().parent().find(".section__picturecontent").find("."+echActif).prev().prev().is("iframe")){
					$(this).hide()
				}
			}
			
		})
		$("#"+i).find("div .before").click(function(){
			let echActif = $(this).parent().parent().find(".section__picturecontent").find(":visible").attr("class")
			if($(this).parent().parent().find(".section__picturecontent").find("."+echActif).prev().is("img")||$(this).parent().parent().find(".section__picturecontent").find("."+echActif).prev().is("iframe")){

				if(!$(this).parent().parent().find(".section__picturecontent").find("."+echActif).prev().prev().is("img")&&!$(this).parent().parent().find(".section__picturecontent").find("."+echActif).prev().prev().is("iframe")){
					$(this).hide()
				}

				$(this).parent().parent().find(".section__picturecontent").find("."+echActif).prev().show()
				$(this).parent().parent().find(".section__picturecontent").find("."+echActif).hide()
				
				$(this).parent().parent().find(".section_contenu .actions .section__action__btnvisible").prev(".btnBlock ").addClass("section__action__btnvisible")
				$(this).parent().parent().find(".section_contenu .actions .section__action__btnvisible").next(".btnBlock ").removeClass("section__action__btnvisible")

				if($(this).parent().parent().find(".section__picturecontent").find("."+echActif).next().next().is("img")||$(this).parent().parent().find(".section__picturecontent").find("."+echActif).next().next().is("iframe")){
					$(this).hide()
				}
			}
			
		})

}

// BTN jaunes pour afficher les images

$(".realisationpage section").each(function(){

	for(let i=0; i<$(this).find(".btnBlock").length;i++){
		$(this).find(".actions").find("."+i).click(function(){

			for(let j=0; j<$(".section__picturecontent").length;j++){
				$(this).parent().parent().parent().find($(".section__picturecontent")).find("."+j).hide();
				
			}

			$(this).parent().find(".btnBlock").each(function(){
				$(this).removeClass("section__action__btnvisible");
			})

			$(this).addClass("section__action__btnvisible");
			$(this).parent().parent().parent().find($(".section__picturecontent")).find("."+i).show()
		})
	}

})


//faire fonctionner le lien d'encre généré par json sur une page qui n'a pas encore été générée
const url=window.location.href

$( window ).on( "load", function() {
	
	if(url.includes("#")){
		const detailUrl=url.split("#");
		const newurl=detailUrl[0]+"#"+detailUrl[1];
		window.location.replace(newurl)
		$(".meduse_loading").hide()
	}
	else{
		$(".meduse_loading").hide()
	
	}
});

	});
