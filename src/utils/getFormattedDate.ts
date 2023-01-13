export default function getFormattedDate(
  createdAtStamp: number,
  nowDateStamp: number
): string {
  const difference: number = nowDateStamp - createdAtStamp;
  const pastHours: number = Math.floor(difference / (60 * 60 * 1000));

  if (pastHours < 24) {
    switch (pastHours) {
      case 0: {
        return 'less than an hour';
      }
      case 1: {
        return 'an hour';
      }
      default: {
        return `${pastHours} hours`;
      }
    }
  }

  const date: string = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(difference);

  return date;
}
