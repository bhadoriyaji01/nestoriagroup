const EVENTS_API_URL = "https://events.nestoriagroup.com/api/events.php";

export default async function handler(req, res) {
  const type = req.query?.type === "upcoming" ? "upcoming" : "existing";

  try {
    const response = await fetch(`${EVENTS_API_URL}?type=${type}`, {
      headers: { Accept: "application/json" },
    });
    const body = await response.text();

    res.status(response.status);
    res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.send(body);
  } catch (error) {
    console.error("Events API proxy error:", error);
    res.status(502).json({ message: "Unable to fetch events from the events API." });
  }
}
