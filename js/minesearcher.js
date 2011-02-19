var bombarray = new Array();
var numberarray = new Array();
var counter = 0;
var numberofbombs = 0;

function opennearby(senderid, xSize, ySize){
  senderid = parseFloat(senderid);
  xSize = parseFloat(xSize);
  ySize = parseFloat(ySize);
//  document.write(xSize+","+ySize+","+xSize*ySize+", %:"+senderid%xSize);
	var calculateTops = true;
	var calculateLeft = true;
	var calculateRight = true;
	var calculateBottom = true;
	var i = senderid;
	
	// Check which sides to calculate
	if (i<xSize){calculateTops = false;}
	else {calculateTops = true;}
	if ((i%xSize) === 0){calculateLeft = false;}
	else {calculateLeft = true;}
	if (((i+1)%xSize) === 0) {calculateRight = false;}
	else {calculateRight = true;}
	if (i >= ((xSize*ySize)-xSize)) {calculateBottom = false;}
	else {calculateBottom = true;}

	var current = i;
	if (calculateTops && calculateLeft) {
		if ((current-xSize-1) >= 0){
		  //[self openButton:[buttons objectAtIndex:current-xSize-1]];
		  clicked(current-xSize-1, xSize, ySize);
		  //$('div.log').html("topleft");
		}//topleft
	}
	if (calculateTops) {
		if ((current-xSize) >= 0){
		  //[self openButton:[buttons objectAtIndex:current-xSize]];
		  clicked(current-xSize, xSize, ySize);
		  //$('div.log').html("topleft,top");
		}//topcenter
	}
	if (calculateTops && calculateRight) {
		if ((current-xSize+1) >= 0){
		  //[self openButton:[buttons objectAtIndex:current-xSize+1]];
		  clicked(current-xSize+1, xSize, ySize);
		  //$('div.log').html("topleft,top,topright");
		}//topright
	}
	if (calculateLeft) {
		if ((current-1) >= 0){
		  //[self openButton:[buttons objectAtIndex:current-1]];
		  clicked(current-1, xSize, ySize);
		  //$('div.log').html("topleft,top,topright,left");
		}//left
  }
	if (calculateRight) {
		if ((current+1) < (xSize*ySize)){
		  //[self openButton:[buttons objectAtIndex:current+1]];
		  clicked(current+1, xSize, ySize);
		  //$('div.log').html("topleft,top,topright,left,right");
		} //right
	}
	if (calculateLeft && calculateBottom) {
		if ((current+xSize-1) < (xSize*ySize)){
		  //[self openButton:[buttons objectAtIndex:current+xSize-1]];
		  clicked(current+xSize-1, xSize, ySize);
		  //$('div.log').html("topleft,top,topright,left,right,bottomleft");
	  }//bottomleft
	}
	if (calculateBottom) {
		if ((current+xSize) < (xSize*ySize)){
		  //[self openButton:[buttons objectAtIndex:current+xSize]];
		  clicked(current+xSize, xSize, ySize);
		  //$('div.log').html("topleft,top,topright,left,right,bottomleft,bottom");
		}//bottomsenter
	}
	if (calculateRight && calculateBottom) {
		if ((current+xSize+1) < (xSize*ySize)){
		  //[self openButton:[buttons objectAtIndex:current+xSize+1]];
		  clicked(current+xSize+1, xSize, ySize);
		  //$('div.log').html("topleft,top,topright,left,right,bottomleft,bottom,bottomright");
		}//bottomright
	}	
//	document.write(xSize+","+ySize+","+xSize*ySize+", %:"+senderid%xSize);
}

