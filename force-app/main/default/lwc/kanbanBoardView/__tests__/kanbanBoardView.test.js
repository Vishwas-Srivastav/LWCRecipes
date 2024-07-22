import { createElement } from 'lwc';
import KanbanBoardView from 'c/kanbanBoardView';

describe('c-kanban-board-view', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders kanban container', () => {
        const element = createElement('c-kanban-board-view', {
            is: KanbanBoardView
        });
        document.body.appendChild(element);

        const card = element.shadowRoot.querySelector('lightning-card');
        expect(card).not.toBeNull();
    });
});
