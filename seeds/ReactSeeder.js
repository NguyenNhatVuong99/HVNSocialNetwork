let React = require('../models/React')

const Seeder = async (req, res,) => {
    let Like = new React({
        title: "Like",
        content: `<div class="emoji emoji--like">
                <div class="emoji__hand">
                    <div class="emoji__thumb"></div>
                    </div>
	            </div>
                `
    }) 
    await Like.save()
    let Love = new React({
        title: "Love",
        content : `<div class="emoji  emoji--love">
		               <div class="emoji__heart"></div>
	                </div>
                    `
    })
    await Love.save()
    let Haha = new React({
        title: "Haha",
        content : `<div class="emoji  emoji--haha">
                        <div class="emoji__face">
                            <div class="emoji__eyes"></div>
                                <div class="emoji__mouth">
                                    <div class="emoji__tongue"></div>
                                </div>
                        </div>
	                </div>
        `
    })
    await Haha.save()
    let Yay = new React({
        title: "Yay",
        content: `
        <div class="emoji  emoji--yay">
            <div class="emoji__face">
                <div class="emoji__eyebrows"></div>
                <div class="emoji__mouth"></div>
            </div>
	    </div>
        `
    })
    await Yay.save()
    let Wow = new React({
        title: "Wow",
        content: `
        <div class="emoji  emoji--wow">
            <div class="emoji__face">
                <div class="emoji__eyebrows"></div>
                <div class="emoji__eyes"></div>
                <div class="emoji__mouth"></div>
            </div>
	    </div>
        `
    })
    await Wow.save()
    let Sad = new React({
        title: "Sad",
        content: `
        <div class="emoji  emoji--sad">
            <div class="emoji__face">
                <div class="emoji__eyebrows"></div>
                <div class="emoji__eyes"></div>
                <div class="emoji__mouth"></div>
            </div>
	    </div>
        `
    })
    await Sad.save()
    let Angry = new React({
        title: "Angry",
        content: `
        <div class="emoji  emoji--angry">
            <div class="emoji__face">
                <div class="emoji__eyebrows"></div>
                <div class="emoji__eyes"></div>
                <div class="emoji__mouth"></div>
            </div>
	    </div>
        `
    })
    await Angry.save()
}

module.exports = { Seeder }