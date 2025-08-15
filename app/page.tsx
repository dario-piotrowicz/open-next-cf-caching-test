export const revalidate = 6000;

export default function Home() {
    return (
        <div>
            <h1>Hello!</h1>
            <p>
            {new Date().toISOString()}
            </p>
        </div>
    );
}