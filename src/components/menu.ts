import { addHoverEvents } from '../events/hover.event';

export function menu(): void {
    const { titleBar, menuDiv, menuContent } = createMenuElements();
    addHoverEvents(menuDiv, menuContent);
    addTitleBarHoverEvents(titleBar);
    const menuContainer = document.getElementById('menu');
    if (menuContainer) {
        menuContainer.appendChild(titleBar);
    }
}

interface MenuElements {
    titleBar: HTMLElement;
    menuDiv: HTMLElement;
    menuContent: HTMLElement;
}

export function createMenuElements(): MenuElements {
    const titleBar = document.createElement('div');
    titleBar.className = 'title-bar flex justify-between items-center text-white p-2 mb-2';

    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu relative';

    const menuIcon = document.createElement('i');
    menuIcon.className = 'fa fa-bars';
    menuIcon.setAttribute('aria-hidden', 'true');

    const menuContent = document.createElement('div');
    menuContent.className = 'menu-content absolute hidden bg-gray-700 text-white rounded p-2';

    const openFromGithub = document.createElement('a');
    openFromGithub.href = '#';
    openFromGithub.innerText = 'Open';
    openFromGithub.className = 'block p-2 hover:bg-gray-600';

    menuContent.appendChild(openFromGithub);
    menuDiv.appendChild(menuIcon);
    menuDiv.appendChild(menuContent);

    const recordButton = document.createElement('button');
    recordButton.className = 'bg-red-500 text-white px-4 py-2 rounded';
    recordButton.innerHTML = '<i class="fa fa-circle" aria-hidden="true"></i> Record';

    titleBar.appendChild(menuDiv);
    titleBar.appendChild(recordButton);

    return { titleBar, menuDiv, menuContent };
}

function addTitleBarHoverEvents(titleBar: HTMLElement): void {
    // Show title bar when the mouse moves to the top of the screen
    document.addEventListener('mousemove', function(e) {
        if (e.clientY < 50) { // Adjust the value as needed
            titleBar.style.display = 'flex';
        }
    });

    // Hide title bar when mouse leaves the title bar area
    titleBar.addEventListener('mouseleave', function() {
        titleBar.style.display = 'none';
    });
}

export default menu;
