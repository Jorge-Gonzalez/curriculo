const expandNegatives = (str) => str.replace(/(?<=\d)-(?=\d)/gm, ',-')
const expandCommands = (str) => str.replace(/(?<=\d)(?=[a-zA-Z])/gm, ' ')
const removeExtraSpaces = (str) => str.replace(/\s+/gm, ' ')

const compactNegatives = (str) => str.replace(/,-/gm, '-')
const compactCommands = (str) => str.replace(/ (?=[a-zA-Z])/gm, '')

function round(value, decimals) {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`);
}

function roundPath(path, decimals = 3) {
  function roundPathPoint(pathPoint) {
    function roundPathPointElement(pathPointElement) {
      if (pathPointElement.match(/^[A-Za-z]/)) {
        return `${pathPointElement[0]}${pathPointElement.slice(1) && round(pathPointElement.slice(1), decimals)}`;
      }
      return round(pathPointElement, decimals);
    }

    const pathPointElements = pathPoint.split(',');
    return pathPointElements.map(roundPathPointElement);
  }

  const pathPoints = path.split(' ');
  return pathPoints.map(roundPathPoint).join(' ');
}

const roundPathData = (d, n) =>
  compactCommands(compactNegatives(roundPath(removeExtraSpaces(expandNegatives(expandCommands(d))), n)))

const d = 'M733.9,267.2c-62-62.1-144.6-96.3-232.5-96.4c-181.1,0-328.6,147.4-328.6,328.6      c0,57.9,15.1,114.5,43.9,164.3L170.1,834l174.2-45.7c48,26.2,102,40,157,40h0.1l0,0c181.1,0,328.5-147.4,328.6-328.6      C830.1,411.9,796,329.3,733.9,267.2z M501.5,772.8h-0.1c-49,0-97.1-13.2-139-38.1l-10-5.9L249,755.9l27.6-100.8l-6.5-10.3      c-27.3-43.5-41.8-93.7-41.8-145.4c0.1-150.6,122.6-273.1,273.3-273.1c73,0,141.5,28.5,193.1,80.1s80,120.3,79.9,193.2      C774.6,650.3,652,772.8,501.5,772.8z M651.3,568.2c-8.2-4.1-48.6-24-56.1-26.7s-13-4.1-18.5,4.1c-5.5,8.2-21.2,26.7-26,32.2      s-9.6,6.2-17.8,2.1c-8.2-4.1-34.7-12.8-66-40.8c-24.4-21.8-40.9-48.7-45.7-56.9c-4.8-8.2-0.5-12.7,3.6-16.8      c3.7-3.7,8.2-9.6,12.3-14.4c4.1-4.8,5.5-8.2,8.2-13.7s1.4-10.3-0.7-14.4s-18.5-44.5-25.3-61c-6.7-16-13.4-13.8-18.5-14.1      c-4.8-0.2-10.3-0.3-15.7-0.3c-5.5,0-14.4,2.1-21.9,10.3c-7.5,8.2-28.7,28.1-28.7,68.5s29.4,79.5,33.5,84.9      c4.1,5.5,57.9,88.4,140.3,124c19.6,8.5,34.9,13.5,46.8,17.3c19.7,6.3,37.6,5.4,51.7,3.3c15.8-2.4,48.6-19.9,55.4-39      c6.8-19.2,6.8-35.6,4.8-39C665,574.4,659.5,572.4,651.3,568.2z'

console.log(roundPathData(d,0))