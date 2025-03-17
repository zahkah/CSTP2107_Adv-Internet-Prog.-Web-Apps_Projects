import City from "./City";

props 

// {
//     flag: 'canadaFlag',
//     countryName: 'Canada',
//     cityName: 'vancouver'
//   }

const Country = ({ cityName }) => {
    return (
        <div className="parent">
            <div className="child-1"> <img className="flag" src={props.flag} /></div>
            <div className="child-2">  <div>Name of the Country : <b>{props.countryName}</b></div>
                <div>Name of the City: <City cityName={props.cityName} /></div>
            </div>
        </div>
    )
}

export default Country;

// APP (PARENT) --> COUNTRY (CHILD) --> CITY (SUB-CHILD)