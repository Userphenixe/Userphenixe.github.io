function(x){
	var y = "Hello";
	var Hellospeaker = function(name){
		console.log(y + "" + name);
	}
	 x.Hellospeaker=Hellospeaker;
}(x);