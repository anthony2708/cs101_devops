package main

import "fmt"

func main() {
	const totalDays int = 90
	var remainingDays int = 90
	challenge := "#90NgàyDevOps"

	fmt.Printf("Chào mừng đến với %v.\n", challenge)
	fmt.Printf("Đây là hành trình %v ngày.\n", totalDays)

	var facebookName string
	var daysCompleted int

	fmt.Println("Nhập thông tin facebook của bạn: ")
	fmt.Scanln(&facebookName)

	fmt.Println("Bạn đã hoàn thành bao nhiêu ngày rồi?: ")
	fmt.Scanln(&daysCompleted)

	remainingDays = remainingDays - daysCompleted

	fmt.Printf("%v đã hoàn thành %v ngày của hành trình.\n", facebookName, daysCompleted)
	fmt.Printf("Bạn còn %v ngày cho hành trình %v.\n", remainingDays, challenge)
	fmt.Println("Xin cảm ơn và chúc bạn thượng lộ bình an!")
}
