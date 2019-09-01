# Start With A Fresh Linux Install

## Run Updates On Installed Packages
`sudo apt-get update`

## Start with the builder builders: dpkg, c compilers, c libraries, and make
`sudo apt-get install build-essential`

### Confirm install with
`gcc --version` and `make --version`

## Install browser, paint tool, git cli, photo editor, docker, zshell, curl, gdebi and some other nice to have packages
`sudo apt-get install chromium-browser pinta git shutter vlc kazam bleachbit caffeine yadm fasd lnav docker docker-compose httpie tilix zsh curl gdebi-core gdebi libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386 -y`

## Now that we have cURL, grab zshell plugin
`curl -sL --proto-redir -all,https https://raw.githubusercontent.com/zplug/installer/master/installer.zsh | zsh`

## Node Version Manager for NodeJS and NPM management
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
`nvm install --lts`

### Confirm install with
`node --version` and `npm --version`

## Get Android Studio .deb package at: https://developer.android.com/studio
`sudo gdebi code_1.37.1-1565886362_amd64.deb`
`tar xzvf android-studio-ide-191.5791312-linux.tar.gz`
`sudo mv android-studio/ /usr/local/`
`cd /usr/local/android-studio/bin`

## To run, from /usr/local/android-studio/bin:
`./studio.sh`

## After running the first time some additional packages will be automatically installed. If your hardware supports it, these can speed up rendering during development
`sudo apt-get install qemu-kvm libvirt-bin ubuntu-vm-builder bridge-utils virtinst cpu-checker libvirt-daemon-system libvirt-clients`

## Any number above 1 should be acceptable, to test:
`egrep -c '(vmx|svm)' /proc/cpuinfo`

## Check your hardware with:
`kvm-ok`

### Which should output: 
INFO: /dev/kvm exists
KVM acceleration can be used

