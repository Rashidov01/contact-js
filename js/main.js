var elForm = document.querySelector('.js-form');
var elFormName = elForm.querySelector('.js-input-name');
var elFormInfo = elForm.querySelector('.js-input-info');
var elFormPhone = elForm.querySelector('.js-input-phone');
var elFormBtn = elForm.querySelector('.js-input-button');
var elJsListGroup = document.querySelector('.js-list-group');

var infoHolderArr = [];


elForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // btn
  var elJsBtn = elForm.querySelector('.js-submit');
  // creating
  var contactList = document.createElement('li');
  var contactName = document.createElement('h3');
  var contactInfo = document.createElement('p');
  var contactPhone = document.createElement('a');

  // object
  var contact = {
    name: elFormName.value,
    reletionship: elFormName.value,
    phonenumber: elFormName.value,
  };

  contactName.textContent = elFormName.value;
  contactInfo.textContent = elFormInfo.value;
  contactPhone.textContent = elFormPhone.value;

  elFormName.value = '';
  elFormInfo.value = '';
  elFormPhone.value = '';

  contactList.appendChild(contactName);
  contactList.appendChild(contactInfo);
  contactList.appendChild(contactPhone);

  contactList.classList.add('bg-white', 'p-2', 'border', 'mb-5', 'rounded');
  contactPhone.classList.add('text-decoration-none');
  contactPhone.href = 'tel: ${contact[i].phonenumber}';

  elJsListGroup.appendChild(contactList);
  infoHolderArr.push(contact);
});

