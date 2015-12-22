import {lambRoutes, waveRoutes} from './app/routes';

export class App {
	configureRouter(config, router) {
		config.title = 'Flower';
		config.map(lambRoutes);
        
        this.waveRouter = router.createChild();
		this.router = router;
		
        // this.kidRouter.configure(cfg => {
        //     cfg.title = 'Flower';
        //     cfg.map(kidRoutes);
        //     this.kidRouter.refreshNavigation();    
        // });
        waveRoutes.forEach(route => {
            this.waveRouter.addRoute(route);
        })
        //this.kidRouter.addRoute({route: 'flower11', moduleId: './app/flower10/flower10', nav: true, title: 'test'});
        this.waveRouter.refreshNavigation();
        
	}
    
}