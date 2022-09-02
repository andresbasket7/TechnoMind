
function swapTheme(csspath) {
    document.getElementById('currentlocalcss').setAttribute('href', csspath);
    // When changing the css (= the historical theme) I also set a key-value in sessionStorage
    sessionStorage.setItem('href', csspath);
  }
  
  // To save historical theme while browsing on the website
  // 1. When I change the html (e.g. <a class="..." href="medea.html)></a>") I need to see what is the css I am starting from and KEEP IT
  $(document).ready(function () {
    // 2. I save this starting css in a variable
    var start_style = sessionStorage.getItem('href');
    // I check if the start_style has a certain value and I change the href accordingly 
    switch (start_style) {
      case 'styles/index_style.css':
        document.getElementById('currentlocalcss').setAttribute('href', 'styles/index_style.css');
        break;
      case 'styles/style1.css':
        document.getElementById('currentlocalcss').setAttribute('href', 'styles/style1.css');
        break;
      case 'styles/style2.css':
        document.getElementById('currentlocalcss').setAttribute('href', 'styles/style2.css');
        break;
    }
})

function open_footnote_1() {
  var node_1= document.getElementById("first_footnote");
  if (node_1.style.display=="none") {
      node_1.style.display="flex";
  }
  else
  node_1.style.display= "none";
}

function open_footnote_2() {
  var node_2= document.getElementById("second_footnote");
  if (node_2.style.display=="none") {
      node_2.style.display = "flex";
  }
  else
  node_2.style.display= "none";
}

function open_footnote_3() {
  var node_3= document.getElementById("third_footnote");
  if (node_3.style.display=="none") {
      node_3.style.display = "flex";
  }
  else
  node_3.style.display= "none";
}

function open_footnote_4() {
  var node_4= document.getElementById("fourth_footnote");
  if (node_4.style.display=="none") {
      node_4.style.display = "flex";
  }
  else
  node_4.style.display= "none";
}

function open_footnote_5() {
  var node_5= document.getElementById("fifth_footnote");
  if (node_5.style.display=="none") {
      node_5.style.display = "flex";
  }
  else
  node_5.style.display= "none";
}

function open_footnote_6() {
  var node_6= document.getElementById("sixth_footnote");
  if (node_6.style.display=="none") {
      node_6.style.display = "flex";
  }
  else
  node_6.style.display= "none";
}

function open_footnote_7() {
  var node_7= document.getElementById("seventh_footnote");
  if (node_7.style.display=="none") {
      node_7.style.display = "flex";
  }
  else
  node_7.style.display= "none";
}
