const EVENTS_API_URL = "https://events.nestoriagroup.com/api/events.php";

export default async function handler(req, res) {
  const type = req.query?.type === "upcoming" ? "upcoming" : "existing";

  try {
    const response = await fetch(`${EVENTS_API_URL}?type=${type}`, {
      headers: { Accept: "application/json" },
    });
    const body = await response.text();
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      console.error("Events API returned a non-JSON response:", response.status, contentType);
      return res.status(502).json({ message: "The events service returned an invalid response." });
    }

    let data;
    try {
      data = JSON.parse(body);
    } catch (error) {
      console.error("Events API returned malformed JSON:", error);
      return res.status(502).json({ message: "The events service returned invalid JSON." });
    }

    res.status(response.status);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    return res.json(data);
  } catch (error) {
    console.error("Events API proxy error:", error);
    return res.status(502).json({ message: "Unable to fetch events from the events API." });
  }
}