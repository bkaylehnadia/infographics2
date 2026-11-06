
 // nadiabkayleh
 // oddburger animation ad
 // Original animation timing preserved

window.onload = function() {

    // Create GSAP timelines
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();

    // Start timeline animation

    tl.from(".logo", {
        x: -500,
        duration: 2.5,
        ease: "back.out(1.7)",
    });

    tl.from(".burg1", {
        duration: 3,
        opacity: 0,
        y: -50
    })
    .to(".burg1", {
        duration: 1,
    });

    tl2.from(".fast", {
        x: -500,
        delay: 2,
        duration: .2
    });

    tl2.from(".vegan", {
        x: -500,
        duration: .2
    });

    tl2.from(".healthy", {
        x: -500,
        duration: .2
    });

    tl2.from(".smile1", {
        y: -300,
        duration: 2.5,
        ease: "bounce.out",
    })
    .to(".smile1", {
        x: 200,
        delay: 1.4,
        opacity: 0,
    })
    .to(".fast", {
        x: -500,
        duration: .2
    });

    tl2.to(".vegan", {
        x: -500,
        duration: .2
    });

    tl2.to(".healthy", {
        x: -500,
        duration: .2
    });

    tl.from(".burg1", {
        duration: 3,
        duration: .2
    })
    .to(".burg1", {
        duration: 1,
        scale: 0,
        opacity: 0
    });

    // Scale down the logo
    tl.to(".logo", {
        scale: 0.5,
        duration: 1,
        ease: "power2.inOut",
    });

    // Move logo to top left
    tl.to(".logo", {
        x: -60,
        y: -50,
        duration: 1,
        ease: "power2.inOut",
    });

    // Intro text
    tl.from(".text1", {
        x: -500,
        duration: .2
    });

    tl.from(".text2", {
        x: -500,
        duration: .2
    });

    tl.from(".text3", {
        x: -500,
        duration: .2
    });

    tl.from(".cups", {
        y: 900,
        opacity: 0
    })
    .to(".cups", {
        opacity: 1
    });

    tl.to(".text1", {
        delay: 2,
        x: -500,
        duration: .2
    });

    tl.to(".text2", {
        x: -500,
        duration: .2
    });

    tl.to(".text3", {
        x: -500,
        duration: .2
    });

    tl.to(".logo", {
        opacity: 0
    });

    tl.from(".cups", {})
    .to(".cups", {
        ease: "power4.out",
        y: 900,
        duration: 1
    });

    // Final screen
    tl.from(".bar", {
        y: -200
    });

    tl.from(".bag", {
        x: -700
    });

    tl.from(".sign", {
        x: 700,
        duration: .2
    });

    tl.from(".free", {
        x: 700,
        duration: .2
    });

    tl.from(".bur", {
        x: 700,
        duration: .2
    });

    tl.from(".burger", {
        x: -700
    });

    tl.from(".smiley2", {
        y: -200
    });

    tl.from(".white", {
        opacity: 0,
        delay: 2
    })
    .to(".white", {
        opacity: 1
    });

    // AUTOMATIC LOOP
    // Wait 2 seconds after animation finishes
    // Then restart both original timelines

    tl.eventCallback("onComplete", function() {
        gsap.delayedCall(2, function() {
            tl.restart();
            tl2.restart();
        });
    });

};
