const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      // entry.target.classList.remove('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}


  const observer = new IntersectionObserver(handleIntersect, options)
  document.querySelectorAll('.reveal').forEach(fuction (r) {
   observer.observe(r) 
  })
  // observer.observe(document.querySelector('reveal'))