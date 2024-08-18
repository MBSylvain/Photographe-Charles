
// Formulaire de modification page home 
const formulaire = (){
  return(
    
    <form action="" method="post">
      <label htmlFor="titre">Phrase d'accroche:</label>
      <textarea id="description" name="description"></textarea>
      <button type="submit">Modifier</button>
    </form>
  );
};
export default formulaire;

function ajoutphoto(){
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
  return (
    <form action="" method="post" enctype="multipart/form-data">
      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" />
      <label htmlFor="catégorie">Catégorie:</label>
      <select id="catégorie" name="catégorie">
        <option value="bébé">Bébé</option>
        <option value="couple">Couple</option>
        <option value="Mariage">Mariage</option>
        <option value="religion">Religion</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
    
  );
}
  
}