export function sidebar(): void {
    const sidebarContainer = document.getElementById('sidebar') as HTMLElement;

    if (sidebarContainer) {
        sidebarContainer.classList.add('sidebar');

        // Close sidebar when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInside = sidebarContainer.contains(event.target as Node);
            if (!isClickInside) {
                closeSidebar();
            }
        });
    }
}

export function toggleSidebar(): void {
    const sidebarContainer = document.getElementById('sidebar') as HTMLElement;

    if (sidebarContainer) {
        sidebarContainer.classList.toggle('sidebar-open');
        adjustContentSpacing(sidebarContainer); // Pass sidebarContainer to the function
    }
}

export function closeSidebar(): void {
    const sidebarContainer = document.getElementById('sidebar') as HTMLElement;
    if (sidebarContainer) {
        sidebarContainer.classList.remove('sidebar-open');
        adjustContentSpacing(sidebarContainer); // Pass sidebarContainer to the function
    }
}

function adjustContentSpacing(sidebarContainer: HTMLElement): void {
    const content = document.querySelector('.content') as HTMLElement;
    if (content) {
        content.classList.toggle('content-with-sidebar', sidebarContainer.classList.contains('sidebar-open'));
    }
}

export default sidebar;
