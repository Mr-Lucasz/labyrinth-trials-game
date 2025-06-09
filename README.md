# Labirinto dos Desafios

Um jogo de quebra-cabeças 2D isométrico, estilo escape room, feito com Phaser, React e Vite.

## Visão Geral
- 3 fases, cada uma com 3 puzzles únicos (total: 9 desafios)
- Progressão linear, checkpoints, ranking, sistema de dicas e trilha sonora
- Interface minimalista, menus translúcidos, HUD contextual

## Estrutura de Pastas
```
labyrinth-trials-game/
├── public/
│   └── assets/
│       ├── images/
│       │   ├── characters/      # Sprites do jogador, guardião
│       │   ├── environment/     # Tiles, cenários
│       │   ├── puzzles/         # Assets dos puzzles
│       │   └── ui/              # Botões, ícones
│       └── audio/
│           ├── music/           # Trilha sonora
│           └── sfx/             # Efeitos sonoros
├── src/
│   ├── App.jsx                  # UI principal React
│   ├── PhaserGame.jsx           # Ponte React ↔ Phaser
│   ├── main.jsx                 # Entry point React
│   ├── components/              # Overlays React (ex: input de apelido)
│   └── game/
│       ├── main.js              # Configuração Phaser
│       ├── EventBus.js          # Comunicação eventos
│       ├── actors/              # Player, Guardian, InteractiveObject
│       ├── puzzles/             # BasePuzzle + 9 puzzles (3 por fase)
│       ├── scenes/              # Todas as cenas Phaser
│       └── utils/               # Save/Load, Score, Constantes
├── README.md
├── package.json
└── ...
```

## Padrões Arquitetônicos
- **Componentização:** Cada elemento interativo (puzzle, botão, personagem) é um componente JS.
- **EventBus:** Comunicação desacoplada entre cenas, objetos e React.
- **Máquina de Estados:** Estados globais do jogo e dos puzzles definidos em `Constants.js`.
- **MVC/MVVM:** Separação entre modelo (dados), visão (Phaser/React) e controlador (lógica).
- **Strategy Pattern:** Estrutura pronta para diferentes estratégias de puzzles.

## Fluxo de Desenvolvimento
1. **Adicione assets** em `public/assets` (sprites, sons, etc.)
2. **Implemente puzzles** em `src/game/puzzles/PhaseX/`
3. **Refine HUD e menus** em `src/game/scenes/`
4. **Use EventBus** para comunicação entre Phaser e React
5. **Salve/checkpoints** com `SaveLoadManager.js`
6. **Ranking** com `ScoreManager.js`
7. **Testes:** Rode `npm run dev` e acesse `http://localhost:5173`

## Scripts
- `npm install` — instala dependências
- `npm run dev` — roda o projeto em modo desenvolvimento
- `npm run build` — build de produção

## Dicas para Devs
- Use o EventBus para acionar overlays React ou atualizar HUD
- Cada puzzle pode ter sua própria máquina de estados
- Para novos puzzles, herde de `BasePuzzle.js` e siga o padrão MVC
- Para assets, siga a organização das subpastas
- O projeto já está pronto para receber assets finais e lógica dos puzzles

## Créditos
Desenvolvedores: [Adicione aqui os nomes e e-mails do time]
