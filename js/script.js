//* Variables
let header = document.querySelector(".header");
let page_links = document.querySelectorAll(".nav a");
let skill_progress = document.querySelector(".about .skill-progress");
let skills_obj = [
    {
        img: "image/figma.svg",
        name: "Figma",
        percent: 85,
    },
    {
        img: "image/bootstrap.png",
        name: "Bootstrap",
        percent: 90,
    },
    {
        img: "image/html.png",
        name: "HTML",
        percent: 100,
    },
    {
        img: "image/css.png",
        name: "CSS",
        percent: 100,
    },
    {
        img: "image/java.png",
        name: "JavaScript",
        percent: 60,
    }
];

let select_services = document.querySelector(".contact .select-services");
let arrow_up = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolling");
        arrow_up.classList.add("show");
    } else {
        header.classList.remove("scrolling");
        arrow_up.classList.remove("show");
    }
});

skills_obj.forEach((skill) => {
    const skill_dom = document.createElement("div");
    skill_dom.className =
        "skill d-flex flex-column justify-content-center align-items-center gap-3";

    const progress = document.createElement("div");
    progress.className =
        "progress d-flex justify-content-center align-items-center position-relative rounded-circle";
    progress.style.background = `conic-gradient(
        rgb(217 217 217 / 20%) 0% ${100 - skill.percent}%,
        var(--txt-primary) 0% 100%
    )`;

    const skill_img = document.createElement("img");
    skill_img.src = skill.img;
    skill_img.alt = skill.name;
    progress.appendChild(skill_img);

    const percent = document.createElement("span");
    percent.className = "percent";
    percent.textContent = `${skill.percent}%`;

    const skill_name = document.createElement("span");
    skill_name.className = "txt text-capitalize fw-bold";
    skill_name.textContent = skill.name;

    skill_dom.appendChild(progress);
    skill_dom.appendChild(percent);
    skill_dom.appendChild(skill_name);

    skill_progress.appendChild(skill_dom);  
});


page_links.forEach((link) => {
    link.addEventListener("click", function () {
        page_links.forEach((link) => {
            if (this.textContent !== link.textContent) {
                link.classList.remove("active");
            } else {
                link.classList.add("active");
            }
        });
        this.classList.add("active");
    });
});

arrow_up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


function downloadCV() {
    const link = document.createElement('a');
    link.href = 'asset/CV Kayla Vyanca 2025.pdf'; // path ke file PDF kamu
    link.download = 'CV Kayla Vyanca 2025.pdf'; // nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function hireMe() {
    window.open('https://www.linkedin.com/in/kaylavyanca', '_blank');
};


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filtering-btns .new-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card .card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filterValue = button.getAttribute("data-filter");

            // Atur ulang semua tombol
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Tampilkan kartu
            portfolioCards.forEach(card => {
                const cardFilter = card.getAttribute("data-filter");

                if (filterValue === "all" || cardFilter === filterValue) {
                    card.classList.remove("d-none");
                } else {
                    card.classList.add("d-none");
                }

                console.log("Script loaded ✅");
                console.log("Filter Buttons found:", filterButtons.length);
                console.log("Portfolio Cards found:", portfolioCards.length);

            });
        });
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form yang default

    // Kirim form menggunakan AJAX
    fetch("https://formspree.io/f/mblgwoql", {
        method: "POST",
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            // Kosongkan form setelah berhasil dikirim
            document.getElementById("contactForm").reset();

            // Tampilkan notifikasi keberhasilan
            alert("Form berhasil terkirim!");

        } else {
            alert("Terjadi kesalahan saat mengirim form. Coba lagi.");
        }
    })
    .catch(error => {
        alert("Terjadi kesalahan. Coba lagi.");
    });
});

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 100000,
    offset: 500
  });


  window.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('marquee-track');
    const cards = track.children;

    // Kloning isi sebanyak 1x (bisa ditambah kalau ingin lebih panjang)
    const cloneCount = 1;

    for (let i = 0; i < cloneCount; i++) {
      for (let j = 0; j < cards.length; j++) {
        const clone = cards[j].cloneNode(true);
        track.appendChild(clone);
      }
    }
  });




  