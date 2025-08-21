document.getElementById('triangle-calculate').addEventListener('click',function(){
   const triangleB = document.getElementById('triangle-b');
   const triangleH = document.getElementById('triangle-h');

   const triangleCalculate = 0.5 * triangleB.value * triangleH.value;
   const triTitle = document.getElementById('tri-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.createElement('ol');
   const newLi = document.createElement('li');
   newLi.innerText = 'For b= '+ triangleB.value + ' & h= ' + triangleH.value + ' , ' +triTitle.innerText + ' Area is = ' + triangleCalculate + ' ' + 'cm2';

   newOl.appendChild(newLi);
   areaContainer.appendChild(newOl);
   triangleB.value = '';
   triangleH.value = '';
})

document.getElementById('rectangle-calculate').addEventListener('click',function(){
   const rectangleW = document.getElementById('rectangle-w');
   const rectangleL = document.getElementById('rectangle-l');

   const rectangleCalculate = rectangleW.value * rectangleL.value;
   const recTitle = document.getElementById('rec-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.createElement('ol');
   const newLi = document.createElement('li');
   newLi.innerText = 'For w= '+ rectangleW.value + ' & l= ' + rectangleL.value + ' , ' +recTitle.innerText + ' Area is = ' + rectangleCalculate + ' ' + 'cm2';
   newOl.addClass("")
   newOl.appendChild(newLi);
   areaContainer.appendChild(newOl);
   rectangleW.value = '';
   rectangleL.value = '';
})
