"use client"

export function AdBanner() {
  return (
    <div className="w-full">
      <iframe
        src="/test.html"
        className="w-full border-0"
        style={{ height: "180px" }}
        title="Advertisement"
        scrolling="no"
      />
    </div>
  )
}
