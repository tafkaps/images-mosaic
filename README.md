# Images Mosaic Gallery

Eine responsive Bild-Galerie mit Mosaic-Layout, die Bilder aus dem `img/`-Ordner dynamisch lädt und anzeigt.

## Features

- 🎨 **Responsives Grid-Layout** - Passt sich automatisch an die Bildschirmgröße an
- 🖼️ **Dynamisches Bildladen** - Bilder werden automatisch aus dem `img/`-Ordner gelesen
- 🔗 **Klickbare Bilder** - Klick auf ein Bild öffnet es in neuem Tab
- ✨ **Moderne Gestaltung** - Mit Hover-Effekten, Schatten und sanften Übergängen
- 📱 **Mobile-freundlich** - Funktioniert auf allen Geräten
- 🚀 **Keine Hardcodes** - Vollständig dynamisch, ohne manuelles Hinzufügen von Bildern

## Installation

### Voraussetzungen
- Node.js (v12 oder höher)

### Setup

1. Repository klonen:
```bash
git clone https://github.com/yourusername/images-mosaic.git
cd images-mosaic
```

2. Bilder in den `img/`-Ordner hinzufügen

3. Server starten:
```bash
node server.js
```

4. Browser öffnen:
```
http://localhost:8000
```

## Struktur

```
images_mosaic/
├── index.html          # HTML-Struktur
├── style.css           # Styling
├── script.js           # JavaScript-Logik
├── server.js           # Node.js Server
├── package.json        # Projekt-Konfiguration
├── img/                # Bildordner (Bilder hier hinzufügen)
├── README.md           # Diese Datei
└── .gitignore          # Git-Konfiguration
```

## Verwendung

1. **Bilder hinzufügen**: Kopieren Sie Bilddateien (`.jpg`, `.png`, `.gif`, `.webp`) in den `img/`-Ordner
2. **Server starten**: `node server.js`
3. **Im Browser öffnen**: `http://localhost:8000`
4. **Auf Bilder klicken**: Öffnet das Bild in einem neuen Tab

## Unterstützte Bildformate

- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

## Styling anpassen

Bearbeiten Sie `style.css`:
- **Farben**: `background-color`, `color`
- **Layout**: `grid-template-columns`, `gap`
- **Effekte**: `transform`, `transition`, `opacity`

## Technologien

- **HTML5** - Struktur
- **CSS3** - Styling und Responsive Design
- **JavaScript** - Dynamisches Bildladen
- **Node.js** - Server für statische Dateien

## Browser-Unterstützung

- Chrome/Edge (neueste)
- Firefox (neueste)
- Safari (neueste)

## Lizenz

MIT

## Autor

Erstellt mit ❤️
