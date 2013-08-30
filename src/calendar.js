"use strict";


var app = angular.module('simpleCalendar', []);

var language = {

    ms0: '一月',
    ms1: '二月',
    ms2: '三月',
    ms3: '四月',
    ms4: '五月',
    ms5: '六月',
    ms6: '七月',
    ms7: '八月',
    ms8: '九月',
    ms9: '十月',
    ms10: '十一月',
    ms11: '十二月',

    d0: '星期日',
    d1: '星期一',
    d2: '星期二',
    d3: '星期三',
    d4: '星期四',
    d5: '星期五',
    d6: '星期六',

    thisMonth: "本月",
    prevMonth: "上個月",
    nextMonth: "下個月",

};


Date.prototype.getMonthFormatted = function() {
    var month = this.getMonth() + 1;
    return month < 10 ? '0' + month : month;
}


app.controller('calendarController', ['$scope', '$element', 
    function ($scope, $element) {        
        var ctrl = this;
        var contentObj = $scope.content;

        $scope.today = new Date();
        $scope.currentDate = new Date();        
        $scope.language = language;
        $scope.navigate = {};

        // month between 1 and 12
        var daysInMonth = function(month,year){            
            return new Date(year, month, 0).getDate();
        }

        $scope.navigate.prevMotnth = function(){                  
            $scope.currentDate.setMonth($scope.currentDate.getMonth()-1);
            ctrl.refreshCalendar();
        }                        
        $scope.navigate.nextMotnth = function(){                        
            $scope.currentDate.setMonth($scope.currentDate.getMonth()+1);
            ctrl.refreshCalendar();
        }
        $scope.navigate.thisMotnth = function(){                        
            $scope.currentDate = new Date();            
            ctrl.refreshCalendar();
        }

        // month between 1 ~ 12
        var getDateContent = function(year,month,date){                          
            if(contentObj != null && contentObj[year] != null && 
                contentObj[year][month] != null && 
                contentObj[year][month][date] != null){
                return contentObj[year][month][date].join("<br/>");    
            }         
            return "";
        }

        // month between 1 ~ 12
        ctrl.monthGenegrator = function(month, year){            
            var monthArray = [];
            var firstDay = new Date(year, month-1, 1, 0, 0, 0, 0);
            //  weekDay between 1 ~ 7 , 1 is Monday, 7 is Sunday
            var firstDayInFirstweek = (firstDay.getDay() > 0) ? firstDay.getDay() : 7; 
            var daysOfMonth = daysInMonth(month,year);
            var prevDaysOfMonth = daysInMonth(month-1,year);
            
            var recordDate = 0; //record which day obj already genegrate
            
            //first week row
            monthArray.push(ctrl.weekGenegrator(year , month , recordDate-firstDayInFirstweek ,daysOfMonth , prevDaysOfMonth));

            recordDate = 7 - firstDayInFirstweek;
            //loop for following week row           
            while(recordDate < daysOfMonth){
                monthArray.push(ctrl.weekGenegrator(year , month , recordDate , daysOfMonth));
                recordDate += 7;                
            }

            //set isToday
            if($scope.currentDate.getMonth() == $scope.today.getMonth() &&
                $scope.currentDate.getFullYear() == $scope.today.getFullYear() ){                                            
                var atWeek = Math.ceil(($scope.today.getDate()+firstDayInFirstweek-1) / 7) -1;
                var atDay = ($scope.today.getDate()+firstDayInFirstweek-2) % 7;                
                monthArray[atWeek][atDay].isToday = true;
            }            

            return monthArray;
        }

        //month between 1~12
        ctrl.weekGenegrator = function(year , month , startDate , daysOfMonth , prevDaysOfMonth){            
            var week = [];
            for(var i =  1 ; i <= 7 ; i++){
                var 
                    realDate,
                    outmonth = false,
                    content = "";                 

                if(startDate + i < 0){
                    realDate = prevDaysOfMonth+startDate+i+1;
                    outmonth = true;                    
                }
                else if(startDate + i + 1 > daysOfMonth){
                    realDate = startDate+i-daysOfMonth+1;
                    outmonth = true;                    
                }
                else{
                    realDate =  startDate+i+1;   
                    content = getDateContent(year , month , realDate);                 
                }                
                week.push({
                    "outmonth" : outmonth,                    
                    "day": i,
                    "content": content,           
                    "date" : realDate
                });
            }                
            return week;
        }

        ctrl.refreshCalendar = function(){            
            $scope.month = ctrl.monthGenegrator($scope.currentDate.getMonth()+1 , $scope.currentDate.getFullYear());    
        }
        
        ctrl.refreshCalendar();

    }
]);


app.directive("calendar", function(){
    return{
        restrict: "E",
        scope: { content: '=calendarContent'},
        replace: true,
        controller: 'calendarController',
        templateUrl: '/src/calendar-template.html'
    }
});


