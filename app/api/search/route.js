export async function POST(request) {
  const body = await request.json()
  const query = body.query?.trim() || ""
  const normalized = query.toLowerCase()

  let theaters = [
    {
      name: "DEFAULT TEST THEATER",
      distance: "1.0 miles",
      movies: [
        { title: "Default Movie", times: ["1:00 PM", "4:00 PM"] },
      ],
    },
  ]

  if (normalized === "90210" || normalized.includes("beverly")) {
    theaters = [
      {
        name: "BEVERLY TEST THEATER",
        distance: "2.1 miles",
        movies: [
          { title: "Beverly Movie", times: ["2:00 PM", "6:00 PM"] },
        ],
      },
    ]
  }

  if (normalized === "66213" || normalized.includes("overland park")) {
    theaters = [
      {
        name: "OVERLAND PARK TEST THEATER",
        distance: "3.3 miles",
        movies: [
          { title: "Kansas Movie", times: ["3:00 PM", "7:00 PM"] },
        ],
      },
    ]
  }

  if (normalized === "10001" || normalized.includes("new york")) {
    theaters = [
      {
        name: "NEW YORK TEST THEATER",
        distance: "4.4 miles",
        movies: [
          { title: "New York Movie", times: ["5:00 PM", "9:00 PM"] },
        ],
      },
    ]
  }

  return Response.json({
    searched: query,
    theaters,
  })
}