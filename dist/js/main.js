import { request } from './data.js'
import { displaySearchResult, displayDetail, clearDisplay, homePage } from './dom.js'



const initApp = () => {
    const searchBtn = document.getElementById("search-btn")
    const searchInput = document.getElementById("searchInput")
    searchBtn.addEventListener("click", search)
    searchInput.addEventListener('keyup', handleEnterKeyPress);

}

document.addEventListener("DOMContentLoaded", initApp)



export const search = async (event) => {
    // event.preventDefault()
    const query = document.getElementById("searchInput").value
    const data = await request(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    clearDisplay()
    homePage()
    displaySearchResult(data)

}

export const detail = async (event, data) => {
    event.preventDefault()
    const parts = data.split('/')
    const ID = parts[parts.length - 1]
    const dataJson = await request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)
    const searchContent = document.getElementById("search-Result")
    clearDisplay()
    homePage()
    displayDetail(dataJson)
}

function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        search()
    }
}