// PIRMA DALIS:
// Sukurti kontaktų formą.
// 1. Kontaktų formoje turi būti šie laukeliai:
//     1. Tekstinis laukelis vardui (privalomas).
//     2. Tekstinis laukelis pavardei (privalomas).
//     3. Skaičiaus laukelis amžiui (privalomas).
//     4. Laukelis įvesti telefono numerį (neprivalomas).
//     5. Laukelis įvesti el. paštą (privalomas).
//     6. Range tipo laukelis, kuris skirtas įvertinti savo IT žinias nuo 1 iki 10. Galimas vertinimas tik sveikiems skaičiams.
//     7. Radio tipo laukeliai, kuriuose pasirenkamas grupės numeris. Turi būti galimybė pasirinkti grupes nuo FEU 1gr. iki FEU 7gr.
//     8. Šalia kiekvieno įvesties (input) elemento, pridėti label elementą, kuris žymi laukelio pavadinimą.

const studentForm = document.getElementById('student-form');


studentForm.addEventListener('submit', (event) => {
event.preventDefault();
// console.dir(event.target.elements.age)

//variantai su document.

// const studentName = document.querySelector('#student-name').value;   //čia įrašius value iskart gaunama įrašyto teksto reikšmė
// console.dir(studentName.value)   //taip gaunam tai kas buvo įvesta laukelyje
// const studentName = document.getElementsByName('name')[0].ariaValueMax;   //galima gauti input elementa ir pagal 'name'. Jeigu tik pagal name, tai atidaro kaip nodelist, tai reikia indexa issitraukti
// const studentName = document.querySelector('[name="name"]').value; 


//variantai su studentForm kintamuoju arba tiesiogiai su event.target.

// const studentName = studentForm.querySelector('#student-name').value;   //saugesnis variantas selektinti pacioje formoje
// const studentName = event.target.querySelector('#student-name').value;
// const studentName = event.target.querySelector('[name="name"]').value;

//variantai einant per objektus 

// const studentName = event.target.elements.name.value;
//const name = event.target.name.value;      //nebereikia ir elements ir taip pasiekia name-value



// ANTRA DALIS:
// 1. Sukurti div elementą, kuris turės id „students-list".
// 2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
// 3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.

const form = event.target;

const name = form.name.value;
const surname = form.surname.value;
const age = form.age.value;
const phone = form.phone.value;
const email = form.email.value;
const itKnowledge = form['it-knowledge'].value;
const group = form.group.value;

// console.log(name)
// console.log(surname)
// console.log(age)
// console.log(phone)
// console.log(email)
// console.log(itKnowledge)
// console.log(group)

const studentsList = document.querySelector('#students-list');

const studentItem = document.createElement('div');
studentItem.classList.add('student-item');

//duomenys apie studenta
const nameElement = document.createElement('p');
nameElement.innerHTML = `<strong>Name:</strong> ${name}`;

const surnameElement = document.createElement('p');
surnameElement.innerHTML = `<strong>Surname:</strong> ${surname}`;

const ageElement = document.createElement('p');
ageElement.innerHTML = `<strong>Age:</strong> ${age}`;

const phoneElement = document.createElement('p');
phoneElement.innerHTML = `<strong>Phone:</strong> ${phone}`;

const emailElement = document.createElement('p');
emailElement.innerHTML = `<strong>Email:</strong> ${email}`;

const itKnowledgeElement = document.createElement('p');
itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${itKnowledge}`;

const groupElement = document.createElement('p');
groupElement.innerHTML = `<strong>Group:</strong> ${group}`;



studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement);
studentsList.prepend(studentItem);
})