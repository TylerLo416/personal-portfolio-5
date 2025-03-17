class ProjectCard extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM for encapsulation
        const shadow = this.attachShadow({ mode: "open" });

        // Define inner HTML structure
        shadow.innerHTML = `
            <style>
                .top_columns {
                    display: grid;
                    grid-template-columns: 3fr 2fr 1fr;
                }
                h2 {
                    font-size: inherit;
                }
                img {
                    width: 150px;  /* Adjust to the desired size */
                    height: auto;
                }
                .arrow-icon {
                    width: 80px;
                    margin-left: 200px;
                    margin-right: 0px;
                }
            </style>

            <article class="recentproject">
                <div class="top_columns">
                    <h2 class="name"><slot name="name"></slot></h2>
                    <a href="">
                        <img src="resources/img/circlearrow.svg" alt="Arrow" class="arrow-icon">
                    </a>   
                </div>
                <p class="description"><slot name="description"></slot></p>
                <div class="img_holder">
                    <picture id="cardimg">
                        <source media="(min-width: 800px)" srcset="">
                        <source media="(max-width: 799px)" srcset="">
                        <img src="" alt="Project image">
                    </picture>
                </div>
            </article>
        `;

        // Get the elements inside the shadow DOM
        this.link = shadow.querySelector("a");
        this.picture = shadow.querySelector("#cardimg");
        this.img = this.picture.querySelector("img");
        this.sources = this.picture.querySelectorAll("source");
    }

    connectedCallback() {
        // Set attributes dynamically
        this.link.href = this.getAttribute("link") || "#";
        this.img.src = this.getAttribute("image") || "default.jpg";
        this.img.alt = this.getAttribute("alt") || "Project image";

        // Set source elements for different screen sizes
        const imageSrc = this.getAttribute("image") || "default.jpg";
        this.sources[0].srcset = this.getAttribute("image-large") || imageSrc;
        this.sources[1].srcset = this.getAttribute("image-small") || imageSrc;
    }
}

// Register the custom element
customElements.define("project-card", ProjectCard);
