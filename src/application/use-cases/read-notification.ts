import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  static execute(arg0: { content: string; category: string; recipientId: string; }) {
      throw new Error('Method not implemented.');
  }
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
