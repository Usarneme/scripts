while [ 1 ]; do dmesg | shuf -n 1; sleep $((1 + RANDOM % 2)); done

# sudo chmod +x file.sh to make it executable with ./file.sh command
