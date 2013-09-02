## 

# [Angular Bootstrap Calendar](http://mofas.github.io/angular-bootstrap-calendar/examples/index.html) 


Simple, Elegant, No jQuery Dependency.




## Installation

Download the three files:

1.src/calendar.css

2.src/calendar.js

3.src/calendar-template.html



modifing templateUrl in calendar.js to indicate path of your calendar-template.html location.


 
## Example

1. Basic usage
``` html
<calendar></calendar>
```


2. Assigning year and month
``` html
<calendar calendar-month="11" calendar-year="2014"></calendar>  
```

3. Put some content
``` html
<calendar calendar-month="8" calendar-year="2013" calendar-content="calendarContent" ></calendar>
```

``` javascript
$scope.calendarContent = {
  "2013":
  {
    "8":
    {
      "29":
      [
        "Google it: <a href=\"http://google.com\" target=\"_blank\">Open Tab</a>"
      ]
    }
  }
};    
```

##License

  The MIT License (MIT)

  Copyright (c) 2013 Victor Bjelkholm

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

