import("stdfaust.lib");

// Big Muff style fuzz algorithm
// Untested - might be all bung
process = hgroup("Big Muff Fuzz",
   gain = hslider("Input Gain", 1, 0.1, 10, 0.01),
   tone = hslider("Tone", 0.5, 0, 1, 0.01),
   sustain = hslider("Sustain", 0.5, 0, 1, 0.01),
   chain(gain : hgroup("Distortion",
      clipper = _ <: +~*(1 - tone)*gain :> tanh,
      sustain * clipper * gain
   )),
   volume = hslider("Output Volume", 0.7, 0.1, 1, 0.01),
   gain * volume
);
