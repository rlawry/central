// Sample links array
const links = [
    { title: "Ellipse Eccentricity", url: "https://rlawry.github.io/ellipsegame" },
    { title: "Distance to Epicenter", url: "https://rlawry.github.io/epicentersgame" },
    { title: "Eclipse Game", url: "https://rlawry.github.io/eclipse-game" },
    { title: "Weather Instruments", url: "https://rlawry.github.io/weatherinstruments" },
    { title: "Earth Tilt", url: "https://rlawry.github.io/earth-tilt" },
    { title: "Isolines", url: "https://rlawry.github.io/isolines" },
    { title: "Rock Game", url: "https://rlawry.github.io/rockgame" },
    { title: "Sunrise and Sunset", url: "https://rlawry.github.io/sunriseGame" },
    { title: "Retrograde", url: "https://rlawry.github.io/retrograde" },
    { title: "Sun's Path", url: "https://rlawry.github.io/sunspath" },
    { title: "Colors of Wavelengths", url: "https://rlawry.github.io/wave-shift" },
    { title: "Star Quiz", url: "https://rlawry.github.io/star-quiz" },
    { title: "Latitude and Longitude Game", url: "https://rlawry.github.io/latlongame" },
    { title: "Blue Sky", url: "https://rlawry.github.io/blue-sky" },
    { title: "Moon Phases", url: "https://rlawry.github.io/moonphasegame" },
    { title: "Angle of Insolation", url: "https://rlawry.github.io/angle-of-insolation-game" },
    { title: "Streamflow Direction - Contour Maps", url: "https://rlawry.github.io/streamflow" },
    { title: "Radioactive Decay", url: "https://rlawry.github.io/3D-radioactive-decay" },
    { title: "Planet Size Comparison", url: "https://rlawry.github.io/planet-compare" },
    { title: "Doppler Shift of Celestial Spectra", url: "https://rlawry.github.io/spectra-redshift" },
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