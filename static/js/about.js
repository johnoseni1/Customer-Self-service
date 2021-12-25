const viewAboutApplication = () =>{

    // GET THE BACK BUTTON
    const previousButton = document.querySelector(".back__btn"); 

    // MAKE IT VISIBLE
    previousButton.style.display = "block";

    // ADD AN EVENT LISTENER TO IT
    previousButton.addEventListener('click', ()=>window.location.reload())

    // ADD THE ABOUT SECTION STILL TO THE APP CONTAINER
    appContainer.classList.add("full__container")
    const aboutContent = (`
        <div class="about__container">
            <div>
                <h1>About the project</h1>
                <p>This project is Created and developed by <strong class="author">John Osenistrong></p>
                <p>
                    This project is intended to be an educational material for <strong class="strong__words">myself</strong> and 
                    also to <strong class="strong__words">anyone</strong> who is interested in learning with or through it.

                    Kindly note that the payment gateway integrated in this project is not fake, 
                    be mindful while testing with real <strong class="strong__words">ATM</strong>.
                    You can proceed to make real payment if you wish to support me through it.
                </p>
                <section class="social__icons">
                    <a href="https://twitter.com/johnoseni4"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://www.linkedin.com/in/john-oseni-4b8b001b0/"><i class="fab fa-linkedin"></i></a>
                    <div><i></i></div>
                </section>
            </div>
        </div>
    `)
    appContainer.innerHTML = aboutContent;
};