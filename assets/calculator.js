/* JavaScript Document */

// function closure; exists with other js in a page
// defintions are declared as Angular application for HTML
(function () {

    // declares variable app as the name myCalculator
    var app = angular.module('myCalculator', []);

    // defines controller named CalculatorController
    // declares scope service used from Angular
    // scope allows passing of variables beteen HTML and JavaScript
    // scope will be initiated when we run function 
    app.controller('CalculatorController', ['$scope', function ($scope) {

        // array containing common lumen settings on light bulb packaging
        $scope.lumen_options = [375, 600, 900, 1125, 1600];

        // default value for lumens when page first loads
        $scope.current_lumens = 600;

        // default value for cost when page first loads
        $scope.current_cost = 12;

        // default value for hours when page first loads
        $scope.current_hours = 3;

        // default value for total number of days when page first loads
        $scope.total_days = 365;

        // declaration for incandescent coversion
        $scope.inc_conversion = .0625;

        // declaration for halogen conversion
        $scope.hal_conversion = .0450;

        // declaration for compact fluorescent conversion
        $scope.cfl_conversion = .0146;

        // declaration for led conversion
        $scope.led_conversion = .0125;

        // updates all calculations using function
        $scope.calculate = function () {

            // calculates incandescent wattage coversion
            $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);

            // calculates halogen wattage coversion
            $scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);

            // calculates cfl wattage coversion
            $scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);

            // calculates led wattage coversion
            $scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);

            // resets to 24 hours in a day if user inputs more than 24 hours
            if ($scope.current_hours > 24) { $scope.current_hours = 24; }

            // calculates total number of hours
            var total_hours = $scope.total_days * $scope.current_hours;

            // calculates cost 
            var cost = $scope.current_cost / 100;

            // calculates cost of inc 
            $scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);

            // calculates cost of hal 
            $scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);

            // calculates cost of cfl 
            $scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);

            // calculates cost of led 
            $scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);
        }

        // calls calculate function
        $scope.calculate();

    }]);

})();

