import { detail, search } from './main.js'
export const displaySearchResult = (dataObj) => {
    clearDisplay()
    homePage()
    // Create a container div with Bootstrap classes
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    containerDiv.id = 'search-Result'


    // Create and append the heading (h2) for search result
    const h2Result = document.createElement('h2');
    h2Result.classList.add('text-center', 'mt-4', 'h2result');
    h2Result.textContent = 'Search Result';
    containerDiv.appendChild(h2Result);

    // Create and append the horizontal line (hr)
    const hrElement = document.createElement('hr');
    containerDiv.appendChild(hrElement);

    // Create and append a line break (br)
    const brElement = document.createElement('br');
    containerDiv.appendChild(brElement);
    // Create a row div with Bootstrap classes
    const rowDiv = document.createElement('div');
    for (let index = 0; index < dataObj.name.length; index++) {


        rowDiv.classList.add('row');

        // Create a column div for the card (col-md-4 col-sm-6 col-12 mb-4)
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'col-sm-6', 'col-12', 'mb-4');

        // Create the card div with Bootstrap classes
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        // Create and append the card image
        const imgElement = document.createElement('img');
        imgElement.src = dataObj.imageUrl[index];
        imgElement.classList.add('card-img-top');
        imgElement.alt = '...';
        cardDiv.appendChild(imgElement);

        // Create the card body div
        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        // Create and append the card title
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = dataObj.name[index]
        cardBodyDiv.appendChild(cardTitle);

        // Create and append the "Detail" button
        const detailBtn = document.createElement('a');
        detailBtn.classList.add('btn', 'btn-sm', 'btn-warning');
        detailBtn.textContent = 'Detail';
        detailBtn.id = 'detail-btn';
        detailBtn.href = dataObj.mealID[index]
        detailBtn.addEventListener("click", (event) => {
            detail(event, detailBtn.href)
        })
        cardBodyDiv.appendChild(detailBtn);

        // Append the card body to the card
        cardDiv.appendChild(cardBodyDiv);

        // Append the card to the column
        colDiv.appendChild(cardDiv);

        // Append the column to the row
        rowDiv.appendChild(colDiv);

        // Append the row to the container
    }
    containerDiv.appendChild(rowDiv);
    // Append the container to the document body
    document.body.appendChild(containerDiv);

}


export const displayDetail = (dataObj) => {
    clearDisplay()
    homePage()
    // Create a container div
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // Create the first row div
    const rowDiv1 = document.createElement('div');
    rowDiv1.classList.add('row');

    // Create the first column (col-md-4) for the meal image
    const col1Div = document.createElement('div');
    col1Div.classList.add('col-md-4');

    // Create and append the image element
    const imgElement = document.createElement('img');
    imgElement.src = dataObj.imageUrl;
    imgElement.alt = 'Meal Image';
    imgElement.classList.add('img-fluid', 'main-img');
    col1Div.appendChild(imgElement);

    // Append the first column to the first row
    rowDiv1.appendChild(col1Div);

    // Create the second column (col-md-6 mt-5) for meal name and instructions
    const col2Div = document.createElement('div');
    col2Div.classList.add('col-md-6', 'mt-5');

    // Create and append the h2 element for meal name
    const h2Element = document.createElement('h2');
    h2Element.classList.add('h2');
    h2Element.textContent = dataObj.name;
    col2Div.appendChild(h2Element);

    // Create and append the hr element
    const hrElement = document.createElement('hr');
    col2Div.appendChild(hrElement);

    // Append the second column to the first row
    rowDiv1.appendChild(col2Div);

    // Append the first row to the container
    containerDiv.appendChild(rowDiv1);

    // Create the second row (row mt-3)
    const rowDiv2 = document.createElement('div');
    rowDiv2.classList.add('row', 'mt-3');

    // Create the left column (col-md-6) for instructions
    const col3Div = document.createElement('div');
    col3Div.classList.add('col-md-6');

    // Create and append the h3 element for Instructions
    const h3Instructions = document.createElement('h3');
    h3Instructions.classList.add('h3');
    h3Instructions.textContent = 'Instructions';
    col3Div.appendChild(h3Instructions);

    // Create and append the paragraph element for instructions
    const pInstructions = document.createElement('p');
    pInstructions.classList.add('p');
    pInstructions.innerHTML = `<br />${dataObj.instruction}<br />`;
    col3Div.appendChild(pInstructions);

    // Append the left column to the second row
    rowDiv2.appendChild(col3Div);

    // Create a spacer column (col-md-1)
    const colSpacer = document.createElement('div');
    colSpacer.classList.add('col-md-1');

    // Append the spacer column to the second row
    rowDiv2.appendChild(colSpacer);

    // Create the right column (col-md-4) for ingredients
    const col4Div = document.createElement('div');
    col4Div.classList.add('col-md-4');

    // Create and append the h3 element for Ingredients
    const h3Ingredients = document.createElement('h3');
    h3Ingredients.classList.add('h3');
    h3Ingredients.textContent = 'Ingredients';
    col4Div.appendChild(h3Ingredients);

    // Create a row for the ingredient list
    const rowIngredientList = document.createElement('div');
    rowIngredientList.classList.add('row', 'mt-5');

    // Create an unordered list
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

    // Append the unordered list to the row
    rowIngredientList.appendChild(ulElement);

    // Append the row with ingredients to the right column
    col4Div.appendChild(rowIngredientList);

    // Append the right column to the second row
    rowDiv2.appendChild(col4Div);

    // Append the second row to the container
    containerDiv.appendChild(rowDiv2);

    // Append the container to the document body
    document.body.appendChild(containerDiv);

}


export const clearDisplay = () => {
    // Select the <body> element
    const bodyElement = document.body;

    // Remove all child nodes from the <body> element
    while (bodyElement.firstChild) {
        bodyElement.removeChild(bodyElement.firstChild);
    }

}

export const homePage = () => {
    // Create a container div with Bootstrap classes
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // Create and append the heading (h3) for "The Meal Lookup"
    const h3Header = document.createElement('h3');
    h3Header.classList.add('header');
    h3Header.textContent = 'The Meal Lookup';
    containerDiv.addEventListener("click", () => {
        window.location.reload()
    })
    containerDiv.appendChild(h3Header);

    // Create a line break (br) and append it to the container
    const brElement = document.createElement('br');
    containerDiv.appendChild(brElement);

    // Create a row div with Bootstrap classes
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'justify-content-center');

    // Create a column div for the form (col-md-6)
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-6');

    // Create a div for centering the input and button
    const centerInputButtonDiv = document.createElement('div');
    centerInputButtonDiv.classList.add('center-input-button');

    // Create the input element
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.classList.add('form-control');
    inputElement.id = 'searchInput';
    inputElement.placeholder = 'Enter meal';

    // Create the button element
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button-input', 'btn', 'btn-outline-dark');
    buttonElement.id = 'search-btn';
    buttonElement.textContent = 'Search';

    buttonElement.addEventListener("click", search)

    // Append the input and button to the centerInputButtonDiv
    centerInputButtonDiv.appendChild(inputElement);
    centerInputButtonDiv.appendChild(buttonElement);

    // Append the centerInputButtonDiv to the column
    colDiv.appendChild(centerInputButtonDiv);

    // Append the column to the row
    rowDiv.appendChild(colDiv);

    // Append the row to the container
    containerDiv.appendChild(rowDiv);

    // Append the container to the document body
    document.body.appendChild(containerDiv);

}