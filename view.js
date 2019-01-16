var t0 = performance.now();
let view = {

    bodyElement: document.querySelector(`#Root`),

    getCornerTitle: function getCornerTitle() {
        let div = document.createElement('div');
        div.id = 'cornerTitles';
        div.innerHTML = `
        <div id="menuBackground"></div>
        <div id="upperTitles">
            <h3 class="cornerTitle" id="josedavidTitle"> JoseDavid <span class="bolder">GIRALDO</span></h3>
            <h3 class="cornerTitle" id="portfolioTitle">Go to my <span class="bolder">PORTFOLIO</span></h3>
            <a class="cornerTitle" id="emailTitle-mobile" href="mailto:josedavidgm1995@gmail.com?Subject=Internship%202019" target="_top">
            <h3>Send me an <span class="bolder">EMAIL</span></h3></a>
        </div>
        <div id="lowerTitles">
            <ul id="socialNetWorksButtonsContainer" >
                <li><a id="behance"  href="https://www.behance.net/JoseDavidGiraldoM" target="_blank"></a></li>
                <li><a id="github"   href="https://github.com/josedavidgm1995" target="_blank"></a></li>
                <li><a id="linkedin" href="https://www.linkedin.com/in/josedavidgiraldom/" target="_blank"></a></li>
                <li><a id="instagram" href="https://www.instagram.com/_david.giraldo/" target="_blank"></a></li>        
            </ul>
            <a id="emailTitle" href="mailto:josedavidgm1995@gmail.com?Subject=Internship%202019" target="_top">
            <h3 class="cornerTitle">Send me an <span class="bolder">EMAIL</span></h3></a>
        </div>`;

        let b = div.querySelector('#behance');
        b.appendChild(svg.getBehance());
        let g = div.querySelector('#github');
        g.appendChild(svg.getGithub());
        let l = div.querySelector('#linkedin');
        l.appendChild(svg.getLinkedin());
        let i = div.querySelector('#instagram');
        i.appendChild(svg.getInstagram());

        return div;

    },

    getNavegationMenu: function getNavegationMenu() {
        let div = document.createElement(`div`);
        div.id = `navigationMenuContainer`;

        div.innerHTML = `
            
            <ul class="blackMenu">
                <li><button class="btn-menu" value="0">Home</button></li>
                <li><button class="btn-menu" value="34">About</button></li>
                <li><button class="btn-menu" value="67">Portfolio</button></li>                    
                <li><button class="btn-menu" value="100">Contact</button></li>
            </ul>
            
            <div id="slideContainer">
                <div id="indicatorContainer">
                    <div class="indicator"></div>
                    <div class="indicator"></div>
                    <div class="indicator"></div>
                    <div class="indicator"></div>
                </div>
                <style data="slider-style-animation" type="text/css"></style>
                <input type="range" min="0" max="100" value="0" steps="1" class="slider" id="navigationMenuSlider" disabled>
            </div>
        `;

        let buttons = div.querySelectorAll('button');
        let range = div.querySelector('#navigationMenuSlider');

        buttons.forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                // console.log(`Index = ${index} | Button value = ${e.target.value}`);
                let rangeStartPosition = Number.parseInt(range.value, 10);
                let destination = e.target.value;
                this.onAnimateRange(range, rangeStartPosition, destination, index);
            });
        });

        return div;
    },

    //======================================== ANIMATION DEFINITION


    setPageExitAnimation: function setPageExitAnimation(raw) {
        let top = (raw * 50) * 2;
        let opacity = .9 - ((raw * 1) * 2);
        //let top = (raw*100);
        //let opacity = .9 -(raw*1);
        let style = this.bodyElement.querySelector(`[data="page-style-animation"]`);
        style.innerHTML = `
        article { 
            margin-top: ${top}px;
            opacity: ${opacity};
          }
        `;
    },

    setPageEnterAnimation: function setPageEnterAnimation(raw) {
        let top = 100 - (raw * 50) * 2;
        let opacity = ((raw * 1) * 2);
        //let top = raw*100;
        //let opacity = Math.abs(1-raw);
        let style = this.bodyElement.querySelector(`[data="page-style-animation"]`);
        style.innerHTML = `
        article { 
            margin-top: ${top}px;
            opacity: ${opacity};
          }
        `;
    },

    setSliderStyleAnimation: function setSliderStyleAnimation(diameter) {
        let style = this.bodyElement.querySelector(`[data="slider-style-animation"]`);
        style.innerHTML = `
        #navigationMenuSlider::-webkit-slider-thumb { 
            width: ${diameter}px !important;
            height: ${diameter}px !important; 
        }
        #navigationMenuSlider::-moz-range-thumb { 
            width: ${diameter}px !important; 
            height: ${diameter}px !important;
        }
        #navigationMenuSlider::-ms-thumb { 
            width: ${diameter}px !important; 
            height: ${diameter}px !important;
        }
        `;
    },

    animate: function animate({
        duration,
        timing,
        draw
    }) {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {

            let timeFraction = (time - start) / duration;

            if (timeFraction > 1) {
                timeFraction = 1;
            }

            let progress = timing(timeFraction);
            draw(progress);

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    },

    makeEaseInOut: function makeEaseInOut(timing) {
        return function (timeFraction) {
            if (timeFraction < .5)
                return timing(2 * timeFraction) / 2;
            else
                return (2 - timing(2 * (1 - timeFraction))) / 2;
        }
    },

    //=====================================================================
    pageNumber: 0,

    getPageNumber: function getPageNumber() {
        return this.pageNumber;
    },

    setPageNumber: function setPageNumber(n) {
        this.pageNumber = n;
    },

    getFirtsPage: function getFirtsPage() {
        let div = document.createElement(`article`);
        div.id = `homeArticle`;
        div.className = `page`;
        div.innerHTML = `
        <div class="sectionBlock">
            <h1>Hi!</h1>
            <span>I’m  a design student from Colombia.</span>
            <h3>I am currently looking for an <span class="bolder">AWESOME INTERNSHIP</span></h3>
        </div>`;

        return div;
    },
    getSecondPage: function getSecondPage() {
        let div = document.createElement(`article`);
        div.id = `aboutArticle`;
        div.className = `page`;
        div.innerHTML = `
        <div class="sectionBlock">
            <h1> About </h1>
            <h3> Datos varios </h3>
        </div>
        <div class="sectionBlock">
            <div class="textContainerInSection">
                <h3> Datos varios </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit est praesent non augue suspendisse, mus luctus vestibulum per facilisis sociosqu inceptos curabitur et laoreet dictum. Rutrum viverra sem mus iaculis hendrerit phasellus lacinia risus, quisque montes diam congue pretium aliquet primis integer sapien, facilisi ultricies vitae himenaeos eleifend tellus laoreet. Justo dapibus donec duis porttitor auctor primis pharetra per mus eu integer, sodales fringilla volutpat suspendisse pulvinar dui netus taciti bibendum felis laoreet metus, enim egestas hac lobortis facilisis diam eros malesuada nisi ad. </p>
            </div>
        </div>
        <!--div class="sectionBlock">
            <div class="iFrameContainerInSection">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/g6idU-GWSxA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="sectionBlock">
            <div class="textContainerInSection">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit est praesent non augue suspendisse, mus luctus vestibulum per facilisis sociosqu inceptos curabitur et laoreet dictum. Rutrum viverra sem mus iaculis hendrerit phasellus lacinia risus, quisque montes diam congue pretium aliquet primis integer sapien, facilisi ultricies vitae himenaeos eleifend tellus laoreet. Justo dapibus donec duis porttitor auctor primis pharetra per mus eu integer, sodales fringilla volutpat suspendisse pulvinar dui netus taciti bibendum felis laoreet metus, enim egestas hac lobortis facilisis diam eros malesuada nisi ad. </p>
            </div>
            <div class="imgContainerInSection">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f0054d31931717.5667899699352.png">
            </div>
        </div-->`;

        return div;
    },
    getThirdPage: function getThirdPage() {
        let div = document.createElement(`article`);
        div.id = `portfolioArticle`;
        div.className = `page`;
        div.innerHTML = `
        <div class="sectionBlock">
            <h1> Projects </h1>
            <h3> Datos varios </h3>
        </div>
        <div class="sectionBlock">
            <ul>
                <li>Hictio</li>
                <li>Ginef</li>
                <li>BeoLab</li>
                <li>Helix</li>
            </ul>
        </div>
        `;

        return div;
    },
    getForthPage: function getForthPage() {
        let div = document.createElement(`article`);
        div.id = `contactArticle`;
        div.className = `page`;
        div.innerHTML = `
        <div class="sectionBlock">
            <h1> Thank you for wathing </h1>
            <span>
            Did you enjoy my work? 
            <br>
            Let me know if you think I could be part of your team during my internship in 2019
            </span>
            <h3>josedavidgm1995@gmail.com</h3>

        </div>
       `;

        return div;
    },

    getPagesArray: function getPagesArray() {
        let pagesArray = [
            this.getFirtsPage(),
            this.getSecondPage(),
            this.getThirdPage(),
            this.getForthPage()
        ]
        return pagesArray;
    },

    getPageContainer: function getPageContainer() {
        let div = document.createElement(`div`);
        div.className = `pagesContainer`;
        div.innerHTML = `
        <style data="page-style-animation" type="text/css"></style>    
        `;
        //<div>© 2019 Jose David Giraldo / All Rights Reserved</div>

        div.appendChild(this.getPagesArray()[this.pageNumber]);

        let page = div.querySelector(".page");


        /* window.addEventListener(`scroll`, (e) => {
             console.log(`Div height: ${page.scrollHeight} /
             \n Scroll y: ${page.scrollTop}
             \n Client y: ${page.clientHeight}
             \n ${page.scrollTop + page.clientHeight ==  page.scrollHeight }
             `);
         });*/

        /*window.addEventListener('click', (e) => {
            div.querySelector(".page").style.WebkitAnimation = "exit 0.5s ease-in-out";
            div.querySelector(".page").style.animation = "exit 0.5s ease-in-out";
            window.setTimeout(() => {
                div.querySelector(".page").scrollTop = 0;
                window.screenTop = 0;
                this.onPageChange(this.pageNumber);
            }, 500);
        });*/

        return div;
    },

    renderPage: function renderPage(n) {
        this.setPageNumber(n);
        let p = document.querySelector(`.pagesContainer`);
        p.innerHTML = `
        <style data="page-style-animation" type="text/css"></style>   
        `;
        p.appendChild(this.getPagesArray()[this.getPageNumber()]);
        console.log(`Actual page number: ${this.getPageNumber()}`);
    },

    //=====================================================================
    render: function render() {
        this.bodyElement.innerHTML = ``;

        this.bodyElement.appendChild(this.getCornerTitle());
        this.bodyElement.appendChild(this.getNavegationMenu());
        this.bodyElement.appendChild(this.getPageContainer());
    }

};