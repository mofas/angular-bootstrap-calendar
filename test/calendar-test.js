'use strict';

describe('Directive: Calendar:', function () {    

  describe('Check basic structure:', function () { 
    var element,
        scope;

    beforeEach(module('simpleCalendar'));

    beforeEach(module('calendar-template.html'));

    beforeEach(inject(function($rootScope, $compile) {
      element = angular.element('<calendar calendar-month="8" calendar-year="2013"></calendar>'); 
      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();
    }));

    it('should create header', inject(function() {
      var header = $(element).find('.calendarHeader .date');    
      expect(header.text()).toBe('08/2013');
    }));

    it('should create navigate btn', inject(function() {
      var navigateBtn = $(element).find('.btn-group .btn');    
      expect(navigateBtn.length).toBe(3);
    }));

    it('08/2013 should have 5 week', inject(function() {
      var weekRow = $(element).find('.cal-month-box .cal-row-fluid');    
      expect(weekRow.length).toBe(5);
    }));

    it('the first date in 08/2013 should be 29', inject(function() {
      var firstDate = $(element).find('.cal-month-box .cal-row-fluid').eq(0).find(".cal-month-day").eq(0).find('span');
      expect(firstDate.text()).toBe('29');
    }));

    it('the first date in 08/2013 should be 1', inject(function() {
      var lastDate = $(element).find('.cal-month-box .cal-row-fluid').eq(-1).find(".cal-month-day").eq(-1).find('span');
      expect(lastDate.text()).toBe('1');
    }));
  });


  describe('Check week number:', function () {        

    beforeEach(module('simpleCalendar'));
    beforeEach(module('calendar-template.html')); 

    it('07/2013 should have 5 row', inject(function($rootScope, $compile) {      
      var element = angular.element('<calendar calendar-month="7" calendar-year="2013"></calendar>'); 
      var scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

      var weekRow = $(element).find('.cal-month-box .cal-row-fluid');
      expect(weekRow.length).toBe(5);
    }));

    it('09/2013 should have 6 row', inject(function($rootScope, $compile) {      
      var element = angular.element('<calendar calendar-month="9" calendar-year="2013"></calendar>'); 
      var scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

      var weekRow = $(element).find('.cal-month-box .cal-row-fluid');
      expect(weekRow.length).toBe(6);
    }));

    it('02/2010 should have 4 row', inject(function($rootScope, $compile) {      
      var element = angular.element('<calendar calendar-month="2" calendar-year="2010"></calendar>'); 
      var scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

      var weekRow = $(element).find('.cal-month-box .cal-row-fluid');
      expect(weekRow.length).toBe(4);
    }));

  });

  describe('Check day number in month:', function () {        

    beforeEach(module('simpleCalendar'));
    beforeEach(module('calendar-template.html')); 

    it('02/2013 should have 28 days', inject(function($rootScope, $compile) {      
      var element = angular.element('<calendar calendar-month="2" calendar-year="2013"></calendar>'); 
      var scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

      var days = $(element).find('.cal-month-day').not('.cal-day-outmonth');
      expect(days.length).toBe(28);
    }));

    it('02/2012 should have 29 days', inject(function($rootScope, $compile) {      
      var element = angular.element('<calendar calendar-month="2" calendar-year="2012"></calendar>'); 
      var scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

      var days = $(element).find('.cal-month-day').not('.cal-day-outmonth');
      expect(days.length).toBe(29);
    }));

    it('03/2012 should have 31 days', inject(function($rootScope, $compile) {      
      var element = angular.element('<calendar calendar-month="3" calendar-year="2012"></calendar>'); 
      var scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

      var days = $(element).find('.cal-month-day').not('.cal-day-outmonth');
      expect(days.length).toBe(31);
    }));

    it('07/2010 should have 31 days', inject(function($rootScope, $compile) {      
      var element = angular.element('<calendar calendar-month="7" calendar-year="2010"></calendar>'); 
      var scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

      var days = $(element).find('.cal-month-day').not('.cal-day-outmonth');
      expect(days.length).toBe(31);
    }));

  });

});





