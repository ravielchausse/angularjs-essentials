angular.module("listaTelefonica").factory("contatosAPI", 
	($http, config) => {
		var _getContatos = () => {
			return $http.get(config.baseURL + 'contatos');
		};
		var _getContato = (id) => {
			return $http.get(config.baseURL + 'contatos/' + id);
		};
		var _saveContato = (contato) => {
			return $http.post(config.baseURL + 'contatos', contato);
		};
		return {
			getContato: _getContato,
			getContatos: _getContatos,
			saveContato: _saveContato
		};
	}
);
