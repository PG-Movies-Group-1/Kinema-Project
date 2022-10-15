import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clearMovieDetail, getMovieDetail } from '../../../Redux/actions';
import { Box, Flex, Heading, Text, Container, Button } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdPlayArrow } from 'react-icons/md';
import Footer from '../../Home/Chakra UI Components/Footer.jsx';
import NavBar from '../../NavBar/NavBar.jsx';
import { useState } from 'react';
import './MovieDetail.css';
import NavBarPlayer from '../../NavBarPlayer/NavBarPlayer';
import Loader from '../../Loader/Loader';

export default function MovieDetail() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [playTrailer, setPlayerTrailer] = useState(false);

  useEffect(() => {
    dispatch(clearMovieDetail());
    dispatch(getMovieDetail(id));
  }, [dispatch]);

  const myMovie = useSelector((state) => state.movieDetail);

  const renderTrailer = () => {
    const idTrailer = myMovie.trailer.slice(32);
    return (
      <>
        <NavBarPlayer />
        <iframe
          height={'100%'}
          width={'100%'}
          src={`//www.youtube.com/embed/${idTrailer}?autoplay=1`}
          frameborder="0"
          allowFullScreen
          className="youtube"
          auto
        ></iframe>
      </>
    );
  };

  const renderPage = () => {
    return (
      <div>
        <NavBar />
        {myMovie.title ? (
          <Flex
            w={'full'}
            h={'85vh'}
            backgroundImage={myMovie.back_poster}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            boxShadow="240px 0px 128px 64px black inset"
            justify="left"
          >
            <Container maxW="900px" ms="none" ml="10vh" mt="10vh">
              <Heading
                m="2vh"
                size="3xl"
                textAlign="left"
                noOfLines={2}
                color="white"
                fontWeight="bold"
              >
                {myMovie.title}
              </Heading>
              <Text fontSize="2vh" textAlign="left" color="white">
                {myMovie.description}
              </Text>
              <Text
                textAlign="left"
                fontWeight="500"
                fontSize="2vh"
                mt="3.5vh"
                color="white"
              >
                Released: {myMovie.release_date}
              </Text>
              <Text
                textAlign="left"
                fontWeight="500"
                fontSize="2vh"
                mt="3.5vh"
                color="white"
              >
                Duration: {myMovie.duration}
              </Text>
              <Box mt="3.5vh" mb="3vh">
                <Text
                  justify="left"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="2.5vh"
                  color="#d90429"
                >
                  Genres
                </Text>
                <Text
                  justify="left"
                  textAlign="left"
                  fontWeight="500"
                  fontSize="2.3vh"
                  color="white"
                >
                  {myMovie.genres?.map((el) => el + ' ')}
                </Text>
              </Box>
              <Box textAlign="left" mt="3vh">
                <Button
                  onClick={() => setPlayerTrailer(true)}
                  borderRadius="3vh"
                  rightIcon={<Icon as={MdPlayArrow} boxSize={6} />}
                  mr="1.5vh"
                  bg="#7209b7"
                  color="white"
                  _hover={{
                    background: '#5e60ce',
                    color: 'white',
                  }}
                >
                  <Text mb="0.25vh">WATCH</Text>
                </Button>
                <Button borderRadius="3vh" bg="#354f52" color="white">
                  MY LIST
                </Button>
              </Box>
              <Text
                textAlign="left"
                fontWeight="500"
                fontSize="2.3vh"
                color="#ffd000"
                mt="3.5vh"
              >
                Rating: {Math.round(myMovie.rating * 100) / 100} || User
                reviews: {myMovie.user_reviews}
              </Text>
            </Container>
          </Flex>
        ) : (
          <Loader />
        )}
        <Footer />
      </div>
    );
  };
  return <div>{playTrailer ? renderTrailer() : renderPage()}</div>;
}
