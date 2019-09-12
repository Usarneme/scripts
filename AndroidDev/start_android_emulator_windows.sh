#!/bin/bash
#
#GOTO
#$ cd /c/Users/usarneme/AppData/Local/Android/sdk/emulator
#
#RUN
#$ emulator -avd Nexus_S_API_21 -netdelay none -netspeed full
#
#LIST
#$ emulator -list-avds
#
#ALL IN ONE
cd /c/Users/usarneme/AppData/Local/Android/sdk/emulator && ./emulator -avd Pixel_2_API_28_Pie
