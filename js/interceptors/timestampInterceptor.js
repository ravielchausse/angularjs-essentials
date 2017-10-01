angular.module("listaTelefonica").factory("timestampInterceptor",
	function () {
		return {
			request: function (config) {
				let { url } = config;
				if (url.indexOf("view") > -1) return config;
				let timestamp = new Date().getTime();
				config.url = `${url}?timestamp=${timestamp}`;
				return config;
			}
		};
	}
);
