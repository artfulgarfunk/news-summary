function testNewsByteHasText() {
  var newsByte = new NewsByte('This is a news story summary');

  if (newsByte.read() !== 'This is a news story summary') {
    throw new Error("testNewsByteHasText FAILS")
  } else {
    console.log('NewsByte has text PASSES');
  }
};

testNewsByteHasText();


function testNewsByteHasUniqueId() {
  var newsbyte0 = new NewsByte('This is some test text')
  var newsbyte1 = new NewsByte('This is some test text too')

  if (newsbyte0.id() === 0 && newsbyte1.id() === 1) {
    console.log("You get a unique id! You get a unique id!");
  } else {
    throw new Error("testNewsByteHasText FAILS");
  }
}

testNewsByteHasUniqueId();
