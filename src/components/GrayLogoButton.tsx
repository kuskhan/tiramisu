import logo from "data-base64:~assets/logo_gray_scale.png"

type Props = {
  onClick?: () => void
}
export default function GrayLogoButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mx-auto bg-stone-400 rounded-full w-[100px] h-[100px] flex items-center justify-center shadow-lg ">
      <img
        src={logo}
        alt="logo"
        height="65"
        width="65"
        className="self-center"
      />
    </button>
  )
}
