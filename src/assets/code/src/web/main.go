package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
)

type Page struct {
	Title         string
	facebookName  string
	daysCompleted uint
	remainingDays uint
}

func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	parts := strings.Split(string(data), ",")
	if len(parts) != 3 {
		return nil, fmt.Errorf("Thông tin không hợp lệ trong: %s", filename)
	}

	facebookName := parts[0]
	if len(facebookName) == 0 {
		return nil, fmt.Errorf("Facebook không hợp lệ: %s", parts[0])
	}

	daysCompleted, err := strconv.Atoi(parts[1])
	if err != nil {
		return nil, fmt.Errorf("Số ngày không hợp lệ: %s", parts[1])
	}

	remainingDays, err := strconv.Atoi(parts[2])
	if err != nil {
		return nil, fmt.Errorf("Số ngày còn lại không hợp lệ: %s", parts[2])
	}

	stringDaysCompleted := uint(daysCompleted)
	stringRemainingDays := uint(remainingDays)

	return &Page{
		Title:         title,
		facebookName:  facebookName,
		daysCompleted: stringDaysCompleted,
		remainingDays: stringRemainingDays,
	}, nil
}

func viewController(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/view/"):]
	p, err := loadPage(title)
	t, err := template.ParseFiles("index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	totalDays := 90
	challenge := "#90NgàyDevOps"

	data := map[string]interface{}{
		"Title":         p.Title,
		"FacebookName":  p.facebookName,
		"Challenge":     challenge,
		"TotalDays":     totalDays,
		"DaysCompleted": p.daysCompleted,
		"RemainingDays": p.remainingDays,
	}
	if err := t.Execute(w, data); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
func main() {
	http.HandleFunc("/view/", viewController)
	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}
