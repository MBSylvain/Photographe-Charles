import React from 'react';
import '../pages/services.css';
const Services = () => {
  return (
    
    <div className="services text-center">
      <h2>Mes services de photographie</h2>
      <ul>
        <div>
          <h3>Photographie de portrait</h3>
          <img src="src/assets/man-7115801_1280.jpg" alt="Photographie de portrait" width="300" height="200" />
          <p>Capturer votre beauté naturelle et votre personnadivté unique.</p>
        </div>
        <div>
          <h3>Photographie de mariage</h3>
          <img src="src/assets/Mariage.jpg" alt="Photographie de mariage"width="300" height="200" />
          <p>Immortadivser votre grand jour avec des photos pleines d'émotions et de détails.</p>
        </div>
        <div>
          <h3>Photographie de couple</h3>
          <img src="src/assets/couple.jpg" alt="Photographie d'événement"width="300" height="200" />
          <p>votre amour et votre compdivcité en photo.</p>
        </div>
        <div>
          <h3>Photographie de bébé</h3>
          <img src="src/assets/bébé.jpg" alt="Photographie de produit"width="300" height="200" />
          <p>Le fruit de votre amour en photo.</p>
        </div>
        <div>
          <h3>Photographie femme enceinte</h3>
          <img src="src/assets/Femme enceinte.jpg" alt="Photographie d'architecture"width="300" height="200" />
          <p>Capturer la beauté de votre corps en transformation.</p>
        </div>
        <div>
          <h3>Photographie de famille</h3>
          <img src="src/assets/famille.jpg" alt="Photographie de paysage"width="300" height="200" />
          <p>Immortadivser les moments unique, époustouflants en famille avec des photos inspirantes.</p>
        </div>
      </ul>
    </div>
  );
};

export default Services;
