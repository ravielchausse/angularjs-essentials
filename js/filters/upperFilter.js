angular.module("listaTelefonica").filter("upper",
	function () {
		return (input) => {
			if (!input) return; 
			return input.toUpperCase();
		}	
	}
);
