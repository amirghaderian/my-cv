import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { useRef } from "react"
import CareerHistory from "./components/CareerHistory"
import Familiar from "./components/Familiar"
import Frameworks_Libarary from "./components/Frameworks_Libarary"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Social_networks from "./components/Social_networks"
import Summary from "./components/Summary"
import Tools from "./components/Tools"

const App = () => {
  const printRef = useRef()
  let mainColor = "#fee263"
  let phone = "09215397848"
  let email = "it.ghaderian@gmail.com"
  const handlePrint = () => {
    setTimeout(() => {
      console.log("first")
      html2canvas(printRef.current, { scale:1 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png")
        const pdf = new jsPDF()
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight
        }
        pdf.save("resume.pdf")
      })
    }, 1000)
  }
  return (
    <div ref={printRef} dir="rtl" className={`font-[FontWeb] h-svh bg-[#fee263]`} >

      <Header phone={phone} mainColor={mainColor} bgColor="#2f2f2f"
        name="امیر قادریان" jobTitle="Front-End Developer" birthday="1382/06/27" email={email}
        location="تهران" />
      <div className="flex w-full">
        <div className="right w-2/3">
          <Summary />
          <Skills />
          <CareerHistory />
          <Tools />
          <Familiar />
        </div>
        <div className="left w-[1/3]">
          <Projects />
          <Frameworks_Libarary />
          <Social_networks />
        </div>
      </div>
      <div><button onClick={handlePrint}>print</button></div>

    </div>
  )
}

export default App