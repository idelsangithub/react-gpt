import {GptMessages, MyMessage, TypingLoader} from "../../components";

export const OrthographyPage = () => {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2">
                    { /* Bienvenida  */}
                    <GptMessages text="Hola, puedes escribir tu texto en español y te ayudo con las correcciones" />

                    <MyMessage text="HOLA mundo" />

                    <TypingLoader className="fade-in" />

                </div>
            </div>
        </div>
    );
}