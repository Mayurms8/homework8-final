document.addEventListener("DOMContentLoaded", function () {
    const { featurebox } = mainContent; 

     
    const featureContainer = document.getElementById("features-container");
    const featureTemplate = document.getElementById("featurebox-template").content;

    
    featurebox.forEach(feature => {
        let featureClone = featureTemplate.cloneNode(true); 
        featureClone.querySelector(".feature-img").src = feature.images.src;  
        featureClone.querySelector(".feature-title").textContent = feature.title;  
        featureClone.querySelector(".feature-offer").textContent = feature.offer;  
        featureContainer.appendChild(featureClone);  
    });
});
