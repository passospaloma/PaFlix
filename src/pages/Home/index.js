import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import initialData from '../../data/initial_Data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriesRepository from '../../repositories/categories';

function Home() {

 

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
    .then((videosWithCategories) => {
      console.log(videosWithCategories);

    }
    );
    
      });
      
  //http://localhost:8080/categories?_embed=videos


  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
        videoDescription= "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        
      />

      <Carousel ignoreFirstVideo category={initialData.categories[0]} />
      <Carousel ignoreFirstVideo category={initialData.categories[1]} />
      <Carousel ignoreFirstVideo category={initialData.categories[2]} />
      <Carousel ignoreFirstVideo category={initialData.categories[3]} />
      <Carousel ignoreFirstVideo category={initialData.categories[4]} />
      <Footer />
    </div>
  );
}

export default Home;
