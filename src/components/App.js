import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  const [userWord, setUserWord] = useState('');

  // useEffect(() => {
  //   getWordFromApi().then((word) => {
  //     setWord(word);
  //   });
  // }, []);

  // events

  const handleChangeOptions = (value) => {
    value = value.toLocaleLowerCase();
    setUserWord(userWord)=setWord(word);
    
    
  };

  const handleChange = (lastLetter) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(lastLetter)) {
      handleLastLetter(lastLetter);
    } else {
      setLastLetter('');
    }
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header />

      <main className="main">
        <section>
          {' '}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SolutionLetters word={word} userLetters={userLetters} />
                  <ErrorLetters word={word} userLetters={userLetters} />
                  <Form lastLetter={lastLetter} handleChange={handleChange} />
                </>
              }
            />
            <Route path="/instructions" element={<Instructions />} />
            <Route
              path="/options"
              element={
                <Options
                  userWord={userWord}
                  handleChange={handleChangeOptions}
                />
              }
            />
          </Routes>{' '}
        </section>
        <Dummy numberOfErrors={getNumberOfErrors} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
