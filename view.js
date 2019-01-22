var t0 = performance.now();
/*
function onYouTubeIframeAPIReady(videoID) {
    console.log('enter fuction YouTube');
    let player;
    player = new YT.Player('YouTubeBackgroundVideoPlayer', {
        videoId: videoID, // YouTube Video IDhttps://youtu.be/g6idU-GWSxA  _oZTvCParEs rbmRyxe87PA
        width: 1920, // Player width (in px)
        height: 1080, // Player height (in px)
        playerVars: {
            playlist: videoID,
            autoplay: 1, // Auto-play the video on load
            autohide: 1,
            disablekb: 1,
            controls: 0, // Hide pause/play buttons in player
            showinfo: 0, // Hide the video title
            modestbranding: 1, // Hide the Youtube Logo
            loop: 1, // Run the video in a loop
            fs: 0, // Hide the full screen button
            autohide: 0, // Hide video controls when playing
            rel: 0,
            enablejsapi: 1
        },
        events: {
            onReady: function (e) {
                e.target.mute();
                e.target.setPlaybackQuality('hd1080');
            },
            onStateChange: function (e) {
                if (e && e.data === 1) {
                    // let videoHolder = document.getElementById('background-youtube-video');
                    let videoHolder = div;
                    //let projectCoverPageContainer = document.querySelector('#project-coverPageContainer');
                    if (videoHolder && videoHolder.id) {
                        videoHolder.classList.remove('loading');
                        //projectCoverPageContainer.classList.remove('loading');

                    }
                } else if (e && e.data === 0) {
                    e.target.playVideo()
                }
            }
        }
    });
};*/

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
            <div>
                <h3> Datos varios </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit est praesent non augue suspendisse, mus luctus vestibulum per facilisis sociosqu inceptos curabitur et laoreet dictum. Rutrum viverra sem mus iaculis hendrerit phasellus lacinia risus, quisque montes diam congue pretium aliquet primis integer sapien, facilisi ultricies vitae himenaeos eleifend tellus laoreet. Justo dapibus donec duis porttitor auctor primis pharetra per mus eu integer, sodales fringilla volutpat suspendisse pulvinar dui netus taciti bibendum felis laoreet metus, enim egestas hac lobortis facilisis diam eros malesuada nisi ad. </p>
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
    //------------------------------------------------- Project pages structure

    getYouTubeBackGroundVideo: function getYouTubeBackGroundVideo(videoID) {
        let div = document.createElement('div');
        div.id = 'background-youtube-video';
        div.className = 'loading';
        div.innerHTML = `
            <script async src="https://www.youtube.com/iframe_api"></script>
            <script>${
                function onYouTubeIframeAPIReady() {
                 console.log('enter fuction YouTube');
                     let player;
                     player = new YT.Player('YouTubeBackgroundVideoPlayer', {
                         videoId: videoID, // YouTube Video IDhttps://youtu.be/g6idU-GWSxA  _oZTvCParEs rbmRyxe87PA
                         width: 1920, // Player width (in px)
                         height: 1080, // Player height (in px)
                         playerVars: {
                             playlist: videoID,
                             autoplay: 1, // Auto-play the video on load
                             autohide: 1,
                             disablekb: 1,
                             controls: 0, // Hide pause/play buttons in player
                             showinfo: 0, // Hide the video title
                             modestbranding: 1, // Hide the Youtube Logo
                             loop: 1, // Run the video in a loop
                             fs: 0, // Hide the full screen button
                             autohide: 0, // Hide video controls when playing
                             rel: 0,
                             enablejsapi: 1
                         },
                         events: {
                             onReady: function (e) {
                                 console.log('onReady fuction YouTube');
                                 e.target.mute();
                                 e.target.setPlaybackQuality('hd1080');
                             },
                             onStateChange: function (e) {
                                 if (e && e.data === 1) {
                                     console.log('onStateChange ==== 1 fuction YouTube');
                                     // let videoHolder = document.getElementById('background-youtube-video');
                                     let videoHolder = div;
                                     //let projectCoverPageContainer = document.querySelector('#project-coverPageContainer');
                                     if (videoHolder && videoHolder.id) {
                                         videoHolder.classList.remove('loading');
                                         
                                         //projectCoverPageContainer.classList.remove('loading');
         
                                     }
                                 } else if (e && e.data === 0) {
                                     e.target.playVideo()
                                 }
                             }
                         }
                     });
                }}</script>
            <section id="home-banner-box" class="home-banner loading">
                <div class="video-background">
                    <div class="video-foreground" id="YouTubeBackgroundVideoPlayer">
                    </div>
                </div>
             </section>
        `;
        // onYouTubeIframeAPIReady(videoID);

        return div;
    },

    getProjectCoverPage: function getProjectCoverPage(coverData) {
        let div = document.createElement('div');
        div.id = 'project-coverPage';
        div.innerHTML = `
            <div id="project-title">
                <div id="project-titlesBox">
                    <h1>${coverData.title}</h1>
                    <h2>${coverData.subTitle}</h2>
                </div>
                <div id="project-purpose">
                    <p>${coverData.purpose}</p>
                </div>
            </div>
        `;
        div.appendChild(this.getYouTubeBackGroundVideo(coverData.youTubeVideoID));
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
    getProjectTextBoxInsideDisplay: function getProjectTextBoxInsideDisplay(sectionInfo) {
        let div = document.createElement('div');
        div.className = 'project-text-box-display-InsideSection';
        div.innerHTML = `
        <h2>${sectionInfo.title}</h2>
        <h3>${sectionInfo.subTitle}</h3>
        <p>${sectionInfo.text}</p>
        `;
        return div;
    },

    getProjectSectionInsideContent: function getProjectSectionInsideContent(sectionInfo) {
        let div = document.createElement('div');
        div.className = 'project-section-InsideContent';
        div.innerHTML = `
            <div class="project-display-InsideSection"></div>
        `;
        let InsideDisplay = div.querySelector(".project-display-InsideSection");
        //.project-display-InsideSection is the bow with 1400px width
        InsideDisplay.appendChild(this.getProjectTextBoxInsideDisplay(sectionInfo));
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
    getThankYouContainer: function getThankYouContainer() {
        let div = document.createElement('div');
        div.id = 'thankYouContainer';
        div.innerHTML = `
            <div class="thankYouBlock">
                <button>
                    <p>Back to top</p>
                </button>
            </div>
            <div class="thankYouBlock" id="nextPrev">
                <button><p id="nextProject">Next Project</p></button>
                <p>1/4</p>
                <button><p id="previousProject">Previous Project</p></button>
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

        return div;
    },
    getProjectContainer: function getProjectContainer(project) {
        let div = document.createElement('div');
        div.id = 'project-container';

        div.appendChild(this.getProjectCoverPage(project.coverData));
        div.appendChild(this.getProjectBriefData(project.briefData));
        div.appendChild(this.getProjectContentContainer(project.sections));
        div.appendChild(this.getThankYouContainer());

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
        p.innerHTML = `
        <style data="page-style-animation" type="text/css"></style>   
        `;
        p.appendChild(this.getPagesArray()[this.getPageNumber()]);
        //console.log(`Actual page number: ${this.getPageNumber()}`);
    },
    renderPageProjects: function renderPageProjects(n) {
        this.bodyElement.innerHTML = ``;
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
    renderProject: function renderProject(project) {
        this.bodyElement.innerHTML = ``;

        this.bodyElement.appendChild(this.getBackToPorjectsMenuBar());
        this.bodyElement.appendChild(this.getProjectContainer(project));
    },
    //===================================================================== Initial Render
    render: function render() {

        this.bodyElement.innerHTML = ``;
        this.bodyElement.appendChild(this.getCornerTitle());
        this.bodyElement.appendChild(this.getNavegationMenu(0));
        this.bodyElement.appendChild(this.getPageContainer());
    }

};