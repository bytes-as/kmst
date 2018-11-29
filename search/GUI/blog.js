var data_list = [];
var years_min,years_max;
$(function(){
  fillData();
  addCover();
  blogbody();
  blogTitle();
  BlogImage();
  blogP();
  quote();
  DropBox();
  Author();
filter_listener();
get_search();
  // $("blog").hide();
});

function addCover(){
  $("cover").each(function(i,obj){
    var d1 = $("<div></div>");
    var d2 = $("<div></div>");
    var c = $("<center></center>");
    var i = $("<img>");
    d1.addClass("cover_block");
    d2.addClass("cover_bg");
    d2.css("background-image", 'url("https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg")');
    i.attr("src",$(this).attr("src"));
    i.addClass("img-thumbnail w-50 ml-2");
    c.append(i);
    d1.append(d2,c);
    $(this).append(d1);
  });
}

function blogbody(){
  // $("blog")
  var dr = $("<div></div>");
  var dc1 = $("<div></div>");
  var dc2 = $("<div></div>");
  dr.addClass("row");
  dc1.addClass("col-xl-2 col-md-2 bd-sidebar m-4 pt-4 border-right");
  dc1.append($("sidebar:first"));
  dc2.addClass("col-xl-8 col-md-6");
  dc2.html($("blog").html());
  $("blog").html("");
  dr.append(dc1,dc2);
  $("blog").append(dr);
}

function blogTitle(){
    $("titl").each(function(i,obj){
      var d1 = $("<div></div>");
      var h1 = $("<h3></h3>");
      var p1 = $("<p></p>");
      h1.text($(this).text());
      p1.text($("subt:eq("+i+")").text());
      p1.addClass("ttl-summary");
      d1.addClass("ttl");
      d1.append(h1,p1);
      $(this).text("");
      $("subt:eq("+i+")").text("");
      $(this).append(d1);
    });
}

function BlogImage(){
  $("blogImg").each(function(i,obj){
    i = $("<img/>");
    i.attr("src",$(this).attr("src"));
    i.addClass("img-thumbnail ml-2 mb-2");
    $(this).append(i);
  });
}

function blogP(){
  $("blogp").each(function(){
    p = $("<p></p>");
    p.addClass("blg pl-4");
    p.html($(this).html());
    $(this).html("");
    $(this).append(p,$("<hr>"));
  });
}

function quote(){
  $("quote").each(function(i,obj){
    bq = $("<blockquote></blockquote>");
    // bq.addClass("blockquote");
    p = $("<p></p>");
    p.addClass("mb-0");
    f = $("<footer></footer>");
    p.text($(this).text());
    f.addClass("blockquote-footer");
    console.log($("qsource:eq("+i+")").text());
    f.text($("qsource:eq("+i+")").text());
    $("qsource:eq("+i+")").text("");
    $(this).html("");
    bq.append(p,f);
    $(this).append(bq);
  });
}

function DropBox(){
  $("drop").each(function(i,obj){
    dt = $(this).find("dropTitle");
    db = $(this).find("dropBody");
    $(this).addClass("accordion");
    $(this).attr("id","accordionExample");
    d1 = $("<div></div>");
    d2 = $("<div></div>");
    d3 = $("<div></div>");
    d4 = $("<div></div>");
    b = $("<button></button>");
    h1 = $("<h5></h5>");
    d1.addClass("card");
    d2.addClass("card-header");
    d2.attr("id","header"+i);
    h1.addClass("mb-0");
    b.text(dt.text());
    b.addClass("btn btn-link collapsed");
    b.attr({"type":"button", "data-toggle":"collapse","data-target":"#collapse"+i,"aria-expanded":"false","aria-controls":"collapse"+i});
    d2.append(b);
    d3.attr({"id":"collapse"+i, "aria-labelledby":"heading"+i, "data-parent":"#accordionExample"});
    d3.addClass("collapse");
    d4.addClass("card-body");
    d4.html(db.html());
    d3.append(d4);
    d1.append(d2,d3);
    dt.remove();
    db.remove();
    $(this).append(d1);
  });
}

