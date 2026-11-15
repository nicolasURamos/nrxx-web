// Página web no celular: cria o aviso de girar e, no primeiro toque, pede tela cheia e
// trava a orientação na horizontal onde o navegador permite. Tudo é opcional: se uma API
// não existe ou a promessa é rejeitada, ignora em silêncio e o jogo segue normalmente.
(function () {
	"use strict";

	// Aviso de girar. A visibilidade é decidida só pelo celular.css.
	var aviso = document.createElement("div");
	aviso.id = "nrxx-gire";
	aviso.textContent = "Gire o celular para jogar";
	document.body.appendChild(aviso);

	// Só em aparelho de toque. No computador nada muda e nenhuma tela cheia é pedida.
	if (!window.matchMedia || !window.matchMedia("(pointer: coarse)").matches) {
		return;
	}

	// Uma única tentativa por carregamento da página.
	var tentou = false;
	function aoTocar() {
		if (tentou) {
			return;
		}
		tentou = true;
		document.removeEventListener("touchend", aoTocar, true);
		try {
			var raiz = document.documentElement;
			if (!raiz.requestFullscreen) {
				return;
			}
			var pedido = raiz.requestFullscreen();
			if (!pedido || !pedido.then) {
				return;
			}
			pedido.then(function () {
				// Só com tela cheia aceita a trava de orientação é permitida.
				var o = screen.orientation;
				if (o && o.lock) {
					var trava = o.lock("landscape");
					if (trava && trava.catch) {
						trava.catch(function () {});
					}
				}
			}).catch(function () {});
		} catch (e) {
			// API ausente ou bloqueada: segue sem tela cheia.
		}
	}

	// Fase de captura no document: vê os toques sobre o canvas sem interferir neles
	// (não chama preventDefault nem stopPropagation).
	document.addEventListener("touchend", aoTocar, true);
})();
