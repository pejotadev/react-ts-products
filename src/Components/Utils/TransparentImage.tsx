import React, { useEffect, useRef } from 'react';

interface TransparentImageProps {
    src: string;
    alt?: string;
}

const TransparentImage: React.FC<TransparentImageProps> = ({ src }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
            const image = new Image();
            image.crossOrigin = "anonymous";
            image.src = src;
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);

                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data; // Um array de pixels em formato RGBA

                for (let i = 0; i < data.length; i += 4) {
                    // Supondo um fundo branco, altere os valores de acordo com a cor do fundo da sua imagem
                    if (data[i] > 200 && data[i + 1] > 200 && data[i + 2] > 200) {
                        // Torna este pixel completamente transparente
                        data[i + 3] = 0;
                    }
                }

                context.putImageData(imageData, 0, 0);
            };
        }
    }, [src]);

    return <canvas ref={canvasRef} />;
};

export default TransparentImage;
