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

// const studentName = document.querySelector('#student-name').value;   //čia įrašius value iskart gaunama įrašyto teksto reikšmė
// console.dir(studentName.value)   //taip gaunam tai kas buvo įvesta laukelyje
const studentName = document.getElementsByName('name')[0].ariaValueMax;   //galima gauti input elementa ir pagal 'name'. Jeigu tik pagal name, tai atidaro kaip nodelist, tai reikia indexa issitraukti

console.log(studentName)
})