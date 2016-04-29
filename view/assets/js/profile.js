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
			$(".panel-edit").show();
		}, 
		function () {
			$(".panel-edit").hide();
		}
		);
	}

    $(".panel-edit").hide();
    hoverPanel("#panel-deskripsi");
    hoverPanel("#panel-organisasi");
    hoverPanel("#panel-proyek");
    hoverPanel("#panel-penawaran");
    hoverPanel("#panel-karya");
    hoverPanel("#panel-penghargaan");
    hoverPanel("#panel-media");
    hoverPanel("#panel-pendidikan");
    hoverPanel("#panel-rekomendasi");
    hoverPanel("#panel-gabung");
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
	});

	function lihatLebihLanjut(id){
		$("#panel-proyek > div > #"+id+" > .lebih-lanjut").slideToggle();
	}
    /* END OF LIHAT LEBIH LANJUT */
})