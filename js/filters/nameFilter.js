angular.module("listaTelefonica").filter("name",
	() => {
		return (input) => {
			var listaDeNomes = input.split(" ");
			var listaDeNomesFormatadas = listaDeNomes.map((nome) => {
				if (/(da|de)/ig.test(nome)) return nome.toLowerCase();
				return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
			});
			return listaDeNomesFormatadas.join(" ");
		}	
	}
);