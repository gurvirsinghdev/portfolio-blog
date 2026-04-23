const getPageScaling = () => {
  switch (location.pathname) {
    case '/':
      return '7/6'
    default:
      return '2/1'
  }
}

document.documentElement.style.setProperty('--scale-converse', getPageScaling())
