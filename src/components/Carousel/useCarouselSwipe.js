import { useEffect, useRef } from "react"

const useCarouselSwipe = (carouselRef, next, previous) => {
  const x0 = useRef(null)

  // Unifies click and touch events
  const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e)

  const lock = (e) => {
    x0.current = unify(e).clientX
  }

  const move = (e) => {
    // Don't do anything if swipe didn't start inside carousel
    if (!x0) return
    const x1 = unify(e).clientX
    if (x0.current === x1) {
      return
    }
    x0.current > x1 ? next() : previous()
    x0.current = null
  }

  useEffect(() => {
    carouselRef.current?.addEventListener("touchstart", lock, false)
    carouselRef.current?.addEventListener("mousedown", lock, false)
    carouselRef.current?.addEventListener("touchend", move, false)
    carouselRef.current?.addEventListener("mouseup", move, false)

    return () => {
      carouselRef.current?.removeEventListener("touchstart", lock)
      carouselRef.current?.removeEventListener("mousedown", lock)
      carouselRef.current?.removeEventListener("touchend", move)
      carouselRef.current?.removeEventListener("mouseup", move)
    }
  })
}

export default useCarouselSwipe
