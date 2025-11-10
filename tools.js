// Sample links array
const links = [
    { title: "Ellipse Eccentricity", url: "https://rlawry.github.io/ellipsegame" },
    { title: "Kepler Lab", url: "https://rlawry.github.io/triangulation-simulation"},
    { title: "Synodic Period", url: "https://rlawry.github.io/synodic-period" },
    { title: "Retrograde", url: "https://rlawry.github.io/retrograde" },
    { title: "Parallax", url: "https://rlawry.github.io/parallax"},
    { title: "Star Quiz", url: "https://rlawry.github.io/star-quiz" },
    { title: "HR-Diagram Plot", url: "https://rlawry.github.io/hr-diagram"},
    { title: "Colors of Wavelengths", url: "https://rlawry.github.io/wave-shift" },
    { title: "Star Spectra", url: "https://rlawry.github.io/star-spectra"},
    { title: "Star Composition", url: "https://rlawry.github.io/star-composition"},
    { title: "Redshift of Celestial Spectra", url: "https://rlawry.github.io/spectra-redshift" },
    { title: "Spectra of Galaxies Viewer (Redshift and Composition)", url: "https://rlawry.github.io/galaxy-viewer" },
    { title: "Planet Size Comparison", url: "https://rlawry.github.io/planet-compare" },
    { title: "Earth Tilt", url: "https://rlawry.github.io/earth-tilt" },
    { title: "Sun's Path", url: "https://rlawry.github.io/sunspath" },
    { title: "Sunrise and Sunset", url: "https://rlawry.github.io/sunriseGame" },
    { title: "Distance to Epicenter", url: "https://rlawry.github.io/epicentersgame" },
    { title: "Moon Phases", url: "https://rlawry.github.io/moonphasegame" },
    { title: "Eclipse Game", url: "https://rlawry.github.io/eclipse-game" },
    { title: "Weather Instruments", url: "https://rlawry.github.io/weatherinstruments" },
    { title: "Isolines", url: "https://rlawry.github.io/isolines" },
    { title: "Rock Game", url: "https://rlawry.github.io/rockgame" },
    { title: "Latitude and Longitude Game", url: "https://rlawry.github.io/latlongame" },
    { title: "Blue Sky", url: "https://rlawry.github.io/blue-sky" },
    { title: "Angle of Insolation", url: "https://rlawry.github.io/angle-of-insolation-game" },
    { title: "Streamflow Direction - Contour Maps", url: "https://rlawry.github.io/streamflow" },
    { title: "3D Radioactive Decay", url: "https://rlawry.github.io/3D-radioactive-decay" },
    { title: "2D Radioactive Decay", url: "https://rlawry.github.io/2D-radioactive-decay" }
    // Add more links as needed
  ];
  
  // Function to create cards
  function createCards(linkArray) {
    const container = document.getElementById('card-container');
  
    linkArray.forEach(link => {
      // Create card div
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Create anchor element
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.target = '_blank'; // Opens link in a new tab
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = link.title;
  
      // Append anchor to card
      card.appendChild(anchor);
  
      // Append card to container
      container.appendChild(card);
    });
  }
  
  // Initialize cards on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    createCards(links);
  });