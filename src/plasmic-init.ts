import { initPlasmicLoader } from '@plasmicapp/loader-gatsby';
import { Menu } from './components/Menu';

export function initPlasmicLoaderWithRegistrations(plasmicOptions: any) {
  const PLASMIC = initPlasmicLoader(plasmicOptions);
  // Add all your code component registrations here.
  PLASMIC.registerComponent(Menu, {
    name: 'Menu',
    props: {
      children: 'slot'
    }
  });
  return PLASMIC;
}
