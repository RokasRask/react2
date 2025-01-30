export default function View({ counter, isGreen, fontSize }) {
    return (
        <div>
            <h2
                style={{
                    color: isGreen ? "green" : "red",
                    fontSize: `${fontSize}px`,
                }}
            >
                Counter: 
                {counter}
            </h2>
        </div>
    );
}