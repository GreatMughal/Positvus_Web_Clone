function section1Animation() {
    const tl = gsap.timeline()

    tl.from("#nav img,nav ul .link-nav, #nav #nav-btn", {
        y: -30,
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2
    })

    tl.from("#first-section h1, #first-section p, #first-section #hero-btn", {
        x: -50,
        duration: 0.5,
        opacity: 0,
        stagger: 0.2
    })

    tl.from("#second-section img", {
        opacity: 0,
        duration: 0.5,
        x: 100
    })
}


function section2Animation() {
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 50%",
            end: "top -50",
            scrub: 2,
        }
    })

    tl2.from("#page2 #services h2", {
        y: 30,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
    })

    tl2.from("#page2 #services p", {
        y: 30,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
    })

    tl2.from("#page2 #container #card-one", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    }, "alim")

    tl2.from("#page2 #container #card-three", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    }, "anim")

    tl2.from("#page2 #container #card-two", {
        x: 200,
        opacity: 0,
        duration: 0.5,
    }, "alim")

    tl2.from("#page2 #container  #card-four", {
        x: 200,
        opacity: 0,
        duration: 0.5,
    }, "anim")
}

function section3Animation() {

    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sectionthree",
            scroller: "body",
            start: "top 50%",
            end: "top 0%",
            scrub: 2
        }
    })

    tl3.from("#page3 .con", {
        opacity: 0,
        delay: 0.5,
        duration: 0.5
    })

    tl3.from("#page3 #con-left h2, #page3 #con-left p,#page3 #con-left #card-btn", {
        x: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.3
    })

    tl3.from("#page3 #con-right img", {
        x: 30,
        opacity: 0,
        duration: 0.5,
    })
}

function section4Animation() {
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sectionfour",
            scroller: "body",
            start: "top 20%",
            end: "top 90%",
            scrub: 2
        }
    })

    tl4.from("#page4 #case-study h2", {
        y: 30,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
    })

    tl4.from("#page4 #case-study p", {
        y: 30,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
    })
    tl4.from("#page4 .com", {
        opacity: 0,
        delay: 0.5,
        duration: 0.5
    })

    tl4.from("#page4 .com #left-com", {
        x: -200,
        opacity: 0,
        duration: 0.5
    }, "elem")

    tl4.from("#page4 .com #right-com", {
        x: 100,
        opacity: 0,
        duration: 0.5
    }, "elem")

    tl4.from("#page4 .com #cen-com", {
        y: 200,
        opacity: 0,
        duration: 0.5
    })
}


section1Animation()
section2Animation()
section3Animation()
section4Animation()














