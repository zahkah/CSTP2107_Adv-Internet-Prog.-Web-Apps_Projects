import './App.css'
import Country from './components/Country'

const canadaFlag = "https://plus.unsplash.com/premium_photo-1674591172352-0af9308f0dac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const usaFlag = "https://media.istockphoto.com/id/1156722488/photo/usa-or-american-flag-background.webp?s=2048x2048&w=is&k=20&c=o_Rd_zkKWJVRs-o_8tgh_LeH5DRYE40M8XjE2LLfZW4=";
const ukFlag = "https://plus.unsplash.com/premium_photo-1675865395876-1cf435b64e78?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function App() {

  return (
    <div>
      <Country flag={canadaFlag} countryName="Canada" cityName="Vancouver" />
      <Country flag={usaFlag} countryName="USA" cityName="Seattle" />
      <Country flag={ukFlag} countryName="UK" cityName="London" />
    </div>
  )
}
export default App

