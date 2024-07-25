document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var cases = [
        {
            country: "Peru",
            sector: "Fresh Fruit / Blueberries",
            lat: -9.19,
            lon: -75.0152,
            takeoff: 2010,
            startingPoint: "Blueberry production was insignificant in 2010; fresh fruit exports totaled $6.31 million.",
            actions: "Private Sector: Entrepreneur Carlos Gereda identified Peru's potential for blueberry farming and established Inka’s Berries. Public Sector: Government invested in irrigation projects, strengthened health inspections, and passed trade treaties.",
            outcomes: "Blueberry exports reached $810 million in 2019, $1.4 billion in 2022. Peru became the world's leading fresh blueberry exporter."
        },
        {
            country: "Bangladesh",
            sector: "Garments",
            lat: 23.685,
            lon: 90.3563,
            takeoff: 1980,
            startingPoint: "In the 1980s, Bangladesh's garment industry was in its infancy with minimal exports.",
            actions: "Private Sector: Entrepreneurs partnered with South Korean firms to learn production techniques. Public Sector: Government established export processing zones and provided tax incentives.",
            outcomes: "Garment exports grew to $34 billion in 2018, making Bangladesh the world's second-largest garment exporter."
        },
        {
            country: "Costa Rica",
            sector: "IT/Electronics",
            lat: 9.7489,
            lon: -83.7534,
            takeoff: 1997,
            startingPoint: "In 1997, IT and electronics were minor contributors to Costa Rica's economy.",
            actions: "Private Sector: Intel established a microprocessor plant. Public Sector: Government invested in education and infrastructure.",
            outcomes: "IT and electronics exports reached $4 billion by 2018, significantly boosting the economy."
        },
        {
            country: "Chile",
            sector: "Salmon/Aquaculture",
            lat: -35.6751,
            lon: -71.543,
            takeoff: 1980,
            startingPoint: "In the 1980s, Chile's salmon production was almost non-existent.",
            actions: "Private Sector: Companies invested in aquaculture technology. Public Sector: Government supported research and development.",
            outcomes: "Chile became the world's second-largest salmon producer, with exports reaching $4.5 billion in 2018."
        },
        {
            country: "Morocco",
            sector: "Automotive",
            lat: 31.7917,
            lon: -7.0926,
            takeoff: 2012,
            startingPoint: "Before 2012, Morocco had a very small automotive industry.",
            actions: "Private Sector: Renault established a large manufacturing plant. Public Sector: Government created industrial zones and provided tax incentives.",
            outcomes: "Automotive exports reached $10 billion by 2019, becoming Morocco's leading export sector."
        }
    ];

    cases.forEach(function(c) {
        var marker = L.marker([c.lat, c.lon]).addTo(map);
        marker.bindPopup("<b>" + c.country + "</b><br>Sector: " + c.sector + "<br>Takeoff: " + c.takeoff + "<br>Starting Point: " + c.startingPoint + "<br>Key Decisions and Actions: " + c.actions + "<br>Outcomes: " + c.outcomes);
    });
});
