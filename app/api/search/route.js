export async function POST(request) {
  const body = await request.json()
  const query = body.query?.trim() || ""
  const normalized = query.toLowerCase()

  let resolvedLocation = {
    label: "Unknown Location",
    latitude: null,
    longitude: null,
  }

  let theaters = [
    {
      name: "Default Test Theater",
      distance: "1.0 miles",
      movies: [
        { title: "Default Movie", times: ["1:00 PM", "4:00 PM"] },
      ],
    },
  ]

  if (normalized === "90210" || normalized.includes("beverly")) {
    resolvedLocation = {
      label: "Beverly Hills, CA",
      latitude: 34.0901,
      longitude: -118.4065,
    }

    theaters = [
      {
        name: "Beverly Test Theater",
        distance: "2.1 miles",
        movies: [
          { title: "Beverly Movie", times: ["2:00 PM", "6:00 PM"] },
        ],
      },
      {
        name: "Rodeo Picture Palace",
        distance: "5.4 miles",
        movies: [
          { title: "Vertigo", times: ["12:50 PM", "3:50 PM", "7:10 PM"] },
          { title: "Rear Window", times: ["1:35 PM", "5:45 PM"] },
        ],
      },
    ]
  }

  if (normalized === "66213" || normalized.includes("overland park")) {
    resolvedLocation = {
      label: "Overland Park, KS",
      latitude: 38.8844,
      longitude: -94.687,
    }

    theaters = [
      {
        name: "B&B Overland Park",
        distance: "3.8 miles",
        movies: [
          { title: "The Thing", times: ["1:20 PM", "4:10 PM", "7:30 PM"] },
          { title: "Casablanca", times: ["2:00 PM", "6:00 PM"] },
        ],
      },
      {
        name: "AMC Town Center 20",
        distance: "7.6 miles",
        movies: [
          { title: "Heat", times: ["12:30 PM", "4:40 PM", "8:15 PM"] },
          { title: "Laura", times: ["1:50 PM", "5:20 PM"] },
        ],
      },
      {
        name: "Fine Arts Local Theatre",
        distance: "11.2 miles",
        movies: [
          { title: "Double Indemnity", times: ["3:10 PM", "7:40 PM"] },
        ],
      },
    ]
  }

  if (normalized === "10001" || normalized.includes("new york")) {
    resolvedLocation = {
      label: "New York, NY",
      latitude: 40.7506,
      longitude: -73.9972,
    }

    theaters = [
      {
        name: "New York Test Theater",
        distance: "4.4 miles",
        movies: [
          { title: "New York Movie", times: ["5:00 PM", "9:00 PM"] },
        ],
      },
      {
        name: "Chelsea Revival",
        distance: "3.2 miles",
        movies: [
          { title: "All About Eve", times: ["12:40 PM", "3:30 PM", "7:25 PM"] },
          { title: "The Conversation", times: ["2:00 PM", "5:50 PM"] },
        ],
      },
    ]
  }

  return Response.json({
    searched: query,
    resolvedLocation,
    theaters,
  })
}