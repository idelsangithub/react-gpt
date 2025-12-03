
import {useState} from "react";
import {GptMessages, MyMessage, TextMessageBox, TypingLoader} from "../components";

interface Message {
    text: string;
    isGpt: boolean;
}

export const ChatTemplate = () => {


    const [isloading, setIsloading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    const handlePost = async (text: string) => {
        setIsloading(true);
        setMessages( (prev) => [...prev, { text: text, isGpt: false }]);

        // TODO useCase
        setIsloading(false);

        // TODO añadir el mensaje de isGPT en true

    }


    return (
        <div className="chat-container">
            <div className="chat-messages">
                <div className="grid grid-cols-12 gap-y-2">
                    { /* Bienvenida  */}
                    <GptMessages text="Hola, puedes escribir tu texto en español y te ayudo con las correcciones" />
                    {
                        messages.map((message, index) => (
                            message.isGpt
                                ? (
                                    <GptMessages text="Esto es OpenIA" key={index} />
                                )
                                : (
                                    <MyMessage text={message.text} key={index} />
                                )
                        ))
                    }

                    {
                        isloading && (
                            <div className="fade-in col-start-1 col-end-12">
                                <TypingLoader/>
                            </div>
                        )
                    }


                </div>
            </div>
            <TextMessageBox
                onSendMessage={ handlePost }
                placeholder="Escrina aqui lo que desee"
                disableCorrections
            />
        </div>
    );
}