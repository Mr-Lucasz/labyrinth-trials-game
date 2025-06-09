// Constantes globais do jogo
const Constants = {
    SCENES: {
        BOOT: 'Boot',
        PRELOADER: 'Preloader',
        MAIN_MENU: 'MainMenu',
        GAME: 'Game',
        GAME_OVER: 'GameOver',
        PAUSE_MENU: 'PauseMenu',
        CREDITS: 'CreditsScene',
        RANKING: 'RankingScene',
    },
    EVENTS: {
        SAVE: 'save',
        LOAD: 'load',
        UPDATE_SCORE: 'update_score',
    },
    STORAGE_KEYS: {
        SAVE: 'labyrinth_save',
        RANKING: 'labyrinth_ranking',
    },
    GAME_STATES: {
        MENU: 'MENU',
        JOGANDO: 'JOGANDO',
        PAUSADO: 'PAUSADO',
        FIM_DE_JOGO: 'FIM_DE_JOGO',
    },
    PUZZLE_STATES: {
        OCIOSO: 'OCIOSO',
        ATIVO: 'ATIVO',
        RESOLVIDO: 'RESOLVIDO',
        MODO_DICA: 'MODO_DICA',
    }
};
export default Constants;
