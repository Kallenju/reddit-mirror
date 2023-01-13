export default function getFormattedDate(
  createdAtStamp: number,
  nowDateStamp: number
): string {
  const difference: number = nowDateStamp - createdAtStamp;
  const pastHours: number = Math.floor(difference / (60 * 60 * 1000));

  if (pastHours < 24) {
    switch (pastHours) {
      case 0: {
        return 'меньше часа';
      }
      case 1: {
        return 'час';
      }
      case 2:
      case 3:
      case 4:
      case 21:
      case 22:
      case 23: {
        return `${pastHours} часа`;
      }
      default: {
        return `${pastHours} часов`;
      }
    }
  }

  const date: string = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(difference);

  return date.replace(' г.', '');
}
