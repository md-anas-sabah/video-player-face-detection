/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { fabric } from "fabric";
import * as faceapi from "face-api.js";

function VideoPlayer({ videoFile }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const initVideo = async () => {
      const video = videoRef.current;
      const canvas = new fabric.Canvas(canvasRef.current);

      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");

      video.addEventListener("play", () => {
        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas.getElement(), displaySize);
        console.log(displaySize);

        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptors();
          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );
          canvas.clear();

          resizedDetections.forEach((detection) => {
            const { x, y, width, height } = detection.detection.box;
            const rect = new fabric.Rect({
              left: x,
              top: y,
              width,
              height,
              fill: "transparent",
              stroke: "red",
              strokeWidth: 2,
            });
            canvas.add(rect);
          });
        }, 100);
      });
    };

    initVideo();
  }, [videoFile]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        width="640"
        height="480"
        className="w-full h-full"
        controls
      >
        <source src={videoFile} type="video/mp4" />
      </video>

      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        className="absolute z-0 top-0 left-0 w-full h-full"
      ></canvas>
    </div>
  );
}

export default VideoPlayer;
