function showTheMap(pos1, pos2) {
  positionX = pos1;
  positionY = pos2;

  var map = L.map("map").setView([positionX, positionY], 12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var Kharkiv1 = L.marker([49.988836, 36.23781]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> проспект Героїв Харкова, 16, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.988836, 36.237810&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv2 = L.marker([49.98841, 36.270482]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> провулок Спортивний, 5, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.988410, 36.270482&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv3 = L.marker([49.9870096, 36.2004427]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> вулиця Рилєєва, 25-17, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95, Дизель</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.9870096,36.2004427&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv4 = L.marker([49.9543852, 36.2596]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> вулиця Макіївська, 9-3, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.9543852,36.2596&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv5 = L.marker([50.0392312, 36.2875873, 19]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> вулиця Шишківська, 6, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> Дизель, Газ</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=50.0392312, 36.2875873&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv6 = L.marker([49.9566516, 36.3581409]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> проспект Героїв Харкова, 254, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> Дизель, Газ</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.9566516, 36.3581409&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    );

  var Kyiv1 = L.marker([50.449907, 30.524027]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Київська, 1<br/>Години роботи: 7:00-20:00<br/>Пальне: А-95, А-92, Дизель, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kyiv2 = L.marker([50.44923, 30.594445]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Київська, 2<br/>Години роботи: 9:00-22:00<br/>Пальне: А-95, А-92</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kyiv3 = L.marker([50.414191, 30.544846]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Київська, 3<br/>Години роботи: 6:00-19:00<br/>Пальне: А-95, А-92, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kyiv4 = L.marker([50.491901, 30.602696]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Київська, 4<br/>Години роботи: 9:00-18:00<br/>Пальне: А-95, А-92, Дизель</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    );

  var stationKharkiv = L.layerGroup([
    Kharkiv1,
    Kharkiv2,
    Kharkiv3,
    Kharkiv4,
    Kharkiv5,
    Kharkiv6,
  ]);
  var stationKyiv = L.layerGroup([Kyiv1, Kyiv2, Kyiv3, Kyiv4]);
  var gasStations = L.layerGroup([Kharkiv1, Kharkiv2, Kharkiv3, Kharkiv4]);
  var dieselStations = L.layerGroup([Kharkiv3, Kharkiv5, Kharkiv6]);
  var gasolineStations = L.layerGroup([Kharkiv5, Kharkiv6]);

  switch (sityCode) {
    case "1":
      var Layers = {
        "Усі станції міста Харків": stationKharkiv,
        "В наявності А95, А92": gasStations,
        "В наявності Дизель": dieselStations,
        "В наявності Газ": gasolineStations,
      };

      // Добавляем слой "Харьков" по умолчанию
      stationKharkiv.addTo(map);

      // Настройка CSS для контроллера
      var styleElement = document.createElement("style");
      styleElement.innerHTML = `
    .leaflet-control-layers {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 10px;
        color: #333;
    }
    .leaflet-control-layers-expanded {
        width: 250px; /* Ширина контроллера */
    }
    .leaflet-control-layers-base label, 
    .leaflet-control-layers-overlays label {
        display: block;
        padding: 6px 10px;
        margin: 2px 0;
        background-color: #f9f9f9;
        border-radius: 6px;
        cursor: pointer;
    }
    .leaflet-control-layers-base label:hover, 
    .leaflet-control-layers-overlays label:hover {
        background-color: #e6e6e6;
    }
    .leaflet-control-layers-separator {
        margin: 10px 0;
        border-top: 1px solid #ddd;
    }
`;
      document.head.appendChild(styleElement);

      // Добавляем контроллер слоев
      L.control.layers(Layers, dopLayers, { collapsed: true }).addTo(map);

      break;
    case "2":
      break;
  }

  map.on("click", onMapClick);
}
