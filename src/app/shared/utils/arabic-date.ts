const ARABIC_MONTHS = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
];

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

function toArabicDigits(value: number): string {
  return String(value)
    .split('')
    .map((digit) => ARABIC_DIGITS[Number(digit)] ?? digit)
    .join('');
}

export function formatArabicDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = toArabicDigits(date.getDate());
  const month = ARABIC_MONTHS[date.getMonth()];
  const year = toArabicDigits(date.getFullYear());
  return `${day} ${month} ${year}`;
}

export function formatArabicDayMonth(isoDate: string): string {
  const date = new Date(isoDate);
  const day = toArabicDigits(date.getDate());
  const month = ARABIC_MONTHS[date.getMonth()];
  return `${day} ${month}`;
}