function calculatenearby (xSize, ySize) {
  xSize = parseFloat(xSize);
  ySize = parseFloat(ySize);  
	var i = 0;
	while (i<(xSize*ySize)){
	  numberarray[i] = 0;
	  i++;
	}
	i = 0;
	var calculateTops = true;
	var calculateLeft = true;
	var calculateRight = true;
	var calculateBottom = true;
	var result = 0;
	while (i < (xSize*ySize)) {
		result = 0;
		// Check which sides to calculate
		if (i<xSize){calculateTops = false;}
		else {calculateTops = true;}
		if (i%xSize === 0){calculateLeft = false;}
		else {calculateLeft = true;}
		if ((i+1)%xSize === 0) {calculateRight = false;}
		else {calculateRight = true;}
		if (i >= (xSize*ySize)-xSize) {calculateBottom = false;}
		else {calculateBottom = true;}
		
		if (calculateLeft && calculateTops) {//Top Left
			if (i-xSize-1 >= 0) {
				if(bombarray[i-xSize-1] === true){result++;}
			}
		}
		if (calculateTops) {//Top Center
			if (i-xSize >= 0) {
				if(bombarray[i-xSize] === true){result++;}
			}
		}
		if (calculateTops && calculateRight) {//Top Right
			if (i-xSize+1 >= 0) {
				if(bombarray[i-xSize+1] === true){result++;}
			}
		}
		if (calculateLeft) {//Left
			if (i-1 >= 0) {
				if(bombarray[i-1] === true){result++;}
			}
		}
		if (calculateRight) {//Right
			if (i+1 < xSize*ySize) {
				if(bombarray[i+1] === true){result++;}
			}
		}
		if (calculateLeft && calculateBottom) {//Bottom Left
			if (i+xSize-1 < xSize*ySize) {
				if(bombarray[i+xSize-1] === true){result++;}
			}
		}
		if (calculateBottom) {//Bottom Center
			if (i+xSize < xSize*ySize) {
				if(bombarray[i+xSize] === true){result++;}
			}
		}
		if (calculateBottom && calculateRight) {//Bottom Right
			if (i+xSize+1 < xSize*ySize) {
				if(bombarray[i+xSize+1] === true){result++;}
			}
		}
		
		numberarray[i] = result;
		
		i++;
	}
	result = 0;
	i = 0;
}
function clicked(idnumber, xSize, ySize) { // image clicked
  idnumber = parseFloat(idnumber);
  if ((bombarray[idnumber] === true)&&(document.getElementById("img" + idnumber).alt != "gameover")){
    document.getElementById("img" + idnumber).src="/minesearcher/img/bombbutton.png";
    // Death code here
    var i = 0;
    while (i<xSize*ySize){
      document.getElementById("img" + i).alt="gameover";
      clicked(i, xSize, ySize);
      i++;
    }
    i=0;
    document.getElementById("smiley").src="/minesearcher/img/Smileydead.png";
  }
  else if(document.getElementById("img" + idnumber).alt == "button") {
    counter++;
    document.getElementById("smiley").src="/minesearcher/img/Smileyhappy.png";
    if (counter >= (xSize*ySize) - numberofbombs){
      //$('div.log').html("Win! ("+xSize+"*"+ySize+"-"+numberofbombs+"="+((xSize*ySize) - numberofbombs));
      var i = 0;
      while (i<xSize*ySize){
        document.getElementById("img" + i).alt="gameover";
        clicked(i, xSize, ySize);
        i++;
      }
      i=0;
      document.getElementById("smiley").src="/minesearcher/img/Smileyglases.png";
    }
    if (numberarray[idnumber] === 0){
     document.getElementById("img" + idnumber).src="/minesearcher/img/clickedbutton.png";  
     document.getElementById("img" + idnumber).alt="clicked";
     opennearby(idnumber, xSize, ySize);
    }
    else {
      document.getElementById("img" + idnumber).src="/minesearcher/img/clickedbutton"+numberarray[idnumber]+".png"; 
      document.getElementById("img" + idnumber).alt="clicked";
    }
  }
  else{
    if (bombarray[idnumber] === true){
      document.getElementById("img" + idnumber).src="/minesearcher/img/bombbutton.png";
    }
    else if (numberarray[idnumber] === 0){
     document.getElementById("img" + idnumber).src="/minesearcher/img/clickedbutton.png";  
    }
    else {
      document.getElementById("img" + idnumber).src="/minesearcher/img/clickedbutton"+numberarray[idnumber]+".png"; 
    }
  }
}

