export class App {
	configureRouter(config, router) {
		config.title = 'Flower';
		config.map([
			{ route: ['', 'flower1'], name: 'flower1', moduleId: './app/flower1', nav: true, title: '[1] FREQ. REL. ANGLES & LEN.' },
			{ route: 'flower2', name: 'flower2', moduleId: './app/flower2', nav: true, title: '[2] LAM. ANGLES REL. RATIOS' },
			{ route: 'flower3', name: 'flower3', moduleId: './app/flower3', nav: true, title: '[3] LAM. FREQ REL RATIOS % 256'},
			{ route: 'flower4', name: 'flower4', moduleId: './app/flower4', nav: true, title: '[4] FREQ REL ANGLES FOR FREQ.S' },
			{ route: 'flower6', name: 'flower6', moduleId: './app/flower6', nav: true, title: '[6] LAM. ANG & FREQ REL. 256' },
			{ route: 'flower7', name: 'flower7', moduleId: './app/flower7', nav: true, title: '[7] LAM. ANG & FREQ REL. BASE' },
			{ route: 'flower8', name: 'flower8', moduleId: './app/flower8', nav: true, title: '[8] WAVES COR. TRIANGLE 1 FREQ'}
		]);
		
		this.router = router;
	}
}