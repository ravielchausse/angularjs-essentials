angular.module("listaTelefonica").controller("novoContatoCtrl",
	function ($scope, $location, contatosAPI, operadoras, serialGenerator) {
		$scope.app = "Cadastro de Contato";
		$scope.operadoras = operadoras.data;
		$scope.adicionar = (contato) => {
			contato.serial = serialGenerator.generate();
			contato.data = new Date();
			contatosAPI.saveContato(contato)
			.then(
				({ data }) => {
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					$location.path("/contatos");
				}
			);
		};
	}
);
