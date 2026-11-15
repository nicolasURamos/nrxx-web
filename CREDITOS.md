# Créditos de arte, som e fontes

Todo material de terceiros usado no jogo está listado aqui, com a licença. O que não está nesta lista foi desenhado para o projeto (pixel art e ilustrações feitas em código, nos scripts de `ferramentas/arte/` na raiz do repositório).

## Terceiros

| Material | Onde está no jogo | Autor | Licença |
|---|---|---|---|
| Platformer Art: Pixel Redux | Silhueta da cidade ao longe (`assets/fundo/cidade_longe.png`) | Kenney (kenney.nl) | CC0 1.0 |
| Impact Sounds | `sounds/kenney/ancorar.ogg`, `carga.ogg` | Kenney (kenney.nl) | CC0 1.0 |
| Interface Sounds | `sounds/kenney/soltar.ogg`, `negado.ogg`, `certo.ogg`, `errado.ogg`, `checkpoint.ogg` | Kenney (kenney.nl) | CC0 1.0 |
| UI Audio | `sounds/kenney/passar.ogg`, `clique.ogg` | Kenney (kenney.nl) | CC0 1.0 |
| Demais efeitos sonoros (vento, quedas, impactos, metal, passos, fala) | `sounds/*.ogg`, `sounds/*.mp3`, `sounds/*.wav` fora de `sounds/kenney/` | Criados para o projeto no jsfxr (https://sfxr.me/) | Feitos para o projeto |
| Fonte Jersey 10 | Fonte de toda a interface (`assets/fontes/jersey10.ttf`) | The Soft Type Project Authors | SIL Open Font License 1.1 (`assets/fontes/LICENSE_jersey10_OFL.txt`) |

CC0 não exige crédito; ele fica aqui por boa prática e para o texto do TCC.

## Gerado com IA

| Material | Onde está no jogo | Como foi feito |
|---|---|---|
| Retratos do Detetive, da Testemunha e do Trabalhador | `assets/speaker/` | Gerados pelo autor com o Gemini, do Google, a partir dos prompts em `ferramentas/arte/retratos_ia/PROMPTS.md`. O fundo verde foi recortado e as imagens ajustadas para 480x640 com `ferramentas/arte/retratos_ia/recortar.py`. Originais na mesma pasta. |

O uso de IA está declarado no texto do TCC (Seção 2.2). Antes de um uso comercial do jogo, conferir os termos de uso do Gemini para imagens geradas.

## Feito para o projeto

- Sprite do trabalhador com camadas de capacete e cinturão com talabarte (`assets/player/trabalhador/`)
- Tileset da obra: deck de andaime e concreto (`assets/tilemaps/obra_tilemap.png`) e plataforma móvel
- Prédios e grua mais próximos, nuvens e rajada de vento (`assets/fundo/`)
- Hub do detetive: quadro de cortiça, fotos dos casos, cadeado e fundo do menu (`assets/hub/`)
- Ícones do capacete e do cinturão (`assets/epi/`)
- Caixa e parafuso do cenário (`assets/scenery/caixa.png`, `assets/scenery/parafuso.png`), desenhados pelo autor
- Kit de interface (`assets/ui/kit/`): caixa de diálogo com moldura de latão, placa do nome e emblemas, papel, prancheta e prendedor, bloco de anotações com espiral, post-its, caixinhas de checklist, carimbo, fita zebrada, botões, campos, barra de rolagem, etiqueta do nome nos diálogos e a sala de interrogatório
- Efeito de poeira em anel quando o parafuso some (`assets/circles/circle_opening.png`, `ferramentas/arte/vfx.py`)
- Estrutura da torre, régua de altura, pontos de ancoragem, corda, grua, lançadores, barreiras, caixa de EPI e indicador do capacete no HUD, desenhados por código nos próprios scripts
