angular.module("listaTelefonica").controller("detalhesContatoCtrl",
	function ($scope, $routeParams, contato) {
		$scope.app = "Detalhes do Contato";
		$scope.contato = contato.data;
	}
);
