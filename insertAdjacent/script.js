let a  = document.getElementById("first");
a.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>');
a.insertAdjacentHTML('beforeend','<div class="test">before END</div>')
a.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
a.insertAdjacentHTML('afterend','<div class="test">afterend</div>');