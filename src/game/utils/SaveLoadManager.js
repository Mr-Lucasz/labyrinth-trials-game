// Gerencia o salvamento e carregamento do estado do jogo
class SaveLoadManager {
    static saveGame(state) {
        localStorage.setItem('labyrinth_save', JSON.stringify(state));
    }
    static loadGame() {
        const data = localStorage.getItem('labyrinth_save');
        return data ? JSON.parse(data) : null;
    }
    static hasSave() {
        return !!localStorage.getItem('labyrinth_save');
    }
}
export default SaveLoadManager;
