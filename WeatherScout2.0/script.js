async function fetchWeather() {
  const city = "Gurgaon";

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'c646703221msh8b53034e9b8cda2p11e293jsnc783643ca0dd',
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      const {
        last_updated_epoch,
        last_updated,
        temp_c,
        temp_f,
        is_day,
        condition,
        wind_mph,
        wind_kph,
        wind_degree,
        wind_dir,
        pressure_mb,
        pressure_in,
        precip_mm,
        precip_in,
        humidity,
        cloud,
        feelslike_c,
        feelslike_f,
        vis_km,
        vis_mile,
        gust_kph,
        uv,
        gust_mph,
      } = data.current;
      console.log(last_updated_epoch, temp_c, condition.text, wind_mph);
    } else {
      console.error("Request failed with status:", response.status);
    }
  } catch (err) {
    console.error(err);
  }
}

fetchWeather();
