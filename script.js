var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventlistener('click', function() { var element = document.createElement('li');
element.innerHTML = 'item';
element.getElementsByTagName('li').length;
list.appendChild(element;)
});
