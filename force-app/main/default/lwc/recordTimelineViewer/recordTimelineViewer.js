import { LightningElement, track } from 'lwc';

export default class RecordTimelineViewer extends LightningElement {
  @track events = [
    {
      id: '1',
      title: 'Call Logged: Requirement Gathering',
      date: 'Today at 10:30 AM',
      detail: 'Discussed cloud migration scope with client IT director.',
      icon: 'standard:log_a_call'
    },
    {
      id: '2',
      title: 'Task Completed: Send Proposal Document',
      date: 'Yesterday at 3:15 PM',
      detail: 'Sent signed RFP documentation.',
      icon: 'standard:task'
    },
    {
      id: '3',
      title: 'Email Sent: Follow up meeting scheduled',
      date: '2 days ago',
      detail: 'Confirmed demo session for Friday.',
      icon: 'standard:email'
    }
  ];
}
