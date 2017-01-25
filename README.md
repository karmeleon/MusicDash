# MusicDash
Node.js app to play music when an Amazon Dash button is pressed

Requirements
============
* An Amazon Dash Button
* node.js and npm
* Some sort of Linux-based computer with a speaker (Raspberry Pi recommended)
* mplayer
* Some memey-ass songs to play

Setup
=====
* Clone the repo and run `npm install`
* Set up your Dash Button as detailed [here](https://github.com/hortinstein/node-dash-button)
* Put the MAC address you found as well as your Linux username in the config.json file
* Fill sounds/ with some dank sound clips
* Stick your button on the wall behind your door where the door stopper or knob will hit it
* `sudo node app.js`
* Open the door
* Get on the floor
* Everybody walk the dinosaur

FAQ
===
###Why do I have to enter my username?

PulseAudio doesn't allow `root` to play sound through it, and PulseAudio is required for MPlayer to work. Other players do play audio as the superuser, but PulseAudio was required to make Bluetooth speakers work, which is what I use. [Here's the guide to setting up a BT speaker on a Pi, if you want to do it as well](http://youness.net/raspberry-pi/bluetooth-headset-raspberry-pi).

###Why's there such a long delay between opening the door and the sound playing?

`node-dash-button` listens for the Dash Button to join your Wi-Fi network in order to detect a button press. This takes several seconds, there's nothing anyone can do about it. I know, it sucks.

###You seem like a lean, mean, meme machine, why don't you provide some sounds to try out?

I don't want the RIAA busting down my door, only to immediately have their suspicions of music piracy confirmed when they're met with a 15-second clip of Walk The Dinosaur. Sorry.

###Just...why?

I don't know either, bud.