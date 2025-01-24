package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/go-chi/cors"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()

	corsHandler := cors.New(cors.Options{
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	})

	router.HandleFunc("/api/products", getProducts).Methods("GET")
	router.HandleFunc("/api/products/{id}", getProductByID).Methods("GET")
	router.HandleFunc("/api/banners", getAllBanners).Methods("GET")

	handler := corsHandler.Handler(router)

	log.Println("Сервер запущен на :8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	products, err := loadProducts()
	if err != nil {
		fmt.Println("Ошибка загрузки:", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func getAllBanners(w http.ResponseWriter, r *http.Request) {
	banners, err := loadBanners()
	if err != nil {
		fmt.Println("Ошибка загрузки:", err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(banners)
}

func getProductByID(w http.ResponseWriter, r *http.Request) {
	// Получаем параметры из URL
	vars := mux.Vars(r)
	productID, err := strconv.Atoi(vars["id"])

	// Обработка ошибки преобразования ID
	if err != nil {
		http.Error(w, "Некорректный ID продукта", http.StatusBadRequest)
		return
	}

	products, err := loadProducts()
	if err != nil {
		fmt.Println("Ошибка загрузки:", err)
		return
	}

	// Поиск продукта
	var foundProduct *Product
	for _, product := range products {
		if product.ID == productID {
			foundProduct = &product
			break
		}
	}

	// Если продукт не найден
	if foundProduct == nil {
		http.Error(w, "Продукт не найден", http.StatusNotFound)
		return
	}

	// Установка заголовков
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-cache")

	// Отправка ответа
	json.NewEncoder(w).Encode(foundProduct)
}

func loadProducts() ([]Product, error) {
	// Читаем содержимое файла
	data, err := os.ReadFile("backend/data/products.json")
	if err != nil {
		return nil, fmt.Errorf("ошибка чтения файла: %v", err)
	}

	var products []Product
	// Преобразуем JSON обратно в структуру
	err = json.Unmarshal(data, &products)
	if err != nil {
		return nil, fmt.Errorf("ошибка парсинга JSON: %v", err)
	}

	return products, nil
}

func loadBanners() ([]Banner, error) {
	// Читаем содержимое файла
	data, err := os.ReadFile("backend/data/banners.json")
	if err != nil {
		return nil, fmt.Errorf("ошибка чтения файла: %v", err)
	}

	var products []Banner
	// Преобразуем JSON обратно в структуру
	err = json.Unmarshal(data, &products)
	if err != nil {
		return nil, fmt.Errorf("ошибка парсинга JSON: %v", err)
	}

	return products, nil
}

var banners = []Banner{}
