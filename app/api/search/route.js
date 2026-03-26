export async function POST(request) {
  const body = await request.json()
  const query = body.query?.trim() || ""

  const results = {
    searched: query,
    theaters: [
      {
        name: "Grand Palais Cinema",
        distance: "4.2 miles",
        movies: [
          { title: "Casablanca", times: ["1:10 PM", "4:00 PM", "7:20 PM"] },
          { title: "The Third Man", times: ["2:30 PM", "6:10 PM"] },
        ],
      },
      {
        name: "Midnight Picture House",
        distance: "11.8 miles",
        movies: [
          {
            title: "Double Indemnity",
            times: ["12:45 PM", "5:15 PM", "8:40 PM"],
          },
          { title: "Laura", times: ["3:05 PM", "9:10 PM"] },
        ],
      },
      {
        name: "Majestic Local Theatre",
        distance: "18.6 miles",
        movies: [
          { title: "Notorious", times: ["1:00 PM", "3:35 PM", "7:00 PM"] },
        ],
      },
    ],
  }

  return Response.json(results)
}