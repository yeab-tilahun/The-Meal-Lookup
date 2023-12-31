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

    const spaceDiv = document.createElement('div');
    spaceDiv.classList.add('space');
    spaceDiv.innerHTML = '<br /><br /><br /><br /><br />';
    containerDiv.appendChild(spaceDiv);

    document.body.appendChild(containerDiv);

}


export const displayDetail = (dataObj) => {
    clearDisplay()
    homePage()

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container', 'text-center', 'mt-5');

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

    const videoID = getYouTubeVideoId(dataObj.videoUrl)
    const iframeElement = document.createElement('iframe');
    iframeElement.width = '360';
    iframeElement.height = '280';
    iframeElement.src = `https://www.youtube.com/embed/${videoID}`;
    iframeElement.allowFullscreen = true;

    col3Div.appendChild(pInstructions);
    col3Div.appendChild(iframeElement);

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

    const spaceDiv = document.createElement('div');
    spaceDiv.classList.add('space');
    spaceDiv.innerHTML = '<br /><br /><br /><br /><br />';
    containerDiv.appendChild(spaceDiv);

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
    h3Header.addEventListener("click", () => {
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
    inputElement.placeholder = "Enter meal to Search For example: Chicken "

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button-input', 'btn', 'btn-outline-dark');
    buttonElement.id = 'search-btn';
    buttonElement.textContent = 'Search';

    function handleEnterKeyPress(event) {
        if (event.key === 'Enter') {
            search()
        }
    }
    inputElement.addEventListener('keyup', handleEnterKeyPress);

    buttonElement.addEventListener("click", search)

    centerInputButtonDiv.appendChild(inputElement);
    centerInputButtonDiv.appendChild(buttonElement);

    colDiv.appendChild(centerInputButtonDiv);

    rowDiv.appendChild(colDiv);

    containerDiv.appendChild(rowDiv);

    const spaceDiv = document.createElement('div');
    spaceDiv.classList.add('space');
    spaceDiv.innerHTML = '<br /><br /><br /><br /><br />';
    containerDiv.appendChild(spaceDiv);

    document.body.appendChild(containerDiv);
    footer()

}

export const footer = () => {
    // Create the footer element
    const footer = document.createElement('footer');
    footer.classList.add('bg-dark', 'text-light', 'text-center', 'py-2', 'fixed-bottom');

    // Create the container div
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // Create the "Made by Yeab" paragraph
    const madeByParagraph = document.createElement('p');
    madeByParagraph.classList.add('mb-0');
    madeByParagraph.textContent = 'Made by Yeab.';

    // Create the social icons div
    const socialIconsDiv = document.createElement('div');
    socialIconsDiv.classList.add('social-icons', 'mt-3');

    // Create GitHub link and icon
    const githubLink = createSocialLink('https://github.com/yeab-tilahun', 'fab fa-github fa-2x');
    socialIconsDiv.appendChild(githubLink);

    // Create LinkedIn link and icon
    const linkedinLink = createSocialLink('https://www.linkedin.com/in/yeabsira-tilahun-55a580177/', 'fab fa-linkedin fa-2x');
    socialIconsDiv.appendChild(linkedinLink);

    // Create Telegram link and icon
    const telegramLink = createSocialLink('https://t.me/YeabTilahun', 'fab fa-telegram fa-2x');
    socialIconsDiv.appendChild(telegramLink);

    // Append all elements to the footer
    containerDiv.appendChild(madeByParagraph);
    containerDiv.appendChild(socialIconsDiv);
    footer.appendChild(containerDiv);

    // Append the footer to the document body or any other container element
    document.body.appendChild(footer);

    // Helper function to create social links
    function createSocialLink(link, iconClass) {
        const socialLink = document.createElement('a');
        socialLink.href = link;
        socialLink.target = '_blank';
        socialLink.classList.add('text-light', 'me-3');

        const icon = document.createElement('i');
        icon.className = iconClass; // Set the class attribute directly

        socialLink.appendChild(icon);
        return socialLink;
    }

}
function getYouTubeVideoId(url) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v");
}