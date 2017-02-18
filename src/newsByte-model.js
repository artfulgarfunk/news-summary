(function(exports) {
  var id = 0
  var NewsByte = function(string) {
    this.text = string
  }

  function generateId() { return id++ };

  NewsByte.prototype.id = function() {
    var newId = generateId();

    this.id = function() { return newId };
    return newId;
  };

  NewsByte.prototype.read = function() {
    return this.text;
  }

  exports.NewsByte = NewsByte;
  
})(this);
