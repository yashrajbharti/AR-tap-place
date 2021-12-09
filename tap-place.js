const sceneEl = document.querySelector('a-scene');
const faq = document.getElementById('faq')
faq.addEventListener('click', (event) => {

console.log("snap target clicked");
// Create new entity for the new object
const newElement = document.createElement('a-entity')
// The raycaster gives a location of the touch in the scene
 const touchPoint = event.detail.intersection.point
 console.log(touchPoint);
   newElement.setAttribute('position', touchPoint)
   newElement.setAttribute('visible', 'true')
   newElement.setAttribute('scale', '0.03 0.03 0.03')
   newElement.setAttribute('rotate', '0 0 0')
   newElement.setAttribute('geometry', {
     primitive: 'ring',
     radiusInner: 0.9,
     radiusOuter: 1
  });
   newElement.setAttribute('material', 'color', 'red');
   newElement.setAttribute('material', 'side', 'double');

    snaptarget.appendChild(newElement)
   

   newElement.setAttribute('position', touchPoint)



 newElement.addEventListener('model-loaded', () => {
 newElement.setAttribute('visible', 'true')
})
});
