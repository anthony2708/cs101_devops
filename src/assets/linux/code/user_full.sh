#! /usr/bin/bash
if [ -z "${1}" ]
then 
   echo "Tên đăng nhập của bạn là gì?"
   read  username
   echo "Mật khẩu của bạn là gì?"
   read  -s password

   #A user can be passed in as a command line argument
   echo "$username đang được tạo..."

   #A user is created with the name of command line argument
   sudo useradd -m $username

   #A password can be parsed in as a command line argument.
   sudo chpasswd <<< $username:$password

   sleep 2 
   echo "Nếu bạn muốn xóa, truyền lệnh 'del' và tên đăng nhập trong câu lệnh. Ví dụ: ./user_ful.sh del username"

else
   sudo userdel -rf "${2}"
   sleep 2	
   echo "${2} đã được xóa khỏi hệ thống."
   exit 0
fi