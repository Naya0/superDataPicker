interface IconProps {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon = ({
  name,
  width = 15,
  height = 15,
}: IconProps) => {
  return (
    <svg className={`icon icon-${name}`} style={{ width, height }}>
      <use xlinkHref={`/images/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
