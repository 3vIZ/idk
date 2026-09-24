input.onButtonPressed(Button.A, function () {
    katakana.showString("hi")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("BREAK FINISHED.")
})
basic.forever(function () {
    basic.showString("PRESS A TO BREAK")
})
basic.showString("HELLO BOI")
input.onButtonPressed(Button.AB), function () {}