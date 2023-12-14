import { useState } from "react";
import VtMCharacter from "./components/VtMCharacter";
import VtMCharacterStats from "./VtMCharacterStats";

function loadDefaultCharacter()
{
  let character : VtMCharacter = {}
  return character
}



function App()
{
  const [character, setCharacter] = useState<VtMCharacter>(loadDefaultCharacter())
  
  function updateCharacter (character: VtMCharacter) {
    setCharacter(character)
  }

  
  const statsSheet = (
    <VtMCharacterStats
      character={character}
    />
  )
  return <>{statsSheet}</>
}

export default App;