<div class="container dashboard">
	<section>
		<nav>
			<div class="row">
				<div class="col-sm-6 col-xs-9">
					<h2>Acompanhar pedido</h2>
					<a href="https://www.lojaskd.com.br" target="_blank">LojasKD.com.br</a> 
				</div>
				<div class="col-sm-6 col-xs-3 main-menu-btn visible-xs">
					<button class="btn btn-link visible-xs"><span class="glyphicon glyphicon-option-vertical"></span></button>
				</div>
				<div class="col-sm-6 col-xs-12 main-menu">
					<div class="row">
						<div class="col-sm-4"><a href="#">Login/Cadastro <span class="glyphicon glyphicon-new-window"></span></a></div>
						<div class="col-sm-3"><a href="#">Atendimento <span class="glyphicon glyphicon-new-window"></span></a></div>
						<div class="col-sm-3"><a href="#">Promoções <span class="glyphicon glyphicon-new-window"></span></a></div>
						<div class="col-sm-2"><a href="index.php">Sair</a></div>
					</div>
				</div>
			</div>
		</nav>
	</section>
	<div class="row dashcontent">
		<div class="col-sm-3">
			<div class="orderstatus">
				<h3>Detalhes do Pedido</h3>
				<h4>Status atual</h4>
				<p class="status-checked">Acompanhando seus móveis</span>
				<h4>N° do pedido</h4>
				<p>11225589</p>
				<h4>Produtos</h4>
				<button class="btn btn-link" id="orderproducts">
					12 <span class="glyphicon glyphicon-triangle-bottom"></span>
				</button>
				<ul class="list-unstyled" id="listorderproducts">
					<li><a href="#">Product Store</a></li>
					<li><a href="#">Product Store</a></li>
					<li><a href="#">Product Store</a></li>
					<li><a href="#">Product Store</a></li>
					<li><a href="#">Product Store</a></li>
				</ul>
				<h4>Data do pedido</h4>
				<p>09/01/2017</p>
				<h4>Valor total</h4>
				<p>R$ 1.850,00</p>
				<h4>Forma de pagamento</h4>
				<p>Cartão de crédito Mastercad</p>
				<h4>Prazo de entrega</h4>
				<p>00/00/2000 a 00/00/0000</p>
				<h4>Endereço de entrega</h4>
				<p>Avenida Marechal Mário Guedes, 40 Apto 192 Jaguaré 05348010 SÃO PAULO - SP</p>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="orderstatus datelist">
				<h3>Andamento do pedido</h3>
				<div class="row datelist-order">
					<div class="col-sm-4 datelist-date">19 JAN 2017</div>
					<div class="col-sm-8 datelist-status datelist-finish">
						<span class="glyphicon glyphicon-ok"></span>
						<button class="alert-open">i</button>
						<div class="datelist-title">Novo</div>
						<p class="datelist-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="row datelist-order">
					<div class="col-sm-4 datelist-date">23 JAN 2017</div>
					<div class="col-sm-8 datelist-status datelist-finish">
						<span class="glyphicon glyphicon-ok"></span>
						<button class="alert-open">i</button>
						<div class="datelist-title">Aprovado</div>
						<p class="datelist-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="row datelist-order">
					<div class="col-sm-4 datelist-date">27 JAN 2017</div>
					<div class="col-sm-8 datelist-status datelist-working">
						<span class="glyphicon glyphicon-time"></span>
						<button class="alert-open">i</button>
						<div class="datelist-title">Acompanhando seus móveis</div>
						<p class="datelist-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="row datelist-order">
					<div class="col-sm-4 datelist-date">29 JAN 2017</div>
					<div class="col-sm-8 datelist-status">
						<span class="glyphicon"></span>
						<div class="datelist-title">Recebimento</div>
					</div>
				</div>
			</div>
			<div class="alert-balon">
				<div class="alert-balon-in"><img src="lib/assets/images/tobalon.png" alt="Top Balon"></div>
				<p>Acompanhamos cada detalhe da produção até a entrega de cada um dos seus móveis. Quer ver? Confira!</p>
			</div>
		</div>
		<div class="col-sm-5">
			<div class="orderstatus">
				<h3>Produtos</h3>
				<div class="row product-list" id="productid123">
					<div class="col-sm-3">
						<span class="thumb-exemple"></span>
					</div>
					<div class="col-sm-9">
						<h5 class="product-name">Nome do 1 produto em duas linhas ou no máximo e três etc etc etc...</h5>
						<p>CÓD: 18993</p>
					</div>
					<div class="col-sm-12">
						<ul class="list-unstyled product-info">
							<li>Quantidade: <span class="status-default">1</span></li>
							<li>Preço total: <span class="status-default">R$ 385,90</span></li>
							<li>Nota fiscal: <span class="status-download"><a href="#">Download disponível</a></span></li>
							<li>Status atual: <span class="status-checked">Com a transportadora</span> <button class="alert-open">i</button></li>
						</ul>
						<hr>
						<div class="timeline-status">
							<div class="step-status step-finish"><img src="lib/assets/images/step1.png" id="tabfab" alt="Fabricação"/></div>
							<div class="step-status-separator step-in-work"></div>
							<div class="step-status step-work"><img src="lib/assets/images/step2.png" id="tabsep" alt="Separação"/></div>
							<div class="step-status-separator"></div>
							<div class="step-status"><img src="lib/assets/images/step3.png" id="tabenv" alt="Envio"/></div>
							<div class="step-status-separator"></div>
							<div class="step-status"><img src="lib/assets/images/step4.png" id="tabent" alt="Entrega"/></div>
							<div id="tabstepshow" class="extra-status">
								<h3>Produzido</h3>
								<p>Para sua segurança, estamos confirmando seu pagamento.<br> Precisa de ajuda para escolher cor, material, acertar as dimensões corretas e resolver qualquer outra <a href="#">dúvida?</a> Conte com a nossa equipe de atendimento.</p>
								<hr>
							</div>
						</div>
					</div>
				</div>
				<div class="row product-list" id="productid456">
					<div class="col-sm-3">
						<span class="thumb-exemple"></span>
					</div>
					<div class="col-sm-9">
						<h5 class="product-name">Nome do 1 produto em duas linhas ou no máximo e três etc etc etc...</h5>
						<p>CÓD: 18993</p>
					</div>
					<div class="col-sm-12">
						<ul class="list-unstyled product-info">
							<li>Quantidade: <span class="status-default">1</span></li>
							<li>Preço total: <span class="status-default">R$ 385,90</span></li>
							<li>Nota fiscal: <span class="status-download"><a href="#">Download disponível</a></span></li>
							<li>Status atual: <span class="status-checked">Com a transportadora</span> <button class="alert-open">i</button></li>
						</ul>
						<hr>
						<div class="timeline-status">
							<div class="step-status step-finish"><img src="lib/assets/images/step1.png" id="tabfab" alt="Fabricação"/></div>
							<div class="step-status-separator step-in-work"></div>
							<div class="step-status step-work"><img src="lib/assets/images/step2.png" id="tabsep" alt="Separação"/></div>
							<div class="step-status-separator"></div>
							<div class="step-status"><img src="lib/assets/images/step3.png" id="tabenv" alt="Envio"/></div>
							<div class="step-status-separator"></div>
							<div class="step-status"><img src="lib/assets/images/step4.png" id="tabent" alt="Entrega"/></div>
							<div id="tabstepshow" class="extra-status">
								<h3>Produzido</h3>
								<p>Para sua segurança, estamos confirmando seu pagamento.<br> Precisa de ajuda para escolher cor, material, acertar as dimensões corretas e resolver qualquer outra <a href="#">dúvida?</a> Conte com a nossa equipe de atendimento.</p>
								<hr>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="clear"></div>
	<div class="dashfooter row text-center">
		<div class="col-sm-12">
			<a href="https://www.lojaskd.com.br/" target="_blank"><img src="lib/assets/images/logo.png" alt="Lojas KD"></a>
		</div>
		<div class="col-sm-12">
			<a href="https://www.lojaskd.com.br" target="_blank">LojasKD.com.br</a> 
		</div>
	</div>
</div>