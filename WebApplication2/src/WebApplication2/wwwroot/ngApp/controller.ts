namespace MyApp {

    class CalcController {
        public firstNum: number;
        public secNum: number;
        public result: number;
        add(firstNum, secNum) {
            this.result = firstNum + secNum;
        }
    }
    angular.module("MyApp").controller("CalcController", CalcController)
}