// Image Mosaic Gallery Script
document.addEventListener('DOMContentLoaded', function() {
    const mosaicContainer = document.getElementById('mosaicContainer');
    
    // Lade die Liste der Bilder aus images.json (für statisches Hosting)
    fetch('images.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('images.json nicht gefunden');
            }
            return response.json();
        })
        .then(imageFiles => {
            console.log(`${imageFiles.length} Bilder geladen`);
            if (imageFiles.length === 0) {
                mosaicContainer.innerHTML = '<p>Keine Bilder gefunden. Bitte images.json aktualisieren.</p>';
                return;
            }
            // Erstelle die Mosaic-Items
            imageFiles.forEach(imageName => {
                const encodedName = encodeURIComponent(imageName);
                const imagePath = `img/${encodedName}`;
                const mosaicItem = document.createElement('div');
                mosaicItem.className = 'mosaic-item';
                const link = document.createElement('a');
                link.href = imagePath;
                link.target = '_blank';
                const img = document.createElement('img');
                img.src = imagePath;
                img.alt = imageName;
                link.appendChild(img);
                mosaicItem.appendChild(link);
                mosaicContainer.appendChild(mosaicItem);
            });
        })
        .catch(error => {
            console.error('Fehler beim Laden der Bilder:', error);
            mosaicContainer.innerHTML = '<p>Fehler beim Laden der Bilder. Bitte stellen Sie sicher, dass die Datei <code>images.json</code> existiert und die Bildnamen korrekt sind.</p>';
        });
});


