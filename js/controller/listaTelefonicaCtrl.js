angular.module("listaTelefonica").controller("listaTelefonicaCtrl",
	function ($scope, $filter, serialGenerator, contatos) {
		$scope.app = $filter('upper')("Lista Telefônica");
		$scope.contatos = contatos.data;
		$scope.hasContatoSelecionado = false;
		let init = () => {
			generateSerial($scope.contatos);
			calcularImpostos($scope.contatos);
		};
		let generateSerial = (contatos) => {
			contatos.forEach(contato => contato.serial = serialGenerator.generate());
		};
		let calcularImposto = (preco) => {
			let imposto = 1.2;
			return preco * imposto;
		};
		let calcularImpostos = (contatos) => {
			contatos.forEach((contato) => {
				contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
			});
		};
		$scope.apagar = (contatos) => {
			$scope.contatos = contatos.filter(contato => {
				if (!contato.selecionado) return contato;
			});
			$scope.checkContatoSelecionado($scope.contatos);
		};
		$scope.ordenarPor = (campo) => {
			$scope.criterioDeOrdenacao = campo;
			$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
		};
		// Sem Uso.
		$scope.isContatoSelecionado = contatos => contatos.some(contato => contato.selecionado);
		$scope.checkContatoSelecionado = (contatos) => {
			$scope.hasContatoSelecionado = contatos.some(contato => contato.selecionado);
		};
		init();
	}
);
