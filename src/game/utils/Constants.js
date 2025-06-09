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
    }
};
export default Constants;
