# Crouton + Ubuntu = Dev Env
## Tested on HP Chromebook 14

  1. Powerwash your Chromebook:
  * In the taskbar, click on the settings omnibox (where the clock, wifi, and battery are located).
  * Click on the Cog that will open the Settings window
  * Scroll to the bottom and click on Advanced
  * Scroll to the bottom and click on Powerwash -- follow the instructions. It will take a minute.
  * The computer should auto-restart. You can login at this point but you need to first turn on Developer Mode.
  * When the Chromebook is on, click Esc+Refresh+Power buttons on the keyboard
  * The warning will tell you this is not a secure setup -- read that warning and do so at your own risk.
  * Ctrl+D at startup will skip the warning splash page; or just wait 30 extra seconds.

Now that you have a fresh powerwashed ChromeBook in Developer mode:

  2. Go to DScheider's crouton github (https://github.com/dnschneid/crouton/) and read the instructions to see if anything has changed. 
  3. Download Crouton (direct link): https://goo.gl/fd3zc
  4. Ctrl+Alt+T to open a new terminal window

Tips:
```bash
sh ~/Downloads/crouton -t help
sh ~/Downloads/crouton -r list
```

  5. Install the chroot with some extra packages:
```bash
sudo sh ~/Downloads/crouton -t xiwi,cli-extra,keyboard,xfce4 -u
```

Note: Xiwi package allows you to run a full Ubuntu/chroot in a window in ChromeOS. Allowing you to Alt-tab between operating system environments, share the clipboard, etc. 

Note: After it installs all the packages you'll get some informative text. Read that for other options. 

  6. Enter your new chroot:
```shell
sudo startxfce4 -b
```
Note: -b flag opens in the background so you don't have to keep this terminal window open. Once the command is run you can safely close that Chrosh/ChromeOS terminal shell window if you want. 

Now you have a working, bare-bones install of Ubuntu LTS.

## Part (2) - Getting dependencies and packages installed for a Development environment

We need so many packages!

### Simple text editors
```bash
sudo apt-get install nano less gedit kate geany joe
```

### Utility packages
Office suite, browsers, vlc media player, image editing and viewing and manipulation, terminal enhancements
```bash
sudo apt-get install libreoffice chromium-browser firefox vlc kodi digiKam shotwell gimp clementine terminator zsh smem bash curl wget build-essential m4 texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev
```

Tip. To fix missing dependencies at any time, run:
```bash
sudo apt-get install -f
```

### Codebases, Git, dependencies, etc.
```
sudo apt-get install git libnss3 python gvfs-bin ruby mysql-common mysql-server mysql-client php-mysql python-mysqldb
```

### LinuxBrew, Bower, etc
See: http://linuxbrew.sh/ for more. 
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"
```
Add PATH vars:
```
echo 'export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"' >>~/.bash_profile
echo 'export MANPATH="/home/linuxbrew/.linuxbrew/share/man:$MANPATH"' >>~/.bash_profile
echo 'export INFOPATH="/home/linuxbrew/.linuxbrew/share/info:$INFOPATH"' >>~/.bash_profile
```
And test to ensure they are working
```
test -d ~/.linuxbrew && PATH="$HOME/.linuxbrew/bin:$PATH"
test -d /home/linuxbrew/.linuxbrew && PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"
test -r ~/.bash_profile && echo 'export PATH="$(brew --prefix)/bin:$PATH"' >>~/.bash_profile
echo 'export PATH="$(brew --prefix)/bin:$PATH"' >>~/.profile
```
If you get a locales error when testing the echo command above, check out https://www.thomas-krenn.com/en/wiki/Perl_warning_Setting_locale_failed_in_Debian and try setting:
```
localedef -i en_US -f UTF-8 en_US.UTF-8
```
then run the echo command or 
```
brew --version
```
and it should have no errors.

### NodeJS, npm, and nvm
For instructions, see: https://github.com/creationix/nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
command -v nvm
```
If the last command fails, close and reopen your terminal editor.

### IDE/Code editors
#### Atom - https://github.com/atom/atom
Download the amd64 deb file, navigate to the download directory and run
```
sudo dpkg --install atom-amd64.deb
```
#### VSCode - https://code.visualstudio.com/docs/setup/linux
Download the current install .deb file from https://code.visualstudio.com/docs/setup/linux and run:
```
sudo dpkg -i code_1.16.1-1505406497_amd64.deb
```

### Android development
```
sudo apt-get install genymotion
```
Android Studio - https://developer.android.com/studio/install.html
Prereqs:
```
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
```
Then follow instructions on the website for the latest version (dl, install).

### Nice to haves
```
sudo apt-get install mcrypt handbrake nmap
```







ALTERNATIVE INSTALLS (these don't seem to work as well as the instructions above for me but YMMV): 

Use linuxbrew to install if possible. Otherwise follow these instructions:

### NodeJS, npm, web dev packages
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

#### npm packages
```
npm install -g react
npm install -g react-dom
npm install -g prop-types
npm install -g gulp
npm install -g express
npm install -g lodash
npm install -g create-react-app
```
NOTE: If you are having write problems installing global npm packages, you may need to adjust directory settings or install in another directory. For more info see: https://docs.npmjs.com/getting-started/fixing-npm-permissions




