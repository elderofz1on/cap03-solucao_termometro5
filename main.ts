basic.forever(function () {
    if (input.temperature() < 18) {
        if (input.temperature() < 10) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # . . .
                . # . . .
                `)
        }
    } else if (input.temperature() > 24) {
        if (input.temperature() > 34) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
