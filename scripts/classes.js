// -- ** Classes ** -- //

// Functional Approach:
function SponsorWidget1( name, description, url ) {
  this.name = name;
  this.description = description;
  this.url = url;
} // end sponsorWidget

SponsorWidget1.prototype.render = function() {
  console.log('in render function');
}; // end render

//Invoking the sponsor widget
let sponsorWidget1 = new SponsorWidget1('JA', 'happy', 'www.something.com');
sponsorWidget1.render();

//Using the new class syntax, we can write better object oriented code than that above
/* To define a class, we use the class keyword followed by the name of the class.
  The body of a class is the part between curly braces. */

class SponsorWidget {

  constructor( name, description, url ) {
    this.name = name;
    this.description = description;
    this.url = url;
  }

  render() { //instance method definition
    let link = this._buildLink(this.url);

  }
}

/* NOTE: prefixing a method with underscore is a convention for indicating
that it should not be invoked from the public API */

let sponsorWidget = new SponsorWidget('BA', 'sleepy', 'www.ba.com');
sponsorWidget.render();
