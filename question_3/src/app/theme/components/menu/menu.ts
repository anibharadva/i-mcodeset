import { Menu } from './menu.model';

export const verticalMenuItems = [
    new Menu (1, 'Dashboard', '/', null, 'tachometer', null, false, 0),

    new Menu (2, 'Game Of Throne', null, null, 'th-list', null, true, 0),
    new Menu (3, 'Character', 'gameofthrone/character', null, 'users', null, false, 2),
    new Menu (4, 'Books', 'gameofthrone/books', null, 'th-list', null, false, 2),
    new Menu (5, 'Houses', 'gameofthrone/houses', null, 'users', null, false, 2)




];


