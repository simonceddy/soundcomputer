import("stdfaust.lib");

echoR = ef.echo(0.08, 0.3, 0.96);
echoL = ef.echo(0.1, 0.3, 0.97);

process = _ <: echoL,echoR;