function showTheMap(pos1, pos2) {
  positionX = pos1;
  positionY = pos2;

  var map = L.map("map").setView([positionX, positionY], 11);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var Kharkiv1 = L.marker([49.99574, 36.233597]).bindPopup(
      `
      <div>
        <p>Адреса станції: вул. Харківська, 1<br/>
        Години роботи: 7:00-20:00<br/>
        Пальне: А-95, А-92, Дизель, Газ</p>
        <a href="https://maps.app.goo.gl/6fqZTmp5551PkF6C7" target="_blank" style="color: #72bb53; text-decoration: underline;">
          Перейти на сайт станции
        </a>
      </div>
    `,
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

  var stationKharkiv = L.layerGroup([Kharkiv1, Kharkiv2, Kharkiv3, Kharkiv4]);
  var stationKyiv = L.layerGroup([Kyiv1, Kyiv2, Kyiv3, Kyiv4]);
  // Слои станций с разными типами топлива

  switch (sityCode) {
    case "1":
      var overlayMaps = {
        "Станції міста Харків": stationKharkiv,
        "Станції міста Київ": stationKyiv,
      };

      // Добавляем группу Харкова на карту сразу
      stationKharkiv.addTo(map);

      // Контроллер слоёв (все группы как overlay)
      var layerControl = L.control.layers(null, overlayMaps).addTo(map);
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
  }

  map.on("click", onMapClick);
}
