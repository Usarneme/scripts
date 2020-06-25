#!/bin/bash
echo 'usage: bash keep_alive.sh url(string) start(number) end(number). Example: bash keep_alive.sh google.com 2 22'
# On what site would you like to see if the server is running?
if [ -z "$1" ]
 then
  echo "No URL supplied - using default (google)"
  URL='google.com'
 else
  URL=$1
fi

if [ -z "$2" ]
 then
  echo "No start time supplied - using default (8am)"
  START_TIME=8
 else
  if (($2 >= 0))
   then 
    if (($2 < 24))
     then 
      START_TIME=$2
     else
      echo "Start time is above 24, using default (8am)"
      START_TIME=8
    fi
   else
    echo "Start time is below 0, using default (8am)"
    START_TIME=8
  fi
fi

if [ -z "$3" ]
 then
  echo "No end time supplied - using default (8pm)"
  END_TIME=20
 else
  if (($3 > 0))
   then 
    if (($3 <= 24))
     then 
      END_TIME=$3
     else
      echo "End time is above 24, using default (8pm)"
      END_TIME=20
    fi
   else
    echo "End time is 0 or below, using default (8pm)"
    END_TIME=20
  fi
fi

echo "START $START_TIME"
echo "END $END_TIME"
echo "URL $URL"

# What time is it now?
NOW=$(date +%H)

# Only test between the provided (or default) hours
if ((((NOW)) >= $START_TIME)) 
 then if ((((NOW)) < $END_TIME))
  then curl $URL > /dev/null
 fi
fi
