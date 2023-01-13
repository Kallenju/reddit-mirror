import CoordinatesRelDoc from '../interfaces/CoordinatesRelDoc';

export default function getCoords(elem: HTMLElement): CoordinatesRelDoc {
  const box: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  } = elem.getBoundingClientRect();

  return {
    top: `${box.top + window.pageYOffset}`,
    right: `${box.right + window.pageXOffset}`,
    bottom: `${box.bottom + window.pageYOffset}`,
    left: `${box.left + window.pageXOffset}`,
  };
}
