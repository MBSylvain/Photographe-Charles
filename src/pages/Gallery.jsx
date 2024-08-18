import React, { useState } from "react";
import "../pages/gallerie.css";
function Gallery() {
    const list = [
        {
            id: 1,
            url: "src/gallerie/baby-21249_1280.jpg",
            catégorie: "bébé",
        },
        {
            id: 2,
            url: "src/gallerie/baby-feet-1527456_1280.jpg",
            catégorie: "bébé",
        },
        {
            id: 3,
            url: "src/gallerie/baby-feet-1527456_1280.jpg",
            catégorie: "bébé",
        },
        {
            id: 4,
            url: "src/gallerie/bride-1255520_1280.jpg",
            catégorie: "bébé",
        },
        {
            id: 5,
            url: "src/gallerie/couple-1194312_1280 (1).jpg",
            catégorie: "couple",
        },
        {
            id: 6,
            url: "src/gallerie/couple-1869206_1280.jpg",
            catégorie: "couple",
        },
        {
            id: 7,
            url: "src/gallerie/happy-7223110_1280.jpg",
            catégorie: "bébé",
        },
        {
            id: 8,
            url: "src/gallerie/heart-529607_1280.jpg",
            catégorie: "couple",
        },
        {
            id: 9,
            url: "src/gallerie/wedding-1353829_1280.jpg",
            catégorie: "Mariage",
        },
        {
            id: 10,
            url: "src/gallerie/wedding-7608565_1280.jpg",
            catégorie: "Mariage",
        },
        {
            id: 11,
            url: "src/gallerie/buddhist-5695220_1280.jpg",
            catégorie: "religion",
        },
        {
            id: 12,
            url: "src/gallerie/incense-1961430_1280.jpg",
            catégorie: "religion",
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("bébé");

    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        console.log("Valeur sélectionnée :", selectedValue);
    };

    const filterByCategory = (category) => {
        return list.filter((item) => item.catégorie === category);
    };

    return (
        <div className="gallery">
            <div className="title">
                <h1>Ma Galerie d'Images</h1>
                <select
                    className="btn btn-secondary btn-lg w-100"
                    id="catégorie"
                    onChange={handleCategoryChange}
                >
                    <option value="bébé">Bébé</option>
                    <option value="couple">Couple</option>
                    <option value="Mariage">Mariage</option>
                    <option value="religion">Religion</option>
                </select>
            </div>

            <div className="gallerie mt-4">
                {filterByCategory(selectedCategory).map((item) => (
                    <div
                        className="gallerie-item"
                        id="filtrat"
                        key={item.id}
                    >
                        <img
                            className="image"
                            src={item.url}
                            alt="photo"
                        ></img>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
