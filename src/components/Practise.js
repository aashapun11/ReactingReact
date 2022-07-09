// import React from 'react'
// import { useEffect } from 'react'; 
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// const Practise = ()=>{
//   const {transcript, resetTranscript} = useSpeechRecognition();


//   useEffect(() =>{
//     SpeechRecognition.startListening({continuous:true});
//     console.log("Listening started");

// },[])
// const onStop = (e) =>{
//   e.preventDefault();
//       SpeechRecognition.stopListening();
//       console.log("Listening stops....")
// }

//   return (
//     <div>
//       <form>
//         <textarea name="" value={transcript}  id="" cols="30" rows="10"></textarea>
//         <button value={resetTranscript}>ClearIt</button>
//         <button onClick={onStop}>Stop Listening</button>
//       </form>
//     </div>

//   )
// }
// export default Practise;

import React from 'react'

export default function Practise() {
  return (
    <div>Practise</div>
  )
}
