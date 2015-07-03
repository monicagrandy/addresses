function newSearch() {
  var mySearch = document.getElementById("userSearch").value;
  var searchButton = document.getElementById("searchButton");
  searchButton.onclick = function() {
    // alert("yo");
    console.log(mySearch);
  }
};
