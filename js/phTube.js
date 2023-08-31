
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
    const allBtnContainer = document.getElementById('all-btn-container')
    data.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `
        <button class="btn text-xl">${element.category}</button>
        `
        allBtnContainer.appendChild(div)
    });
}


const showCategoryItem = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const actualData = data.data
    displayCards(actualData)
}



const displayCards = (data)=>{
    console.log(data)
    const cardContainer = document.getElementById('card-container')

    data.forEach((element)=>{
        console.log(element)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 pb-5">
                        <figure><img class="w-[500px] h-[320px] " src="${element.thumbnail}" alt="Shoes" /></figure>
                        <div class="mt-8">
                            <div class="flex pl-3">
                                <div>
                                    <img class="w-16 h-[60px] rounded-full" src="${element.authors[0].profile_picture}" alt="">
                                </div>
                                <div class="ml-3 space-y-3">
                                    <h1 class="text-lg font-bold ">Building a Winning UX Strategy Using the Kano Model
                                    </h1>
                                    <div class="flex gap-5">
                                        <p class="text-base">${element.authors[0].profile_name}</p>
                                        <p>${element.authors[0].verified}</p>
                                    </div>
                                    <p>${element.others.views}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        cardContainer.appendChild(div)
    })
}




const showAllCards = (data) =>{
    data.forEach((element) =>{
        showCategoryItem(element.category_id) 
    })
}





makeHeader()

dataLoad()