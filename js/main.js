var selected = 0;
var itemList;
$(document).on("pageinit", "#mainPage", function () {
	var url = 'http://putuyoga.wordpress.com/feed/';
	$.mobile.loading( "show" );
	$.get(url, function(xml) {
      var jsonObj = jQuery.parseJSON(xml2json(xml, "").replace("#",""));
	  itemList = jsonObj.rss.channel.item;
	  for(var i = 0; i < itemList.length; i++) {
		$("#listArtikel").append('<li data-theme="b"><a href="#detailPage" onClick="detail(' + i + ');">' + itemList[i].title + '</a></li>');
	  }
	  $("#listArtikel").listview('refresh');
      console.log(jsonObj.rss.channel.item);
	  $.mobile.loading( "hide" );
	}); 
});

function detail(index) {
	var item = itemList[index];
	$("#judul").html(item.title);
	$("#konten").html(item['content:encoded']['#cdata']);
}