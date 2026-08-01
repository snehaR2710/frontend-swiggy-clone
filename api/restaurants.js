export default async function handler(req, res) {
  try {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(url, {
      headers: {
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Swiggy API fetch failed:", error);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
}