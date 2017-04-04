var MyApp;
(function (MyApp) {
    var CalcController = (function () {
        function CalcController() {
        }
        CalcController.prototype.add = function (firstNum, secNum) {
            this.result = firstNum + secNum;
        };
        return CalcController;
    }());
    angular.module("MyApp").controller("CalcController", CalcController);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controller.js.map