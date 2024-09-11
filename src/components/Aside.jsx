import Logo from "./Logo";

export default function Aside() {
  return (
    <aside className="flex flex-col w-2/6 h-full bg-neutralGray">
      <Logo width="24" />
      <h2 className="text-primaryFont">Sign up and start chatting</h2>
      <p className="text-secondaryFont">
        Sign up is fast and simple. Share and add with anyone to manage everyone
        and everything
      </p>
    </aside>
  );
}
