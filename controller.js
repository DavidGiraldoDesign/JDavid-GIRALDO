(function controller(view, projectHolder) {
    view.render();
    let staticDiameter = 15;
    let squeeze = 12;
    let steps = 0;

    let lowerTitles = document.querySelector('#lowerTitles');
    let menuBackground = document.querySelector('#menuBackground');
    let bodyColor = document.querySelector('body');
    let root = document.querySelector('#Root');
    let bntsMenu = document.querySelectorAll('.btn-menu');
    let conerTitles = document.querySelectorAll('.cornerTitle');
    let portfolioTitle = document.querySelector('#portfolioTitle');



    view.onAnimateRange = (range, rangeStartPosition, destination, index) => {
        if (rangeStartPosition == destination) {
            return
        }
        let gobalTiming = 0;
        steps = Math.abs(destination - rangeStartPosition);
        let isPageHide = false;
        view.animate({
            duration: 800,
            timing: view.makeEaseInOut((timeFraction) => {
                gobalTiming = timeFraction;
                return Math.pow(timeFraction, 4);
            }),
            draw(progress) {
                if (rangeStartPosition <= destination) {
                    range.value = (rangeStartPosition + (progress * steps));
                } else {
                    range.value = (rangeStartPosition - (progress * steps));
                }
                view.setSliderStyleAnimation((Math.sin(gobalTiming) * -squeeze) + staticDiameter);

                if (progress <= 0.5) {
                    view.setPageExitAnimation(progress);
                } else {
                    if (!isPageHide) {
                        view.renderPage(index);

                        switch (index) {
                            case 0:
                                lowerTitles.style.opacity = '1';
                                break;

                            case 1:
                                lowerTitles.style.opacity = '0';
                                break;
                            case 2:
                                lowerTitles.style.opacity = '1';
                                break;
                            case 3:
                                lowerTitles.style.opacity = '1';
                                break;
                        }

                        if (index == 0) {
                            bodyColor.style.backgroundImage = 'url("josefondoweb.png")';
                        } else {
                            bodyColor.style.backgroundImage = 'none';
                        }
                        if (index == 1) {
                            menuBackground.style.display = 'block';
                        } else {
                            menuBackground.style.display = 'none';
                        }

                        if (index == 2) {
                            portfolioTitle.style.opacity = '0';
                        } else {
                            portfolioTitle.style.opacity = '1';
                        }

                        if (index == 3) {
                            bodyColor.style.backgroundColor = 'rgb(20,20,20)';
                            bntsMenu.forEach(e => {
                                e.style.color = 'rgb(120,120,120)';
                            });
                            conerTitles.forEach(e => {
                                e.style.color = 'rgb(120,120,120)';
                            });
                        } else {
                            bodyColor.style.backgroundColor = 'rgb(255,255,255)';
                            bntsMenu.forEach(e => {
                                e.style.color = 'rgb(100,100,100)';
                            });
                            conerTitles.forEach(e => {
                                e.style.color = 'rgb(55,55,55)';
                            });
                        }

                        isPageHide = true;
                    }
                    view.setPageEnterAnimation(progress);
                }

            }
        });

    }

    view.onShowProject = (projectIndex) => {
        let pagehasChange = false;
        let gobalTiming = 0;
        view.animate({
            duration: 1000,
            timing: view.makeEaseInOut((timeFraction) => {
                gobalTiming = timeFraction;
                return Math.pow(timeFraction, 4);
            }),
            draw(progress) {
                root.style.opacity = 1 - gobalTiming;

                if (progress >= 0.5) {
                    if(!pagehasChange){
                        view.renderProject(projectHolder[projectIndex]);
                        pagehasChange=true;
                    }
                    
                }
            }
        });
    }

    view.onReturnToProjects = () => {
        let gobalTiming = 0;
        view.animate({
            duration: 1000,
            timing: view.makeEaseInOut((timeFraction) => {
                gobalTiming = timeFraction;
                return Math.pow(timeFraction, 4);
            }),
            draw(progress) {
                root.style.opacity = 1 - gobalTiming;

                if (progress >= .5) {
                    view.renderPageProjects(2);
                }
            }
        });
    }


})(view, projectHolder);

var t1 = performance.now();
//console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

var styles = [
    'border: 1px solid #3E0E02', 'color: black', 'display: block', 'line-height: 40px', 'text-align: center', 'font-size: 18px', 'font-weight: bold'
].join(';');

console.log('%c Hey Human Welcome to my Code ', styles);
console.image("https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif");