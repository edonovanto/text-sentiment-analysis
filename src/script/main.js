import Analyze from './analytics.js'
import '../component/search-bar.js'
import '../component/text-result.js'

const main = () => {

    const searchElement = document.querySelector("search-bar")
    const resultElement = document.querySelector("text-result")

    const onButtonSearchClicked = () => {
        Analyze.analyzeText(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    }

    const renderResult = (results) => {
        resultElement.result = results
    }

    const fallbackResult = (message) => {
        resultElement.renderError(message)
    }

    searchElement.clickEvent = onButtonSearchClicked

}

export default main