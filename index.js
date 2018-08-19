function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list li');
	for (let i = 0; i < rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML)+n
  }
}

function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div'))
}