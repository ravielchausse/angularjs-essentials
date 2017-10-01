angular.module("listaTelefonica").directive("uiDate",
	function ($filter) {
		return {
			require: "ngModel",
			link (scope, element, attrs, ctrl) {
				var _formatDate = (date) => {
					if (!date) return;
					date = date.replace(/[^0-9]+/g, "");
					if (date.length > 2) {
						date = date.substring(0,2) + "/" + date.substring(2);
					}
					if (date.length > 5) {
						date = date.substring(0,5) + "/" + date.substring(5, 9);
					}
					return date;
				};

				element.bind("keyup", () => {
					ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
					ctrl.$render();
				});

				ctrl.$parsers.push((value) => {
					if (value.length === 10) {
						var arrDate = value.split("/");
						return new Date(arrDate[2], arrDate[1]-1, arrDate[0]).getTime();
					}
				});

				ctrl.$formatters.push(value => $filter("date")(value, "dd/MM/yyyy"));
			}
		};
	}
);
