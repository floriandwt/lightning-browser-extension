import AccountMenu from "../AccountMenu";
import UserMenu from "../UserMenu";

type Props = {
  children?: React.ReactNode;
};

export default function Navbar({ children }: Props) {
  return (
    <div className="py-2 bg-white border-b border-gray-200 dark:bg-surface-01dp dark:border-white/10">
      <div className="max-w-screen-lg px-4 flex justify-between items-center mx-auto w-full">
        <div className="flex">
          <UserMenu />
          {children && (
            <nav className="ml-5 space-x-4 lg:space-x-8 hidden lg:flex">
              {children}
            </nav>
          )}
        </div>
        <AccountMenu />
      </div>
    </div>
  );
}
