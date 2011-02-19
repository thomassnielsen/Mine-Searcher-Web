<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Mine Searcher Web Edition</title>
  <link rel="stylesheet" href="style.css" type="text/css"/>
  <link rel="shortcut icon" href="/icon.ico" type="image/x-icon" /> 
  
  <link type="text/css" href="css/ui-lightness/jquery-ui-1.8.5.custom.css" rel="stylesheet" />	
	<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.5.custom.min.js"></script>
  <script type="text/javascript" src="js/minesearcher.js"></script>
  
  <script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-10579145-2']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

  </script>
</head>
<body id="index" class="home" onload="newgame(10,10,10)">
<div id="wrapper">
  <div id="left">
    <div id="title"><a href="/" style="width:100%;height:100%;display:block;">&laquo; Back</a></div>
    <div class="widthslider">
      <p>
        <label for="widthamount" style="display:inline">Width</label>
        <input type="text" id="widthamount" name="widthamount" style="border:0; color:#f6931f; font-weight:bold;display:inline;width:50px;background-color:black;" />
      </p>
      <div id="widthslider"></div>
    </div>
    <div class="heightslider">
      <p>
        <label for="heightamount" style="display:inline">Height</label>
        <input type="text" id="heightamount" name="heightamount" style="border:0; color:#f6931f; font-weight:bold;display:inline;width:50px;background-color:black;" />
      </p>
      <div id="heightslider"></div>
    </div>
    <div class="bombslider">
      <p>
        <label for="bombamount" style="display:inline">Bombs</label>
        <input type="text" id="bombamount" name="bombamount" style="border:0; color:#f6931f; font-weight:bold;display:inline;width:50px;background-color:black;" />
      </p>
      <div id="bombslider"></div>
      <p id="newgamebutton"><input type="button" value="New Game" onclick="newgame(document.getElementById('widthamount').value,document.getElementById('heightamount').value,document.getElementById('bombamount').value)"></p>
    </div>
    <div style="margin:5px;padding:2px;text-align:left;border:1px solid gray;-moz-border-radius: 10px;border-radius: 10px;-webkit-border-radius: 10px;">
      <p>Info<br><span style="font-size:12px;">This is the web version of the iPhone and iPad game Mine Searcher (link below). This version has limited features (no flagging, sound or game settings). To get the full experience, purchase the iPhone/iPad edition for only $1,99! This web version works best in fast, modern browsers such as Firefox, Safari and Chrome</span>.</p>
    </div>
    <div style="margin:5px;padding-top:5px;text-align:center;border:1px solid gray;-moz-border-radius: 10px;border-radius: 10px;-webkit-border-radius: 10px;">
      <div id="imgborder"><a href="http://itunes.apple.com/no/app/mine-searcher/id367248882?mt=8"></a></div>
      <p><a href="http://itunes.apple.com/no/app/mine-searcher/id367248882?mt=8">Mine Searcher for iPhone and iPad</a><br><span style="font-size:10px;">(<a href="http://itunes.apple.com/no/app/mine-searcher-free/id373809808?mt=8">free edition</a>)</span></p></div>
  </div>
  <div id="right"><!--
    Gameboard
    <form name="testform" id="testform">
    <input type="text" id="test1" value="width">
    <input type="text" id="test2" value="height">
    <input type="text" id="test3" value="bombs">
    </form>
    -->
    <div id="statusimg" style="text-align:center;width:100%;"><a href="#" onclick="newgame(document.getElementById('widthamount').value,document.getElementById('heightamount').value,document.getElementById('bombamount').value)">
      <img src="/minesearcher/img/Smileyhappy.png" id="smiley" alt="smiley" style="border:0px;margin:0px;"></a></div>
    <div id="gameboard" class="gameboard"></div>
    <div id="log" class="log"></div>
  </div>
</div>
</body>
</html>