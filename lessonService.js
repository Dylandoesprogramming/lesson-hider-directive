app.service('lessonService', function($http) {
    this.getSchedule = function() {
        return $http({
            method: "Get",
            url: "schedule.json"
        })
    }

});