// import React, { useEffect, useRef } from 'react';

// const CameraProctoringWithOpenCV = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const loadOpenCV = async () => {
//       // Load OpenCV.js script dynamically
//       const script = document.createElement('script');
//       script.src = 'https://docs.opencv.org/4.5.5/opencv.js';
//       script.async = true;
//       script.onload = () => {
//         startCamera();
//       };
//       document.body.appendChild(script);
//     };

//     loadOpenCV();
//   }, []);

//   const startCamera = async () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       console.error('getUserMedia is not supported in this browser');
//       return;
//     }

//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//         processVideo();
//       }
//     } catch (error) {
//       console.error('Error accessing the webcam:', error);
//     }
//   };

//   const processVideo = () => {
//     const video = videoRef.current;

//     const onOpenCvReady = () => {
//       // Initialize OpenCV.js
//       const cap = new cv.VideoCapture(video);
//       const frame = new cv.Mat(video.height, video.width, cv.CV_8UC4);

//       const processFunction = () => {
//         try {
//           cap.read(frame);
//           // Perform image processing operations using OpenCV.js
//           // Example: Convert frame to grayscale
//           cv.cvtColor(frame, frame, cv.COLOR_RGBA2GRAY);

//           // Display processed frame on canvas
//           const canvas = document.createElement('canvas');
//           canvas.width = video.width;
//           canvas.height = video.height;
//           const ctx = canvas.getContext('2d');
//           ctx.drawImage(cv.imread(frame), 0, 0, canvas.width, canvas.height);
//           video.parentNode.insertBefore(canvas, video.nextSibling);

//           requestAnimationFrame(processFunction);
//         } catch (err) {
//           console.error('Error processing video:', err);
//         }
//       };

//       processFunction();
//     };

//     // Check if OpenCV.js is ready
//     cv['onRuntimeInitialized'] = onOpenCvReady;
//   };

//   return (
//     <div>
//       <h1>Camera Proctoring with OpenCV.js</h1>
//       <video ref={videoRef} width={640} height={480} />
//     </div>
//   );
// };

// export default CameraProctoringWithOpenCV;