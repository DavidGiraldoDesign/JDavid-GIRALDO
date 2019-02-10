(function controller(view, projectHolder) {
    view.render();
    let staticDiameter = 8;
    let squeeze = 6;
    let steps = 0;

    let lowerTitles = document.querySelector('#lowerTitles');
  
    let bodyColor = document.querySelector('body');
    let root = document.querySelector('#Root');
    let bntsMenu = document.querySelectorAll('.btn-menu');
    let conerTitles = document.querySelectorAll('.cornerTitle');




    view.onAnimateRange = (range, rangeStartPosition, destination, index) => {
        let menuBackground = document.querySelector('#menuBackground');
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
                                menuBackground.style.display = 'none';
                                bodyColor.style.backgroundImage = 'url("https://res.cloudinary.com/dpnemhlg6/image/upload/v1549234041/fondo-josedavid_dv6hqd.png")';
                                break;

                            case 1:
                                menuBackground.style.display = 'block';
                                bodyColor.style.backgroundImage = 'none';
                                break;
                            case 2:
                                menuBackground.style.display = 'block';
                                bodyColor.style.backgroundImage = 'none';
                                break;
                            case 3:
                                menuBackground.style.display = 'none';
                                bodyColor.style.backgroundImage = 'url("https://res.cloudinary.com/dpnemhlg6/image/upload/v1549396616/thankyou-background_rp6p4d.png")';
                                break;
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
            duration: 1500,
            timing: view.makeEaseInOut((timeFraction) => {
                gobalTiming = timeFraction;
                return Math.pow(timeFraction, 4);
            }),
            draw(progress) {
                root.style.opacity = 1 - gobalTiming;

                if (progress >= 0.5) {
                    if (!pagehasChange) {
                        view.renderProject(projectIndex);
                        pagehasChange = true;
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

    view.onNextProject = (actualProjectIndex, portfolioSize) => {
        let pagehasChange = false;
        let gobalTiming = 0;
        view.animate({
            duration: 500,
            timing: view.makeEaseInOut((timeFraction) => {
                gobalTiming = timeFraction;
                return Math.pow(timeFraction, 4);
            }),
            draw(progress) {
                root.style.opacity = 1 - gobalTiming;

                if (progress >= 0.5) {
                    if (!pagehasChange) {
                        if (actualProjectIndex < portfolioSize - 1) {
                            actualProjectIndex++;
                        } else {
                            actualProjectIndex = 0;
                        }
                        view.renderProject(actualProjectIndex);
                        pagehasChange = true;
                    }

                }
            }
        });
    }

    view.onPreviousProject = (actualProjectIndex, portfolioSize) => {
        let pagehasChange = false;
        let gobalTiming = 0;
        view.animate({
            duration: 500,
            timing: view.makeEaseInOut((timeFraction) => {
                gobalTiming = timeFraction;
                return Math.pow(timeFraction, 4);
            }),
            draw(progress) {
                root.style.opacity = 1 - gobalTiming;

                if (progress >= 0.5) {
                    if (!pagehasChange) {
                        if (actualProjectIndex > 0) {
                            actualProjectIndex--;
                        } else {
                            actualProjectIndex = 3;
                        }
                        view.renderProject(actualProjectIndex);
                        pagehasChange = true;
                    }

                }
            }
        });
    }

})(view, projectHolder);

var t1 = performance.now();
//console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

var styleA = [
    'border: 1px solid #3E0E02', 'color: black', 'display: block', 'line-height: 40px', 'text-align: center', 'font-size: 18px', 'font-weight: bold'
].join(';');
var styleB = [
    'color: black', 'display: block', 'line-height: 40px', 'text-align: center', 'font-size: 14px', 'font-weight: normal'
].join(';');

console.log('%c Hey Human Welcome to my Code ', styleA);
console.image("https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif");
console.log('%c This portfolio was made from scratch by me, using vanilla javascript. ', styleB);
console.log('%c © 2019 JoseDavid GIRALDO / All Rights Reserved ', styleB);


