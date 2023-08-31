import("stdfaust.lib");


midigate = button("do");

attack = hslider("attack", 0.1, 0.001, 2, 0.001);
decay = hslider("decay", 0.1, 0.001, 2, 0.001);
sustain = hslider("sustain", 1, 0.001, 1, 0.001);
release = hslider("release", 3.1, 0.001, 60, 0.001);

vol = en.adsre(attack, decay, sustain, release, midigate);

lfo = os.lf_triangle(0.6);

hz = hslider("hz", 160, 20, 300, 1) : si.smoo;
oscillator1 = os.sawtooth(hz);
oscillator2 = os.sawtooth(hz - 10);

filter = fi.resonlp(
    hslider("cutoff", 1200, 20, 20000, 1) : si.smoo, 14, 0.1);

echoR = ef.echo(0.18, 1.3, 0.96);
echoL = ef.echo(0.15, 1.3, 0.97);

process = (oscillator1,oscillator2) :> * (vol * hslider("vol", 0.5, 0, 1, 0.1) : si.smoo) : filter <: echoL,echoR : _,_;
