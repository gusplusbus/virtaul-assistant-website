export function addHoverEvents(menuDiv: HTMLElement, menuContent: HTMLElement): void {
    menuDiv.addEventListener('mouseenter', () => {
        menuContent.classList.remove('hidden');
    });

    menuDiv.addEventListener('mouseleave', () => {
        menuContent.classList.add('hidden');
    });
}
