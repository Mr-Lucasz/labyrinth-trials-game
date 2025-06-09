// Gerencia pontuações e ranking
class ScoreManager {
    static getRanking() {
        const data = localStorage.getItem('labyrinth_ranking');
        return data ? JSON.parse(data) : [];
    }
    static addScore(player) {
        const ranking = ScoreManager.getRanking();
        ranking.push(player);
        ranking.sort((a, b) => b.score - a.score);
        localStorage.setItem('labyrinth_ranking', JSON.stringify(ranking.slice(0, 5)));
    }
}
export default ScoreManager;
