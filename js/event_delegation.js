const parentDiv = document.querySelector('.parent');
window.onload = () => {
  for (let i = 0; i < 5; i++) {
    const elm = document.createElement('div');
    elm.classList.add('box');
    elm.setAttribute('id', `box_${i + 1}`);
    elm.textContent = `BOX${i + 1}`;
    parentDiv.append(elm);
  }
};

parentDiv.addEventListener('click', (e) => {
  const targetElememt = e.target.id;
  alert(`${e.target.innerText} clicked`);
});

// HERE WE ADDED EVENT LISTENER TO THE PARENT ELEMENT
// BUT WE CAN IDENTIFY TARGET ELEMENT HERE
// THIS IS HAPPENING, BECAUSE OF THE EVENT BUBBLING.
// AFTER CLICKING ON EVERY BOX, THE EVENT BUBBLES(GO UPWARDS),
// AND WHEN THE EVENT BUBBLES WE ARE HANDLING THE EVENT FROM THE PARENT DIV
// WE ARE IDENTIFYING THE TARGET ELEMENT FROM THE PARENT DIV
