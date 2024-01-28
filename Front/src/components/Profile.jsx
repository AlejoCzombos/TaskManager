export function Profile(props) {
  return (
    <div
      className="flex text-white text-xl items-center justify-center space-x-4 p-5 text-wrap hover:bg-zinc-800 cursor-pointer"
      {...props}
    >
      <img
        src="Profile.webp"
        alt="profile photo"
        className="size-16 rounded-full object-cover object-top"
      />
      <span className="font-bold">Alejo Czombos</span>
    </div>
  );
}
