import React, { useRef, useEffect, useCallback } from 'react';

interface ImageComponentProps {
  imageUrl: string;
  width?: number;
  height?: number;
  onProcessComplete?: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl, width = 500, height = 500, onProcessComplete }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef(new Image());

    const processImage = useCallback(() => {
        const canvas = canvasRef.current;
        const image = imageRef.current;

        if (canvas && image) {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            ctx.drawImage(image, 0, 0, width, height);
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255) {
                    data[i + 3] = 0; // Torna branco transparente
                }
            }

            ctx.putImageData(imageData, 0, 0);
            onProcessComplete?.();
        }
    }, [onProcessComplete, width, height]);

    useEffect(() => {
        const image = imageRef.current;
        image.onload = processImage;
        image.onerror = () => {
            console.error("Erro ao carregar a imagem");
        };
        image.src = imageUrl;

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [imageUrl, processImage]);

    return <canvas ref={canvasRef} width={width} height={height}></canvas>;
}

export default ImageComponent;
