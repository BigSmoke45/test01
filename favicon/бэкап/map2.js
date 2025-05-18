function showTheMap(pos1, pos2) {
  positionX = pos1;
  positionY = pos2;

  var map = L.map("map").setView([positionX, positionY], 11);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var Kharkiv1 = L.marker([49.99574, 36.233597]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Харківська, 1<br/>Години роботи: 7:00-20:00<br/>Пальне: А-95, А-92, Дизель, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv2 = L.marker([49.989118, 36.286469]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Харківська, 2<br/>Години роботи: 9:00-22:00<br/>Пальне: А-95, А-92</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv3 = L.marker([49.945835, 36.301575]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Харківська, 3<br/>Години роботи: 6:00-19:00<br/>Пальне: А-95, А-92, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Kharkiv4 = L.marker([50.022217, 36.210251]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Харківська, 4<br/>Години роботи: 9:00-18:00<br/>Пальне: А-95, А-92, Дизель</p></object>',
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

  var Poltava1 = L.marker([49.603952, 34.530029]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Полтавська, 1<br/>Години роботи: 7:00-20:00<br/>Пальне: А-95, А-92, Дизель, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Poltava2 = L.marker([49.566558, 34.491577]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Полтавська, 2<br/>Години роботи: 9:00-22:00<br/>Пальне: А-95, А-92</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Poltava3 = L.marker([49.565222, 34.530029]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Полтавська, 3<br/>Години роботи: 6:00-19:00<br/>Пальне: А-95, А-92, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Poltava4 = L.marker([49.559252, 34.589081]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Полтавська, 4<br/>Години роботи: 9:00-18:00<br/>Пальне: А-95, А-92, Дизель</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    );

  var Lviv1 = L.marker([49.876606, 24.065552]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Львівська, 1<br/>Години роботи: 7:00-20:00<br/>Пальне: А-95, А-92, Дизель, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Lviv2 = L.marker([49.766741, 24.016113]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Львівська, 2<br/>Години роботи: 9:00-22:00<br/>Пальне: А-95, А-92</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Lviv3 = L.marker([49.833028, 24.034653]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Львівська, 3<br/>Години роботи: 6:00-19:00<br/>Пальне: А-95, А-92, Газ</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    ),
    Lviv4 = L.marker([49.873066, 23.895264]).bindPopup(
      '<object content: "<p>Адреса станції: вул. Львівська, 4<br/>Години роботи: 9:00-18:00<br/>Пальне: А-95, А-92, Дизель</p></object>',
      {
        maxWidth: 450,
        maxHeight: 450,
      }
    );

  var stationKharkiv = L.layerGroup([Kharkiv1, Kharkiv2, Kharkiv3, Kharkiv4]);
  var stationKyiv = L.layerGroup([Kyiv1, Kyiv2, Kyiv3, Kyiv4]);
  var stationPoltava = L.layerGroup([Poltava1, Poltava2, Poltava3, Poltava4]);
  var stationLviv = L.layerGroup([Lviv1, Lviv2, Lviv3, Lviv4]);

  switch (sityCode) {
    case "1":
      stationKharkiv.addTo(map);
      var overlayMaps = {
        "Станції міста Харків": stationKharkiv,
      };
      var layerControl = L.control.layers(overlayMaps).addTo(map);
      layerControl.addOverlay(stationKyiv, "Станції міста Київ");
      layerControl.addOverlay(stationPoltava, "Станції міста Полтава");
      layerControl.addOverlay(stationLviv, "Станції міста Львів");
      break;
    case "2":
      stationKyiv.addTo(map);
      var overlayMaps = {
        "Станції міста Київ": stationKyiv,
      };
      var layerControl = L.control.layers(overlayMaps).addTo(map);
      layerControl.addOverlay(stationKharkiv, "Станції міста Харків");
      layerControl.addOverlay(stationPoltava, "Станції міста Полтава");
      layerControl.addOverlay(stationLviv, "Станції міста Львів");
      break;
    case "3":
      stationPoltava.addTo(map);
      var overlayMaps = {
        "Станції міста Полтава": stationPoltava,
      };
      var layerControl = L.control.layers(overlayMaps).addTo(map);
      layerControl.addOverlay(stationKharkiv, "Станції міста Харків");
      layerControl.addOverlay(stationKyiv, "Станції міста Київ");
      layerControl.addOverlay(stationLviv, "Станції міста Львів");
      break;
    case "4":
      stationLviv.addTo(map);
      var overlayMaps = {
        "Станції міста Львів": stationLviv,
      };
      var layerControl = L.control.layers(overlayMaps).addTo(map);
      layerControl.addOverlay(stationKharkiv, "Станції міста Харків");
      layerControl.addOverlay(stationPoltava, "Станції міста Полтава");
      layerControl.addOverlay(stationKyiv, "Станції міста Київ");
      break;
  }

  map.on("click", onMapClick);
}
