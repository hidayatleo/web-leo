var typed = new Typed(".text", {
    strings: ["Informatics Engineering Student", "Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      alert(result.message);
  
      if (result.success) {
        this.reset();
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  });
  


