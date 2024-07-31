import { toggleSidebar } from './sidebar';

export function menu(): void {
    const { titleBar, menuDiv } = createMenuElements();

    const menuContainer = document.getElementById('menu');
    if (menuContainer) {
        menuContainer.appendChild(titleBar);
    }

    menuDiv.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from propagating to document
        toggleSidebar();
    });

    // Listen to mouse movements to hide/show menu based on cursor position
    document.addEventListener('mousemove', (event) => {
        const cursorY = event.clientY;
        const menuRect = titleBar.getBoundingClientRect();

        if (cursorY > menuRect.top && cursorY < menuRect.bottom) {
            titleBar.style.visibility = 'visible'; // Show menu content
        } else {
            titleBar.style.visibility = 'hidden'; // Hide menu content
        }
    });
}

interface MenuElements {
    titleBar: HTMLElement;
    menuDiv: HTMLElement;
}

export function createMenuElements(): MenuElements {
    const titleBar = document.createElement('div');
    titleBar.className = 'title-bar flex justify-between items-center text-white p-2 mb-2';

    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu relative';

    const menuIcon = document.createElement('i');
    menuIcon.className = 'fa fa-bars';
    menuIcon.setAttribute('aria-hidden', 'true');

    menuDiv.appendChild(menuIcon);

    const recordButton = document.createElement('button');
    recordButton.className = 'bg-red-500 text-white px-4 py-2 rounded';
    recordButton.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i> Record';

    titleBar.appendChild(menuDiv);
    titleBar.appendChild(recordButton);

    return { titleBar, menuDiv };
}

export default menu;
