import React, {useRef} from 'react'
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import {drawKeypoints, drawSkeleton} from "../utilities";
import {useParams} from 'react-router-dom'

const RecordSnatch = () => {
  const {drill} = useParams()

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Load Posenet
  const runPosenet = async () =>{
    const net = await posenet.load({ 
      //fast but inaccurate config
      multiplier: 0.5,
      outputStride: 16,
      inputResolution: 300
    })
    // set interval
    setInterval(()=>{
      detect(net)
    }, 100);
  };

  const detect = async (net) =>{
    if(typeof webcamRef.current !== "undefined" && webcamRef.current !==null && webcamRef.current.video.readyState===4 ){
      // Get Video Property
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.VideoHeight;
      
      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make detection
      const pose = await net.estimateSinglePose(video);
      console.log(pose);

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);

    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };

  runPosenet();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam 
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex:9,
            width:640,
            height:480
          }}
        />

        <canvas 
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex:9,
            width:640,
            height:480,
          }} 
        />

      </header>
    </div>
  );
}

export default RecordSnatch