$(function() {  // widthslider
	$("#widthslider").slider({
		value:10,
		min: 0,
		max: 30,
		step: 1,
		slide: function(event, ui) {
			$("#widthamount").val(ui.value);
		}
	});
	$("#widthamount").val($("#widthslider").slider("value"));
});
$(function() {// heightslider
	$("#heightslider").slider({
		value:10,
		min: 0,
		max: 30,
		step: 1,
		slide: function(event, ui) {
			$("#heightamount").val(ui.value);
		}
	});
	$("#heightamount").val($("#heightslider").slider("value"));
});
$(function() { // bombslider
	$("#bombslider").slider({
		value:10,
		min: 1,
		max: 100,
		step: 1,
		slide: function(event, ui) {
			$("#bombamount").val(ui.value);
		}
	});
	$("#bombamount").val($("#bombslider").slider("value"));
});
function newgame(width,height,bombs){ // new game
  if (bombs < width*height) { // We don't want to get an infinate loop or an unbeatable game, do we?
    
    // Set happy smiley for a happy start
    document.getElementById("smiley").src="/minesearcher/img/Smileyhappy.png";
    counter = 0; // We don't want to remember the hitcount from the last game.
    var widthcounter = width;
    var heightcounter = height;
    var boardcontent = "";
    var idnumber = 0;
    var log = "";
    numberofbombs = bombs;
    // log = "Number of bombs: "+numberofbombs+"<br>";
    
    var i = 0; // Hi again my friend, "i the var"
  
    while (i < width*height){ // empty from the last game
      bombarray[i] = false;
      i++;
    }
    
    i = 0;
    var z = false;
    var r = 0;
    while (i < numberofbombs){ // Random bomb placement. Short and easy.
      z = false;
      while (z === false){
        r = Math.floor(Math.random()*(width*height));
        if (bombarray[r] !== true){
          bombarray[r] = true;
          z = true;
        }
      }
      i++;
    }
    
    i = 0;
    calculatenearby(width,height);

/*  // For logging purposes  
    for(i=0;i<bombarray.length;i++){
    log += "<b>bombarray["+i+"] is </b>=>"+bombarray[i]+"<br>";
    }
    i=0;
    for(i=0;i<numberarray.length;i++){
    log += "<b>numberarray["+i+"] is </b>=>"+numberarray[i]+"<br>";
    }
    i=0;*/

    while (heightcounter > 0){ // Create images (buttons)
      while (widthcounter > 0){
        boardcontent += "<a href=\"javascript:void(0)\"><img src=\"/minesearcher/img/button.png\" id=\"img" + idnumber + "\" onclick=\"clicked("+idnumber+","+width+","+height+")\" onMouseOver=\"starthover("+idnumber+")\" onMouseOut=\"endhover("+idnumber+")\" alt=\"button\" style=\"margin:0px;padding:0px;border:0px;\"></a>";
        widthcounter--;
        idnumber +=1;
      }
      widthcounter = width;
      boardcontent += "<br>";
      heightcounter --;
    }
    
  /*  for(i=0;i<numberarray.length;i++){
      boardcontent += "<b>numberarray["+i+"] is </b>=>"+numberarray[i]+"<br>";
    }*/
    
  $('div.gameboard').html(boardcontent);
  $('div.gameboard').css('width', 44*width);
  $('div.gameboard').css('height', 44*height);
  //$('div.log').html(log);
  }
  else{
    alert("Too many bombs!"); // Bad boy!
  }
}

function starthover(idnumber){ // hover image change start
  if (document.getElementById("img" + idnumber).alt == "button"){
    document.getElementById("img" + idnumber).src="/minesearcher/img/clickedbutton.png";
    document.getElementById("smiley").src="/minesearcher/img/Smileyscared.png";
  }
}

function endhover(idnumber){ // hover image change end
  if (document.getElementById("img" + idnumber).alt == "button"){
    document.getElementById("img" + idnumber).src="/minesearcher/img/button.png";
    document.getElementById("smiley").src="/minesearcher/img/Smileyhappy.png";
  }
}




