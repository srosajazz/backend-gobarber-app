import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class CancelationMail {
  get key() {
    return 'CancelationMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    console.log('Queue work!');

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Your appointment has been Cancel',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(parseISO(appointment.date), "MMMM dd', at' H:mm"),
      },
    });
  }
}

export default new CancelationMail();
