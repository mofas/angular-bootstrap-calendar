## 

# [Angular Bootstrap Calendar](http://mofas.github.io/angular-bootstrap-calendar/examples/index.html) 


Simple, Elegant, No jQuery Dependency.




## Installation

1.Include the required libraries

``` html
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js"></script>
```


2.Download three files in src folder:

src/calendar.css
src/calendar.js
src/calendar-template.html

3.Include the files

``` html
<link rel="stylesheet" href="calendar.css">
<script src="calendar.js"></script>
```



Calendar.js and calendar-template.html need to put in the same folder,
or you can modify the templateURl in calendar.js.

 
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

