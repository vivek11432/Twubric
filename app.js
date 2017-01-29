var demo = angular.module('twubric-demo', ['iso.directives', 'kendo.directives']);
demo.controller('MainCtrl', function ($scope, $filter) {
     $scope.seedData = [{ "uid": 1, "username": "sampleuser1", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User One", "twubric": { "total": 3.5, "friends": 1, "influence": 1, "chirpiness": 1.5 }, "join_date": 1358899200 }, { "uid": 2, "username": "sampleuser2", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Two", "twubric": { "total": 5, "friends": 1, "influence": 1, "chirpiness": 1.5 }, "join_date": 1355270400 }, { "fullname": "Sample User Three", "twubric": { "friends": 1, "influence": 1, "chirpiness": 1.5, "total": 7 }, "join_date": 1289433600, "uid": 3, "username": "sampleuser3", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg" }, { "join_date": 1300838400, "uid": 4, "username": "sampleuser4", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Four", "twubric": { "influence": 3, "chirpiness": 4, "total": 9, "friends": 2 } }, { "twubric": { "total": 9, "friends": 1, "influence": 4, "chirpiness": 4 }, "join_date": 1230768000, "uid": 5, "username": "sampleuser5", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Five" }, { "username": "sampleuser6", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Six", "twubric": { "total": 6, "friends": 2, "influence": 3, "chirpiness": 1 }, "join_date": 1252454400, "uid": 6 }, { "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Seven", "twubric": { "total": 8, "friends": 2, "influence": 4, "chirpiness": 2 }, "join_date": 1278201600, "uid": 7, "username": "sampleuser7" }, { "uid": 8, "username": "sampleuser8", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Eight", "twubric": { "friends": 2, "influence": 3, "chirpiness": 2, "total": 7 }, "join_date": 1331510400 }, { "join_date": 1367971200, "uid": 9, "username": "sampleuser9", "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Nine", "twubric": { "total": 8, "friends": 1, "influence": 4, "chirpiness": 3 } }, { "image": "https://lh3.googleusercontent.com/-I1BJYh52Vvc/AAAAAAAAAAI/AAAAAAAAAAA/8bkN374vtYk/s32-c/photo.jpg", "fullname": "Sample User Ten", "twubric": { "chirpiness": 3, "total": 5, "friends": 1, "influence": 1 }, "join_date": 1228953600, "uid": 10, "username": "sampleuser10" }];
     $scope.xList = $scope.seedData;
     $scope.startDateObject = new Date("1/15/1970");
     $scope.endDateObject = new Date("1/18/1970");
     $scope.startDateString = "15-1-1970";
     $scope.endDateString = "18-1-1970";

    $scope.removeItemDetails = function (name) {
        console.log("Start" + $scope.seedData.length);
        let result = [];
        for (let i = 0; i < $scope.seedData.length; i++) {
           
            if ($scope.seedData[i].username != name) {
                result.push($scope.seedData[i]);
            }
        }
        console.log(result.length);
        $scope.seedData = result;
        $scope.xList = result;

    };   
    $scope.monthPickerConfig = {
        format: "dd-MM-yyyy",
    };
    $scope.monthPickerConfigEnd = {
        format: "dd-MM-yyyy",
    };
    $scope.executeDateFunction = function (e) {
        $scope.startDateString = kendo.toString($scope.startDateObject, "dd-MM-yyyy");
        $scope.endDateString = kendo.toString($scope.endDateObject, "dd-MM-yyyy");
        if (($scope.startDateString != null || $scope.startDateString != undefined) && ($scope.endDateString != null || $scope.endDateString != undefined)) {
            if (process($scope.endDateString) >= process($scope.startDateString)) {                
                let tf;
                let result = [];
                $scope.xList = result;
                for (var i = 0; i < $scope.seedData.length; i++) {
                    tf = $filter('date')($scope.seedData[i].join_date, 'dd-MM-yyyy');
                    if (process($scope.startDateString) <= process(tf) && process(tf) <= process($scope.endDateString)) {
                        result.push($scope.seedData[i]);
                    }
                }
                $scope.xList = result;
            }
            else {
                alert("Check dates :::::: Start date < End date");
            }
        }
    };
    $scope.onStartDateSelected = function (e) {
        $scope.executeDateFunction();
    };
    $scope.onEndDateSelected = function (e) {
        $scope.executeDateFunction();
    };
 });
 function parseDate(input) {
     let parts = input.split('-');
     return new Date(parts[2], parts[1] - 1, parts[0]);
 }
 function process(date) {
     let parts = date.split("-");
     return new Date(parts[2], parts[1] - 1, parts[0]);
 }