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

    getNavegationMenu: function getNavegationMenu(value) {
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
                <input type="range" min="0" max="100" value="${value}" steps="1" class="slider" id="navigationMenuSlider" disabled>
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
            <h3>I’m  a design student from Colombia, currently looking for an <span class="bolder">AWESOME INTERNSHIP</span></h3>
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
        </div>
        <div class="sectionBlock">
            <div>
                <p> My name is Jose David GIRALDO Mosquera, I am an outgoing and active Industrial & Interactive Media Design student at Icesi University in Cali - Colombia (South America), currently looking for an internship.
                <br><br>
                I am aware that I still have too much to learn, nevertheless I am capable to work in collaborative environments and give support in UX design, human centered design, design thinking, sketching, prototyping, 3d modeling and coding.
                <br><br>
                I would love to be able to participate in projects with real clients and be part of a Product/Industrial Design studio with a well constituted team.
                </p>
                <h2> Education </h2>
                <h3> Icesi University (undergraduate student) since 2012 - to date: </h3>
                <p>
                    1. Industrial Design - IX semester
                    <br>
                    2. Interactive Media Design - IX semester
                </p>
                <h3> Certifications: </h3>
                <p>
                    1. Design Kit: Prototyping, provided by +Acumen and IDEO.org (2018).
                    <br>
                    2. SolidWorks Associate - Mechanical Design (2014).
                </p>
                <h2> Recognitions </h2>   
                <p>
                    1. Behance Appreciation Award Coin in product design (2016).
                    <br>
                    2. MASISA Student Design Contest (2016) - 3º Place in Colombia and a special mention in design presentation skills.
                    <br>
                    3. PAVCO Student Design Contest #DiseñaConPavco - 1º Place (2015).
                </p>
                <h2> Student monitor: </h2> 
                <p>
                During my semesters at Icesi University, since 2014, I have been a student monitor, giving my support to teachers by providing  assistance to students requiring additional educational guidance  in the following subjects:
                <br><br>
                Universal Design, usability and accessibility, / Industrial design sketching and analog rendering / 3D modeling with Rhino 5, 3D printing using MakerBot, and product rendering with V-Ray.
                <br><br>
                Furthermore I conducted a 4 week class about using “Behance as a Industrial design portfolio”.
                </p>
                <h2>  Research assistant: </h2> 
                <p>
                I gave my support in industrial design (3d modeling and prototyping)  for the “Platoon-based Cyclists Cooperative System” project - A solution for smart transportation and human-to-machine interfaces.
                </p>
                <h2>  Co-founder of the Industrial design´s Student Group of Icesi University </h2> 
                <p>
                I am a co-founder and the former “Director of design and communication” of the Icesi´s Industrial design student group: “Conceptos”. Creating the brand communication strategies, and visual styling. From: August  2017 to December 2018.
                <br>
                I also design the  “Open House” image for the Industrial Design program at Icesi University each year from 2016 to 2018.
                <br><br>
                <a href="https://www.instagram.com/conceptosicesi/">Instagram</a>
                <a href="https://www.facebook.com/conceptosicesi ">Facebook</a>
                </p>
                
                    
            
            </div>
        </div>
        `;

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
                <li class="project-trigger">Hictio</li>
                <li class="project-trigger">Ginef</li>
                <li class="project-trigger">BeoLab</li>
                <li class="project-trigger">Helix</li>
            </ul>
        </div>
        `;
        let projectTriggers = div.querySelectorAll('.project-trigger');
        projectTriggers.forEach((e, i) => {
            e.addEventListener('click', (event) => {
                this.onShowProject(i);
            });
        });

        return div;
    },
    getForthPage: function getForthPage() {
        let div = document.createElement(`article`);
        div.id = `contactArticle`;
        div.className = `page`;
        div.innerHTML = `
        <!--div class="sectionBlock"-->
        <div class="thankYouBlock">
            <h1> Thank you for wathing </h1>
        </div>
        <div class="thankYouBlock">    
            <p>
            Did you enjoy my work? 
            <br>
            Let me know if you think I could be part of your team during my internship in 2019
            </p>
        </div>
        <div class="thankYouBlock">     
            <h2>josedavidgm1995@gmail.com</h2>
        </div>
        <!--/div-->
       `;

        return div;
    },
    //------------------------------------------------- Project pages structure

    getYouTubeBackGroundVideo: function getYouTubeBackGroundVideo(youTubeVideoID, imageCover) {

        let div = document.createElement('div');
        div.id = 'background-youtube-video';



        div.innerHTML = `
        <div class="video-background">
            <img id="imageCover" src="${imageCover}" alt="josedavid-coverpage">
            <iframe id="YouTubeBackgroundVideoPlayer" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video player" width="1920" height="1080" src="https://www.youtube.com/embed/${youTubeVideoID}?playlist=${youTubeVideoID}&amp;autoplay=1&amp;autohide=0&amp;disablekb=1&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;loop=1&amp;fs=0&amp;rel=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2F127.0.0.1%3A5500&amp;widgetid=1"></iframe>
        </div>
        `;
        if (youTubeVideoID === null) {
            let videoBackground = div.querySelector('#YouTubeBackgroundVideoPlayer');
            videoBackground.style.display = 'none';
            console.log('no hay video');
        }


        return div;
    },

    getProjectCoverPage: function getProjectCoverPage(coverData) {
        let div = document.createElement('div');
        div.id = 'project-coverPage';
        div.innerHTML = `
            <div id="project-title">
                <div id="project-titlesBox">
                    <h1>${coverData.title}</h1>
                    <!--h2>${coverData.subTitle}</h2-->
                </div>
                <div id="project-purpose">
                    <p>${coverData.purpose}</p>
                </div>
            </div>
        `;
        //div.appendChild(this.getYouTubeBackGroundVideo(coverData.youTubeVideoID));
        div.insertBefore(this.getYouTubeBackGroundVideo(coverData.youTubeVideoID, coverData.imageCover), div.childNodes[0]);
        return div;
    },
    getProjectBriefData: function getProjectBriefData(briefData) {
        let div = document.createElement('div');
        div.id = 'project-briefData';
        div.innerHTML = `
        <div id="project-section-insideBriefData">
            <div id="project-header">
                <div id="project-sub-header-up">
                    <h1>${briefData.longTitle}</h1>
                </div>
                <div id="project-sub-header-down">
                    <div class="project-sub-header-block">
                        <h3>Team:</h3>
                        <p>${briefData.team}</p>
                    </div>
                    <div class="project-sub-header-block">
                        <h3>Scope:</h3>
                        <p>${briefData.scope}</p>
                    </div>
                    <div class="project-sub-header-block">
                        <h3>Date:</h3>
                        <p>${briefData.date}</p>
                    </div>
                </div>
            </div>
            <div id="project-tools-list">
                <div class="project-tools-list-block">
                    <h3>Research tools used</h3>
                    <p>${briefData.researchTools}</p>
                </div>
                <div class="project-tools-list-block">
                    <h3>Technologies used</h3>
                    <p>${briefData.techTools}</p>
                </div>
            </div>
        </div>
        `;
        return div;
    },
    //---------------------- Project content micro architecture
    getProjectMediaBoxInsideDisplay: function getProjectMediaBoxInsideDisplay(mediaLink, type) {
        let div = document.createElement('div');
        div.className = 'project-media-box-display-InsideSection';

        if (typeof type === 'string') {
            switch (type) {
                case 'image':
                    div.innerHTML = `
                <img src="${mediaLink}" alt="josedavid GIRALDO Portfolio">
                `;
                    break;
                case 'gif':
                    div.innerHTML = `
                <img src="${mediaLink}" alt="josedavid GIRALDO Portfolio">
                `;
                    break;
                case 'video':
                    div.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${mediaLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
                    break;
            }
        }

        return div;
    },
    getProjectInformationInsideDisplay: function getProjectInformationInsideDisplay(sectionInfo) {
        let div = document.createElement('div');
        div.className = 'project-information-box-InsideDisplay';

        if (sectionInfo.media === true) {
            let image = document.createElement('img');
            image.className = '';
            image.src = sectionInfo.url;
            div.appendChild(image);
        } else {
            let textStringLines = sectionInfo.text.split('\n');

            div.innerHTML = `
                <div class="text-box-padding">
                    <h2>${sectionInfo.title}</h2>
                    <h3>${sectionInfo.subTitle}</h3>
                </div>   
                    `;
            textStringLines.forEach(line => {
                let lineNode = document.createElement('p');
                lineNode.innerHTML = `${line}<br>`;
                div.querySelector('.text-box-padding').appendChild(lineNode);
            });
        }

        return div;
    },

    getProjectSectionInsideContent: function getProjectSectionInsideContent(sectionInfo) {
        let div = document.createElement('div');
        div.className = 'project-section-InsideContent';
        div.innerHTML = `
            <div class="project-display-InsideSection"></div>
        `;
        let InsideDisplay = div.querySelector(".project-display-InsideSection");
        //.project-display-InsideSection is the box with 1400px width

        div.style.background = sectionInfo.style.background;
        div.style.color = sectionInfo.style.color;


        InsideDisplay.appendChild(this.getProjectInformationInsideDisplay(sectionInfo));


        return div;
    },

    getProjectContentContainer: function getProjectContentContainer(sections) {
        let div = document.createElement('div');
        div.id = 'project-content-container';
        sections.forEach((sectionInfo, index) => {
            div.appendChild(this.getProjectSectionInsideContent(sectionInfo));
        });
        return div;
    },
    //---------------------- Thank You
    getThankYouContainer: function getThankYouContainer(actualProjectIndex, portfolioSize) {
        let div = document.createElement('div');
        div.id = 'thankYouContainer';
        div.innerHTML = `
            <div class="thankYouBlock">
                <button>
                    <p id="backToTop">Back to top</p>
                </button>
            </div>
            <div class="thankYouBlock" id="nextPrev">
                <button><p id="previousProject">Previous Project</p></button>
                <p>${actualProjectIndex+1}/${portfolioSize}</p>
                <button><p id="nextProject">Next Project</p></button>
            </div>
            <div class="thankYouBlock">
                <h1>Thank you for watching</h1>
            </div>
            <div class="thankYouBlock">
                <button>
                    <a href="mailto:josedavidgm1995@gmail.com?Subject=Internship%202019" target="_top">
                        <p>Send me an<span class="bolder">EMAIL</span></p>
                    </a>
                </button>
            </div>
            <div class="thankYouBlock">
                <p>© 2019 JoseDavid GIRALDO / All Rights Reserved</p>
            </div>
        `;

        let backToTop = div.querySelector('#backToTop');
        backToTop.addEventListener('click', e => {
            console.log('back to top');
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });


        let nextProject = div.querySelector('#nextProject');
        nextProject.addEventListener('click', e => {
            this.onNextProject(actualProjectIndex, portfolioSize);
        });
        let previousProject = div.querySelector('#previousProject');
        previousProject.addEventListener('click', e => {
            this.onPreviousProject(actualProjectIndex, portfolioSize);
        });

        return div;
    },
    getBackToPorjectsMenuBar: function getBackToPorjectsMenuBar() {
        let div = document.createElement('div');
        div.id = 'backToPorjectBar';
        div.innerHTML = `
            <h1 id="backToPorjectButton">Back to <span class="bolder">Projects</span></h1>
        `;
        let btn = div.querySelector('#backToPorjectButton');
        btn.addEventListener('click', (e) => {
            this.onReturnToProjects();

        });

        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                div.style.top = "0";
            } else {
                div.style.top = "-60px";
            }
            prevScrollpos = currentScrollPos;
        }

        return div;
    },
    getProjectContainer: function getProjectContainer(project, projectIndex, projectHolder) {
        let div = document.createElement('div');
        div.id = 'project-container';

        div.appendChild(this.getProjectCoverPage(project.coverData));
        div.appendChild(this.getProjectBriefData(project.briefData));
        div.appendChild(this.getProjectContentContainer(project.sections));
        div.appendChild(this.getThankYouContainer(projectIndex, projectHolder.length));
        let bgColor = project.style.background;
        let color = project.style.color;
        div.querySelector('#project-content-container').style.background = bgColor;
        div.querySelector('#project-content-container').style.color = color;
        return div;
    },

    //------------------------------------------------- Pages Array [Home, About, Portfolio, Contact]
    getPagesArray: function getPagesArray() {
        let pagesArray = [
            this.getFirtsPage(),
            this.getSecondPage(),
            this.getThirdPage(),
            this.getForthPage()
        ]
        return pagesArray;
    },
    //------------------------------------------------- Pages Container
    getPageContainer: function getPageContainer() {
        let div = document.createElement(`div`);
        div.className = `pagesContainer`;
        div.innerHTML = `
        <style data="page-style-animation" type="text/css"></style>    
        `;
        //<div>© 2019 Jose David Giraldo / All Rights Reserved</div>

        div.appendChild(this.getPagesArray()[this.pageNumber]);

        let page = div.querySelector(".page");
        return div;
    },
    //------------------------------------------------- Render single Page
    renderPage: function renderPage(n) {
        this.setPageNumber(n);
        let p = document.querySelector(`.pagesContainer`);
        p.scrollTop = 0;
        p.innerHTML = `
        <style data="page-style-animation" type="text/css"></style>   
        `;
        p.appendChild(this.getPagesArray()[this.getPageNumber()]);
        //console.log(`Actual page number: ${this.getPageNumber()}`);
    },
    renderPageProjects: function renderPageProjects(n) {
        this.bodyElement.innerHTML = ``;
        this.bodyElement.scrollTop = 0;
        this.bodyElement.appendChild(this.getCornerTitle());
        this.bodyElement.appendChild(this.getNavegationMenu(67));
        this.bodyElement.appendChild(this.getPageContainer());
        this.setPageNumber(n);
        let p = document.querySelector(`.pagesContainer`);
        p.innerHTML = `
        <style data="page-style-animation" type="text/css"></style>   
        `;
        p.appendChild(this.getPagesArray()[this.getPageNumber()]);
        //console.log(`Actual page number: ${this.getPageNumber()}`);
    },
    //------------------------------------------------- Render single Project
    renderProject: function renderProject(projectIndex) {
        this.bodyElement.innerHTML = ``;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // window.screenTop=0;
        this.bodyElement.scrollTop = 0;
        // this.bodyElement.clientHeight=0;
        //this.bodyElement.scrollHeight=0;
        this.bodyElement.appendChild(this.getBackToPorjectsMenuBar());
        this.bodyElement.appendChild(this.getProjectContainer(projectHolder[projectIndex], projectIndex, projectHolder));
    },
    //===================================================================== Initial Render
    render: function render() {

        this.bodyElement.innerHTML = ``;
        this.bodyElement.appendChild(this.getCornerTitle());
        this.bodyElement.appendChild(this.getNavegationMenu(0));
        this.bodyElement.appendChild(this.getPageContainer());
    }

};