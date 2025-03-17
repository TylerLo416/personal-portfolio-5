class ProjectCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = `
            .top_columns {
                display: grid;
                grid-template-columns: 3fr 2fr 1fr;
            }
            .shrink-img {
                width: 150px;  /* Adjust to the desired size */
                height: 15px;
            }

            .right_column {
                display: flex;
                justify-content: flex-end;
            }

            .name {
                color: #FFFFFF;
                font-size: 2em;
                font-weight: 600;
                margin-bottom: .3em;
            }

            .description {
                color: #C0C0C0;
                font-size: 1.66em;
                margin: 0;
                margin-top: 20px;
            }
            
            .name {
                color: #FFFFFF;
                font-size: 1em;
                font-weight: 600;
                margin-bottom: .3em;
            }

            .description {
                color: #C0C0C0;
                font-size: .8em;
                margin: 0;
                margin-top: 20px;
            }

            .img_holder {
                display: flex;
                text-align: center;
                justify-content: center;
                margin-top: 2%;


                #cardimg {
                width: 45%;
                height: 45%;
                }
            }
        `;

        shadow.innerHTML = `
          <article class="recentproject">
            <div class="top_columns">
              <h2 class="name"><slot name="name"></slot></h2>
              <div></div>
              <a id="project-link">
                <img src="resources/img/circlearrow.svg" alt="Arrow" class="arrow-icon">
              </a>   
            </div>
            <p class="description"><slot name="description"></slot></p>
            <div class="img_holder">
              <img id="cardimg" src="" alt="">
            </div>
          </article>
        `;

        shadow.appendChild(style);
        this.link = shadow.querySelector("#project-link");
        this.cardImg = shadow.querySelector("#cardimg");
    }

    connectedCallback() {
        this.link.href = this.getAttribute("link") || "#";
        this.cardImg.src = this.getAttribute("image") || "default.jpg";
        this.cardImg.alt = this.getAttribute("alt") || "Project image";
    }
}

customElements.define("project-card", ProjectCard);
