import { Link } from '@tanstack/react-router';
import { HiArrowLongLeft } from 'react-icons/hi2';

type Props = {
  children: React.ReactNode;
};

export default function StackView(props: Props) {
  return (
    <div className="grid w-full place-items-center">
      <div className="w-full">
        <Link
          className="text-muted-foreground hover:text-foreground flex w-max items-center justify-start gap-1 underline"
          to={'/'}
        >
          <HiArrowLongLeft className="size-5" />
          <span>Home</span>
        </Link>
      </div>
      {props.children}
    </div>
  );
}
