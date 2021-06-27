import React, {useRef} from 'react'
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import {drawKeypoints, drawSkeleton} from "../utilities";
import RecordButton from '../components/record-button'
import LiftSelection from '../components/lift-selection'
// import styles from './record/module.sass'

const Record = () => { //use these states to create functions that will draw on the canvas for snatch (starting and extension)
  const [lift, setLift] = React.useState('snatch')
  const [drill, setDrill] = React.useState('starting')

  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //  Load posenet
  (async () => {
    const net = await posenet.load({
      inputResolution: 300,
      outputStride: 16,
      multiplier: 0.5
    });
    setInterval(() => {
      detect(net);
    }, 100);
  })()

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      // Set video width
      webcamRef.current.video.width = window.innerWidth;
      webcamRef.current.video.height = window.innerHeight;
      // Make Detections
      const pose = await net.estimateSinglePose(video);
      console.log(pose);

      drawCanvas(pose, window.innerWidth, window.innerHeight, canvasRef);
    }
  };

  const drawCanvas = (pose, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };

  return (
    <main>
      <Webcam
        ref={webcamRef}
        audio={false}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: window.innerWidth,
          height: window.innerHeight
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
          zindex: 9,
          
        }}
      />

      <RecordButton/>
      <LiftSelection/>
    </main>
  );
}

export default Record