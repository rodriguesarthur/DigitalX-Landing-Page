angular.module("angular-page", []);

angular.module("angular-page").controller("servicesctrl", function ($scope){

	$scope.services = [
		{icon: 'fas fa-bullhorn', title: 'Publicidade e Propaganda', text: 'Campanha Publicitária, Plano de Comunicação, Produção Gráfica e Audiovisual, Editoriais.'},
		{icon: 'fas fa-chart-line', title: 'Marketing Estratégico', text: 'Estratégia Mercadológica, Business Intelligence, Posicionamento de Mercado, Pesquisa de Mercado.'},
		{icon: 'fas fa-pen-nib', title: 'Design', text: 'Design Thinking e desenvolvimento de layouts que lançam as estratégias planejadas.'},
		{icon: 'fas fa-bezier-curve', title: 'Inbound Marketing', text: 'Planejamento Estratégico, Marketing de Conteúdo, Analytics, Relatórios.'},
	];
});