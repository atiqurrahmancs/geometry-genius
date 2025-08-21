document.getElementById('triangle-calculate').addEventListener('click',function(){
   const triangleB = document.getElementById('triangle-b');
   const triangleH = document.getElementById('triangle-h');

   const triangleCalculate = 0.5 * triangleB.value * triangleH.value;
   const triTitle = document.getElementById('tri-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.getElementById('ol-list');
   const newLi = document.createElement('li');
   newLi.innerText = 'For b= '+ triangleB.value + ' & h= ' + triangleH.value + ' , ' +triTitle.innerText + ' Area is = ' + triangleCalculate + ' ' + 'cm2';

   newOl.appendChild(newLi);
   triangleB.value = '';
   triangleH.value = '';
})

document.getElementById('rectangle-calculate').addEventListener('click',function(){
   const rectangleW = document.getElementById('rectangle-w');
   const rectangleL = document.getElementById('rectangle-l');

   const rectangleCalculate = rectangleW.value * rectangleL.value;
   const recTitle = document.getElementById('rec-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.getElementById('ol-list');
   const newLi = document.createElement('li');
   newLi.innerText = 'For w= '+ rectangleW.value + ' & l= ' + rectangleL.value + ' , ' +recTitle.innerText + ' Area is = ' + rectangleCalculate + ' ' + 'cm2';

   newOl.appendChild(newLi);
   rectangleW.value = '';
   rectangleL.value = '';
})

document.getElementById('parallel-calculate').addEventListener('click',function(){
   const parallelB = document.getElementById('parallel-b');
   const parallelH = document.getElementById('parallel-h');

   const parallelCalculate = parallelB.value * parallelH.value;
   const parallelTitle = document.getElementById('parallel-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.getElementById('ol-list');
   const newLi = document.createElement('li');
   newLi.innerText = 'For b= '+ parallelB.value + ' & h= ' + parallelH.value + ' , ' +parallelTitle.innerText + ' Area is = ' + parallelCalculate + ' ' + 'cm2';

   newOl.appendChild(newLi);
   parallelB.value = '';
   parallelH.value = '';
})

document.getElementById('rhombus-calculate').addEventListener('click',function(){
   const rhombusD1 = document.getElementById('rhombus-d1');
   const rhombusD2 = document.getElementById('rhombus-d2');

   const rhombusCalculate = 0.5 * rhombusD1.value * rhombusD2.value;
   const rhombusTitle = document.getElementById('rhombus-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.getElementById('ol-list');
   const newLi = document.createElement('li');
   newLi.innerText = 'For d1= '+ rhombusD1.value + ' & d2= ' + rhombusD2.value + ' , ' + rhombusTitle.innerText + ' Area is = ' + rhombusCalculate + ' ' + 'cm2';

   newOl.appendChild(newLi);
   rhombusD1.value = '';
   rhombusD2.value = '';
})

document.getElementById('pentagon-calculate').addEventListener('click',function(){
   const pentagonP = document.getElementById('pentagon-p');
   const pentagonB = document.getElementById('pentagon-b');

   const pentagonCalculate = 0.5 * pentagonP.value * pentagonB.value;
   const pentagonTitle = document.getElementById('pentagon-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.getElementById('ol-list');
   const newLi = document.createElement('li');
   newLi.innerText = 'For p= '+ pentagonP.value + ' & b= ' + pentagonB.value + ' , ' + pentagonTitle.innerText + ' Area is = ' + pentagonCalculate + ' ' + 'cm2';

   newOl.appendChild(newLi);
   pentagonP.value = '';
   pentagonB.value = '';
})

document.getElementById('ellipse-calculate').addEventListener('click',function(){
   const ellipseA = document.getElementById('ellipse-a');
   const ellipseB = document.getElementById('ellipse-b');

   const ellipseCalculate = (3.14159 * ellipseA.value * ellipseB.value).toFixed(2);
   const ellipseTitle = document.getElementById('ellipse-title');
   const areaContainer = document.getElementById('area-container');
   const newOl = document.getElementById('ol-list');
   const newLi = document.createElement('li');
   newLi.innerText = 'For a= '+ ellipseA.value + ' & b= ' + ellipseB.value + ' , ' + ellipseTitle.innerText + ' Area is = ' + ellipseCalculate + ' ' + 'cm2';

   newOl.appendChild(newLi);
   ellipseA.value = '';
   ellipseB.value = '';
})



