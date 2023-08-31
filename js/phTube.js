
const makeHeader = ()=>{
    const header = document.getElementById('header')
    const div = document.createElement('div')
    div.classList = 'flex items-center justify-between mt-12'
    div.innerHTML = `
    <div>
            <img src="./images/Logo.png" alt="">
            </div>
            <div class="flex justify-center ">
                <button class="btn px-12 h-[75px] w-[250px]  text-xl ">Sort by view</button>
            </div>
            <div>
                <button class="btn bg-[#FF1F3D] text-lg text-white px-8 hover:text-black h-[60px] w-[100px]">Blog</button>
            </div>
    </div>
    `
    const hr = document.createElement('hr')
    hr.classList = "mt-10 border-[2px]"
    header.appendChild(div)
    header.appendChild(hr)
}



const dataLoad = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const modifiedData = data.data
    makeAllBtn(modifiedData)
    showAllCards(modifiedData)

}

const makeAllBtn = (data) =>{
    console.log(data)
    const allBtnContainer = document.getElementById('all-btn-container')
    data.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `
        <button class="btn text-xl">${element.category}</button>
        `
        allBtnContainer.appendChild(div)
    });
}


const showAllCards = (data) =>{

}





makeHeader()

dataLoad()