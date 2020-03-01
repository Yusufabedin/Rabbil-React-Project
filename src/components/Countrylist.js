import React, {
  useState,
  useEffect
} from 'react';
import axios from 'axios';

const Countrylist = () => {
  const [state, setstate] = useState({
    mydate: []
  });

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setstate({
          mydate: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const mylist = state.mydate;

  const CountryName = mylist.map(mylist => {
    return <li > {
      mylist.name
    } < /li>;
  });
  return ( <
    div >
    <
    ul > {
      CountryName
    } < /ul> <
    /div>
  );
};

export default Countrylist;