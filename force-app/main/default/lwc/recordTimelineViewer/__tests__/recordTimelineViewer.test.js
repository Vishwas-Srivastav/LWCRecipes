import { createElement } from 'lwc';
import RecordTimelineViewer from 'c/recordTimelineViewer';

describe('c-record-timeline-viewer', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders timeline container', () => {
        const element = createElement('c-record-timeline-viewer', {
            is: RecordTimelineViewer
        });
        document.body.appendChild(element);

        const timeline = element.shadowRoot.querySelector('ul.slds-timeline');
        expect(timeline).not.toBeNull();
    });
});
