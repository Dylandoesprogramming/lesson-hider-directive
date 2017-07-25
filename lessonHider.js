angular.module('directivePractice')
    .directive('lessonHider', function() {

        return {
            templateUrl: 'lessonHider.html',
            restrict: 'E',
            scope: {
                lesson: '=',
                dayAlert: '&'
            },
            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
                $scope.checked = function(lesson) {
                    // lesson.css('text-decoration', 'line-through');

                }
            },
            link: function(scope, element, attributes) {
                console.log(scope.lesson);
                scope.getSchedule.then(function(response) {
                    scope.schedule = response.data;
                    scope.schedule.forEach(function(scheduleDay) {
                        if (scheduleDay.lesson === scope.lesson) {
                            scope.lessonDay = scheduleDay.weekday;
                            // console.log(scope.lessonDay + " : " + scheduleDay.lesson)
                            // element.css('text-decoration', 'line-through');
                            return;
                        }
                    });
                });

            }
        }

    });