interface GenericItem {
  id: string;
  dataTestId?: string;
  value: string | React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement | SVGElement>) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

export { type GenericItem as default };
