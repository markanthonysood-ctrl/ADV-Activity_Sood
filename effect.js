import { useEffect, useState } from "react"

export default function Effect() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [running]);

    function handleStartStop() {
        setRunning(prev => !prev);
    }

    function handleReset() {
        setTime(0);
        setRunning(false);
    }

    const outerStyle = {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 40%, #a1c4fd 100%)" // full-page colored background
    };

    const containerStyle = {
        textAlign: "center",
        fontFamily: "Times New Roman, serif",
        fontSize: "26px",
        background: "rgba(255, 255, 255, 0.88)", // slightly translucent card on top of background
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "420px",
        width: "100%",
        boxShadow: "0 6px 18px rgba(20, 60, 120, 0.12)"
    };

    const headingStyle = {
        color: "#0b3d91",
        marginBottom: "6px"
    };

    const timeStyle = {
        color: running ? "#d23669" : "#2b2b2b",
        fontSize: "48px",
        margin: "10px 0",
        fontWeight: "700",
        letterSpacing: "1px"
    };

    const startBtnStyle = {
        marginRight: "10px",
        fontSize: "14px",
        padding: "8px 14px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        color: "#fff",
        backgroundColor: running ? "#c62828" : "#2e7d32",
        boxShadow: "0 3px 6px rgba(0,0,0,0.12)"
    };

    const resetBtnStyle = {
        fontSize: "14px",
        padding: "8px 14px",
        borderRadius: "6px",
        border: "1px solid rgba(0,0,0,0.08)",
        backgroundColor: "#f3f4f6",
        cursor: "pointer",
        color: "#111827",
        boxShadow: "0 2px 4px rgba(0,0,0,0.06)"
    };

    return (
        <div style={outerStyle}>
            <div style={containerStyle}>
                <h1 style={headingStyle}>⏱ STOPWATCH</h1>
                <h2 style={timeStyle}>{time}</h2>
                <div>
                    <button
                        onClick={handleStartStop}
                        style={startBtnStyle}
                        className="mt-2 border-1 p-2"
                    >
                        {running ? "STOP" : "START"}
                    </button>
                    <button
                        onClick={handleReset}
                        style={resetBtnStyle}
                        className="mt-2 border-1 p-2"
                    >
                        RESET
                    </button>
                </div>
            </div>
        </div>
    )
}