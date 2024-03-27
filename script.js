async function populate() {
    const response = await fetch("data.json")
    const resultSummary = await response.json()

    populateResults(resultSummary)
}




function populateResults(obj) {
    const resultSection = document.getElementById("summary")
    const myH2 = document.createElement("h2")
    const section = document.createElement("section")


    const results = obj;


    for (let i = 0; i < results.length; i++) {
        const myResult = document.createElement("div")
        const image = document.createElement("img")
        const myH3 = document.createElement("h3")
        const title = document.createElement("p")
        const score = document.createElement("span")
        const resultwrapper = document.createElement("div")

        image.src = results[i].icon
        myH3.textContent = results[i].category
        score.textContent = results[i].score


        myResult.appendChild(image)
        myResult.appendChild(myH3)
        title.appendChild(score)


        resultwrapper.appendChild(myResult)
        resultwrapper.appendChild(title)
        // section.appendChild(myResult)
        // section.appendChild(title)
        section.appendChild(resultwrapper)
        


        resultSection.appendChild(section)


    }
    console.log(section)

}
populate();




