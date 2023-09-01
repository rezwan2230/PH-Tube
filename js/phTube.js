
let hours
let Finalhours
let minutes
let finalMinutes
var dataForSort
const makeHeader = () => {
    const header = document.getElementById('header')
    const div = document.createElement('div')
    div.classList = 'flex items-center justify-between mt-10  gap-16'
    div.innerHTML = `
    <div>
            <img class="w-48 md:w-52" src="./images/Logo.png" alt="">
            </div>
            <div class="flex justify-center ">
                <button id="sort-by-view-btn" class="btn md:px-12 md:h-[60px] md:w-[245px]  text-xl ">Sort by view</button>
            </div>
            <div>
                <button class="btn bg-[#FF1F3D] text-lg text-white md:px-8 hover:text-black h-[50px] w-[100px]">Blog</button>
            </div>
    </div>
    `
    const hr = document.createElement('hr')
    hr.classList = "mt-10 border-[2px]"
    header.appendChild(div)
    header.appendChild(hr)
}


const dataLoad = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const modifiedData = data.data
    makeAllBtn(modifiedData)
    showCategoryItem(modifiedData[0].category_id)
}


const makeAllBtn = (data) => {
    const allBtnContainer = document.getElementById('all-btn-container')
    data.forEach(element => {
        // console.log(element.category_id)
        const div = document.createElement('div')
        div.innerHTML = `
        <button onclick="showCategoryItem(${element?.category_id})" class="btn text-xl">${element?.category}</button>
        `
        allBtnContainer.appendChild(div)
    });
}


const showCategoryItem = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const actualData = data.data
    dataForSort = actualData
    // sorting(dataForSort)    
    displayCards(actualData)
}


// const hudai = ((dataForSort)=>{
//     sorting(dataForSort)
// })



const displayCards = (data) => {
    if (data == "") {
        const cardContainer = document.getElementById('card-container')
        cardContainer.innerHTML = ''
        const errorSection = document.getElementById('error-section')
        errorSection.innerHTML=''

        const div = document.createElement('div')
        div.classList.add('mt-20')
        div.innerHTML = `
                <div class="flex flex-col justify-center items-center">
                    <img src="./images/Icon.png" alt="">
                    <h1 class="text-3xl font-bold text-center mt-8">Oops!! Sorry, There is no <br> content here</h1>
                </div>
        `
        errorSection.appendChild(div)
    }
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''

    data.forEach((element) => {
        // console.log(element)
        const dateString = element.others.posted_date
        const seconds = parseInt(dateString)
        // console.log(seconds)
        if (!isNaN(seconds)) {
            hours = seconds / 3600
            Finalhours = parseInt(hours)
            minutes = (seconds % 3600) / 60
            finalMinutes = parseInt(minutes)
        }
        else {
            Finalhours = ""
            finalMinutes = ""
            const time = document.getElementById('time')
            // time.classList = "hidden"
        }
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 pb-5">
                        <figure><img class="w-[500px] h-[260px] rounded-xl" src="${element?.thumbnail}" alt="Shoes" /></figure>
                        <div>
                        <div id="time" class="text-end -mt-12 pr-6 ${seconds ? seconds : "hidden"}">
                         <span class="text-center -mt-10 p-1 rounded-lg text-white bg-[#17171778]"><span id="hour">${Finalhours}</span> hrs <span id="minutes">${finalMinutes}</span> min ago</span>
                        </div>
                        </div>
                        <div class="mt-8">
                            <div class="flex">
                                <div>
                                    <img class="w-[50px] h-[50px] rounded-full" src="${element?.authors[0]?.profile_picture}" alt="">
                                </div>
                                <div class="ml-3 space-y-2">
                                    <h1 class="text-lg font-bold ">${element.title}</h1>
                                    <div class="flex gap-5">
                                        <p class="text-base">${element?.authors[0]?.profile_name}</p>
                                        <p class="icon ${element?.authors[0]?.verified ? 'block' : "hidden"}"> <img src='/images/fi_10629607.png' alt=''> </p>
                                    </div>
                                    <p>${element?.others?.views}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        const errorSection = document.getElementById('error-section')
        errorSection.innerHTML=''
        cardContainer.appendChild(div)
    })
}

// const showAllCards = (data) => {
//     data.forEach((element) => {
//         showCategoryItem(element.category_id)
//     })
// }



const sorting = (data) =>{
    data.sort((a,b)=>{
        const viewStrA = a.others.views
        const viewStrB = b.others.views
        const modifiedViewA = parseFloat(viewStrA.slice(0,3))
        const modifiedViewB = parseFloat(viewStrB.slice(0,3))
       const viewA = modifiedViewA*1000
       const viewB = modifiedViewB*1000
        return viewB-viewA
    })
    console.log(data)
    displayCards(data)
    


}

makeHeader()

dataLoad()


document.getElementById('sort-by-view-btn').addEventListener('click',function(){
    sorting(dataForSort) 
})