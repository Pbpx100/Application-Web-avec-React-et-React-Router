import React from 'react';
import useData from './hooks/useData';
import Banner from './components/Banner';
import mainBanner from './assets/mainBanner.png';
import Cards from './components/Cards';


export default function Homepage() {
  //const [count, setCount] = useState(0)
  const data = useData();
  //console.log(data)

  return (
    <>
      <Banner
        bannerImg={mainBanner}
        bannerTitle="Chez vous, partout et ailleurs"
        customClassName="homeBanner"
      />
      <Cards data={data} />
    </>
  )
}