function Author(){
  $("author").each(function(i,obj){
    d1 = $("<div></div>");
    d2 = $("<div></div>");
    d3 = $("<div></div>");
    h = $("<h3></h3>");
    p = $("<p></p>");
    i = $("<img/>");
    d1.addClass("row Author");
    d2.addClass('col-3');
    d3.addClass('col-9');
    i.attr("src",$(this).find('authorImg').attr("src"));
    i.addClass("img-thumbnail rounded-circle");
    d3.addClass("pt-4");
    h.text($(this).find('authorName').html());
    p.text($(this).find('authorDetails').html());
    d2.append(i);
    d3.append(h);
    d3.append(p);
    d1.append(d2,d3);
    $(this).text("");
    $(this).append($('<hr/>'));
    $(this).append(d1);
  });
}

related_list = ["other posts","other posts","other posts","other posts","other posts"];
next_list = [];

function SideBar(){
  $(".bd-sidebar").each(function(i,obj){
    var d1 = $("<div></div>");
    var d2 = $("<div></div>");
    for(i=0;i<related_list.lenght;i++){
      var t = $("<div></div>");
      var a = $("<a></a>");
      a.text(related_list[i]);
      t.append(a);
      d1.append(t);
    }
    $(this).append(d1);
  });
}
countries = [];
function Countries(){
  for(i=0;i<countries.size();i++){

  }
}


$(document).ready(function () {
   var outputSpan = $('#spanOutput');
   var sliderDiv = $('#slider');

   sliderDiv.slider({
       range: true,
       min: 18,
       max: 100,
       values: [20, 30],
       slide: function (event, ui) {
           outputSpan.html(ui.values[0] + ' - ' + ui.values[1] + ' Years');
          },
       stop: function (event, ui) {
           $('#txtMinAge').val(ui.values[0]);
           $('#txtMaxAge').val(ui.values[1]);
       }
   });

   outputSpan.html(sliderDiv.slider('values', 0) + ' - '
       + sliderDiv.slider('values', 1) + ' Years');
   $('#txtMinAge').val(sliderDiv.slider('values', 0));
   $('#txtMaxAge').val(sliderDiv.slider('values', 1));
});


var availableTags = [];
$("#selector").autocomplete({
    source: availableTags,
    messages: {noResults: '',results: function() {
    }}
});

$( function() {
  var date = new Date();
  var mn = 1955;
  var mx = date.getFullYear();
    $( "#slider-range" ).slider({
    range: true,
    min: mn,
    max: mx,
    values: [ mn, mx ],
    slide: function( event, ui ) {
      $( "#years" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      setValuesY(ui.values[ 0 ],ui.values[ 1]);
    }
  });
  
  $( "#years" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );

    $( "#payLoad-range" ).slider({
    range: true,
    min: 1,
    max: 140,
    values: [ 1, 140 ],
    slide: function( event, ui ) {
      $( "#payLoad" ).val( "" + ui.values[ 0 ] + ",000 Kg- " + ui.values[ 1 ]+",000 Kg" );
    }
  });
  $( "#payLoad" ).val( " " + $( "#payLoad-range" ).slider( "values", 0 ) +
    ",000 Kg- " + $( "#payLoad-range" ).slider( "values", 1 )+",000 Kg" );

    $( "#weight-range" ).slider({
    range: true,
    min: 1,
    max: 3000,
    values: [ 1, 3000 ],
    slide: function( event, ui ) {
      $( "#weight" ).val( "" + ui.values[ 0 ] + "K Kg- " + ui.values[ 1 ]+"K Kg" );
    }
  });
  $( "#weight" ).val( " " + $( "#weight-range" ).slider( "values", 0 ) +
    "K Kg- " + $( "#weight-range" ).slider( "values", 1 )+"K Kg" );


    $( "#duration-range" ).slider({
    range: true,
    min: 1,
    max: 3000,
    values: [ 1, 3000 ],
    slide: function( event, ui ) {
      $( "#duration" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ]+" Years" );
    }
  });
  $( "#duration" ).val( " " + $( "#duration-range" ).slider( "values", 0 ) +
    " - " + $( "#duration-range" ).slider( "values", 1 )+" Years" );


    $("#Manned").on("click",function(){
      if(!($("#Manned").is(':checked')))
        $("#NuofAstro").removeClass('show');
      else
        $("#NuofAstro").addClass('show');
    })

    var handle = $( "#AstronotsCount" );
    $( "#AstronotsCount_slider" ).slider({
      min:1,
      max:8,
      value: 8,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
        setManned(ui.value);
      }
    });
});

