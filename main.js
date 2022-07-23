let suv = document.querySelector('.card-1');
let container = document.querySelector('.modal-container');
let content = document.querySelector('.modal');
let cancel = document.querySelector('.x-btn');
let tp = document.querySelector('.card-2');
let km = document.querySelector('.card-3');
let cal = document.querySelector('.card-4');
let modalHead = document.querySelector('.modal-head');
let modalPara = document.querySelector('.modal-para');



suv.addEventListener('click', function (){
  container.classList.add('show');
  modalHead.innerHTML = 'Supervisor';
  modalpara.innerHTML = 'Get the Job of a Supervisor by clicking the button below.';
});


tp.addEventListener('click', function(){
  container.classList.add('show');
  modalHead.innerHTML = 'Team Builder';
  modalPara.innerHTML = 'Get the Job of a Team Builder by clicking the button below.';
});

km.addEventListener('click', function(){
  container.classList.add('show');
  modalHead.innerHTML = 'Karma';
  modalPara.innerHTML = 'Get the Job of a Karma by clicking the button below.';
});

cal.addEventListener('click', function(){
  container.classList.add('show');
  modalHead.innerHTML = 'Calculator';
  modalPara.innerHTML = 'Get the Job of a calculator by clicking the button below.';
});

cancel.addEventListener('click', function(){
  container.classList.remove('show');
});

applyBtn.addEventListener('click', function (){
  container2.classList.add('show2');
  container.classList.remove('show');
});
cancel2.addEventListener('click', function(){
  container2.classList.remove('show2');
  container.classList.add('show');
});
