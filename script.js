/* MOBILE NAVBAR */

const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })

        navLinks.classList.remove("active")

    })

})



/* CONTACT FORM */

const form = document.getElementById("contactForm")

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault()

        alert("Message sent successfully!")

        form.reset()

    })

}



/* GITHUB PROJECT AUTO LOADING */

const username = "Nisha536-code"

const projectGrid = document.getElementById("project-grid")

if (projectGrid) {

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
        .then(response => response.json())
        .then(data => {

            projectGrid.innerHTML = ""

            data.forEach(repo => {

                if (repo.fork) return

                const card = document.createElement("div")

                card.classList.add("project-card")

                card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description ? repo.description : "No description available."}</p>
<p><strong>Language:</strong> ${repo.language ? repo.language : "Unknown"}</p>
<p>⭐ ${repo.stargazers_count}</p>
<a href="${repo.html_url}" target="_blank">View Code</a>
`

                projectGrid.appendChild(card)

            })

        })
        .catch(error => {

            projectGrid.innerHTML = "<p>Unable to load projects.</p>"
            console.log(error)

        })

}