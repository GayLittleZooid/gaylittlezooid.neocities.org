// AUDIO JAVASCRIPT

function play_plushie_sfx() {
    // Storing SFX
    var floatieSFX = new Audio("/assets/audio/sfx/magolor_chat.mp3");
    // Lowering Volume
    floatieSFX.volume = 0.2;
    // Playing sound
    floatieSFX.play();
}