export function Profile(props) {
  return (
    <div className="flex text-white text-xl items-center space-x-4 p-5 text-wrap" {...props}>
        <img src="https://drive.google.com/uc?export=view&id=0B6wwyazyzml-OGQ3VUo0Z2thdmc"
        alt="profile photo"
        className="size-16 rounded-full"/>
        <span className="font-bold">Tiger Woods</span>
    </div>
  )
}