import { FaEnvelope, FaPhone } from "react-icons/fa"
const Header = ({ bgColor, name, jobTitle, birthday, mainColor, email, phone, location }) => {
  // console.log(mainColor);
  console.log(`${bgColor}`);
  let main = "#fee263"
  return (
    <div style={{ background: "#2f2f2f" }} className={` text-white flex justify-between `}>
      <div className="w-2/3">
        <h1 className="text-[28px]">{name}</h1>
        <h2 className={`text-[22px] border-b w-fit border-b-[${main}]`}>{jobTitle}</h2>
        <div className="text-[18px]" dir="rtl"> متولد:{birthday}</div>
      </div>
      <div className="w-1/3">
        <div className="email" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {/* <FaEnvelope color={main} /> */}
          <a href={`mailto:${email}`} className={`text-[${main}]`}>{email}</a>
        </div>
        <div className="phone flex items-center  gap-1">
          {/* <FaPhone color={main} /> */}
          <p className={`text-[${main}]`}>{phone}</p>
        </div>
        <div className={`location text-[${main}]`}>{location}</div>
      </div>
    </div>
  )
}

export default Header