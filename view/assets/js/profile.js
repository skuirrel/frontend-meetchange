$(document).ready(function() {

	/* ADD MEDIA */
	function selectedBtnToGreen(btn){
		$(".btn-3.gry").css("background-color", "#ddd");
		$(".btn-3.gry").css("color", "#514444");
		$(btn).css("background-color", "#49b979");
		$(btn).css("color", "#fff");
	}

	function btnToNormal(){
		$(".btn-3.gry").css("background-color", "#ddd");
		$(".btn-3.gry").css("color", "#514444");
	}

	$(".panel-body-expand.addlinkbrowse").hide();
	$(".panel-body-expand.addlink").hide();
	$("#add-doc").click(function(){
		selectedBtnToGreen(this);
    	if($(".panel-body-expand.addlink").is(":visible")){
			$(".panel-body-expand.addlink").hide();
			$(".panel-body-expand.addlinkbrowse").show();
		}
		else{
			$(".panel-body-expand.addlinkbrowse").slideDown();
		}
	})
	$("#add-photo").click(function(){
		selectedBtnToGreen(this);
    	if($(".panel-body-expand.addlink").is(":visible")){
			$(".panel-body-expand.addlink").hide();
			$(".panel-body-expand.addlinkbrowse").show();
		}
		else{
			$(".panel-body-expand.addlinkbrowse").slideDown();
		}
    })
    $("#add-video").click(function(){
    	selectedBtnToGreen(this);
    	if($(".panel-body-expand.addlinkbrowse").is(":visible")){
			$(".panel-body-expand.addlinkbrowse").hide();
			$(".panel-body-expand.addlink").show();
		}
		else{
			$(".panel-body-expand.addlink").slideDown();
		}
    })
    $("#add-link").click(function(){
    	selectedBtnToGreen(this);
    	if($(".panel-body-expand.addlinkbrowse").is(":visible")){
			$(".panel-body-expand.addlinkbrowse").hide();
			$(".panel-body-expand.addlink").show();
		}
		else{
			$(".panel-body-expand.addlink").slideDown();
		}
    })
    $(".btn-cancel").click(function(){
		$(".panel-body-expand.addlinkbrowse").slideUp();
		$(".panel-body-expand.addlink").slideUp();
		btnToNormal();
    })
    /* END OF ADD MEDIA */


    /* HOVER PANEL */
    function hoverPanel(div){
		$(div).hover(
		function () {
			var id = $(this).get(0).id;
			$("#"+id+" > .panel-edit").show();
			$("#"+id+" > div > div > div > .panel-edit").show();
		}, 
		function () {
			$(".panel-edit").hide();
		});
	}

    $(".panel-edit").hide();
    hoverPanel("#panel-deskripsi");
    hoverPanel("#panel-organisasi");
    hoverPanel("#panel-proyek");
    hoverPanel("#panel-penawaran");
    hoverPanel("#panel-karya");
    hoverPanel("#panel-penghargaan");
    hoverPanel("#panel-media");
    hoverPanel("#panel-keahlian");
    hoverPanel("#panel-pendidikan");
    hoverPanel("#panel-rekomendasi");
    hoverPanel("#panel-gabung");

    hoverPanel("#panel-siapakami");
    hoverPanel("#panel-yangkamilakukan");

    hoverPanel("#panel-ringkasan");
    hoverPanel("#panel-latarbelakang");
    hoverPanel("#panel-solusi");
    hoverPanel("#panel-sasaran");
    hoverPanel("#panel-timeline");

    hoverPanel("#panel-eligibilitas");
    hoverPanel("#panel-faq");

    hoverPanel("[id^=panel-dana-]");
    hoverPanel("[id^=panel-sdm-]");
    hoverPanel("[id^=panel-tekno-]");
    /* END OF HOVER PANEL */


    /* LIHAT LEBIH BANYAK */
    $(".lebih-banyak").hide();
	$(".lihat-lebih-banyak").click(function(event) {
		event.preventDefault();
		if ($(this).html() == 'Tutup <i class="fa fa-angle-up" aria-hidden="true"></i>') {
            $(this).html('Lihat lebih banyak <i class="fa fa-angle-down" aria-hidden="true"></i>');
        }
        else {
            $(this).html('Tutup <i class="fa fa-angle-up" aria-hidden="true"></i>');
        }
		var id = $(this).parent().get(0).id;
		lihatLebihBanyak(id);
	});

	function lihatLebihBanyak(id){
		$("#"+id+" > div > .lebih-banyak").slideToggle();
	}
    /* END OF LIHAT LEBIH BANYAK */


    /* LIHAT LEBIH LANJUT */
	$(".lebih-lanjut").hide();
	$(".lihat-lebih-lanjut").click(function(event) {
		event.preventDefault();
		if ($(this).html() == 'Tutup') {
            $(this).html('Lihat lebih lanjut');
        }
        else {
            $(this).html('Tutup');
        }
		var id = $(this).parent().parent().get(0).id;
		lihatLebihLanjut(id);
		lihatLebihLanjut2(id);
	});

	function lihatLebihLanjut(id){
		$(".panel-body > #"+id+" > .lebih-lanjut").slideToggle();

		$(".panel-body > #"+id+" > ul > .lebih-lanjut").slideToggle();
	}
    /* END OF LIHAT LEBIH LANJUT */

    /* LEBIH LANJUT INSIDE LEBIH BANYAK */
    function lihatLebihLanjut2(id){
		$(".panel-body > .lebih-banyak > #"+id+" > .lebih-lanjut").slideToggle();
	}
    /* END OF LEBIH LANJUT INSIDE LEBIH BANYAK */


    /* HOVER ENDORSE BUTTON INDIVIDU */
	$("[id^=id-keahlian]").hover(
	function () {
		var id = $(this).get(0).id;
		if($("#"+id+" > div > .endorse-this").hasClass("endorsed")){
			$("#"+id+" > div > .endorse-this").html('<i class="fa fa-times" aria-hidden="true"></i> Remove endorse</a>');
		}
		else{
			$("#"+id+" > div > .endorse-this").html('<i class="fa fa-thumbs-up" aria-hidden="true"></i> Endorse</a>');
			$("#"+id+" > div > .endorse-this").css("color", "#ff7f50");
		}
	},
	function () {
		var id = $(this).get(0).id;
		if($("#"+id+" > div > .endorse-this").hasClass("endorsed")){
			$("#"+id+" > div > .endorse-this").html('<i class="fa fa-thumbs-up" aria-hidden="true"></i></a>');
		}
		else{
			$("#"+id+" > div > .endorse-this").html('<i class="fa fa-thumbs-up" aria-hidden="true"></i></a>');
			$("#"+id+" > div > .endorse-this").css("color", "#ddd");
		}
	});
    /* END OF HOVER ENDORSE BUTTON */


    /* HOVER ENDORSE BUTTON ORGZ */
	$("[id^=id-whatwedo]").hover(
	function () {
		var id = $(this).get(0).id;
		if($("#"+id+" > div > div > div > .endorse-this").hasClass("endorsed")){
			$("#"+id+" > div > div > div > .endorse-this").html('<i class="fa fa-times" aria-hidden="true"></i> <span class="sz12">Remove endorse</span></a>');
		}
		else{
			$("#"+id+" > div > div > div > .endorse-this").html('<i class="fa fa-thumbs-up" aria-hidden="true"></i> <span class="sz12">Endorse</span></a>');
			$("#"+id+"> div > div > div > .endorse-this").css("color", "#ff7f50");
		}
	},
	function () {
		var id = $(this).get(0).id;
		if($("#"+id+" > div > div > div > .endorse-this").hasClass("endorsed")){
			$("#"+id+" > div > div > div > .endorse-this").html('<i class="fa fa-thumbs-up" aria-hidden="true"></i></a>');
		}
		else{
			$("#"+id+" > div > div > div > .endorse-this").html('<i class="fa fa-thumbs-up" aria-hidden="true"></i></a>');
			$("#"+id+" > div > div > div > .endorse-this").css("color", "#ddd");
		}
	});
    /* END OF HOVER ENDORSE BUTTON */
	$("[id^=id-penawaran-item]").hover(
		function(){
			$(this).addClass("hovered");
		},
		function(){
			$(this).removeClass("hovered");
	});

	$("[id^=id-penawaran-item]").click(function(event) {
		event.preventDefault();
		if($("[id^=id-penawaran-item]").hasClass("selected")){
			$($("[id^=id-penawaran-item]")).removeClass("selected");
			$(this).addClass("selected");
		}
		else{
			$(this).addClass("selected");
		}
	});


    /* FORM PROYEK */
    $("[id^=bantu-]").hide();

    $(".form-cancel").click(function(event) {
    	$(this).parent().parent().parent().parent().parent().hide();
    });

    	/* DANA */
    $("[id^=btn-dana-]").click(function(event) {
    	$(this).parent().siblings("[id^=bantu-dana-]").show();
    });
	$("[id^=dana-meetmail-]").hide();
	$("[id^=li-dana-penawaran-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-dana-meetmail-]").removeClass("active");
		$(this).parent().siblings("[id^=dana-penawaran-]").show();
		$(this).parent().siblings("[id^=dana-meetmail-]").hide();
	});
	$("[id^=li-dana-meetmail-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-dana-penawaran-]").removeClass("active");
		$(this).parent().siblings("[id^=dana-meetmail-]").show();
		$(this).parent().siblings("[id^=dana-penawaran-]").hide();
	});

		/* SDM */
    $("[id^=btn-sdm-]").click(function(event) {
    	$(this).parent().siblings("[id^=bantu-sdm-]").show();
    });
	$("[id^=sdm-meetmail-]").hide();
	$("[id^=li-sdm-penawaran-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-sdm-meetmail-]").removeClass("active");
		$(this).parent().siblings("[id^=sdm-penawaran-]").show();
		$(this).parent().siblings("[id^=sdm-meetmail-]").hide();
	});
	$("[id^=li-sdm-meetmail-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-sdm-penawaran-]").removeClass("active");
		$(this).parent().siblings("[id^=sdm-meetmail-]").show();
		$(this).parent().siblings("[id^=sdm-penawaran-]").hide();
	});

		/* TEKNO */
    $("[id^=btn-tekno-]").click(function(event) {
    	$(this).parent().siblings("[id^=bantu-tekno-]").show();
    });
	$("[id^=tekno-meetmail-]").hide();
	$("[id^=li-tekno-penawaran-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-tekno-meetmail-]").removeClass("active");
		$(this).parent().siblings("[id^=tekno-penawaran-]").show();
		$(this).parent().siblings("[id^=tekno-meetmail-]").hide();
	});
	$("[id^=li-tekno-meetmail-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-tekno-penawaran-]").removeClass("active");
		$(this).parent().siblings("[id^=tekno-meetmail-]").show();
		$(this).parent().siblings("[id^=tekno-penawaran-]").hide();
	});

		/* LAINNYA */
    $("[id^=btn-lainnya-]").click(function(event) {
    	$(this).parent().siblings("[id^=bantu-lainnya-]").show();
    });
	$("[id^=lainnya-meetmail-]").hide();
	$("[id^=li-lainnya-penawaran-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-lainnya-meetmail-]").removeClass("active");
		$(this).parent().siblings("[id^=lainnya-penawaran-]").show();
		$(this).parent().siblings("[id^=lainnya-meetmail-]").hide();
	});
	$("[id^=li-lainnya-meetmail-]").click(function(event) {
		$(this).addClass("active");
		$("[id^=li-lainnya-penawaran-]").removeClass("active");
		$(this).parent().siblings("[id^=lainnya-meetmail-]").show();
		$(this).parent().siblings("[id^=lainnya-penawaran-]").hide();
	});
    /* END OF FORM PROYEK */
})