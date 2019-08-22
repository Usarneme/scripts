# ChromeBook/OS + Crouton + Ubuntu = Development Environment
## WARNING: This is messing around with the linux command line. You can and probably will break things. No warranty, as-is code. Use at your own risk. 
### Tested on HP Chromebook 14. Working as of 09/20/2017

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
sudo sh ~/Downloads/crouton -t xiwi,cli-extra,keyboard,xfce-desktop
```
Note: Xiwi package allows you to run a full Ubuntu/chroot in a window in ChromeOS. Allowing you to Alt-tab between operating system environments, share the clipboard, etc. 

Note: This will take a while. But check in once in a while because eventually it will prompt you for a user name and password for the default user. At which point the script should be about finished. After it installs all the packages you'll get some informative text. Read that for other options. 

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
sudo apt-get install libreoffice chromium-browser firefox vlc kodi digikam shotwell gimp clementine terminator zsh smem bash curl wget build-essential m4 texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev
```

Tip. To fix missing dependencies at any time, run:
```bash
sudo apt-get install -f
```

### Codebases, Git, dependencies, etc.
```
sudo apt-get install git libnss3 python gvfs-bin ruby mysql-common mysql-server mysql-client php-mysql python-mysqldb
```

### LinuxBrew
See: http://linuxbrew.sh/ for more. 
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"
```
Add PATH vars:
```
echo 'export PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"' >>~/.bash_profile
echo 'export MANPATH="/home/linuxbrew/.linuxbrew/share/man:$MANPATH"' >>~/.bash_profile
echo 'export INFOPATH="/home/linuxbrew/.linuxbrew/share/info:$INFOPATH"' >>~/.bash_profile
PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"
```
And test to ensure they are working
```
test -d ~/.linuxbrew && PATH="$HOME/.linuxbrew/bin:$PATH"
test -d /home/linuxbrew/.linuxbrew && PATH="/home/linuxbrew/.linuxbrew/bin:$PATH"
test -r ~/.bash_profile && echo 'export PATH="$(brew --prefix)/bin:$PATH"' >>~/.bash_profile
echo 'export PATH="$(brew --prefix)/bin:$PATH"' >>~/.profile
```
NOTE: If you get a locales error when testing the echo command above, first try closing all terminal windows and opening a fresh one. If it still isn't working check out https://www.thomas-krenn.com/en/wiki/Perl_warning_Setting_locale_failed_in_Debian and try setting:
```
sudo localedef -i en_US -f UTF-8 en_US.UTF-8
```
then run the echo command or 
```
brew --version
```
and it should have no errors. Try closing all terminal windows and reopening or moving back up a step if it still isn't working.

### NodeJS and npm are installed using nvm (node version manager)
For instructions, see: https://github.com/creationix/nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
command -v nvm
```
If the last command fails, close and reopen your terminal editor. Alternatively, test using `nvm --version`

To install the current LTS of NodeJS, use nvm:
```bash
nvm install node
```
You can check Node and npm with `node --version` and `npm --version` respectively to ensure they were installed correctly.

Finally, to use the current installed version:
```
nvm use node
```

### npm packages
NOTE: Some people don't like globally installing some/all of these packages. It's up to you what you want/need globally or by project.
```
npm install -g lodash
npm install -g surge
npm install -g bower
```
You might also want these installed (or these `npm install gulp`, `npm install express`): 
```
npm install -g react
npm install -g react-dom
npm install -g create-react-app
npm install -g prop-types
```
NOTE: If you are having write problems installing global npm packages, you may need to adjust directory settings or install in another directory. For more info see: https://docs.npmjs.com/getting-started/fixing-npm-permissions but be careful as you can get into trouble messing with permissions. You've been warned.

### Yarn
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
yarn --version
```
This should install everything and show you the version number of yarn you just installed. 

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
NOTE: Your version number may vary. Use the above as an example only.

### Android development

Android Studio - https://developer.android.com/studio/install.html
Prereqs:
```terminal
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
```
Then follow instructions on the website to download and install the latest version.

### Nice to haves
```bash
sudo apt-get install mcrypt handbrake nmap
```

### Heroku
For more info see: https://devcenter.heroku.com/articles/heroku-cli
```shell
wget https://cli-assets.heroku.com/heroku-cli/channels/stable/heroku-cli-linux-x64.tar.gz -O heroku.tar.gz
tar -xvzf heroku.tar.gz
mkdir -p /usr/local/lib /usr/local/bin
sudo mv heroku-cli-v6.14.25-4fab11b-linux-x64 /usr/local/lib/heroku
sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku
```
NOTE: `linux`, `x64` and `v6.14.25-4fab11b-linux-x64` are specific to my machine. Yours might be different. See the above link for Heroku to find your machine's instructions. Test it's installed correctly with `heroku --version` as usual.


#### And that's it!

I'll add more as I remember them but this should be a pretty solid start to a development machine on a Chromebook.

Pull/fork, or message me if you want to add anything or report any issues. 

This is a specific set of instructions for an HP Chromebook so it may not work the same for everyone and isn't intended to be an all-encompassing list. These are general instructions that should work with most linux distros using their various package managers/install schemes. 

##### Good luck!

