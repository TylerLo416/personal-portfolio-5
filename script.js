document.addEventListener("DOMContentLoaded", () => {
    let loaded = false;
    //load content into local storage
    if (!localStorage.getItem("projects")) {
        const projects = [
            {
                name: "LOR Hand Tracker",
                description: "Front-End",
                link: "https://tylerlo416.github.io/LORHandReader/",
                image: "resources/img/Summoner's-Rift.webP",
                alt: "Summoner's Rift"
            },
            {
                name: "Vawt Wind Turbine",
                description: "Data Lead",
                link: "https://eswtritons.wordpress.com/urban-wind-power-charging-station/",
                image: "resources/img/vawt.webP",
                alt: "Vawt Wind Turbine"
            },
            {
                name: "Triton Energy Climate",
                description: "Tech Lead / Project Manager",
                link: "./tec.html",
                image: "resources/img/tec.webp",
                alt: "Triton Energy Climate"
            }
        ];
        localStorage.setItem("projects", JSON.stringify(projects));
    }
    

    //function for "Load local storage" button
    document.getElementById("load-local").addEventListener("click", async () => {
        if(loaded == true) {
            return;
        }
        const portfolioSection = document.getElementById("portfolio");
    
        // Get projects from localStorage
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
    
        projects.forEach((project) => {
            const card = document.createElement("project-card");
            card.setAttribute("class", "recentproject"); // 🔥 Fix: Ensure class is added
            card.setAttribute("link", project.link);
            card.setAttribute("image", project.image);
            card.setAttribute("alt", project.alt);
    
            card.innerHTML = `
                <span slot="name" class="name">${project.name}</span>
                <span slot="description" class="description">${project.description}</span>
            `;
    
            portfolioSection.appendChild(card);
        });
        loaded = true;
    });
    


    //function for "Load Remote" button
    document.getElementById("load-remote").addEventListener("click", async () => {
        if(loaded == true) {
            return;
        }
        const jsonBinUrl = "https://api.jsonbin.io/v3/b/67d779168a456b79667730e3"; // Replace with your JSONBin.io bin URL
        const apiKey = "$2a$10$DKCm5ENGOma0Uny1M/la2u9to8ExelurQ/R9hyxfvA6NP454pNbWa"; // Add your API key if needed
    
        try {
        const response = await fetch(jsonBinUrl, {
            headers: { "X-Master-Key": apiKey } // Only needed if your bin is private
        });
    
        if (!response.ok) throw new Error("Failed to fetch data");
    
        const data = await response.json();
        const projects = data.record.projects; // Adjust based on JSON structure
    
        const portfolioSection = document.querySelector("#portfolio");
    
        projects.forEach(project => {
            const projectCard = document.createElement("project-card");
            projectCard.setAttribute("class", "recentproject");
            projectCard.setAttribute("link", project.link);
            projectCard.setAttribute("image", project.image);
            projectCard.setAttribute("alt", project.alt);
    
            projectCard.innerHTML = `
            <span slot="name" class="name">${project.name}</span>
            <span slot="description" class="description">${project.description}</span>
            `;
    
            portfolioSection.appendChild(projectCard);
        });
    
        } catch (error) {
        console.error("Error fetching project data:", error);
        }
        loaded = true;
    });
});
function copyEmail() {
    navigator.clipboard.writeText("lotyler416@gmail.com");
}
    