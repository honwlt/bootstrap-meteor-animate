# bootstrap-meteor-animate
Animate.css for Meteor

# Usage
####HTML
```html
              <div class="droptest" >
                <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                  Dropdown Animate
                  <span class="caret"></span>
                </button>
                <div class="dropdown-menu" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div> 
```

####Javascript
```javascript
Template.temp.rendered = function () {
  var selectors = $('.droptest');
  AssignDropDownAnimateTriggers(selectors);
};
```

Credits
---
[Bootstrap DropDown Effects] (http://bootbites.com/tutorials/bootstrap-dropdown-effects-animatecss)

[Animate.css] (https://github.com/daneden/animate.css)
