

const blogPost = () =>{
    const blogContainer = document.getElementById('blog-container')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="bg-slate-300 my-10 rounded-lg p-8">
                        <h1 class="text-2xl font-semibold">Discuss the scope of var, let, and const</h1>
                        <p class="mt-2 text-lg">If we declare var as a global variable then we can access that variable
                            from
                            everywhere.
                            and if we declare a variable with var inside a function, then it cannot be accessed from
                            outside the function.
                            And let, const are working according to the block level, if a variable is declared by let
                            and const, it can be accessed only in the block in which it is declared.
                            If I declare a variable with const, I have to add its value immediately, the value of that
                            variable cannot be changed later.</p>
                    </div>

                    <div class="bg-slate-300 my-10 rounded-lg p-8">
                        <h1 class="text-2xl font-semibold"> Tell us the use cases of null and undefined</h1>
                        <p class="mt-2 text-lg">We don't always know the value of everything, if we don't know the value
                            of something, we initially set the value to null to update it later and the value of
                            something can come undefined for various reasons, one of them is that if we want to print
                            without setting the value of any variable, it will give undefined result.</p>
                    </div>

                    <div class="bg-slate-300 my-10 rounded-lg p-8">
                        <h1 class="text-2xl font-semibold">What do you mean by REST API?</h1>
                        <p class="mt-2 text-lg">An API is an application programming interface, it is basically an
                            interface through which we can connect from one website to another website, API is basically
                            some aggregated information. Through this API we can use data from other websites to give a
                            different look.REST APIs use HTTP requests to interact with data</p>
                    </div>
    `
    blogContainer.appendChild(div)
}

blogPost()