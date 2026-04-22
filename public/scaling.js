const getPageScaling = () => {
  switch (location.pathname) {
    case '/':
      return '7/6'
    default:
      return '3/2'
  }
}

document.documentElement.style.setProperty('--scale-converse', getPageScaling())
