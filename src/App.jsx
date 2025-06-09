import { useRef, useState } from 'react';
import { PhaserGame } from './PhaserGame';
import NameOverlay from './components/NameOverlay';
import { EventBus } from './components/game/EventBus';

function App ()
{
    const [showName, setShowName] = useState(false);
    const [pendingScene, setPendingScene] = useState(null);

    // Escuta evento do Phaser para solicitar apelido
    EventBus.on('request-nickname', (sceneKey) => {
        setShowName(true);
        setPendingScene(sceneKey);
    });

    const handleNameSubmit = (name) => {
        setShowName(false);
        if (pendingScene) {
            EventBus.emit('nickname-submitted', { scene: pendingScene, nickname: name });
            setPendingScene(null);
        }
    };

    return (
        <div id="app">
            <PhaserGame />
            {showName && <NameOverlay onSubmit={handleNameSubmit} />}
            {/* HUD contextual e overlays do Labirinto dos Desafios podem ser integrados aqui */}
        </div>
    );
}

export default App;