var years_min = 1995,years_max=2018,AstronotsCount=8;

function setValuesY(ymin,ymax){
  years_min = ymin;
  years_max = ymax;
}

function setManned(n){
  AstronotsCount = n;
}

function fillData_search(){
  var r = $("results");
  r.empty();
  var h = $("#hiden");
  var counter = 0;
  
  for(i=0;i<data_list.length;i++){
    var cond = true;
    console.log($('#selector')[0].value.split('  :')[0]);
    k = $('#selector')[0].value.split('  :')[1];
    v = $('#selector')[0].value.split('  :')[0]; 
    for (var key in data_list[i]){
      if(key == k)
        if (data_list[i][k].value.indexOf(v) !=-1){
          cond =false;
          break;
          }
      }
    if(cond)
      continue;

    counter+=1;
    var bp = $("<blogp></blogp>");

    for (var key in data_list[i]){
        if(key == 'wikipedia'){
          var a = $("<a></a>");
          a.attr('href',data_list[i][key].value);
          a.text(key + " : " + data_list[i][key].value);
          bp.append(a);
          continue;
        }
        if(key == 'crews'){
          if(data_list[i][key].value == '')
          continue;
        }
        if(key == 'image' || key == 'item'){
          continue;
        } 
        var d = $("<div></div>");
        if(key == 'itemLabel')
        d.text('Name' + " : " + data_list[i][key].value);
        else if(key == 'launchdate')
        d.text(key + " : " + data_list[i][key].value.substring(0,4));
        else
          d.text(key + " : " + data_list[i][key].value);
        bp.append(d);
    }
    r.append(bp);
    r.append($('<hr>'));
  }

}


function fillData(){
  var r = $("results");
  r.empty();
  var h = $("#hiden");
  // console.log(data_list.length);
  var counter = 0;
  
  if(availableTags.length == 0){
    for(i=0;i<data_list.length;i++){
    for (var key in data_list[i]){
      if(key == 'item')
        continue;
      if(key == 'crews'){
        var lis = data_list[i][key].value.split(",");
        for (var el in lis){
          availableTags.push(lis[el]+'  :'+key);  
          }
        }
        else {
          if(key == 'launchdate')
          availableTags.push(data_list[i][key].value.substring(0,4)+'  :'+key);
          else
          availableTags.push(data_list[i][key].value+'  :'+key);
        }
      }
    }
  }

  
  for(i=0;i<data_list.length;i++){
    // if(counter>20)
    //   break;
    // counter+=1;
    // console.log(years_max);
    // console.log(data_list[i]['crews'].value.split(",").length );
    if(years_min>data_list[i]['launchdate'].value.substring(0,4) || years_max<data_list[i]['launchdate'].value.substring(0,4))
      continue;
    if($('#Manned').is(":checked") && !$('#Unmanned').is(":checked") ){
      // console.log(data_list[i]['crews'].value.split(",").length);
      if(data_list[i]['crews'].value.split(",").length > AstronotsCount || data_list[i]['crews'].value== '')
        continue;
    }
    if(!$('#Manned').is(":checked") && $('#Unmanned').is(":checked") ){
      if(data_list[i]['crews'].value != '')
        continue;
    }

    counter+=1;
    var bp = $("<blogp></blogp>");
    var divrow = $("<div></div>");
    var leftdiv = $("<div></div>");
    var rightdiv = $("<div></div>");

    for (var key in data_list[i]){
        if(key == 'wikipedia'){
          var a = $("<a></a>");
          a.attr('href',data_list[i][key].value);
          a.text(key + " : " + data_list[i][key].value);
          bp.append(a);
          continue;
        }
        if(key == 'crews'){
          if(data_list[i][key].value == '')
          continue;
        }
        if(key == 'image' || key == 'item'){
          continue;
        } 
        var d = $("<div></div>");
        if(key == 'itemLabel')
        d.text('Name' + " : " + data_list[i][key].value);
        else if(key == 'launchdate')
        d.text(key + " : " + data_list[i][key].value.substring(0,4));
        else
          d.text(key + " : " + data_list[i][key].value);
        bp.append(d);
    }
    r.append(bp);
    r.append($('<hr>'));
  }
}

