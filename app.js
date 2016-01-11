import {lambRoutes, waveRoutes, stereoPairs} from './app/routes';

export class App {
	configureRouter(config, router) {
		config.title = 'The Gilchrist Frequency Program';
		config.map(lambRoutes);
        
        this.waveRouter = router.createChild();
        this.stereoRouter = router.createChild();
		this.router = router;
		
        // this.kidRouter.configure(cfg => {
        //     cfg.title = 'Flower';
        //     cfg.map(kidRoutes);
        //     this.kidRouter.refreshNavigation();    
        // });
        waveRoutes.group1.forEach(route => {
            this.waveRouter.addRoute(route);
        });
        waveRoutes.group2.forEach(route => {
            this.waveRouter.addRoute(route);
        });
        waveRoutes.group3.forEach(route => {
            this.waveRouter.addRoute(route);
        });
        //this.kidRouter.addRoute({route: 'flower11', moduleId: './app/flower10/flower10', nav: true, title: 'test'});
        this.waveRouter.refreshNavigation();

        stereoPairs.group1.forEach(route => {
            this.stereoRouter.addRoute(route);
        });
        this.stereoRouter.refreshNavigation();
        
	}
    
}