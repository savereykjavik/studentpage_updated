
	$(document).ready(function(){
		var schools = [
			"Academy of Media Arts Cologne",
			"Berghs School of Communication",
			"Central Saint Martins", 
			"Deutsche Film Berlin", 
			"Hyper Island",
			"London College of Communication",
			"Miami Ad School",
			"National Film & Television School UK",
			"New York Film Academy",
			"SAE Institute",
			"School of Visual Arts",
			"The Creative Circus",
			"VCU Brandcenter"
		];


		var sel = document.getElementById('dropdown');
		for(var i = 0; i < schools.length; i++) {
		    var opt = document.createElement('option');
		    opt.innerHTML = schools[i];
		    opt.value = schools[i];
		    sel.appendChild(opt);
		}
	});