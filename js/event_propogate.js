const outerDiv = document.getElementById('topouter');
const innerDiv = document.getElementById('outer');

function handleOuterClick() {
  console.log('Clicked on the topouter div');
}

function handleInnerClick() {
  console.log('Clicked on the outer div');
}

outerDiv.addEventListener('click', handleOuterClick); // true for capturing phase
innerDiv.addEventListener('click', handleInnerClick);
