

gsap.from('#aboutText h2', {
	y: 200,
	opacity: 0,
	skewY: 20,
	duration: 2,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#aboutText',
		//toggleActions: 'restart none none none',
		//scrub: true,
		// markers: true
	}
})

gsap.from('#projectText h2', {
	y: 200,
	opacity: 0,
	skewY: 20,
	duration: 2,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#projectText',
		//toggleActions: 'restart none none none',
		//scrub: true,
		// markers: true
	}
})

gsap.from('#workStagesText h2', {
	y: 200,
	opacity: 0,
	skewY: 20,
	duration: 2,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#workStagesText',
		//toggleActions: 'restart none none none',
		//scrub: true,
		// markers: true
	}
})

gsap.from('#testinomialText h2', {
	y: 200,
	opacity: 0,
	skewY: 20,
	duration: 2,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#testinomialText',
		//toggleActions: 'restart none none none',
		//scrub: true,
		// markers: true
	}
})

gsap.from('#weWorkWithTheBestText h2', {
	y: 200,
	opacity: 0,
	skewY: 20,
	duration: 2,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#weWorkWithTheBestText',
		//toggleActions: 'restart none none none',
		//scrub: true,
		// markers: true
	}
})

gsap.from('#aboutImageOne', {
	y: 100,
	opacity: 0,
	duration: 1,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#aboutImageOne',
		//toggleActions: 'restart none none none',
		// scrub: true,
		// markers: true
	}
})

gsap.from('#aboutImageTwo', {
	y: 100,
	opacity: 0,
	duration: 1,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#aboutImageTwo',
		// toggleActions: 'restart none none none',
		// scrub: true,
		// markers: true
	}
})


gsap.from('#workStageImage', {
	y: 100,
	opacity: 0,
	duration: 1,
	ease: "power4.out",
	scrollTrigger: {
		trigger: '#workStageImage',
		// toggleActions: 'restart none none none',
		// scrub: true,
		// markers: true
	}
})

var workStageTl = gsap.timeline({
	scrollTrigger: {
		trigger: '#workStageContainer'
	},
	duration: 1,
	ease: "power4.out",
})

workStageTl.from('#workStageOne', {
	y: 50,
	opacity: 0
}).from('#workStageTwo', {
	y: 50,
	opacity: 0
}).from('#workStageThree', {
	y: 50,
	opacity: 0
}).from('#workStageFour', {
	y: 50,
	opacity: 0
})
