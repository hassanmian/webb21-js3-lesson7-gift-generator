import React, {createContext, useState} from 'react'
import { Route, Routes } from 'react-router-dom';

import AgeSelectionPage from './pages/AgeSelectionPage'
import InterestSelectionPage from './pages/InterestSelectionPage'
import RelationshipSelectionPage from './pages/RelationshipSelectionPage'
import ResultPage from './pages/ResultPage'
import StartPage from './pages/StartPage'

import 'bootstrap/dist/css/bootstrap.css'

const SelectionContext = createContext({})

function App() {
  const [age, setAge] = useState("")
  const [interest, setInterest] = useState("")
  const [relationship, setRelationship] = useState("")

  return (
    <div>
      <SelectionContext.Provider value={{age, setAge, interest, setInterest, relationship, setRelationship}}>
        You have chosen age: {age}
        <Routes>
          <Route path="/age" element={<AgeSelectionPage/>} />
          <Route path="/interest" element={<InterestSelectionPage/>}/>
          <Route path="/relationship" element={<RelationshipSelectionPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </SelectionContext.Provider>

    </div>
  );
}

export {SelectionContext}
export default App;
