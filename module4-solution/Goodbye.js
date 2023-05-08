function(x){
	var y = "Goodbye";
	var Byespeaker = function(name){
		console.log(y + "" + name);
	}
	x.Byespeaker=Byespeaker; 
}(x);