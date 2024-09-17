import React, { useEffect, useRef } from 'react';

const StarsBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     let stars = [];
//     const numStars = 150; // Number of stars

//     const initStars = () => {
//       stars = [];
//       for (let i = 0; i < numStars; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           size: Math.random() * 1.5 // Star size
//         });
//       }
//     };

//     const animateStars = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       stars.forEach(star => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2); // Draw stars
        
//         // Add glow effect
//         ctx.fillStyle = 'white';
//         ctx.shadowColor = 'white';
//         ctx.shadowBlur = 8; // Adjust blur to control glow intensity
//         ctx.fill();
        
//         // Reset shadow properties
//         ctx.shadowColor = 'transparent';
//         ctx.shadowBlur = 0;
        
//         // Move stars
//         star.x += Math.sin(Date.now() * 0.0005) * 0.05; 
//         star.y += Math.cos(Date.now() * 0.0005) * 0.05; 

//         // Wrap stars around canvas edges
//         if (star.x > canvas.width) star.x = 0;
//         if (star.y > canvas.height) star.y = 0;
//         if (star.x < 0) star.x = canvas.width;
//         if (star.y < 0) star.y = canvas.height;
//       });

//       requestAnimationFrame(animateStars);
//     };

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     initStars();
//     animateStars();

//     return () => {
//       cancelAnimationFrame(animateStars);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="stars-background" />;
};

export default StarsBackground;
