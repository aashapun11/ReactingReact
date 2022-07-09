import React from 'react'
import { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeechToText = () => {
    const{transcript, resetTranscript}= useSpeechRecognition();

    useEffect(()=>{
        SpeechRecognition.startListening({continuous:true});
        console.log('Listening starts')
    },[])
    const onStop = (e) =>{
      e.preventDefault();
      SpeechRecognition.stopListening();
      console.log("Listening stops....")
    }
  return (
    <div>
        This is Speech to Text recognition
        <form>
          <textarea name="" value={transcript} id="" cols="30" rows="10"></textarea>
          <button onClick={resetTranscript}>Clear Text</button>
          <button onClick={onStop}>Stop Listening</button>
        </form>
    </div>
  );
}
export default SpeechToText;