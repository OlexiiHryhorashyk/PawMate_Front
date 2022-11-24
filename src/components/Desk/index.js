import DeskItem from "./components/DeskItem";
import "./index.css"
import Image from "./image.png"
function Desk() {
    return (
        <div className="desk">
            <div className="desk-header">Платформа номер один із усіма тваринячими послугами</div>
            <div className="desk-desc">Потрібно продати? Шукаєте свого улюбленця? Ви у правильному місці у правильний час! Створіть нове оголошення за лічені секунди</div>
            <div className="desk-grid">
                <DeskItem image={Image} header="Платформа номер один із усіма тваринячими послугами" desc="Потрібно продати? Шукаєте свого улюбленця? Ви у правильному місці у правильний час! Створіть нове оголошення за лічені секунди"/>
                <DeskItem image={Image} header="Платформа номер один із усіма тваринячими послугами" desc="Потрібно продати? Шукаєте свого улюбленця? Ви у правильному місці у правильний час! Створіть нове оголошення за лічені секунди"/>
                <DeskItem image={Image} header="Платформа номер один із усіма тваринячими послугами" desc="Потрібно продати? Шукаєте свого улюбленця? Ви у правильному місці у правильний час! Створіть нове оголошення за лічені секунди"/>
                <DeskItem image={Image} header="Платформа номер один із усіма тваринячими послугами" desc="Потрібно продати? Шукаєте свого улюбленця? Ви у правильному місці у правильний час! Створіть нове оголошення за лічені секунди"/>
            </div>
        </div>
    )
}

export default Desk