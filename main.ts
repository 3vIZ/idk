input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    led.enable(true)
    led.toggle(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(0, 4)
    led.toggle(4, 4)
    led.toggle(4, 3)
    led.plot(0, 3)
    led.plot(1, 1)
    led.plot(3, 1)
})
input.onButtonPressed(Button.B, function () {
    led.enable(false)
})
basic.forever(function () {
	
})
