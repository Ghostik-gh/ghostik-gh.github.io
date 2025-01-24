package main

type Product struct {
	ID          int     `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	Category    string  `json:"category"`
	ImageURL    string  `json:"image_url"`
	ImageURL2   string  `json:"image_url2"`
}

type Banner struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Link     string `json:"link"`
	ImageURL string `json:"image_url"`
}
