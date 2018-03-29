//1. change the background color on click
//2. import quotes
//3. change quote on click


var colors = ["#7F6863","#21202B","#D0C4B9","#354984", "#C64623","#A78330","#9FCC2E", "#95A7B8", "#8E225C", "#367B69", "#400C36", "#A29A84", "#B1A64D", "#FA4511", "#020932"]

$(function(){
	$("button").click(function(){
	// create function that picks a random color from the color array
		const randomColor = function(){
			var color = colors[Math.floor(Math.random() * colors.length)];
			return color;			
		};
		$("body").css({"background-color": randomColor()});
	
		//loading JSON file in html file	
		$.getJSON("Quotes.json", function(json) {
			window.jsonObj = json;
  			var randomQuote = function(){
    			var selected = json[Math.floor(Math.random() * json.length)];
    			var string = JSON.stringify(selected);
    			var obj = JSON.parse(string);
    			return "'" + obj.quote + "'" + "<br><br>" + "- " +obj.name;
    			};
    		$("#quotes").html(randomQuote());
		});
    });
});






	

                              