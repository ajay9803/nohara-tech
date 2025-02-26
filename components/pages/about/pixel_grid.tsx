import React, { useState, useEffect } from "react";

const PixelGrid = () => {
    const totalSquares = 300;
    const columns = 12;
    const rows = Math.ceil(totalSquares / columns);
    const [selectedIndices, setSelectedIndices] = useState(new Set());

    useEffect(() => {
        const interval = setInterval(() => {
            const newSet = new Set();
            while (newSet.size < 10) {
                newSet.add(Math.floor(Math.random() * totalSquares));
            }
            setSelectedIndices(newSet);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="h-40 w-20 grid bg-black rounded-t-full overflow-hidden"
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`, 
                gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
        >
            {Array.from({ length: totalSquares }).map((_, i) => (
                <div
                    key={i}
                    style={{
                        transition: "background-color 0.2s ease",
                        backgroundColor: selectedIndices.has(i) ? "#FFFFFF" : "#FD6A6B",
                    }}
                />
            ))}
        </div>
    );
};

export default PixelGrid;