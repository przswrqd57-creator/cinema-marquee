"use client"

import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [query, setQuery] = useState("95382")
  const [searched, setSearched] = useState("95382")
  const [theaters, setTheaters] = useState([
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
  ])
  const [loading, setLoading] = useState(false)

  async function handleSearch(event) {
    event.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()

      setSearched(data.searched || query)
      setTheaters(data.theaters || [])
    } catch (error) {
      console.error("Search failed", error)
      alert("Search failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-black text-[#f3eadb]"
      style={{ fontFamily: "Georgia, Times New Roman, serif" }}
    >
      <div className="mx-auto max-w-6xl px-3 py-4 sm:px-4 sm:py-8">
        <div className="overflow-hidden rounded-[1.5rem] border border-neutral-700 bg-gradient-to-b from-neutral-950 to-black shadow-2xl sm:rounded-[2rem]">
          <div className="border-b border-[#a58d6a]/40 bg-[#e7dcc7] text-black">
            <div
              className="px-4 py-3 text-center text-[9px] tracking-[0.32em] sm:px-6 sm:py-4 sm:text-[11px]"
              style={{
                fontFamily: "Helvetica Neue, Arial, sans-serif",
                fontWeight: 300,
              }}
            >
              Powered by Hosmann Studios
            </div>
          </div>

          <div className="border-b border-dashed border-neutral-700 bg-[repeating-linear-gradient(-45deg,#111_0,#111_10px,#1f1f1f_10px,#1f1f1f_20px)] px-4 py-6 text-center sm:px-6 sm:py-10">
            <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-neutral-600 bg-black/85 px-4 py-6 shadow-inner sm:rounded-[2rem] sm:px-6 sm:py-10">
              <h1 className="mt-1 text-4xl font-semibold tracking-wide text-[#e7c28d] sm:text-6xl md:text-7xl">
                Cinema Marquee
              </h1>

              <p
                className="mx-auto mt-4 max-w-3xl px-2 text-lg italic leading-7 text-[#d9b786] sm:px-0 sm:text-2xl"
                style={{
                  fontFamily:
                    "Baskerville, Georgia, Times New Roman, serif",
                }}
              >
                your one location for all movies and showtimes
              </p>

              <div className="mx-auto mt-6 flex justify-center sm:mt-8 sm:mb-1">
                <div className="w-full max-w-[520px] overflow-hidden rounded-[1.25rem] border border-neutral-700 sm:max-w-[680px]">
                  <Image
                    src="/cinema-marquee-hero-2.png"
                    alt="Cinema Marquee hero theatre"
                    width={1536}
                    height={1024}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <form
                onSubmit={handleSearch}
                className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:mt-8 sm:flex-row"
              >
                <input
                  className="h-12 w-full rounded-full border border-[#7f6d57] bg-neutral-950 px-5 text-base text-[#f3eadb] outline-none placeholder:text-[#8b7d6b]"
                  placeholder="Enter ZIP code or city"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 rounded-full border border-[#e7dcc7] bg-[#e7dcc7] px-6 text-sm font-semibold uppercase tracking-[0.2em] text-black disabled:opacity-60"
                >
                  {loading ? "Searching" : "Search"}
                </button>
              </form>

              <div className="mt-4 px-2 text-[10px] uppercase tracking-[0.28em] text-[#9f8f78] sm:px-0 sm:text-xs">
                Within 50 miles
              </div>
            </div>
          </div>

          <div className="px-3 pt-6 pb-2 text-center sm:px-5 sm:pt-8 md:px-6">
            <div className="mx-auto max-w-4xl rounded-[1.25rem] border border-amber-200/20 bg-gradient-to-b from-[#2b1d12] via-[#1c140d] to-black px-4 py-5 shadow-[0_0_30px_rgba(255,191,120,0.08)] sm:px-6 sm:py-6">
              <div
                className="text-2xl font-semibold uppercase tracking-[0.22em] text-[#f2c27b] sm:text-4xl"
                style={{
                  textShadow:
                    "0 0 6px rgba(242,194,123,0.35), 0 0 14px rgba(242,194,123,0.18)",
                  fontFamily: "Georgia, Times New Roman, serif",
                }}
              >
                Showtimes
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-amber-100/60 sm:text-xs">
                Search results for {searched}
              </div>
            </div>
          </div>

          <div className="grid gap-4 px-3 py-4 sm:gap-6 sm:px-5 sm:py-8 md:px-6">
            {theaters.map((theater) => (
              <section
                key={theater.name}
                className="rounded-[1.25rem] border border-neutral-700 bg-neutral-900/70 p-4 shadow-lg sm:rounded-[1.5rem] sm:p-5"
              >
                <div className="flex flex-col gap-3 border-b border-neutral-700 pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                  <div className="text-left">
                    <h2 className="text-2xl font-semibold text-[#f3eadb] sm:text-4xl">
                      {theater.name}
                    </h2>
                    <p className="mt-1 text-sm text-[#b3a28e]">
                      {theater.distance} away
                    </p>
                  </div>

                  <div className="w-fit rounded-full border border-[#7f6d57] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#d8c5ac] sm:text-xs">
                    Showtimes Today
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:mt-5 md:grid-cols-2">
                  {theater.movies.map((movie) => (
                    <div
                      key={movie.title}
                      className="rounded-[1rem] border border-neutral-800 bg-black/60 p-4 sm:rounded-[1.25rem]"
                    >
                      <div className="text-lg font-medium text-[#f3eadb] sm:text-2xl">
                        {movie.title}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {movie.times.map((time) => (
                          <span
                            key={time}
                            className="rounded-full border border-[#7f6d57] px-3 py-1 text-sm text-[#e6d8c4]"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}