function filter_listener(){
  console.log('listner');
  // $('#Manned').change(function(){
  //   console.log('listner22');
  //   fillData(); 
  // });
  // $('#Unmanned').change(function(){fillData();});
  // $('#Scientific').change(function(){fillData();});
  // $('#Exploration').change(function(){fillData();});
  // $('#Military').change(function(){fillData();});
  // $('#Success').change(function(){fillData();});
  // $('#Unsuccess').change(function(){fillData();});
}
var td;

function get_search(){
var endpointUrl = 'https://query.wikidata.org/sparql?',
    sparqlQuery = 'SELECT DISTINCT ?item ?itemLabel ?launchdate (GROUP_CONCAT(distinct ?crewLabel; SEPARATOR=", ") AS ?crews)  (SAMPLE(?image) AS ?image) ?wikipedia ?launchsite WHERE {'+
    '{ ?item wdt:P31 wd:Q26529. }'+
    'UNION'+
    '{ ?item wdt:P31 wd:Q1378139. }'+
    'UNION'+
    '{ ?item wdt:P31 wd:Q2133344. }'+
    'UNION'+
    '{ ?item wdt:P31 wd:Q40218. }'+
    'UNION'+
    '{ ?item wdt:P31 wd:Q752783. }'+
    'UNION'+
    '{ ?item wdt:P137 wd:Q23548. }'+
    'UNION'+
    '{ ?item wdt:P1427 wd:Q845774. }'+
    'UNION'+
    '{ ?item wdt:P31 wd:Q5916. }'+
    '?item wdt:P619 ?launchdate.'+
    '?item rdfs:label ?itemLabel.'+
    'OPTIONAL { ?item wdt:P18 ?image. }'+
    'OPTIONAL{'+
    '?item wdt:P1029 ?crew .'+
    '?crew rdfs:label ?crewLabel.'+
    'FILTER((LANG(?crewLabel)) = "en")'+
    '    FILTER(!CONTAINS(LCASE(?crewLabel), "\'"@en))'+
    '    }'+
    'OPTIONAL {'+
    '  ?wikipedia schema:about ?item .'+
    '  ?wikipedia schema:inLanguage "en" .'+
    '  FILTER (SUBSTR(str(?wikipedia), 1, 25) = "https://en.wikipedia.org/")'+
    '}'+
    '    OPTIONAL{'+
    '      ?item wdt:P1427 ?lsite .'+
    '      ?lsite rdfs:label ?launchsite .'+
    '      FILTER((LANG(?launchsite)) = "en")'+
    '      FILTER(!CONTAINS(LCASE(?launchsite), "\'"@en))'+
   '     }'+
   ' FILTER((LANG(?itemLabel)) = "en")'+
   ' FILTER(!CONTAINS(LCASE(?itemLabel), "\'"@en))'+
  '}'+
 'GROUP BY ?item ?itemLabel ?launchdate  ?wikipedia ?launchsite',
    settings = {
        headers: { Accept: 'application/sparql-results+json' },
        data: { query: sparqlQuery }
    };

  $.ajax( endpointUrl, settings ).then( function ( data ) {
      // $( 'body' ).append( ( $('<pre>').text( JSON.stringify( data) ) ) );
      let results = data["results"]["bindings"];
      td = results[0];
      for (let i = 0; i < results.length; i++) {
        // data_list.push(temp);
        data_list.push(results[i]);
      //  console.log(results[i]);
        }
  });
}
