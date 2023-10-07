import { detail, search } from './main.js'
export const displaySearchResult = (dataObj) => {
    clearDisplay()
    homePage()
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    containerDiv.id = 'search-Result'

    const h2Result = document.createElement('h2');
    h2Result.classList.add('text-center', 'mt-4', 'h2result');
    h2Result.textContent = 'Search Result';
    containerDiv.appendChild(h2Result);

    const hrElement = document.createElement('hr');
    containerDiv.appendChild(hrElement);

    const brElement = document.createElement('br');
    containerDiv.appendChild(brElement);
    const rowDiv = document.createElement('div');
    for (let index = 0; index < dataObj.name.length; index++) {

        rowDiv.classList.add('row');
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'col-sm-6', 'col-12', 'mb-4');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.src = dataObj.imageUrl[index];
        imgElement.classList.add('card-img-top');
        imgElement.alt = '...';
        cardDiv.appendChild(imgElement);

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = dataObj.name[index]
        cardBodyDiv.appendChild(cardTitle);

        const detailBtn = document.createElement('a');
        detailBtn.classList.add('btn', 'btn-sm', 'btn-warning');
        detailBtn.textContent = 'Detail';
        detailBtn.id = 'detail-btn';
        detailBtn.href = dataObj.mealID[index]
        detailBtn.addEventListener("click", (event) => {
            detail(event, detailBtn.href)
        })
        cardBodyDiv.appendChild(detailBtn);

        cardDiv.appendChild(cardBodyDiv);

        colDiv.appendChild(cardDiv);

        rowDiv.appendChild(colDiv);

    }
    containerDiv.appendChild(rowDiv);
    document.body.appendChild(containerDiv);

}


export const displayDetail = (dataObj) => {
    clearDisplay()
    homePage()

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const rowDiv1 = document.createElement('div');
    rowDiv1.classList.add('row');

    const col1Div = document.createElement('div');
    col1Div.classList.add('col-md-4');

    const imgElement = document.createElement('img');
    imgElement.src = dataObj.imageUrl;
    imgElement.alt = 'Meal Image';
    imgElement.classList.add('img-fluid', 'main-img');
    col1Div.appendChild(imgElement);

    rowDiv1.appendChild(col1Div);

    const col2Div = document.createElement('div');
    col2Div.classList.add('col-md-6', 'mt-5');

    const h2Element = document.createElement('h2');
    h2Element.classList.add('h2');
    h2Element.textContent = dataObj.name;
    col2Div.appendChild(h2Element);

    const hrElement = document.createElement('hr');
    col2Div.appendChild(hrElement);

    rowDiv1.appendChild(col2Div);

    containerDiv.appendChild(rowDiv1);

    const rowDiv2 = document.createElement('div');
    rowDiv2.classList.add('row', 'mt-3');

    const col3Div = document.createElement('div');
    col3Div.classList.add('col-md-6');

    const h3Instructions = document.createElement('h3');
    h3Instructions.classList.add('h3');
    h3Instructions.textContent = 'Instructions';
    col3Div.appendChild(h3Instructions);

    const pInstructions = document.createElement('p');
    pInstructions.classList.add('p');
    pInstructions.innerHTML = `<br />${dataObj.instruction}<br />`;
    col3Div.appendChild(pInstructions);

    rowDiv2.appendChild(col3Div);

    const colSpacer = document.createElement('div');
    colSpacer.classList.add('col-md-1');

    rowDiv2.appendChild(colSpacer);

    const col4Div = document.createElement('div');
    col4Div.classList.add('col-md-4');

    const h3Ingredients = document.createElement('h3');
    h3Ingredients.classList.add('h3');
    h3Ingredients.textContent = 'Ingredients';
    col4Div.appendChild(h3Ingredients);

    const rowIngredientList = document.createElement('div');
    rowIngredientList.classList.add('row', 'mt-5');

    const ulElement = document.createElement('ul');
    ulElement.classList.add('list-group');

    dataObj.ingredients.forEach((ingredient, i) => {
        const liIngredient = document.createElement('li');
        liIngredient.classList.add('list-group-item');

        const imgIngredient = document.createElement('img');
        imgIngredient.src = dataObj.ingredientimg[i];
        imgIngredient.alt = `Ingredient ${i + 1}`;
        imgIngredient.classList.add('img-fluid');

        const brElement = document.createElement('br');

        const spanIngredient = document.createElement('span');
        spanIngredient.textContent = ingredient;

        liIngredient.appendChild(imgIngredient);
        liIngredient.appendChild(brElement);
        liIngredient.appendChild(spanIngredient);

        ulElement.appendChild(liIngredient);
    });

    rowIngredientList.appendChild(ulElement);
    col4Div.appendChild(rowIngredientList);

    rowIngredientList.appendChild(ulElement);

    col4Div.appendChild(rowIngredientList);

    rowDiv2.appendChild(col4Div);

    containerDiv.appendChild(rowDiv2);

    document.body.appendChild(containerDiv);

}


export const clearDisplay = () => {
    const bodyElement = document.body;
    while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
    }

}

export const homePage = () => {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const h3Header = document.createElement('h3');
    h3Header.classList.add('header');
    h3Header.textContent = 'The Meal Lookup';
    containerDiv.addEventListener("click", () => {
        window.location.reload()
    })
    containerDiv.appendChild(h3Header);

    const brElement = document.createElement('br');
    containerDiv.appendChild(brElement);

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'justify-content-center');

    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-6');

    const centerInputButtonDiv = document.createElement('div');
    centerInputButtonDiv.classList.add('center-input-button');

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.classList.add('form-control');
    inputElement.id = 'searchInput';
    inputElement.placeholder = 'Enter meal';

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button-input', 'btn', 'btn-outline-dark');
    buttonElement.id = 'search-btn';
    buttonElement.textContent = 'Search';

    buttonElement.addEventListener("click", search)

    centerInputButtonDiv.appendChild(inputElement);
    centerInputButtonDiv.appendChild(buttonElement);

    colDiv.appendChild(centerInputButtonDiv);

    rowDiv.appendChild(colDiv);

    containerDiv.appendChild(rowDiv);

    document.body.appendChild(containerDiv);

}