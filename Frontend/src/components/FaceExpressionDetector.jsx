import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";
import './facicalExpression.css'

export default function FaceExpressionDetector() {
  const videoRef = useRef(null);

  useEffect(() => {
    startVideo();
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const detectMood = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    if (!detections || detections.length === 0) {
      console.log("No face detected");
      return;
    }

    const expressionsObj = detections[0].expressions;
    let mostProbableExpressionName = "";
    let mostProbableExpression = 0;
    for (const expression in expressionsObj) {
      if (mostProbableExpression < expressionsObj[expression]) {
        mostProbableExpressionName = expression;
        mostProbableExpression = expressionsObj[expression];
      }
    }
    console.log(mostProbableExpressionName);
  };

  return (
    <div className="mood-element">
      <video
        ref={videoRef}
        autoPlay
        muted
      
        className="facial-expression-video"
      />
      <button onClick={detectMood}>Detect Mood</button>
    </div>
  );
}
