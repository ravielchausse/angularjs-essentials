angular.module("listaTelefonica").filter("ellipsis",
	() => {
		return (input, size) => {
			if (input.length <= size) return input; 
			var output = input.substring(0, (size || 3)) + "...";
			return output;
		}	
	}
);