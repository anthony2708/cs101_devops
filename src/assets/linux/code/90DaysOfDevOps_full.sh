#!/bin/bash
#  ___   ___  ____                   ___   __ ____              ___
# / _ \ / _ \|  _ \  __ _ _   _ ___ / _ \ / _|  _ \  _____   __/ _ \ _ __  ___
#| (_) | | | | | | |/ _` | | | / __| | | | |_| | | |/ _ \ \ / / | | | '_ \/ __|
# \__, | |_| | |_| | (_| | |_| \__ \ |_| |  _| |_| |  __/\ V /| |_| | |_) \__ \
#   /_/ \___/|____/ \__,_|\__, |___/\___/|_| |____/ \___| \_/  \___/| .__/|___/
#                         |___/                                     |_|
#
# This script is to demonstrate bash scripting!

# Variables to be defined

ChallengeName=#90NgàyDevOps
TotalDays=90

# User Input

echo "Nhập tên của bạn: "
read name
echo "Chào mừng $name đến với $ChallengeName"
echo "Bạn đã hoàn thành bao nhiêu ngày trong $ChallengeName?"
read DaysCompleted

if [ $DaysCompleted -eq 90 ]
then
  echo "Bạn đã hoàn thành, xin chúc mừng!"
elif [ $DaysCompleted -lt 90 ]
then
  echo "Cố gắng lên nhé, mọi việc đã rất tốt rồi!"
else
  echo "Bạn đã nhập sai số ngày, vui lòng nhập lại."
fi