// Get all the tabs
const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener('click', () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add the active class on the clicked tab
        clickedTab.classList.add('active');
    const clickedTabBGColor = getComputedStyle(clickedTab).getPropertyValue('color');
    console.log(clickedTabBGColor);
    document.body.style.background = clickedTabBGColor;
    });
});



// se llamaria las clases retos
const ListRetos = document.querySelectorAll('.reto');

filter.addEventListener('input', (e) => filterData(e.target.value))
//esto filtra la informacion del input pot medio de la funcion filterData 

function filterData(searchTerm) {

    ListRetos.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        /*busca dentro de los elemtos del array escrito una conincidencia con el parametro 
        buscado */
        //devuelve el valor en minúsculas de la cadena que realiza la llamada
        /*determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. */
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
